// src/hooks/useHorizontalScrollShadows.js (предполагаемое расположение)
import { useRef, useState, useEffect, useCallback } from 'react';

const useHorizontalScrollShadows = () => {
    const gridRef = useRef(null);
    const [showLeftShadow, setShowLeftShadow] = useState(false);
    const [showRightShadow, setShowRightShadow] = useState(false);
    const [hasHorizontalScroll, setHasHorizontalScroll] = useState(false);
    const [hasVerticalScroll, setHasVerticalScroll] = useState(false);

    const updateShadows = useCallback(() => {
        const element = gridRef.current;
        if (!element) return;

        const hasScroll = element.scrollWidth > element.clientWidth;
        setHasHorizontalScroll(hasScroll);
        const hasVertScroll = element.scrollHeight > element.clientHeight;
        setHasVerticalScroll(hasVertScroll);

        if (!hasScroll) {
            setShowLeftShadow(false);
            setShowRightShadow(false);
            return;
        }

        const isAtLeft = element.scrollLeft === 0;
        // Небольшой допуск для правой границы, чтобы избежать проблем с субпиксельным рендерингом
        const isAtRight = element.scrollLeft + element.clientWidth >= element.scrollWidth - 1;

        setShowLeftShadow(!isAtLeft);
        setShowRightShadow(!isAtRight);
    }, []);

    // НОВАЯ ФУНКЦИЯ: Обработчик события колеса мыши для горизонтальной прокрутки
    const handleWheelScroll = useCallback((event) => {
        const element = gridRef.current;
        if (!element) return;

        // Проверяем, есть ли вообще горизонтальная прокрутка
        if (element.scrollWidth > element.clientWidth) {
            // Предотвращаем стандартное (вертикальное) поведение прокрутки колесом мыши
            event.preventDefault();
            // Применяем величину вертикальной прокрутки (deltaY) к горизонтальной прокрутке (scrollLeft)
            element.scrollLeft += event.deltaY;
            // Также вызываем updateShadows, чтобы тени обновлялись при прокрутке колесом
            updateShadows();
        }
    }, [updateShadows]); // updateShadows добавлен в зависимости, так как он вызывается внутри

    useEffect(() => {
        const element = gridRef.current;
        if (element) {
            updateShadows(); // Инициализация теней и состояния скролла
            element.addEventListener('scroll', updateShadows);

            // ДОБАВЛЯЕМ СЛУШАТЕЛЬ СОБЫТИЯ 'wheel'
            // { passive: false } очень важен! Он позволяет вызывать event.preventDefault()
            element.addEventListener('wheel', handleWheelScroll, { passive: false });

            const resizeObserver = new ResizeObserver(updateShadows);
            resizeObserver.observe(element);

            return () => {
                element.removeEventListener('scroll', updateShadows);
                element.removeEventListener('wheel', handleWheelScroll); // Очистка слушателя 'wheel'
                resizeObserver.disconnect();
            };
        }
    }, [updateShadows, handleWheelScroll]); // Добавляем handleWheelScroll в зависимости useEffect

    return { gridRef, showLeftShadow, showRightShadow, hasHorizontalScroll, hasVerticalScroll };
};

export default useHorizontalScrollShadows;