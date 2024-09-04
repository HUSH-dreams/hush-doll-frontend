import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectRegisterError, selectUser} from '../store/user/selectors';
import {registerInitiate} from '../store/user/actions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {selectButtons, selectErrors, selectInputs, selectTexts} from "../store/lang/selectors";

const Register = ({nagivateTo}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [emailError, setEmailError] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    const error = useSelector(selectRegisterError);
    const buttons = useSelector(selectButtons);
    const inputs = useSelector(selectInputs);
    const texts = useSelector(selectTexts);
    const errors = useSelector(selectErrors);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(nagivateTo);
        }
    }, [user, navigate])

    const validateEmail = () => {
        const emailRegex = /\w{4,25}@\w+\.\w{2,3}/;

        if (!email.match(emailRegex) && email) {
            setEmailError(errors.emailRegex);
        }
    }

    const validateNickname = () => {
        if ((displayName && displayName.length > 24) || (displayName && displayName.length < 4)) {
            setNicknameError(errors.nickname);
        }
    }

    const clearNicknameError = () => {
        setNicknameError('');
    }

    const clearEmailError = () => {
        setEmailError('');
    }

    const validatePassword = () => {
        if (password) {
            const validated = /[A-Z]/.test(password) && /[a-z]/.test(password) &&
                /[0-9]/.test(password) &&
                password.length > 7;
            if (!validated) {
                setPasswordError(errors.passwordRegex);
            }
        }
    }

    const clearPasswordError = () => {
        setPasswordError('');
    }

    const validatePasswordConfirm = () => {
        if (passwordConfirm !== password) {
            setPasswordConfirmError(errors.confirmPassword)
        }
    }

    const clearPasswordConfirmError = () => {
        setPasswordConfirmError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && !emailError && password && !passwordError && passwordConfirm && !passwordConfirmError && displayName && !nicknameError) {
            dispatch(registerInitiate(email, password, displayName));
        }

        if (user) {
            navigate('/doll');
        }
    };

    return (
        <div style={{padding: '0 20px'}}>
            <h3 style={{display: 'flex', justifyContent: 'space-around'}}>{texts.register}</h3>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {margin: '10px 0 10px 0', minWidth: '30ch'},
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}
            >
                <input className="form-input" placeholder={inputs.email} name="email" type="email" value={email}
                       onFocus={clearEmailError} onBlur={validateEmail} onChange={(e) => setEmail(e.target.value)}/>
                {emailError && (<div style={{color: 'white'}}>{emailError}</div>)}
                <input className="form-input" placeholder={inputs.nickname} name="nickname" type="text"
                       value={displayName} onFocus={clearNicknameError} onBlur={validateNickname}
                       onChange={(e) => setDisplayName(e.target.value)}/>
                {nicknameError && (<div style={{color: 'white'}}>{nicknameError}</div>)}
                <input className="form-input" placeholder={inputs.password} name="password" type="password"
                       value={password} onFocus={clearPasswordError} onBlur={validatePassword}
                       onChange={(e) => setPassword(e.target.value)}/>
                {passwordError && (<div style={{color: 'white'}}>{passwordError}</div>)}
                <input className="form-input" placeholder={inputs.confirmPassword} name="passwordConfirm"
                       type="password" value={passwordConfirm} onFocus={clearPasswordConfirmError}
                       onBlur={validatePasswordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                {passwordConfirmError && (<div style={{color: 'white'}}>{passwordConfirmError}</div>)}
                <Button className="button-hover" type="submit" sx={{ml: 1}}>{buttons.signin}</Button>
            </Box>
            {error && (
                <p style={{color: 'white'}}>{error}</p>
            )}
        </div>
    );
};

export default Register;