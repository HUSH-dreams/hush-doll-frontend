import React, {useState} from 'react';
import '../styles/table-users.css'
import {useDispatch, useSelector} from "react-redux";
import {selectButtons, selectLang} from "../store/lang/selectors";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import BlockIcon from '@mui/icons-material/Block';
import SaveIcon from "@mui/icons-material/Save";
import {tableBanFromTable, tableChangeRole, tableKickFromTable, tableQuitFromTable} from "../store/table/actions";
import {selectToken} from "../store/user/selectors";
import {selectTable} from "../store/table/selectors";
import {useNavigate} from "react-router-dom";
import '../styles/TableUser.css'
import {useLang} from "../use/lang";

const TableUser = ({user, me}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [thisClass, setThisClass] = useState('');
    const [display, setDisplay] = useState('none');
    const [userRole, setUserRole] = useState(user.roleId)
    const [save, setSave] = useState(false);
    const [quit, setQuit] = useState(false);
    const [kick, setKick] = useState(false);
    const [ban, setBan] = useState(false);
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const table = useSelector(selectTable);
    const url = `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`

    const dispatch = useDispatch();

    const eng = useSelector(selectLang);
    const {buttons, selects, texts} = useLang()

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
            roleName = eng ? 'owner' : 'владелец';
            break;
        case '2':
            roleName = eng ? 'moderator' : 'модератор';
            break;
        case '3':
            roleName = eng ? 'viewer' : 'наблюдатель';
            break;
        default:
            break;
    }

    const handleClick = () => {
        if (display === 'block') {
            setSave(false);
            setQuit(false);
            setKick(false);
            setBan(false);
        }

        setDisplay(display === 'none' ? 'block' : 'none');
        setThisClass(thisClass === '' ? 'table-user--opened--animated' : '');
    }

    if (me?.userEmail === user?.userEmail) {
        isMe = true;
    }

    const handleQuit = () => {
        setQuit(true);
        setBan(false);
        setKick(false);
        setSave(false);
    }

    const handleSelectRole = (e) => {
        const changeUserRole = e.target.value;

        setUserRole(changeUserRole);

        if (Number(user?.roleId) === Number(userRole)) {
            setSave(true);
        } else {
            setSave(false);
        }

        setBan(false);
        setQuit(false);
        setKick(false);
    }

    const handleKickPerson = () => {
        setKick(true);
        setBan(false);
        setQuit(false);
        setSave(false);
    }

    const handleBanPerson = () => {
        setBan(true);
        setQuit(false);
        setSave(false);
        setKick(false);
    }

    const handleRoleConfirm = () => {
        if (me?.roleId < user?.roleId && Number(userRole) !== 1) {
            dispatch(tableChangeRole(token, {
                tableId: table.dynamic.id,
                userId: user?.userId,
                newRole: userRole,
                roleName: roleName,
                username: user?.nickname
            }))
        }

        handleClick();
    }

    const handleRoleCancel = () => {
        setSave(false);

        setUserRole(user?.roleId);
    }

    const handleQuitConfirm = () => {
        dispatch(tableQuitFromTable(token, {
            tableId: table.dynamic.id,
            tableName: table.dynamic.tableName
        }))

        navigate(`/table`);
    }

    const handleKickConfirm = () => {
        dispatch(tableKickFromTable(token, {
            tableId: table.dynamic.id, userId: user.userId, username: user.nickname
        }));

        handleClick();
    }

    const handleBanConfirm = () => {
        dispatch(tableBanFromTable(token, {
            tableId: table.dynamic.id, userId: user.userId, username: user.nickname
        }));

        handleClick();
    }

    const handleCancel = () => {
        setSave(false);
        setQuit(false);
        setKick(false);
        setBan(false);
    }

    return (<div
        onMouseEnter={setMouseOver}
        onMouseLeave={setMouseAway}
    >
        <div className="modal" id="table-user-modal" style={{display: display}} onClick={handleClick}>
        </div>
        <div className={isMe ? 'table-user--me table-user' : 'table-user'}>
            <div className="table-user--header"
                 style={{
                     boxShadow: (isMouseOver && !thisClass) && '0 0 10px 2px white', background: isMouseOver && url
                 }}>
                <span>{user?.nickname}</span>
                <span>{eng ? user?.roleNameEng : user?.roleNameRu}</span>
            </div>
            {((me?.roleId === 2 && (user?.roleId > me?.roleId || isMe))
                || (me?.roleId === 1 && !isMe)
                || (me?.roleId === 3 && isMe)) && (
                <div className={"table-user--opened " + thisClass} id="table-dropdown">
                    <div className="table-user--header" onClick={handleClick}>
                        <span>{user?.nickname}</span>
                        <span>{eng ? user?.roleNameEng : user?.roleNameRu}</span>
                    </div>
                    <div className="table-user--opened__content"
                         style={{display: display}}>
                        {isMe ? (<div className="table-user--me__dropdown">
                            {!quit ? (<Button className="button dark" onClick={handleQuit}>
                                <IconButton className="trash-dark"
                                            sx={{height: 30, width: 30}}
                                            aria-label="delete"
                                            aria-describedby={'quit-from-table'}
                                            type="button">
                                    <LogoutIcon/>
                                </IconButton>Quit</Button>) : (<div className="table-user--me__action">
                                <span>Do you want to quit table <b>{table.dynamic.tableName}</b>?</span>
                                <div className="table-user--buttons">
                                    <Button className="button dark" id="user-confirm-role"
                                            onClick={handleQuitConfirm}>{buttons.confirm}</Button>
                                    <Button className="button dark" id="user-cancel-role"
                                            onClick={handleCancel}>{buttons.cancel}</Button>
                                </div>
                            </div>)}
                        </div>) : (<div className="table-user--not">
                            {me?.roleId < user?.roleId ? (<div className="table-user--not__actions">
                                <select id="select-role" className="select castle"
                                        style={{
                                            background: url
                                        }}
                                        onChange={handleSelectRole}
                                        value={userRole}
                                >
                                    <option value="2">{selects.moderator}</option>
                                    <option value="3">{selects.viewer}</option>
                                </select>
                                <div className="table-user--not__buttons">
                                    <Button className="button dark" onClick={handleKickPerson}>{buttons.kick}
                                        <IconButton className="trash-dark"
                                                    sx={{height: 30, width: 30}}
                                                    aria-label="delete"
                                                    aria-describedby={'quit-from-table'}
                                                    type="button">
                                            <PersonRemoveIcon/>
                                        </IconButton>
                                    </Button>
                                    <Button className="button dark" onClick={handleBanPerson}>{buttons.ban}
                                        <IconButton className="trash-dark"
                                                    sx={{height: 30, width: 30}}
                                                    aria-label="delete"
                                                    aria-describedby={'quit-from-table'}
                                                    type="button">
                                            <BlockIcon/>
                                        </IconButton>
                                    </Button>
                                </div>

                            </div>) : (<div></div>)}
                            {save && <div className="table-user--not__do">
                                <span>{texts.wantToChange}<b>{user?.nickname}</b>{texts.roleTo}<b>{roleName}</b>?</span>
                                <div className="table-user--buttons">
                                    <Button className="button dark" id="user-confirm-role"
                                            onClick={handleRoleConfirm}>{buttons.confirm}</Button>
                                    <Button className="button dark" id="user-cancel-role"
                                            onClick={handleRoleCancel}>{buttons.cancel}</Button>
                                </div>
                            </div>}
                            {kick && (<div className="table-user--not__do">
                                <span>{texts.wantToKick}<b>{user?.nickname}</b>{texts.fromTable}</span>
                                <div className="table-user--buttons">
                                    <Button className="button dark" id="user-confirm-kick"
                                            onClick={handleKickConfirm}>{buttons.confirm}</Button>
                                    <Button className="button dark" id="user-cancel-kick"
                                            onClick={handleCancel}>{buttons.cancel}</Button>
                                </div>
                            </div>)}
                            {ban && (<div className="table-user--not__do">
                                <span>{texts.wantToBan}<b>{user?.nickname}</b>{texts.fromTableBan}</span>
                                <div className="table-user--buttons">
                                    <Button className="button dark" id="user-confirm-kick"
                                            onClick={handleBanConfirm}>{buttons.confirm}</Button>
                                    <Button className="button dark" id="user-cancel-kick"
                                            onClick={handleCancel}>{buttons.cancel}</Button>
                                </div>
                            </div>)}
                        </div>)}
                    </div>
                </div>)}
        </div>
    </div>);
};

export default TableUser;