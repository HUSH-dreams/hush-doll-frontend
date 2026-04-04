import React, {useEffect, useRef} from 'react';
import '../styles/HomeContainer.css'
import Button from "@mui/material/Button";
import CustomLink from "./CustomLink";
import {useLang} from "../use/lang";
import ScrollingOnlineUsers from "./ScrollingOnlineUsers";
import {useSelector} from "react-redux";
import {selectGuestsCount, selectOnlineUsers} from "../store/websocket/selectors";
import {scroll} from "../utils/scrollIntoView";

const HomeContainer = () => {
    const {buttons, texts} = useLang();
    const guestsCount = useSelector(selectGuestsCount);
    const onlineUsers = useSelector(selectOnlineUsers);
    const homeContainerRef = useRef(null);

    useEffect(() => {
        if (homeContainerRef) {
            scroll(homeContainerRef, 'instant');
        }
    },[homeContainerRef])

    return (<div className="home-container">
        <div className="container--indicator" ref={homeContainerRef}></div>
        <div className="recipes-container__header"
             style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
            {texts.homeContainerHomePage}
        </div>
        <div className="home-container__body">
            <div>
                {texts.homeContainerGreeting}
                <div className="home-container__text">
                    {texts.homeContainerFind}
                    <div className="home-container__text-row">
                        <CustomLink style={{margin: '0 5px 0 5px'}} to={'/doll'}>
                            <Button className="button secondary">{buttons.doll}: </Button>
                        </CustomLink>
                        {texts.homeContainerDoll}
                    </div>

                    <div className="home-container__text-row">
                        <CustomLink style={{margin: '0 5px 0 5px'}} to={'/table'}>
                            <Button className="button secondary">{buttons.table}: </Button>
                        </CustomLink>
                        {texts.homeContainerTable}
                    </div>
                    <div className="home-container__text-row">
                        <CustomLink style={{margin: '0 5px 0 5px'}} to={'/recipes'}>
                            <Button className="button secondary">{buttons.recipes}: </Button>
                        </CustomLink>
                        {texts.homeContainerRecipes}
                    </div>
                    <div className="home-container__text-row">
                        <CustomLink style={{margin: '0 5px 0 5px'}} to={'/maps'}>
                            <Button className="button secondary">{buttons.maps}: </Button>
                        </CustomLink>
                        {texts.homeContainerMaps}
                    </div>
                    <div className="home-container__text-row">
                        <CustomLink style={{margin: '0 5px 0 5px'}} to={'/stats'}>
                            <Button className="button secondary">{buttons.stats}: </Button>
                        </CustomLink>
                        {texts.homeContainerStats}
                    </div>
                    <div className="home-container__text-row">
                        <CustomLink style={{margin: '0 5px 0 5px'}} to={'/utils'}>
                            <Button className="button secondary">{buttons.utils}: </Button>
                        </CustomLink>
                        {texts.homeContainerUtils}
                    </div>
                    <div className="home-container__subtitle">{texts.homeContainerNewSections}</div>
                </div>
            </div>

            {texts.homeContainerChangeLog}
            <footer className="home-container__footer">
                {(onlineUsers || (onlineUsers && onlineUsers.length > 0)) && (
                    <div className="home-container__text-column">
                        {texts.homeContainerOnline}
                        <div className="home-container__online-container">
                            <ScrollingOnlineUsers/>
                            {guestsCount > 0 &&
                                <div className="online-container__guests">{texts.homeContainerGuests} <div>{guestsCount}</div></div>}
                        </div>
                    </div>)}
                <div>
                    <div>
                        <a target="_blank" rel="noreferrer" href="https://t.me/h_hush_h" title="Telegram: @h_hush_h" className="socials"
                           aria-label="telegram">
                                <span className="socials__span">
                                    <svg role="img" aria-label="telegram social icon" viewBox="0 0 64 64"
                                         className="socials__svg socials__svg--telegram">
                                        <g className="socials__svg-icon">
                                            <path
                                                d="M0,0H64V64H0ZM0 0v64h64V0zm11.887 33.477c3.73-2.055 7.894-3.77 11.785-5.497 6.695-2.824 13.414-5.597 20.203-8.18 1.324-.44 3.695-.87 3.93 1.087-.13 2.773-.653 5.527-1.012 8.281-.914 6.055-1.969 12.094-2.996 18.133-.356 2.008-2.875 3.05-4.488 1.761-3.871-2.613-7.778-5.207-11.598-7.882-1.254-1.274-.094-3.102 1.027-4.012 3.188-3.145 6.575-5.816 9.598-9.121.816-1.973-1.594-.313-2.39.2-4.368 3.007-8.63 6.202-13.235 8.847-2.352 1.297-5.094.187-7.445-.535-2.11-.871-5.2-1.75-3.38-3.082m0 0"></path>
                                        </g>
                                    </svg>
                                </span>
                        </a>
                        {texts.websiteMade}<span>HUSH </span>
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer" href="https://discord.gg/6ctmFnHEfk"
                           title="Discord: 'Sphere: The World of the Chosen'" className="socials" aria-label="discord">
                                <span className="socials__span">
                                    <svg role="img" aria-label="discord social icon" viewBox="0 0 64 64"
                                         className="socials__svg socials__svg--discord">
                                        <g className="socials__svg-icon">
                                            <path
                                                d="M0,0H64V64H0ZM0 0v64h64V0zm36.903 18.5a29.6 29.6 0 0 1 7.374 2.269c4.045 5.914 6.055 12.585 5.313 20.283a29.6 29.6 0 0 1-9.05 4.537 21.7 21.7 0 0 1-1.936-3.12 19.3 19.3 0 0 0 3.055-1.46 11 11 0 0 1-.747-.562 21.25 21.25 0 0 1-18.082 0c-.242.186-.492.377-.748.562a19 19 0 0 0 3.05 1.457 22 22 0 0 1-1.937 3.123 29.7 29.7 0 0 1-9.043-4.54c-.633-6.638.632-13.37 5.299-20.275a29.8 29.8 0 0 1 7.38-2.274q.522.935.944 1.92a27.5 27.5 0 0 1 8.183 0q.422-.985.945-1.92m-10.97 18.467c-1.762 0-3.218-1.6-3.218-3.568s1.405-3.581 3.213-3.581c1.807 0 3.252 1.614 3.222 3.581-.031 1.968-1.42 3.568-3.216 3.568m11.875 0c-1.765 0-3.216-1.6-3.216-3.568s1.406-3.581 3.216-3.581 3.244 1.614 3.213 3.581c-.03 1.968-1.417 3.568-3.213 3.568"></path>
                                        </g>
                                    </svg>
                                </span>
                        </a>
                        {texts.community}
                    </div>
                </div>
            </footer>
        </div>
    </div>);
};

export default HomeContainer;