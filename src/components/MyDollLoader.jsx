// src/components/MyDollRouteLoader.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Token теперь берется внутри loadDollByRouteName
import { loadDollByRouteName } from '../store/doll/actions';

const MyDollLoader = () => {
    const { myName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (myName) {
            dispatch(loadDollByRouteName(myName, 'my'));
        }
    }, [dispatch, myName]);

    return null;
};

export default MyDollLoader;