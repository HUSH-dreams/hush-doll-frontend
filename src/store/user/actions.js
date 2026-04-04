import {addError, addMessage, addNewError} from "../error/actions";
import { sendLogoutSignal } from '../websocket/actions';
import {sendWebSocketMessage} from "../../websocket/WebSocketManager";

export const REGISTER_START = "USER::REGISTER_START";
export const REGISTER_SUCCESS = "USER::REGISTER_SUCCESS";
export const REGISTER_ERROR = "USER::REGISTER_ERROR";
export const LOGIN_START = "USER::LOGIN_START";
export const LOGIN_SUCCESS = "USER::LOGIN_SUCCESS";
export const LOGIN_ERROR = "USER::LOGIN_ERROR";
export const LOGOUT_START = "USER::LOGOUT_START";
export const LOGOUT_SUCCESS = "USER::LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "USER::LOGOUT_ERROR";
export const CLEAR_ERRORS = "USER::CLEAR_ERRORS";
export const TOGGLE_VISIBLE = "USER::TOGGLE_VISIBLE";

export const toggleVisible = () => ({
    type: TOGGLE_VISIBLE
})

export const registerStart = () => ({
    type: REGISTER_START
})

export const registerSuccess = (data) => ({
    type: REGISTER_SUCCESS,
    payload: data
})

export const registerError = (error) => ({
    type: REGISTER_ERROR,
    payload: error
})

export const loginStart = () => ({
    type: LOGIN_START
})

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
})

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error
})

export const logoutStart = () => ({
    type: LOGOUT_START
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

export const logoutError = (error) => ({
    type: LOGOUT_ERROR,
    payload: error
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const registerInitiate = (email, password, displayName) => {
    return async dispatch => {
        dispatch(registerStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
                method: 'POST',
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "nickname": displayName,
                    "user": "register"
                })
            });
            const data = await response.json();

            if (!data.success) {
                dispatch(registerError(data.reason))
                dispatch(addError(data.reason))
            } else {
                dispatch(registerSuccess(data.data));
                dispatch(addMessage(`Добро пожаловать, ${displayName}`))
            }
        } catch (e) {
            dispatch(registerError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const loginInitiate = (email, password) => {
    return async dispatch => {
        dispatch(loginStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                method: 'POST',
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "user": "login"
                })
            });
            const data = await response.json();
            if (!data.success) {
                dispatch(loginError(data.reason))
            } else {
                dispatch(loginSuccess(data.data));
                dispatch(addMessage(`Добро пожаловать, ${data.data.user.username}`))

                sendWebSocketMessage({
                    type: 'auth',
                    token: data.data.token // Лучше взять токен прямо из ответа, чтобы быть уверенным
                });
            }
        } catch (e) {
            dispatch(registerError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        dispatch(logoutStart());

        try {
            dispatch(logoutSuccess());
            dispatch(sendLogoutSignal());
        } catch (error) {
            dispatch(logoutError(error.message || 'Ошибка выхода.'));
            console.error("Error during logout process:", error);
            dispatch(sendLogoutSignal());
        }
    };
};