// src/components/ScrollingOnlineUsers/ScrollingOnlineUsers.js
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import '../styles/ScrollingOnlineUsers.css';
import {selectGuestsCount, selectOnlineUsers} from "../store/websocket/selectors";

const SCROLL_INTERVAL = 3000; // Интервал смены пользователя (3 секунды)
const ANIMATION_DURATION = 250; // Длительность анимации (0.5 секунды)

const ScrollingOnlineUsers = () => {
    const onlineUsers = useSelector(selectOnlineUsers);
    const guestsCount = useSelector(selectGuestsCount);
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
    const [currentText, setCurrentText] = useState(null);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false); // Новое состояние для управления анимацией уплывания
    const [isAnimatingIn, setIsAnimatingIn] = useState(false);   // Новое состояние для управления анимацией выплывания

    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);

    const getItemsToDisplay = () => {
        let items = [];
        if (onlineUsers && onlineUsers.length > 0) {
            items = onlineUsers.map(u => u.username);
        }
        return items;
    };

    const startCycling = (items) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if (items.length === 0) {
            setCurrentText(null);
            return;
        }

        // Если только один элемент, просто показываем его без анимации
        if (items.length === 1) {
            setCurrentText(items[0]);
            setIsAnimatingOut(false);
            setIsAnimatingIn(false); // Убедимся, что нет активных анимаций
            return;
        }

        // Инициализация первого элемента
        setCurrentText(items[currentDisplayIndex]);
        setIsAnimatingIn(true); // Запускаем анимацию выплывания для первого элемента

        // Устанавливаем интервал для последующих смен
        intervalRef.current = setInterval(() => {
            setIsAnimatingOut(true); // Начинаем анимацию уплывания текущего текста
            setIsAnimatingIn(false); // Отключаем анимацию выплывания на время уплывания

            timeoutRef.current = setTimeout(() => {
                // После завершения анимации уплывания, меняем индекс
                setCurrentDisplayIndex(prevIndex => (prevIndex + 1) % items.length);
                setIsAnimatingOut(false); // Сбрасываем флаг уплывания
                // isAnimatingIn будет установлен в следующем useEffect
            }, ANIMATION_DURATION); // Задержка равна длительности анимации уплывания

        }, SCROLL_INTERVAL);
    };

    useEffect(() => {
        const items = getItemsToDisplay();
        startCycling(items);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [onlineUsers, guestsCount]); // Убрал currentDisplayIndex из зависимостей, чтобы избежать перезапуска startCycling на каждом шаге

    // Этот useEffect для обновления текста и запуска анимации выплывания,
    // когда currentDisplayIndex меняется
    useEffect(() => {
        const items = getItemsToDisplay();
        if (items.length > 0) {
            setCurrentText(items[currentDisplayIndex]);
            if (!isAnimatingOut && items.length > 1) { // Запускаем slide-in только если не в процессе slide-out
                setIsAnimatingIn(true);
            }
        } else {
            setCurrentText(null);
        }
    }, [currentDisplayIndex, onlineUsers, guestsCount, isAnimatingOut]); // Добавил isAnimatingOut в зависимости

    // Используем еще один useEffect для отключения анимации "выплывания" после ее завершения,
    // чтобы элемент оставался в "видимом" состоянии до следующего "уплывания"
    useEffect(() => {
        if (isAnimatingIn) {
            timeoutRef.current = setTimeout(() => {
                setIsAnimatingIn(false);
            }, ANIMATION_DURATION);
        }
    }, [isAnimatingIn]);

    if (currentText === null) {
        return <div className="online-users-display"></div>;
    }

    const itemClass = `online-user-item ${isAnimatingOut ? 'slide-out' : ''} ${isAnimatingIn ? 'slide-in' : ''}`;

    return (
        <div className="online-container">
            <div className="online-indicator"></div>
            <div className="online-users-container">
                <div className={itemClass}>
                    {currentText}
                </div>
            </div>
        </div>
    );
};

export default ScrollingOnlineUsers;