import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logoutStart, logoutSuccess} from '../store/user/actions.js';
import {selectToken, selectUser} from '../store/user/selectors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {selectButtons, selectTexts} from "../store/lang/selectors";
import Login from "./Login";
import Register from "./Register";
import Tables from "./Tables";
import {selectTables} from "../store/table/selectors";

const TableUserContainer = () => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buttons = useSelector(selectButtons);
    const texts = useSelector(selectTexts);
    const [auth, setAuth] = useState(null);

    const handleLogout = () => {
        dispatch(logoutStart());
        dispatch(logoutSuccess());
        navigate('/table');
    }

    const handleAuth = (e) => {
        setAuth(e.target.id);
    }

    return (
        <div>
            {user ? (<div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                <p style={{alignSelf: 'center'}}>
                    {texts.hello}<b>{user.username}</b>!
                    <Button className="button-hover" sx={{fontWeight: 'bold', color: 'whitesmoke !important'}}  onClick={handleLogout}>
                        {buttons.logout}
                    </Button>
                </p>
                <Tables token={token} user={user}/>
            </div>) : (
                <div style={{padding: '10px 26px 0 26px'}}>
                    <Box style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Button className="button-hover" id="auth-login" onClick={handleAuth}>{buttons.login}</Button>
                        <Button className="button-hover" id="auth-register"
                                onClick={handleAuth}>{buttons.register}</Button>
                    </Box>
                    {
                        auth === 'auth-login' && (<div>
                            <Login nagivateTo={'/table'}/>
                        </div>)
                    }
                    {
                        auth === 'auth-register' && (<div>
                            <Register nagivateTo={'/table'}/>
                        </div>)
                    }
                    {
                        !auth && (<p>
                            <b>{texts.registerIs}</b>{texts.registerFor}
                        </p>)
                    }
                </div>
            )}
        </div>
    );
};

export default TableUserContainer;