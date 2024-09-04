import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useDispatch, useSelector} from "react-redux";
import {selectButtons, selectInputs, selectLang, selectTexts} from "../store/lang/selectors";
import {tableDeleteTable, tableSelect, tableUnset} from "../store/table/actions";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {CopyToClipboard} from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const handleSelectTable = (table, dispatch, navigate) => {
    dispatch(tableSelect(table));
    navigate(`/table/${table.dynamic.tableName}`);
}

const Table = ({table, token, index, user}) => {
    const [anchor, setAnchor] = useState(null);
    const [display, setDisplay] = useState('none');
    const [tableDelete, setTableDelete] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const open = Boolean(anchor);
    const eng = useSelector(selectLang);
    const texts = useSelector(selectTexts);
    const inputs = useSelector(selectInputs);
    const buttons = useSelector(selectButtons);
    const id = open ? 'simple-popup' : undefined;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [thisClass, setThisClass] = useState('');

    const handleClick = () => {
        setDisplay(display === 'none' ? 'flex' : 'none');
        setThisClass(thisClass === '' ? 'dropdownAnimated' : '');
        setTableDelete(false);
    };

    const handleDelete = () => {
        setTableDelete(true);
    }

    const handleDeleteCancel = () => {
        setTableDelete(false);
    }

    const handleDeleteConfirm = () => {
        dispatch(tableDeleteTable(token, {
            tableId: table.dynamic.id
        }))

        handleClick();
    }

    const me = table.users.filter(thisUser => thisUser.userEmail === user.email)[0];

    let isMe = false;

    if (me.userId === table.dynamic.userId) {
        isMe = true;
    }

    const copyTextToClipboard = async () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <div style={{width: '100%'}}>
            <div className="modal" style={{display: display}} onClick={handleClick}></div>
            <Paper className="table-list-item" style={{
                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                boxShadow: '0px 0px 7px -1px rgb(234, 201, 136)'
            }} elevation={3}
                   sx={{mb: 1.5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Stack direction="column" sx={{alignSelf: 'center', cursor: 'pointer', p: 1.5, pr: 0, width: '100%'}}
                       onClick={() => handleSelectTable(table, dispatch, navigate)}>
                    <Stack direction="row" sx={{minHeight: 30}}>
                        <Typography className="text" sx={{alignSelf: 'center'}}>{index + 1}.&nbsp;</Typography>
                        <Stack direction="row" sx={{display: 'flex', justifyContent: 'space-between', width: '80%'}}>
                            <Typography className="text"
                                        sx={{
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            mr: 1,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis'
                                        }}
                                        color='rgb(234, 201, 136)'>
                                {table.dynamic.tableName}
                            </Typography>
                            <Typography className="white" sx={{alignSelf: 'center'}}>
                                {eng ? me.roleNameEng : me.roleNameRu}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        marginLeft: 2,
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                        width: '15%'
                    }}>
                    <IconButton className="text trash" sx={{height: 30, width: 30, cursor: 'pointer'}}
                                aria-label="delete"
                                aria-describedby={id} type="button" onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                </Stack>
            </Paper>
            <div style={{
                display: display,
                width: '94%',
                flexDirection: 'column',
                position: 'absolute',
                top: 140,
                zIndex: 10,
                right: '3%',
                boxShadow: '0px 0px 10px 2px white',
                borderRadius: 5
            }}>
                <div style={{
                    textAlign: 'center', borderRadius: '5px 5px 0 0',
                    padding: 10,
                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                }}>
                    <b>{
                        table.dynamic.tableName
                    }</b>
                </div>
                <div style={{
                    borderRadius: '0 0 5px 5px',
                    backgroundColor: 'rgb(234, 201, 136)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    padding: 10
                }}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            marginBottom: 16
                        }}>
                            <div className="share-link" style={{color: 'rgb(34,31,29)'}}>
                                {process.env.REACT_APP_FRONTEND_URL + '/table/enter/' + table.dynamic.shareString}
                            </div>
                            <CopyToClipboard
                                text={`${process.env.REACT_APP_FRONTEND_URL}/table/enter/${table.dynamic.shareString}`}
                                onCopy={copyTextToClipboard}>
                                <ContentCopyIcon style={{marginLeft: 10, cursor: 'pointer', color: 'rgb(34,31,29)'}}/>
                            </CopyToClipboard>
                        </div>
                        {
                            isCopied && <span style={{color: 'white', marginBottom: 16}}>{texts.copied}</span>
                        }
                    </div>
                    {
                        tableDelete && (<div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'column',
                            padding: 16,
                            color: 'rgb(34,31,29)'
                        }}>
                            <span>Are you sure you want to delete <b>{table.dynamic.tableName}</b>? It will be deleted for everyone</span>
                            <div style={{
                                display: 'flex', justifyContent: 'space-evenly', marginTop: 16
                            }}>
                                <Button className="button-hover-dark" id="table-confirm-delete"
                                        onClick={handleDeleteConfirm}>{buttons.confirm}</Button>
                                <Button className="button-hover-dark" id="table-cancel-delete"
                                        onClick={handleDeleteCancel}>{buttons.cancel}</Button>
                            </div>
                        </div>)}
                    {
                        isMe && (<Button className="button-hover-dark" onClick={handleDelete}>
                        <IconButton className="text-dark trash-dark"
                                    sx={{height: 30, width: 30, cursor: 'pointer'}}
                                    aria-label="delete"
                                    aria-describedby={id} type="button" onClick={e => setTableDelete(true)}>
                            <DeleteIcon/>
                        </IconButton>Delete table</Button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Table;