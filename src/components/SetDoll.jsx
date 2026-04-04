import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {dollGetShare, dollSetShareString} from "../store/doll/actions";
import {selectToken} from "../store/user/selectors";
import {addMessage, addNewMessage} from "../store/error/actions";

const SetDoll = ({string}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token =  useSelector(selectToken);

    useEffect(() => {
        dispatch(dollGetShare(string));

        if (token) {
            dispatch(dollSetShareString(token, string));
        } else {
            dispatch(addMessage('Для работы с куклами необходима авторизация'))
        }

        navigate(`/doll/`);
    })
};

export default SetDoll;