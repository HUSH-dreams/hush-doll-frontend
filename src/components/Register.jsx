import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectRegisterError, selectUser} from '../store/user/selectors';
import {registerInitiate} from '../store/user/actions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../styles/auth.css'
import {selectButtons, selectErrors, selectInputs, selectTexts} from "../store/lang/selectors";
import {useLang} from "../use/lang";
import {addNewNotification, addNotification} from "../store/error/actions";

const Register = ({nagivateTo, handleClose}) => {
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
    const navigate = useNavigate();
    const {texts, inputs, buttons, errors} = useLang();

    useEffect(() => {
        if (user) {
            navigate(nagivateTo);
        }
    }, [user, navigate])

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
        } else {
            let text = 'Введите '
            let list = []

            if (!email) {
                list.push('почту')
            }

            if (!password) {
                list.push('пароль')
            }
            if (!passwordConfirm) {
                list.push('подтверждение пароля')
            }
            if (!displayName) {
                list.push('никнейм')
            }

            let displayList = []

            if (list && list.length < 1) {
                text = 'Заполните форму'
            } else {
                displayList = list.map(thisList => thisList).join(', ');
            }

            dispatch(addNewNotification(`${text}${displayList.length > 0 ? displayList : ''}`))
        }

        if (user) {
            navigate('/doll');
        }
    };

    return (
        <div className="auth" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
            <div className="auth__header">
                <span>{texts.register}</span>
                <span className="auth__close" onClick={handleClose}>&times;</span>
            </div>
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
                {emailError && (<div className="error">{emailError}</div>)}
                <input className="form-input" placeholder={inputs.nickname} name="nickname" type="text"
                       value={displayName} onFocus={clearNicknameError} onBlur={validateNickname}
                       autoComplete="username"
                       onChange={(e) => setDisplayName(e.target.value)}/>
                {nicknameError && (<div className="error">{nicknameError}</div>)}
                <input className="form-input" placeholder={inputs.password} name="password" type="password"
                       autoComplete="new-password"
                       value={password} onFocus={clearPasswordError} onBlur={validatePassword}
                       onChange={(e) => setPassword(e.target.value)}/>
                {passwordError && (<div className="error">{passwordError}</div>)}
                <input className="form-input" placeholder={inputs.confirmPassword} name="passwordConfirm"
                       autoComplete="new-password"
                       type="password" value={passwordConfirm} onFocus={clearPasswordConfirmError}
                       onBlur={validatePasswordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                {passwordConfirmError && (<div className="error">{passwordConfirmError}</div>)}
                <Button className="button secondary" type="submit" sx={{ml: 1}}>{buttons.register}</Button>
            </Box>
            {error && (
                <div className="error">{error}</div>
            )}
        </div>
    );
};

export default Register;