import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {Pagination, ThemeProvider} from "@mui/material";
import Stack from "@mui/material/Stack";
import '../styles/table-users.css'
import {selectChosenClan, selectLoading, selectTable, selectTables} from "../store/table/selectors";
import {tableAddClan, tableCreateTable, tableInitiate, tableUnset} from "../store/table/actions";
import Table from "./Table";
import TableUser from "./TableUser";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";
import TableClan from "./TableClan";
import {useLang} from "../use/lang";
import TableBanned from "./TableBanned";
import {createTheme} from "@mui/material/styles";

const Tables = ({user, token}) => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const {buttons, texts, inputs} = useLang();
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
    let count = tables ? Math.ceil(tables?.length / 10) : null;
    let clanCount = table ? Math.ceil(table?.clans?.length / 16) : null;
    let userCount = table ? Math.ceil(table?.users?.length / 18) : null;
    const url = `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
    const selectedClan = useSelector(selectChosenClan);

    const me = table?.users?.filter(thisUser => thisUser.userEmail === user.email)[0];

    useEffect(() => {
        if (user && token) {
            dispatch(tableInitiate(token));
        }
    }, [user, token, dispatch]);

    if (!tableName) {
        document.title = 'Таблица'
    } else {
        document.title = tableName
    }

    let users;
    let banned;

    if (table) {
        users = table.users;
        users?.sort((a, b) => a.roleId - b.roleId);

        banned = table.banned;
    }

    const seenUserIds = new Set();
    const seenTableIds = new Set();

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleChangeClanPage = (event, value) => {
        setClanPage(value);
    };

    const handleChangeUserPage = (event, value) => {
        setUserPage(value);
    };

    const unsetTable = (id) => {
        dispatch(tableUnset(id));
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

            setNewTableName('')
        }
    }

    const handleCreateClan = () => {
        if (newClanName) {
            dispatch(tableAddClan(token, {
                clanName: newClanName, tableId: table.dynamic.id
            }))

            setNewClanName('');
        }
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgb(234, 201, 136)', secondary: 'white', contrastText: 'black'
            }
        }
    });

    return (<ThemeProvider theme={theme}>
        <div className="tables">
            {!loading ? (<div className="tables--container">
                {table ? (<div className="tables--chosen">
                    <div className="tables--chosen__container">
                        <div className="tables--chosen__header">
                            {<Button className="button secondary"
                                     onClick={() => unsetTable(table.dynamic.id)}>{buttons.tableList}</Button>}
                            <span>&nbsp;/&nbsp;{table.dynamic.tableName}</span>

                        </div>
                        <div className="tables--chosen__menu">
                            <Button
                                id="table-users"
                                className={list === 'table-users' ? "content content--selected" : "button primary content"}
                                onClick={e => setList(e.target.id)}
                            >
                                {buttons.users}
                            </Button>
                            <Button
                                id="table-clans"
                                className={list === 'table-clans' ? "content content--selected" : "button primary content"}
                                onClick={e => setList(e.target.id)}
                            >
                                {buttons.clans}
                            </Button>
                            <Button
                                id="table-banned"
                                className={list === 'table-banned' ? "content content--selected" : "button primary content"}
                                onClick={e => setList(e.target.id)}
                            >
                                {buttons.banned}
                            </Button>
                        </div>
                    </div>
                    {list === 'table-users' && (<div className="tables--chosen__list">
                        {users?.length > 0 ? (users.map((currentUser, index) => {
                            if (seenUserIds.has(currentUser.userId)) {
                                return null;
                            }

                            seenUserIds.add(currentUser.userId);

                            let counter = userCount < userPage ? userCount : userPage;

                            if (Math.ceil((index + 1) / 18) === counter) {
                                return <TableUser key={'users-' + currentUser.userId} user={currentUser} me={me}/>
                            }

                            return true;
                        })) : (<div className="table--chosen__empty">{texts.listIsEmpty}...</div>)}
                    </div>)}
                    {list === 'table-banned' && (<div className="tables--chosen__list">
                        {banned?.length > 0 ? (banned.map((currentUser, index) => {
                            let counter = userCount < userPage ? userCount : userPage;

                            if (Math.ceil((index + 1) / 18) === counter) {
                                return <TableBanned key={'banned-' + currentUser.userId}
                                                    user={currentUser}
                                                    me={me}
                                                    table={table}
                                                    token={token}/>
                            }

                            return true;
                        })) : (<div className="table--chosen__empty">{texts.listIsEmpty}...</div>)}
                    </div>)}
                    {list === 'table-clans' && (<div className="tables--chosen__list">
                        {table?.clans.length > 0 ? (table.clans.map((clan, index) => {
                            let counter = clanCount < clanPage ? clanCount : clanPage;

                            if (Math.ceil((index + 1) / 16) === counter) {
                                return <TableClan key={'clan-' + clan?.id} clan={clan} me={me} table={table}
                                                  token={token}/>
                            }

                            return true;
                        })) : (<div className="table--chosen__empty">{texts.listIsEmpty}...</div>)}
                        {me?.roleId < 3 && (
                            <div style={{display: 'flex', justifyContent: 'space-between', gap: 10, marginTop: 16}}>
                                <input type="text" className="input" value={newClanName}
                                       style={{
                                           background: url
                                       }}
                                       onChange={e => setNewClanName(e.target.value)}
                                       onClick={clearNewClanName}
                                />
                                <Button className="button primary" onClick={handleCreateClan}>
                                    {buttons.add}
                                </Button>
                            </div>)}
                    </div>)}
                </div>) : (<div className="tables__no-table">
                    <div className="tables--no__h2">{texts.yourTables}</div>
                    <div className="tables--table-list">
                        {tables?.length > 0 ? (tables.map((table, index) => {
                            if (seenTableIds.has(table.id)) {
                                return null;
                            }

                            seenTableIds.add(table.id);

                            let counter = count < page ? count : page;

                            if (Math.ceil((index + 1) / 10) === counter) {
                                let delayIndex = (index + 1) - (counter * 10) + 10;

                                return <Table
                                    index={index}
                                    key={'table-' + table.id}
                                    user={user}
                                    table={table}
                                    token={token}
                                    delayIndex={delayIndex}
                                />
                            }

                            return true;
                        })) : (<div className="tables--no-tables">
                            <div className="tables--no-tables__text">{texts.noTablesYet}</div>
                        </div>)}
                    </div>
                </div>)}
            </div>) : (<Box className="loader">
                <CircularProgress/>
            </Box>)}

            {(tables?.length > 10 && !table) && (<div className="table__footer">
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination count={count} page={page} size="small"
                                    onChange={handleChangePage}/>
                    </Stack>
                </div>
            </div>)}
            {(table?.clans.length > 16 && list === 'table-clans') && (<div className="table__footer">
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination count={clanCount} page={clanPage}
                                    size="small"
                                    onChange={handleChangeClanPage}/>
                    </Stack>
                </div>
            </div>)}
            {(users?.length > 18 && list === 'table-users') && (<div className="table__footer">
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination count={userCount} page={userPage}
                                    size="small"
                                    onChange={handleChangeUserPage}/>
                    </Stack>
                </div>
            </div>)}
            {!table && <div className="tables__create">
                <input type="text"
                       placeholder={inputs.newTable}
                       className="input" value={newTableName}
                       style={{background: url}}
                       onChange={e => setNewTableName(e.target.value)}
                       onClick={clearNewTableName}
                />
                <Button className="button primary" onClick={handleCreate}>{buttons.createTable}</Button>
            </div>}
        </div>
    </ThemeProvider>);
};

export default Tables;