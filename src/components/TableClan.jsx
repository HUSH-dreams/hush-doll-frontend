import React, {useState} from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';
import {useDispatch, useSelector} from "react-redux";
import {tableDeleteClan, tableToggleClan} from "../store/table/actions";
import {selectChosenClan} from "../store/table/selectors";

const TableClan = ({clan, me, table, token}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const dispatch = useDispatch();
    const chosen = useSelector(selectChosenClan);

    const setMouseOver = () => {
        if (!isMouseOver) {
            setIsMouseOver(true);
        }
    }

    const setMouseAway = () => {
        if (isMouseOver) {
            setIsMouseOver(false);
        }
    }

    const handleDelete = () => {
        dispatch(tableDeleteClan(token, {
            clanId: clan.id,
            tableId: table.dynamic.id,
            name: clan.name
        }))
    }

    const handleToggle = () => {
        dispatch(tableToggleClan(clan.id));
    }

    return (
        <div style={{
            background: isMouseOver && `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
            color: isMouseOver && 'whitesmoke',
            width: '100%',
            borderRadius: 5,
            display: 'flex',
            boxShadow: (isMouseOver) && '0 0 10px 2px white',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 30,
            padding: '0 10px',
            boxSizing: 'border-box'
        }} className={chosen === clan.id && 'chosen-clan'}
             onMouseEnter={setMouseOver}
             onMouseLeave={setMouseAway}
             onClick={handleToggle}
        >
            <div>
                {
                    clan.name
                }
            </div>
            {
                (isMouseOver && me.roleId < 3) && (<IconButton
                    className="text trash"
                    sx={{height: 20, width: 20, cursor: 'pointer'}}
                    aria-label="delete"
                    aria-describedby={clan.id} type="button" onClick={handleDelete}>
                    <ClearIcon/>
                </IconButton>)
            }
        </div>
    );
};

export default TableClan;