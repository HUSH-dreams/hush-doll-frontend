// src/components/TableRouteLoader.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { loadTableByName } from '../store/table/actions';
import { selectTable } from '../store/table/selectors';
import { selectToken } from '../store/user/selectors';
import {addError, addNewError} from '../store/error/actions';

const TableLoader = () => {
    const { tableName: tableNameFromUrl } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const currentTable = useSelector(selectTable);

    useEffect(() => {
        if (!token) {
            dispatch(addError('Для доступа к таблицам необходима авторизация.'));
            navigate('/');
            return;
        }

        dispatch(loadTableByName(tableNameFromUrl, token));
    }, [tableNameFromUrl, dispatch, token, navigate]);

    return null;
};

export default TableLoader;