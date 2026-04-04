// src/store/websocket/actions.js

import {addError, addNewError} from "../error/actions";
// updateTableCastleByWebSocket больше не диспатчится из этого файла.
// Он диспатчится напрямую из WebSocketManager.js.
// export const updateTableCastleByWebSocket = (payload) => ({ type: WS_RECEIVE_TABLE_UPDATE, payload, }); // Эту строку можно удалить, если она здесь больше не нужна

import {
    connectWebSocket as connectWsManager, // Переименовываем, чтобы избежать конфликтов
    sendWebSocketMessage,
    closeWebSocket,
    getWebSocketInstance,
    initWebSocketManager // Возможно, понадобится для тестов или отдельного init
} from '../../websocket/WebSocketManager'; // <-- ИМПОРТ ИЗ WEBSOCKETMANAGER

export const WS_CONNECT_START = "WEBSOCKET::CONNECT_START";
export const WS_CONNECT_SUCCESS = "WEBSOCKET::CONNECT_SUCCESS";
export const WS_CONNECT_ERROR = "WEBSOCKET::CONNECT_ERROR";
export const WS_DISCONNECT = "WEBSOCKET::DISCONNECT";
export const WS_RECEIVE_MESSAGE = "WEBSOCKET::RECEIVE_MESSAGE";
export const WS_SEND_AUTH_TOKEN = "WEBSOCKET::SEND_AUTH_TOKEN";
export const WS_RECEIVE_HISTORY = 'WS_RECEIVE_HISTORY';
export const WS_ONLINE_LIST = 'WS_ONLINE_LIST';
export const WS_SEND_LOGOUT_SIGNAL = 'WEBSOCKET::SEND_LOGOUT_SIGNAL';
export const WS_RECEIVE_TABLE_UPDATE = "WEBSOCKET::RECEIVE_TABLE_UPDATE"; // <-- Оставляем, так как это action type, используемый в tableReducer
export const WS_SEND_JOIN_TABLE_SIGNAL = 'WEBSOCKET::SEND_JOIN_TABLE_SIGNAL';
export const WS_SEND_LEAVE_TABLE_SIGNAL = 'WEBSOCKET::SEND_LEAVE_TABLE_SIGNAL';
export const WS_SEND_VISIBILITY_STATUS = 'WEBSOCKET::SEND_VISIBILITY_STATUS';

// Action creators, которые просто возвращают объект action
export const wsSendLogoutSignal = () => ({
    type: WS_SEND_LOGOUT_SIGNAL,
    payload: {
        type: 'logout_signal'
    },
});
export const wsOnlineList = ({ users, guestsCount }) => ({
    type: WS_ONLINE_LIST,
    payload: { users, guestsCount },
});
export const wsReceiveHistory = (messages) => ({
    type: WS_RECEIVE_HISTORY,
    payload: {messages},
});
export const wsConnectStart = () => ({type: WS_CONNECT_START});
export const wsConnectSuccess = () => ({type: WS_CONNECT_SUCCESS});
export const wsConnectError = (error) => ({type: WS_CONNECT_ERROR, payload: error});
export const wsDisconnect = () => ({type: WS_DISCONNECT});
export const wsReceiveMessage = (message) => ({type: WS_RECEIVE_MESSAGE, payload: message});
export const wsSendAuthToken = () => ({type: WS_SEND_AUTH_TOKEN});

export const sendVisibilityStatus = (isIncognito) => {
    return (dispatch) => {
        sendWebSocketMessage({
            type: 'set_visibility',
            isIncognito: isIncognito,
        });
    };
};

export const connectWebSocket = () => {
    return (dispatch) => {
        connectWsManager();
    };
};

export const sendAuthToken = (token) => {
    return (dispatch) => {
        sendWebSocketMessage({type: 'auth', token: token});
    };
};

export const sendChatMessage = (messageText) => {
    return (dispatch, getState) => {
        const state = getState();
        const authToken = state.user.token;
        const currentUser = state.user.currentUser;

        if (!authToken || !currentUser) {
            dispatch(addError("Вы не аутентифицированы для отправки сообщений в чат. Пожалуйста, войдите в систему"));
            console.warn("User is not authenticated (no token or currentUser).");
            return;
        }

        const messageToSend = {
            type: 'chat_message',
            message: messageText
        };

        sendWebSocketMessage(messageToSend);
    };
};

export const disconnectWebSocket = () => {
    return (dispatch) => {
        closeWebSocket();
    };
};

export const sendLogoutSignal = () => {
    return (dispatch) => {
        sendWebSocketMessage({ type: 'logout_signal' });
    };
};

export const sendJoinTableSignal = (tableId) => {
    return (dispatch, getState) => {
        sendWebSocketMessage({ type: 'join_table', tableId: tableId });
    };
};

export const sendLeaveTableSignal = () => {
    return (dispatch, getState) => {
        sendWebSocketMessage({ type: 'leave_table' });
    };
};