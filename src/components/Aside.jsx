import React, {useEffect, useState} from 'react';
import Auth from "./Auth";
import Tables from "./Tables";
import Dolls from "./Dolls";
import {useSelector} from "react-redux";
import {selectToken, selectUser} from "../store/user/selectors";
import Button from "@mui/material/Button";
import Chat from "./Chat";
import '../styles/Aside.css'
import Recipes from "./Recipes";
import {useLang} from "../use/lang";

const Aside = () => {
    const path = window.location.pathname.split("/")[1];
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const {buttons, texts} = useLang();

    const [list, setList] = useState('')
    const [isDescriptionNeeded, setDescriptionNeeded] = useState(true)

    useEffect(() => {
        let isNeeded = false;

        switch (list) {
            case 'select-chat':
                isNeeded = false;
                break;
            case 'select-dolls':
            case 'select-recipes':
            case 'select-tables':
                isNeeded = true;
                break;
            default:
                isNeeded = true;
                break;
        }

        setDescriptionNeeded(isNeeded)
    }, [list, user])

    useEffect(() => {
        switch (path) {
            case 'doll':
                setList('select-dolls');
                break;
            case 'table':
                setList('select-tables');
                break;
            case 'recipes':
                setList('select-recipes');
                break;
            default:
                setList('');
                break;
        }
    }, [path])

    return (<div className="aside">
        <Auth isInfoNeeded={isDescriptionNeeded} path={path} user={user} setInfoNeeded={setDescriptionNeeded}/>

        <>
            <div className="tables--chosen__menu">
                <Button
                    id="select-dolls"
                    className={list === 'select-dolls' ? "content content--selected" : "button primary content"}
                    onClick={e => setList(e.target.id)}
                >
                    {buttons.dolls}
                </Button>
                {!!token && !!user && <Button
                    id="select-tables"
                    className={list === 'select-tables' ? "content content--selected" : "button primary content"}
                    onClick={e => setList(e.target.id)}
                >
                    {buttons.tables}
                </Button>}
                <Button
                    id="select-recipes"
                    className={list === 'select-recipes' ? "content content--selected" : "button primary content"}
                    onClick={e => setList(e.target.id)}
                >
                    {buttons.recipes}
                </Button>
                <Button
                    id="select-chat"
                    className={list === 'select-chat' ? "content content--selected" : "button primary content"}
                    onClick={e => setList(e.target.id)}
                >
                    {buttons.chat}
                </Button>
            </div>
            {!!token && !!user && list === 'select-tables' && <Tables token={token} user={user}/>}
            {list === 'select-dolls' && <Dolls user={user} token={token}/>}
            {list === 'select-chat' && <Chat user={user} token={token}/>}
            {list === 'select-recipes' && <Recipes/>}
        </>

        {list.length < 1 && !user && !token && <div className="aside__no-list">
            <div>
                <b>{texts.registerIs}</b>{texts.registerFor}
            </div>
        </div>}
        {list.length < 1 && (!!user && !!token) && <div className="aside__no-list"><b>{texts.welcome}</b></div>}
    </div>);
};

export default Aside;