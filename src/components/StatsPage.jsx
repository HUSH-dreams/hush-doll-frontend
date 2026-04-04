import React, {useEffect, useRef, useState} from 'react';
import Aside from "./Aside";
import {useIsSmall} from "../use/IsSmall";
import StatsContainer from "./StatsContainer";
import StatsContainerClans from './StatsContainerClans'
import Chat from "./Chat";
import {useSelector} from "react-redux";
import {selectToken, selectUser} from "../store/user/selectors";
import {useLang} from "../use/lang";
import {scroll} from "../utils/scrollIntoView";
import StatsContainerCastles from "./StatsContainerCastles";

const StatsPage = () => {
    const [isSmall] = useIsSmall();
    const user = useSelector(selectUser);
    const {texts} = useLang();
    const token = useSelector(selectToken);
    const statsContainerRef = useRef(null);
    const [list, setList] = useState('players');

    useEffect(() => {
        if (statsContainerRef) {
            scroll(statsContainerRef, 'instant')
        }
    },[statsContainerRef])

    document.title = 'Статистика'

    return (<main className="page">
        {!isSmall && <div className="page__before"
                          style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}></div>}

        <aside className="page__aside">
            <Aside/>
        </aside>
        <div className="page__100dvw page__100dvw-1 relative">
            <div className="container--indicator" ref={statsContainerRef}></div>
        </div>
        <div className="page__100dvw page__100dvw-2"></div>
        <div className="page__100dvw page__100dvw-3"></div>
        {
            list === 'players' && <StatsContainer list={list} setList={setList}/>
        }
        {
            list === 'clans' && <StatsContainerClans list={list} setList={setList}/>
        }
        {
            list === 'castles' && <StatsContainerCastles list={list} setList={setList}/>
        }

        <div className="chat-container">
            <div className="chat__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                {texts.mainChat}
            </div>
            <Chat user={user} token={token}/>
        </div>
    </main>);
};

export default StatsPage;