import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

const CalcError = ({message, action}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(action());
        }, 10000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [])

    return (<div style={{color: 'red'}}>
        {message}
    </div>);
};

export default CalcError;