import React, {useEffect} from 'react';
import DollContainer from "./DollContainer";
import ItemsContainer from "./ItemsContainer";
import {useParams} from "react-router-dom";
import SetDoll from "./SetDoll";
import '../styles/page.css'
import {useIsSmall} from "../use/IsSmall";
import Aside from "./Aside";
import {useDispatch, useSelector} from "react-redux";
import {selectDollName} from "../store/doll/selectors";
import {dollUnetDollName} from "../store/doll/actions";
import MyDollLoader from "./MyDollLoader";
import OtherDollLoader from "./OtherDollLoader";
import Chat from "./Chat";
import {selectToken, selectUser} from "../store/user/selectors";
import DefaultDollLoader from "./DefaultDollLoader";
import {useLang} from "../use/lang";

const DollPage = () => {
    let {string, myName, otherName, defaultName} = useParams();
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const [isSmall] = useIsSmall();
    const dispatch = useDispatch();
    const {texts} = useLang();
    const selectedName = useSelector(selectDollName);

    useEffect(() => {
        if ((!myName && !otherName && !defaultName) && selectedName) {
            dispatch(dollUnetDollName());
        }
    },[dispatch, myName, otherName, selectedName, defaultName])

    document.title = 'Кукла'

    return (<main className="page">
            {!isSmall && <div className="page__before"
                              style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}></div>}
            {string && <SetDoll string={string}/>}
            {myName && <MyDollLoader/>}
            {otherName && <OtherDollLoader/>}
            {defaultName && <DefaultDollLoader/>}
            <aside className="page__aside">
                <Aside/>
            </aside>
            <DollContainer/>
            <ItemsContainer/>
            <div className="chat-container">
                <div className="chat__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                    {texts.mainChat}
                </div>
                <Chat user={user} token={token}/>
            </div>
        </main>);
};

export default DollPage;