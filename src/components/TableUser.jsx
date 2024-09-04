import React, {useState} from 'react';
import '../styles/TableUser.css';
import {useDispatch, useSelector} from "react-redux";
import {selectButtons, selectLang} from "../store/lang/selectors";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SaveIcon from "@mui/icons-material/Save";
import {tableChangeRole, tableKickFromTable, tableQuitFromTable} from "../store/table/actions";
import {selectToken} from "../store/user/selectors";
import {selectTable} from "../store/table/selectors";
import {useNavigate} from "react-router-dom";

const TableUser = ({user, me}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [thisClass, setThisClass] = useState('');
    const [display, setDisplay] = useState('none');
    const [userRole, setUserRole] = useState(user.roleId)
    const [save, setSave] = useState(false);
    const [quit, setQuit] = useState(false);
    const [kick, setKick] = useState(false);
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const table = useSelector(selectTable);

    const dispatch = useDispatch();

    const eng = useSelector(selectLang);
    const buttons = useSelector(selectButtons);

    let isMe = false;

    const setMouseOver = () => {
        if (!isMouseOver) {
            setIsMouseOver(true);
        }
    }

    const setMouseAway = () => {
        if (isMouseOver) {
            setIsMouseOver(false);
        }
    }

    let roleName = '';

    switch (userRole) {
        case '1':
            roleName = 'owner';
            break;
        case '2':
            roleName = 'moderator';
            break;
        case '3':
            roleName = 'viewer';
            break;
        default:
            break;
    }

    const handleClick = () => {
        if (display === 'block') {
            setSave(false);
            setQuit(false);
            setKick(false);
        }

        setDisplay(display === 'none' ? 'block' : 'none');
        setThisClass(thisClass === '' ? 'dropdownAnimated' : '');
    }

    if (me.userEmail === user.userEmail) {
        isMe = true;
    }

    const handleQuit = () => {
        setQuit(true);
    }

    const handleSelectRole = (e) => {
        const changeUserRole = e.target.value;

        setUserRole(changeUserRole);
    }

    const handleSave = () => {
        if (Number(user.roleId) !== Number(userRole)) {
            setSave(true);
        }
    }

    const handleKickPerson = () => {
        setKick(true);
    }

    const handleRoleConfirm = () => {
        if (me.roleId < user.roleId && Number(userRole) !== 1) {
            dispatch(tableChangeRole(token, {
                tableId: table.dynamic.id,
                userId: user.userId,
                newRole: userRole
            }))
        }

        handleClick();
    }

    const handleQuitConfirm = () => {
        dispatch(tableQuitFromTable(token, table.dynamic.id));

        navigate(`/table`);
    }

    const handleKickConfirm = () => {
        dispatch(tableKickFromTable(token, {
            tableId: table.dynamic.id,
            userId: user.userId
        }));

        handleClick();
    }

    return (<div
            onMouseEnter={setMouseOver}
            onMouseLeave={setMouseAway}
        >
            <div className="modal" id="table-user-modal" style={{display: display}} onClick={handleClick}>
            </div>
            <div className={isMe ? 'isMe user' : 'user'}>
                <div style={{
                    background: isMouseOver && `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                    width: '100%',
                    borderRadius: 5,
                    display: 'flex',
                    boxShadow: (isMouseOver && !thisClass) && '0 0 10px 2px white',
                    justifyContent: 'space-between',
                    padding: '3px 16px',
                    boxSizing: 'border-box'
                }}>
                    <span>{user.nickname}</span>
                    <span>{eng ? user.roleNameEng : user.roleNameRu}</span>
                </div>
                {((me.roleId === 2 && (user.roleId > me.roleId || isMe)) || (me.roleId === 1 && !isMe) || (me.roleId === 3 && isMe)) && (
                    <div className={"dropdownUser " + thisClass}
                         id="table-dropdown"
                         style={{
                             width: '100%', display: 'flex', flexDirection: 'column'
                         }}>
                        <div style={{
                            borderRadius: '5px 5px 0 0',
                            width: 'calc(100% - 32px)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                            padding: '3px 16px'
                        }} onClick={handleClick}>
                            <span>{user.nickname}</span>
                            <span>{eng ? user.roleNameEng : user.roleNameRu}</span>
                        </div>
                        <div style={{
                            borderRadius: '0 0 5px 5px',
                            backgroundColor: 'rgb(234, 201, 136)',
                            height: 'auto',
                            color: 'rgb(34 , 31, 29)',
                            fontWeight: 'normal',
                            display: display
                        }}>
                            {isMe ? (<div style={{display: 'flex', justifyContent: 'space-around', padding: '10px 0'}}>
                                {!quit ? (<Button className="button-hover-dark" onClick={handleQuit}>
                                    <IconButton className="trash-dark"
                                                sx={{height: 30, width: 30}}
                                                aria-label="delete"
                                                aria-describedby={'quit-from-table'}
                                                type="button">
                                        <LogoutIcon/>
                                    </IconButton>Quit</Button>) : (<div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    flexDirection: 'column',
                                    padding: 16
                                }}>
                                    <span>Do you want to quit table <b>{table.dynamic.tableName}</b>?</span>
                                    <div style={{
                                        display: 'flex', justifyContent: 'space-evenly', marginTop: 16
                                    }}>
                                        <Button className="button-hover-dark" id="user-confirm-role"
                                                onClick={handleQuitConfirm}>{buttons.confirm}</Button>
                                        <Button className="button-hover-dark" id="user-cancel-role"
                                                onClick={handleClick}>{buttons.cancel}</Button>
                                    </div>
                                </div>)}
                            </div>) : (<div style={{
                                display: 'flex', flexDirection: 'column', padding: '10px 0', alignItems: 'center'
                            }}>

                                {me.roleId < user.roleId ? (<div style={{
                                        display: 'flex', justifyContent: 'space-evenly'
                                    }}>

                                        <div>
                                            <select id="select-role" className="castle-input select-clan"
                                                    style={{
                                                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                                                    }}
                                                    onChange={handleSelectRole}
                                                    value={userRole}
                                            >
                                                <option value="2">moderator</option>
                                                <option value="3">viewer</option>
                                            </select>
                                        </div>
                                        <Button className="button-hover-dark" onClick={handleKickPerson}>Kick person
                                            <IconButton className="trash-dark"
                                                        sx={{height: 30, width: 30}}
                                                        aria-label="delete"
                                                        aria-describedby={'quit-from-table'}
                                                        type="button">
                                                <PersonRemoveIcon/>
                                            </IconButton>
                                        </Button>
                                    </div>) : (<div></div>)}

                                {!save ? (<div>
                                    <IconButton className="text-dark trash-dark"
                                                sx={{height: 30, width: 30, cursor: 'pointer'}}
                                                aria-label="save" type="button"
                                                onClick={handleSave}>
                                        <SaveIcon/>
                                    </IconButton>
                                </div>) : (<div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    flexDirection: 'column',
                                    padding: 16
                                }}>
                                    <span>Do you want to change <b>{user.nickname}</b>'s role to <b>{roleName}</b>?</span>
                                    <div style={{
                                        display: 'flex', justifyContent: 'space-evenly', marginTop: 16
                                    }}>
                                        <Button className="button-hover-dark" id="user-confirm-role"
                                                onClick={handleRoleConfirm}>{buttons.confirm}</Button>
                                        <Button className="button-hover-dark" id="user-cancel-role"
                                                onClick={handleClick}>{buttons.cancel}</Button>
                                    </div>
                                </div>)}
                                {
                                    kick && (<div style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        flexDirection: 'column',
                                        padding: 16
                                    }}>
                                        <span>Are you sure you want to kick <b>{user.nickname}</b> from this table?</span>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-evenly', marginTop: 16
                                        }}>
                                            <Button className="button-hover-dark" id="user-confirm-kick"
                                                    onClick={handleKickConfirm}>{buttons.confirm}</Button>
                                            <Button className="button-hover-dark" id="user-cancel-kick"
                                                    onClick={handleClick}>{buttons.cancel}</Button>
                                        </div>
                                    </div>)
                                }
                            </div>)}
                        </div>
                    </div>)}
            </div>
        </div>);
};

export default TableUser;