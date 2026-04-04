// src/websocket/WebSocketManager.js
import {
    wsConnectError,
    wsConnectStart,
    wsConnectSuccess,
    wsDisconnect,
    wsOnlineList,
    wsReceiveHistory,
    wsReceiveMessage,
} from '../store/websocket/actions';
import {
    tableInitiate,
    tableUnset,
    updateTableBannedByWebSocket,
    updateTableCastleByWebSocket,
    updateTableClansByWebSocket,
    updateTableUsersByWebSocket
} from '../store/table/actions'; // <-- Импорт action для обновления таблицы
import {addError, addNewNotification} from '../store/error/actions';
import {WS_URL} from '../constants';
import {createBrowserHistory} from "history";


const history = createBrowserHistory();

let ws = null;
let store = null; // Будем хранить ссылку на Redux store

// Инициализация WebSocketManager со ссылкой на Redux store
export const initWebSocketManager = (reduxStore) => {
    store = reduxStore;
};

export const connectWebSocket = () => {
    if (!store) {
        console.error("WebSocketManager not initialized with Redux store.");
        return;
    }

    store.dispatch(wsConnectStart());

    // Если уже подключено или в процессе, просто выходим
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        store.dispatch(wsConnectSuccess());
        return;
    }

    ws = new WebSocket(WS_URL);

    ws.onopen = () => {
        store.dispatch(wsConnectSuccess());

        const token = store.getState().user.token;

        const currentTableId = store.getState().table.table?.dynamic?.id;

        if (token) {
            ws.send(JSON.stringify({ type: 'auth', token: token }));
            // УДАЛИТЬ!!!!!!!============
            // console.log('УДАЛИТЬ ПОТОМ НИЖЕ!!!')
            // ws.send(JSON.stringify({
            //     type: 'buff_overlay_auth',
            //     token: token,
            //     char_name: 'HUSH',
            //     fingerprint: 'temaloh'
            // }));

            // setTimeout(() => {
            //     ws.send(JSON.stringify({
            //         type: 'buff_overlay_set_identity',
            //         char_name: 'HUSH'
            //     }));
            // }, 2000)
        } else {
            console.warn("No auth token found in Redux state.");
        }

        if (currentTableId) {
            ws.send(JSON.stringify({type: 'join_table', tableId: currentTableId}));
        }
    };

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        const user = store.getState().user.currentUser;
        const token = store.getState().user.token;

        switch (message.type) {
            case 'chat_history':
                if (Array.isArray(message.messages)) {
                    const reversedMessages = [...message.messages].reverse();
                    store.dispatch(wsReceiveHistory(reversedMessages));
                } else {

                }
                break;
            case 'chat_message':
                store.dispatch(wsReceiveMessage(message));
                break;
            case 'online_users_list':
                if (Array.isArray(message.users) && typeof message.guests_count === 'number') {
                    store.dispatch(wsOnlineList({
                        users: message.users,
                        guestsCount: message.guests_count
                    }));
                } else {

                }
                break;
            case 'auth_success':
                break;
            case 'buff_overlay_auth_success':
                break;
            case 'auth_error':
                store.dispatch(addError(`Ошибка аутентификации в чате: ${message.message}`));
                break;
            case 'error':
                store.dispatch(addError(`Ошибка сервера: ${message.message}`));
                break;
            case 'logout_success':
                break;
            case 'table_join_success':
                break;
            case 'table_leave_success':
                break;
            case 'table_clans_update':
                if (message && message.tableId && message.data) {
                    store.dispatch(updateTableClansByWebSocket(message));

                    store.dispatch(addNewNotification(message.data.actionData.text));
                }
                break;
            case 'table_users_update':
                if (message && message.tableId && message.data) {
                    if (message.data.actionData.action === 'кикнул') {
                        if (user.email === message.data.actionData.email) {
                            store.dispatch(tableUnset(message.tableId));
                            store.dispatch(addNewNotification('Вас кикнули из таблицы'));
                            store.dispatch(tableInitiate(token));

                            const currentPath = history.location.pathname.split("/")[1];
                            const name = history.location.pathname.split("/")[2];

                            if (currentPath === 'table' && name) {
                                history.push('/table')
                            }
                        } else {
                            store.dispatch(updateTableUsersByWebSocket(message));
                            store.dispatch(addNewNotification(message.data.actionData.text));
                        }
                    } else {
                        store.dispatch(updateTableUsersByWebSocket(message));
                        store.dispatch(addNewNotification(message.data.actionData.text));
                    }
                }
                break;
            case 'table_banned_update':
                if (message && message.tableId && message.data) {
                    if (message.data.actionData.action === 'забанил пользователя') {
                        if (user.email === message.data.actionData.email) {
                            store.dispatch(tableUnset(message.tableId));
                            store.dispatch(addNewNotification('Вы были забанены в таблице'));

                            const currentPath = history.location.pathname.split("/")[1];
                            const name = history.location.pathname.split("/")[2];

                            if (currentPath === 'table' && name) {
                                history.push('/table')
                            }
                        } else {
                            store.dispatch(updateTableBannedByWebSocket(message, user));

                            store.dispatch(addNewNotification(message.data.actionData.text));
                        }
                    } else {
                        store.dispatch(updateTableBannedByWebSocket(message, user));

                        store.dispatch(addNewNotification(message.data.actionData.text));
                    }
                }
                break;
            case 'table_castle_update':
                if (message && message.tableId && message.data) {
                    store.dispatch(updateTableCastleByWebSocket(message));

                    store.dispatch(addNewNotification(message.data.actionData.text));
                } else {
                }
                break;
            default:
                console.warn("Неизвестный тип сообщения от WS сервера:", message.type, message);
        }
    };

    ws.onclose = (event) => {
        store.dispatch(wsDisconnect());

        setTimeout(() => connectWebSocket(), 3000);
    };

    ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
        store.dispatch(wsConnectError("Ошибка соединения с WebSocket-сервером."));
        ws.close();
    };
};

export const sendWebSocketMessage = (message) => {
    if (!store) {
        return false;
    }
    if (!ws || ws.readyState !== WebSocket.OPEN) {
        console.warn("Cannot send message, WebSocket is not open.");
        return false;
    }
    ws.send(JSON.stringify(message));
    return true;
};

export const getWebSocketInstance = () => {
    return ws;
};

export const closeWebSocket = () => {
    if (ws) {
        ws.close();
        ws = null;
    }
};