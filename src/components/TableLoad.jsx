import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectTables} from "../store/table/selectors";
import {useNavigate} from "react-router-dom";
import {tableEnterTable} from "../store/table/actions";
import {addMessage, addNewMessage} from "../store/error/actions";

const TableLoad = ({shareString, token}) => {
    const tables = useSelector(selectTables);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            dispatch(tableEnterTable(token, {
                shareString: shareString
            }));
        } else {
            dispatch(addMessage('Для работы с таблицами необходима авторизация'))
        }

        navigate('/table')
    },[tables])



    return (
        <div>
        </div>
    );
};

export default TableLoad;