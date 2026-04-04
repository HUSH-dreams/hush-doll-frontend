// store/websocket/reducer.js

import {
    WS_CONNECT_START,
    WS_CONNECT_SUCCESS,
    WS_CONNECT_ERROR,
    WS_DISCONNECT,
    WS_RECEIVE_MESSAGE, WS_RECEIVE_HISTORY, WS_ONLINE_LIST,
} from './actions';

const initialState = {
    isConnected: false,
    error: null,
    messages: [],
    onlineUsers: [],
    guestsCount: 0,
};

const websocketReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_CONNECT_START:
            return {
                ...state,
                isConnected: false,
                error: null,
            };
        case WS_CONNECT_SUCCESS:
            return {
                ...state,
                isConnected: true,
                error: null,
            };
        case WS_CONNECT_ERROR:
            return {
                ...state,
                isConnected: false,
                error: action.payload,
            };
        case WS_DISCONNECT:
            return {
                ...state,
                isConnected: false,
                error: null,
                messages: [],
                onlineUsers: [],
                guestsCount: 0,
            };
        case WS_RECEIVE_MESSAGE:
            if (action.payload.type === 'chat_message') {
                const isDuplicate = state.messages.some(
                    (msg) => msg.message_id === action.payload.message_id
                );

                if (isDuplicate) {
                    return state;
                }

                return {
                    ...state,
                    messages: [...state.messages, action.payload],
                };
            }
            return state;
        case WS_RECEIVE_HISTORY:
            return {
                ...state,
                messages: action.payload.messages,
            };
        case WS_ONLINE_LIST:
            return {
                ...state,
                onlineUsers: action.payload.users,
                guestsCount: action.payload.guestsCount,
            };

        default:
            return state;
    }
};

export default websocketReducer;