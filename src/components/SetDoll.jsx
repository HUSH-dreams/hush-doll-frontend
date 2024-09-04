import {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {dollGetShare, dollSetShareString} from "../store/doll/actions";
import {selectToken} from "../store/user/selectors";

const SetDoll = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token =  useSelector(selectToken);
    const {string} = useParams();


    useEffect(() => {
        dispatch(dollGetShare(string));

        if (token) {
            dispatch(dollSetShareString(token, string));
        }

        navigate('/doll');
    })
};

export default SetDoll;