import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoginError, selectUser} from '../store/user/selectors';
import {loginError, loginInitiate} from '../store/user/actions';
import '../styles/UserContainer.css';
import '../styles/auth.css';
import Button from '@mui/material/Button';
import {useLang} from "../use/lang";
import {addNewNotification} from "../store/error/actions";

const Login = ({nagivateTo, handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const error = useSelector(selectLoginError);
    const navigate = useNavigate();
    const {texts, inputs, buttons} = useLang();

    useEffect(() => {
        if (user) {
            navigate(nagivateTo);
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            dispatch(loginInitiate(email, password));
        } else {
            dispatch(addNewNotification('Заполните все поля'))
        }
    };

    const handleStart = () => {
        dispatch(loginError(null));
    }

    return (<div className="auth"
                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
            <div className="auth__header">
                <span>{texts.login}</span>
                <span className="auth__close" onClick={handleClose}>&times;</span>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="form-input" type="email" placeholder={inputs.email} value={email} name="email"
                       onClick={handleStart} autoComplete="email"
                       onChange={e => setEmail(e.target.value)}/>
                <input className="form-input" type="password" placeholder={inputs.password} value={password}
                       name="password" autoComplete="current-password"
                       onClick={() => setPassword('')}
                       onChange={e => setPassword(e.target.value)}/>
                <Button className="button secondary" type="submit" sx={{ml: 1}}>{buttons.signin}</Button>
            </form>
            {error && (<div className="error">{error}</div>)}
        </div>);
};

export default Login;