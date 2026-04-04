import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadDollByRouteName} from "../store/doll/actions";

const DefaultDollLoader = () => {
    const { defaultName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (defaultName) {
            dispatch(loadDollByRouteName(defaultName, 'default'));
        }
    }, [dispatch, defaultName]);

    return null;
};

export default DefaultDollLoader;