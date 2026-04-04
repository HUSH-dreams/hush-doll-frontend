export const ADD_MESSAGE = 'ERROR::ADD_MESSAGE';
export const CLEAR_MESSAGE = 'ERROR::CLEAR_MESSAGE';
export const ADD_ERROR = 'ERROR::ADD_ERROR';
export const CLEAR_ERROR = 'ERROR::CLEAR_ERROR';
export const ADD_NOTIFICATION = 'NOTIFICATION::ADD';
export const REMOVE_NOTIFICATION = 'NOTIFICATION::REMOVE';

export const addNewMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
});

export const addNewError = (error) => ({
    type: ADD_ERROR,
    payload: error
});

export const clearError = () => ({
    type: CLEAR_ERROR
});

export const addMessage = (message) => addNotification({ message, type: 'message' });
export const addError = (error) => addNotification({ message: error, type: 'error' });
export const addNewNotification = (notification) => addNotification({ message: notification, type: 'notification' });

let notificationId = 0; // Для генерации уникальных ID

// Универсальный экшен для добавления уведомления
export const addNotification = ({ message, type = 'message' }) => { // type: 'message' | 'error'
    return (dispatch, getState) => {
        const id = notificationId++;
        const currentNotifications = getState().error.notifications; // Получаем текущие уведомления

        if (!currentNotifications?.some(n => n.message === message && n.type === type)) {
            dispatch({
                type: ADD_NOTIFICATION,
                payload: { id, message, type }
            });

            // Таймер на удаление через 10 секунд
            setTimeout(() => {
                dispatch(removeNotification(id));
            }, 10000);
        } else {
            console.warn(`Duplicate notification prevented: ${message} (${type})`);
        }
    };
};

// Экшен для удаления уведомления по ID
export const removeNotification = (id) => ({
    type: REMOVE_NOTIFICATION,
    payload: id
});