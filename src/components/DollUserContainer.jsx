import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Dolls, {handleSelect} from './Dolls';
import {logoutStart, logoutSuccess} from '../store/user/actions.js';
import {selectUser} from '../store/user/selectors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {selectButtons, selectTexts} from "../store/lang/selectors";
import {selectDoll, selectDollError, selectDolls, selectOtherDolls} from "../store/doll/selectors";
import Login from "./Login";
import Register from "./Register";
import {dollStart} from "../store/doll/actions";

const DollUserContainer = () => {
    const user = useSelector(selectUser);
    const dolls = useSelector(selectDolls);
    const otherDolls = useSelector(selectOtherDolls);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buttons = useSelector(selectButtons);
    const texts = useSelector(selectTexts);
    const shared = useSelector(selectDoll);
    const dollError = useSelector(selectDollError);
    const [list, setList] = useState('dolls');
    const [auth, setAuth] = useState(null);
    // localStorage.clear();

    useEffect(() => {
        if (shared) {
            handleSelect(dispatch, shared);
            dispatch(dollStart());
        }
    }, [dispatch, shared])

    const handleLogout = () => {
        dispatch(logoutStart());
        dispatch(logoutSuccess());
        navigate('/doll');
    }

    const handleClick = (e) => {
        if (e.target.id === 'own-dolls') {
            setList('dolls');
        } else {
            setList('other-dolls');
        }
    }

    const handleAuth = (e) => {
        setAuth(e.target.id);
    }

    return (
        <div>
            <div>
                {user ? (
                    <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                        <p style={{alignSelf: 'center'}}>
                            {texts.hello}<b>{user.username}</b>!
                            <Button className="button-hover" sx={{fontWeight: 'bold', color: 'whitesmoke !important'}} onClick={handleLogout}>
                                {buttons.logout}
                            </Button>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: 16}}>
                            <Button className={list === 'dolls' ? "doll-list doll-list-selected" : "button-hover"}
                                    id="own-dolls" onClick={handleClick}>
                                {buttons.yourDolls}
                            </Button>
                            <Button className={list !== 'dolls' ? "doll-list doll-list-selected" : "button-hover"}
                                    id="other-dolls" onClick={handleClick}>
                                {buttons.otherDolls}
                            </Button>
                        </div>
                        <Dolls user={user} dolls={list === 'dolls' ? dolls : otherDolls} list={list}/>
                    </div>
                ) : (
                    <div style={{padding: '10px 26px 0 26px'}}>
                        <Box style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Button className="button-hover" id="auth-login"
                                    onClick={handleAuth}>{buttons.login}</Button>
                            <Button className="button-hover" id="auth-register"
                                    onClick={handleAuth}>{buttons.register}</Button>
                        </Box>
                        {
                            auth === 'auth-login' && (<div>
                                <Login nagivateTo={'/doll'}/>
                            </div>)
                        }
                        {
                            auth === 'auth-register' && (<div>
                                <Register nagivateTo={'/doll'}/>
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
            {
                dollError && (<div style={{color: "white", padding: 16}}>
                        {dollError}
                </div>)
            }

        </div>

    );
};

export default DollUserContainer;