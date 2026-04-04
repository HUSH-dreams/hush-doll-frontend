import React, {useRef, useState} from 'react';
import Aside from "./Aside";
import StatsContainer from "./StatsContainer";
import Chat from "./Chat";
import {useIsSmall} from "../use/IsSmall";
import {useSelector} from "react-redux";
import {selectToken, selectUser} from "../store/user/selectors";
import {useLang} from "../use/lang";
import {useParams} from "react-router-dom";
import UtilsContainer from "./UtilsContainer";

const UtilsPage = () => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const [isSmall] = useIsSmall();
    const utilsContainerRef = useRef(null);
    const {texts} = useLang();

    return (<main className="page">
        {!isSmall && <div className="page__before"
                          style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}></div>}

        <aside className="page__aside">
            <Aside/>
        </aside>

        <div className="container--indicator" ref={utilsContainerRef}></div>

        <UtilsContainer/>

        <div className="chat-container">
            <div className="chat__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                {texts.mainChat}
            </div>

            <Chat user={user} token={token}/>
        </div>
    </main>);
};

export default UtilsPage;