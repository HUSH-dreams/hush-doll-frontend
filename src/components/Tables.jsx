import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {selectButtons, selectTexts} from "../store/lang/selectors";
import {Pagination, ThemeProvider} from "@mui/material";
import Stack from "@mui/material/Stack";
// import {theme} from "./Theme";
import {createTheme} from '@mui/material/styles';
import '../styles/Dolls.css';
import {selectError, selectLoading, selectTable, selectTables} from "../store/table/selectors";
import {tableAddClan, tableCreateTable, tableInitiate, tableUnset} from "../store/table/actions";
import Table, {handleSelectTable} from "./Table";
import TableUser from "./TableUser";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";
import TableClan from "./TableClan";

const Tables = ({user, token}) => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const texts = useSelector(selectTexts);
    const buttons = useSelector(selectButtons);
    const [page, setPage] = useState(1);
    const [clanPage, setClanPage] = useState(1);
    const [userPage, setUserPage] = useState(1);
    const [newTableName, setNewTableName] = useState('');
    const table = useSelector(selectTable);
    const tables = useSelector(selectTables);
    const [list, setList] = useState('table-users');
    const [newClanName, setNewClanName] = useState('');
    const navigate = useNavigate();
    const {tableName} = useParams();
    let count = tables ? Math.ceil(tables.length / 9) : null;
    let clanCount = table ? Math.ceil(table.clans.length / 16) : null;
    let userCount = table ? Math.ceil(table.users.length / 18) : null;
    const error = useSelector(selectError);

    const me = table?.users.filter(thisUser => thisUser.userEmail === user.email)[0];

    useEffect(() => {
        if (user && token) {
            dispatch(tableInitiate(token));
        }
    }, [user, token, dispatch]);

    useEffect(() => {
        if (tableName && tables) {
            const selectedTable = tables.filter(thisTable => thisTable.dynamic.tableName === tableName);

            if (selectedTable[0]) {
                handleSelectTable(selectedTable[0], dispatch, navigate);
            }
        }
    }, [tables])

    if (!tableName) {
        dispatch(tableUnset());
    }

    let users;

    if (table) {
        users = table.users;
        users.sort((a, b) => a.roleId - b.roleId);
    }

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleChangeClanPage = (event, value) => {
        setClanPage(value);
    };

    const handleChangeUserPage = (event, value) => {
        setUserPage(value);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgb(234, 201, 136)', secondary: 'white', contrastText: 'black'
            }
        }
    });

    const unsetTable = () => {
        dispatch(tableUnset());
        navigate(`/table`);
    }

    const clearNewTableName = () => {
        setNewTableName('');
    }

    const clearNewClanName = () => {
        setNewClanName('');
    }

    const handleCreate = () => {
        if (newTableName) {
            dispatch(tableCreateTable(token, {
                tableName: newTableName
            }))

            setNewTableName('');
        }
    }

    const handleCreateClan = () => {
        if (newClanName) {
            dispatch(tableAddClan(token, {
                clanName: newClanName,
                tableId: table.dynamic.id
            }))

            setNewClanName('');
        }
    }

    setInterval(() => {
    }, 10000);

    return (<ThemeProvider theme={theme}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 780,
            padding: '0 16px 16px 16px'
        }}>
            {!loading ? (<div>
                {table ? (
                    <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                        <div style={{margin: 'auto'}}>
                            <h3 style={{color: "white", textAlign: 'center'}}>
                                {table.dynamic.tableName}&nbsp;&nbsp;&nbsp;| {
                                <Button className="button-hover" onClick={unsetTable}>{buttons.tableList}</Button>
                            }
                            </h3>
                            <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 10}}>
                                <Button
                                    id="table-users"
                                    className={list === 'table-users' ? "doll-list doll-list-selected" : "button-hover"}
                                    onClick={e => setList(e.target.id)}
                                >
                                    {buttons.users}
                                </Button>
                                <Button
                                    id="table-clans"
                                    className={list !== 'table-users' ? "doll-list doll-list-selected" : "button-hover"}
                                    onClick={e => setList(e.target.id)}
                                >
                                    {buttons.clans}
                                </Button>
                            </div>
                        </div>
                        {
                            list === 'table-users' && (<div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 0
                            }}>
                                {users?.length > 0 && (users.map((currentUser, index) => {
                                    let counter = userCount < userPage ? userCount : userPage;

                                    if (Math.ceil((index + 1) / 18) === counter) {
                                        return <div>
                                            <TableUser key={currentUser.id} user={currentUser} me={me}/>
                                        </div>
                                    }

                                    return true;
                                }))
                                }
                            </div>)
                        }
                        {
                            list === 'table-clans' && (<div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 0
                            }}>
                                {table?.clans.length > 0 && (table.clans.map((clan, index) => {
                                    let counter = clanCount < clanPage ? clanCount : clanPage;

                                    if (Math.ceil((index + 1) / 16) === counter) {
                                        return <div>
                                            <TableClan key={clan.id} clan={clan} me={me} table={table} token={token}/>
                                        </div>
                                    }

                                    return true;
                                }))
                                }
                                {
                                    me.roleId < 3 && (
                                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 16}}>
                                            <input type="text" className="castle-input" value={newClanName}
                                                   style={{
                                                       width: 'auto',
                                                       background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
                                                   }}
                                                   onChange={e => setNewClanName(e.target.value)}
                                                   onClick={clearNewClanName}
                                            />
                                            <Button className="button-hover" onClick={handleCreateClan}>Add
                                                clan</Button>
                                        </div>)
                                }
                            </div>)
                        }
                    </div>) : (<div>
                    <h2 style={{textAlign: 'center'}}>{texts.yourTables}</h2>
                    {tables?.length > 0 ? (tables.map((table, index) => {
                        let counter = count < page ? count : page;

                        if (Math.ceil((index + 1) / 9) === counter) {
                            return <div>
                                <Table index={index} key={table.dynamic.id} user={user} table={table}
                                       token={token}/>
                            </div>
                        }

                        return true;
                    })) : (<div style={{
                        display: 'flex', justifyContent: 'space-around', flexDirection: 'column'
                    }}>
                        <div style={{textAlign: 'center', color: 'white'}}>{texts.noTablesYet}</div>
                    </div>)}
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 16}}>
                        <input type="text" className="castle-input" value={newTableName}
                               style={{
                                   width: 'auto',
                                   background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
                               }}
                               onChange={e => setNewTableName(e.target.value)}
                               onClick={clearNewTableName}
                        />
                        <Button className="button-hover" onClick={handleCreate}>{buttons.createTable}</Button>

                    </div>
                    {error && (<div style={{color: 'whitesmoke'}}>
                        {error}
                    </div>)}
                </div>)}
            </div>) : (<Box sx={{display: 'flex', justifyContent: 'space-around', p: 3}}>
                <CircularProgress sx={{selfAlign: 'center'}}/>
            </Box>)}

            {(tables?.length > 9 && !table) && (
                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 10}}>
                    <Stack spacing={2}>
                        <Pagination sx={{color: 'primary'}} color="primary" count={count} page={page} size="small"
                                    onChange={handleChangePage}/>
                    </Stack>
                </div>)}
            {(table?.clans.length > 16 && list === 'table-clans') && (
                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 10}}>
                    <Stack spacing={2}>
                        <Pagination sx={{color: 'primary'}} color="primary" count={clanCount} page={clanPage}
                                    size="small"
                                    onChange={handleChangeClanPage}/>
                    </Stack>
                </div>)}
            {(users?.length > 18 && list === 'table-users') && (
                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 10}}>
                    <Stack spacing={2}>
                        <Pagination sx={{color: 'primary'}} color="primary" count={userCount} page={userPage}
                                    size="small"
                                    onChange={handleChangeUserPage}/>
                    </Stack>
                </div>)}
        </div>
    </ThemeProvider>);
};

export default Tables;