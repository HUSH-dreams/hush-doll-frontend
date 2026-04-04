import React, { useState, useEffect, useRef } from 'react';
import '../styles/item-animation.css';

// Этот компонент отвечает за анимацию перемещения предмета
// Он отрисовывается поверх всего и затем удаляется
const AnimatedItem = ({ item, fromRect, toRect, onAnimationComplete }) => {
    const [style, setStyle] = useState({});
    const animationRef = useRef(null);

    useEffect(() => {
        if (!animationRef.current) return;

        // Определяем начальную позицию анимированного элемента
        animationRef.current.style.top = `${fromRect.top}px`;
        animationRef.current.style.left = `${fromRect.left}px`;
        animationRef.current.style.width = `${fromRect.width}px`;
        animationRef.current.style.height = `${fromRect.height}px`;

        // Запускаем CSS-переход для перемещения в конечную позицию
        // Используем setTimeout, чтобы дать браузеру время для отрисовки начального состояния
        setTimeout(() => {
            if (animationRef.current) {
                const deltaX = toRect.left - fromRect.left;
                const deltaY = toRect.top - fromRect.top;
                setStyle({
                    transform: `translate(${deltaX}px, ${deltaY}px)`,
                    opacity: 1,
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                });
            }
        }, 10);

        // Обработчик завершения анимации
        const handleTransitionEnd = () => {
            onAnimationComplete();
        };

        // Добавляем слушатель события transitionend
        animationRef.current.addEventListener('transitionend', handleTransitionEnd);

        // Очищаем слушатель при размонтировании компонента
        return () => {
            if (animationRef.current) {
                animationRef.current.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
    }, [fromRect, toRect, onAnimationComplete]);

    // Возвращаем иконку, которая будет анимироваться
    return (
        <div className="animated-item" style={style} ref={animationRef}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.iconName}`} alt={item.name} />
        </div>
    );
};

export default AnimatedItem;
