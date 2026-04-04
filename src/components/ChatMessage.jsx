import React from 'react';
import '../styles/ChatMessage.css'

const ChatMessage = ({message, user}) => {
    const time = new Date(Number(message.timestamp) * 1000);
    const displayTime = time?.getHours().toString().padStart(2, "0") + ':' + time.getMinutes().toString().padStart(2, "0")

    return (<div className={user?.username === message.user ? "chat-message me" : "chat-message other"}>
        <div className="chat-message__author">
            {user?.username === message.user ? 'Вы' : message.user}
        </div>
        <div className="chat-message__text">
            {message.message_text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <span className="chat-message__time">{displayTime}</span>
    </div>);
};

export default ChatMessage;