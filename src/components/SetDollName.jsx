import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "../store/user/selectors";
import {dollDetailsInitiate, dollGetShare, dollSetShareString} from "../store/doll/actions";
import {selectDoll, selectDollName, selectDolls, selectOtherDolls} from "../store/doll/selectors";
import {handleSelect} from "./Dolls";
import {addError, addNewError, addNewNotification, addNotification} from "../store/error/actions";

const SetDollName = ({name}) => {
    const dispatch = useDispatch();
    const token =  useSelector(selectToken);
    const dolls = useSelector(selectDolls);
    const other = useSelector(selectOtherDolls);
    const selectedDollName = useSelector(selectDollName);

    useEffect(() => {
        if (!token) {
            dispatch(addNewNotification('Необходима авторизация'));

            return;
        }

        if (!dolls || dolls.length === 0) {
            return;
        }

        const normalizedName = name
            .replaceAll(' ', '-')
            .replaceAll('/', '-')
            .replaceAll('\\', '-')
            .toLowerCase();
        let doll = dolls.find(d => d.name
            .replaceAll(' ', '-')
            .replaceAll('/', '-')
            .replaceAll('\\', '-')
            .toLowerCase() === normalizedName);

        if (!doll) {
            doll = other.find(d => d.name.replaceAll(' ', '-').toLowerCase() === normalizedName);
        }

        if (doll) {
            if (selectedDollName !== doll.name) {
                handleSelect(dispatch, doll);

                dispatch(dollDetailsInitiate(token, doll.id))
            }
        } else {
            dispatch(addError(`Кукла с именем "${name}" не найдена.`));
        }
    }, [dispatch, token, name, dolls, other, selectedDollName]);

};

export default SetDollName;