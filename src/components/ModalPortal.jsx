import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Убедимся, что компонент смонтирован на клиенте
        return () => setMounted(false);
    }, []);

    if (!mounted || typeof document === 'undefined') {
        return null;
    }

    const el = document.getElementById('modal-root'); // Получаем наш корневой элемент для портала

    return el ? createPortal(children, el) : null;
};

export default ModalPortal;