import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "../store/user/selectors";
import {useEffect} from "react";
import {dollGetShare, dollSetShareString} from "../store/doll/actions";

export function useSetStringDoll(string) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token =  useSelector(selectToken);

    useEffect(() => {
        dispatch(dollGetShare(string));

        if (token) {
            dispatch(dollSetShareString(token, string));
        }

        navigate(`/doll/`);
    })
}