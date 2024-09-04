import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectTables} from "../store/table/selectors";
import {useNavigate} from "react-router-dom";
import {handleSelectTable} from "./Table";
import {tableEnterTable, tableInitiate} from "../store/table/actions";

const TableLoad = ({shareString, token}) => {
    const tables = useSelector(selectTables);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            dispatch(tableEnterTable(token, {
                shareString: shareString
            }));

            if (tables) {
                const thatTable = tables.filter(table => table.dynamic.shareString === shareString);

                if (thatTable[0]) {
                    handleSelectTable(thatTable[0], dispatch, navigate)
                }
            }
        }
    },[tables])



    return (
        <div>
        </div>
    );
};

export default TableLoad;