import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Login from "./Login";
import Register from "./Register";
import {logoutUser, toggleVisible} from "../store/user/actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useLang} from "../use/lang";
import {tableLogout} from "../store/table/actions";
import {dollLogout} from "../store/doll/actions";
import {selectIncognito} from "../store/user/selectors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LogoutIcon from '@mui/icons-material/Logout';

const Auth = ({isInfoNeeded = true, path, user, setInfoNeeded}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);
    const isIncognito = useSelector(selectIncognito);
    const {buttons} = useLang();

    const handleLogout = () => {
        dispatch(logoutUser());
        dispatch(tableLogout());
        dispatch(dollLogout());
        navigate(`/`);

        let title = ''

        switch (path) {
            case 'table':
                title = 'Таблица'
                break;
            case 'doll':
                title = 'Кукла'
                break;
            case 'chat':
                title = 'Чат'
                break;
            default:
                break;
        }

        document.title = title
    }

    const handleAuth = (e) => {
        setAuth(e.target.id);
    }

    const handleClose = () => {
        setAuth(null)
        setInfoNeeded(true)
    }

    const toggle = () => {
        dispatch(toggleVisible())
    }

    return (<div className="table-users">
        {user ? (<div className="table-users__content--user">
            <header className="table-users__hello"
                    style={{
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
                    }}>
                <div onClick={toggle} className="incognito" title={isIncognito ? 'Не виден другим пользователям' : 'Виден другим пользователям'}>{isIncognito ? <VisibilityOffIcon/> : <VisibilityIcon/>}</div><b className="table-users__username">{user.username}</b>
                <div onClick={handleLogout} className="logout" title="Выйти"><LogoutIcon /></div>
            </header>
        </div>) : (<div className="table-users__content--login">
            <Box className="table-users__content--login-box" style={{
                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
            }}>
                <Button className="button secondary" id="auth-login"
                        onClick={handleAuth}>{buttons.login}</Button>
                <Button className="button secondary" id="auth-register"
                        onClick={handleAuth}>{buttons.register}</Button>
            </Box>
            {auth === 'auth-login' && <Login nagivateTo={'/table'} handleClose={handleClose}/>}
            {auth === 'auth-register' && <Register nagivateTo={'/table'} handleClose={handleClose}/>}

        </div>)}
    </div>);
};

export default Auth;