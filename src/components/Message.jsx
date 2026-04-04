import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../store/error/actions';

// Message теперь принимает один объект notification
const Message = ({ notification }) => {
    const dispatch = useDispatch();
    const { id, message, type } = notification;

    const isError = type === 'error';
    let header = ''
    let messageClass = ''

    switch (type) {
        case 'error':
            header = 'Ошибка';
            messageClass = 'error'
            break;
        case 'message':
            header = 'Успешно'
            messageClass = 'message'
            break;
        case 'notification':
            header = 'Внимание'
            messageClass = 'notification'
            break;
        default: break;
    }

    const handleClose = () => {
        dispatch(removeNotification(id));
    };

    return (
        <div
            className={`message ${messageClass}`}
            style={{ background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat` }}
        >
            <div>
                <span onClick={handleClose}>&times;</span>
                <h3>{header}</h3>
                <hr />
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;