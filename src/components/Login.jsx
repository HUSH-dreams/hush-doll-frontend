import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoginError, selectUser} from '../store/user/selectors';
import {loginError, loginInitiate} from '../store/user/actions';
import '../styles/UserContainer.css';
import Button from '@mui/material/Button';
import {selectButtons, selectInputs, selectTexts} from "../store/lang/selectors";

const Login = ({nagivateTo}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const error = useSelector(selectLoginError);
    const buttons = useSelector(selectButtons);
    const inputs = useSelector(selectInputs);
    const navigate = useNavigate();
    const texts = useSelector(selectTexts);

    useEffect(() => {
        if (user) {
            navigate(nagivateTo);
        }
    },[user,navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(loginInitiate(email, password));
        }
    };

    const handleStart = () => {
        dispatch(loginError(null));
    }

    return (
        <div style={{padding: '0 20px'}}>
            <h3 style={{display: 'flex', justifyContent: 'space-around'}}>{texts.login}</h3>
            <form action="" onSubmit={handleSubmit}>
                <input className="form-input" type="email" placeholder={inputs.email} value={email} name="email"
                       onClick={handleStart}
                       onChange={e => setEmail(e.target.value)}/>
                <input className="form-input" type="password" placeholder={inputs.password} value={password} name="password"
                       onClick={() => setPassword('')}
                       onChange={e => setPassword(e.target.value)}/>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button className="button-hover" type="submit" sx={{ml: 1}}>{buttons.signin}</Button>
                </div>
            </form>
            { error && (
                <p style={{color: 'white'}}>{error}</p>
            )}
        </div>
    );
};

export default Login;