export const selectIsConnected = state => state.websocket.isConnected;
export const selectWebSocketError = state => state.websocket.error;
export const selectChatMessages = state => state.websocket.messages;
export const selectOnlineUsers = (state) => state.websocket.onlineUsers;
export const selectGuestsCount = (state) => state.websocket.guestsCount;