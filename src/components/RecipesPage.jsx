import React from 'react';
import '../styles/RecipesPage.css'
import Aside from "./Aside";
import RecipesContainer from "./RecipesContainer";
import {useIsSmall} from "../use/IsSmall";
import Chat from "./Chat";
import {useSelector} from "react-redux";
import {selectToken, selectUser} from "../store/user/selectors";
import {useLang} from "../use/lang";

const RecipesPage = () => {
    const [isSmall] = useIsSmall();
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const {texts} = useLang();
    document.title = 'Рецепты'

    return (<main className="page">
        { !isSmall && <div className="page__before"
            style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}></div>}
        <aside className="page__aside">
            <Aside/>
        </aside>
        <RecipesContainer />
        <div className="chat-container">
            <div className="chat__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                {texts.mainChat}
            </div>
            <Chat user={user} token={token}/>
        </div>
    </main>)
};

export default RecipesPage;