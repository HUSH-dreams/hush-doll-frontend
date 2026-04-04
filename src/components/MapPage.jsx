import React from 'react';
import '../styles/page.css'
import {useIsSmall} from "../use/IsSmall";
import Aside from "./Aside";
import MapContainer from "./MapContainer";
import {useSelector} from "react-redux";
import {selectToken, selectUser} from "../store/user/selectors";
import Chat from "./Chat";
import {useLang} from "../use/lang";

const MapPage = () => {
    const [isSmall] = useIsSmall();
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const {texts} = useLang();

    document.title = 'Карта'

    return (<main className="page">
        {!isSmall && <div className="page__before"
                          style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}></div>}

        <aside className="page__aside">
            <Aside/>
        </aside>
        <MapContainer />
        <div className="chat-container">
            <div className="chat__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                {texts.mainChat}
            </div>
            <Chat user={user} token={token}/>
        </div>
    </main>);
};

export default MapPage;