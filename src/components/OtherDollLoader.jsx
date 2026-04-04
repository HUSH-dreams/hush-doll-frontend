// src/components/SharedDollRouteLoader.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Token теперь берется внутри loadDollByRouteName
import { loadDollByRouteName } from '../store/doll/actions';

const OtherDollLoader = () => {
    const { otherName } = useParams(); // Получаем имя куклы из URL
    const dispatch = useDispatch();

    useEffect(() => {
        if (otherName) {
            dispatch(loadDollByRouteName(otherName, 'shared')); // Вызываем наш новый action
        }
    }, [dispatch, otherName]);

    return null;
};

export default OtherDollLoader;