import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sendChatMessage, sendVisibilityStatus,} from '../store/websocket/actions';
import {
    selectChatMessages,
    selectGuestsCount,
    selectIsConnected,
    selectOnlineUsers
} from '../store/websocket/selectors';
import {addError} from '../store/error/actions';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ChatMessage from "./ChatMessage";
import '../styles/Chat.css'
import Button from "@mui/material/Button";
import {useOnScreen} from "../use/isOnScreen";
import {CSSTransition} from "react-transition-group";
import ScrollingOnlineUsers from "./ScrollingOnlineUsers";
import {useLang} from "../use/lang";
import {scroll} from '../utils/scrollIntoView';
import {selectIncognito} from "../store/user/selectors";

function Chat({user, token}) {
    const dispatch = useDispatch();
    const isConnected = useSelector(selectIsConnected);
    const chatMessages = useSelector(selectChatMessages);
    const onlineUsers = useSelector(selectOnlineUsers);
    const guestsCount = useSelector(selectGuestsCount);

    const isAuthenticatedForSending = !!token && !!user;

    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);
    const isEndVisible = useOnScreen(messagesEndRef);

    const onlineUsernames = onlineUsers?.map(user => user.username || user.name || 'Неизвестный').join(', ');
    const displayGuestsCounter = `${guestsCount}`;
    const isIncognito = useSelector(selectIncognito);

    const {texts, buttons} = useLang();

    useEffect(() => {
        if (isConnected && isAuthenticatedForSending) {
            dispatch(sendVisibilityStatus(isIncognito));
        }
    }, [isConnected, isAuthenticatedForSending, isIncognito, dispatch]);

    const scrollIntoView = (behavior = 'smooth') => {
        // Мы прокручиваем к "верху" контейнера, где находится наш ref
        scroll(messagesEndRef, behavior);
    }

    const formatDateForDisplay = (timestampInSeconds) => {
        const date = new Date(timestampInSeconds * 1000);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const isSameDay = (d1, d2) =>
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();

        const options = {day: 'numeric', month: 'long'};

        if (date.getFullYear() !== today.getFullYear()) {
            options.year = 'numeric';
        }

        if (isSameDay(date, today)) {
            return "Сегодня";
        } else if (isSameDay(date, yesterday)) {
            return "Вчера";
        } else {
            return date.toLocaleDateString('ru-RU', options);
        }
    };


    const handleSendMessage = () => {
        if (inputMessage.trim() === '') {
            dispatch(addError("Сообщение не может быть пустым."));
            return;
        }

        if (!isAuthenticatedForSending) {
            dispatch(addError("Вы не аутентифицированы для отправки сообщений. Пожалуйста, войдите."));
            return;
        }

        dispatch(sendChatMessage(inputMessage));

        setInputMessage('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) { // Добавил проверку на Shift+Enter для переноса строки
            event.preventDefault(); // Предотвращаем стандартное поведение (переход на новую строку)
            handleSendMessage();
        }
    };

    const groupedMessages = [];
    let lastDate = null;

    chatMessages.forEach((msg, index) => {
        const currentMessageDateString = formatDateForDisplay(Number(msg.timestamp));

        if (currentMessageDateString !== lastDate) {
            groupedMessages.push({
                type: 'date_separator',
                date: currentMessageDateString,
                originalTimestamp: Number(msg.timestamp)
            });
            lastDate = currentMessageDateString;
        }

        groupedMessages.push({type: 'message', data: msg, key: index});
    });

    // Этот код остается правильным, так как он готовит массив для отображения
    // от самого свежего к самому старому.
    groupedMessages.reverse();

    return (
        <div className="chat">
            <div className="chat__messages-container">
                <div className="messages-container">
                    {/* Переносим ref в самый верх (внутри flex-контейнера),
                        так как flex-direction: column-reverse его прижмет к низу */}
                    <div ref={messagesEndRef} style={{height: '1px', flexShrink: 0}}/>
                    {groupedMessages.map((item, index) => (
                        item.type === 'date_separator' ? (
                            <div key={`date-${item.originalTimestamp}-${index}`}
                                 className="date-separator">
                                <div></div>
                                <span>{item.date}</span>
                                <div></div>
                            </div>
                        ) : (
                            <ChatMessage message={item.data} key={'message-'+item.message_id+index} user={user}/>
                        )
                    ))}
                    {!isConnected && chatMessages.length === 0 && (
                        <Box className="loader">
                            <CircularProgress/>
                        </Box>
                    )}
                </div>
                <CSSTransition
                    in={!isEndVisible}
                    key={'scroll-down-button'}
                    timeout={200}
                    classNames="scroll-down-transition"
                    unmountOnExit={true}
                >
                    <div className="chat__scroll-to-bottom" onClick={() => scrollIntoView()}>{texts.down}</div>
                </CSSTransition>
            </div>
            <div className="chat__footer">
                {isAuthenticatedForSending && isConnected && <div className="chat__form-control">
                <textarea
                    name="chat-textarea"
                    placeholder={texts.enterMessage}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="form-input"
                    disabled={!isConnected || !isAuthenticatedForSending}
                />
                    <Button
                        className="button secondary"
                        onClick={handleSendMessage}
                        disabled={!isConnected || !isAuthenticatedForSending || inputMessage.trim() === ''}
                    >
                        {buttons.send}
                    </Button>
                </div>
                }
                {!isAuthenticatedForSending &&
                    <span className="text-primary"><b>Войдите </b> в систему, чтобы отправить сообщение</span>}

                <div className="chat__online-status-bar">
                    {isConnected ? (
                        <>
                            <ScrollingOnlineUsers/>
                            {guestsCount > 0 &&
                                <div className="online-container__guests">{texts.homeContainerGuests} <div>{guestsCount}</div></div>}
                        </>
                    ) : (
                        <div>{texts.connecting}</div>
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default Chat;
