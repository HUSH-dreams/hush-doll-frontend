import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {useLang} from "../use/lang";
import Flags from "./Flags";
import {useSelector} from "react-redux";
import {selectLang} from "../store/lang/selectors";
import {useLocation, useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

const PageMenu = () => {
    const eng = useSelector(selectLang);
    const {buttons} = useLang();
    const [path, setPath] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {texts} = useLang();

    // Отслеживаем изменение пути для подсветки активной кнопки
    useEffect(() => {
        const currentPathSegment = location.pathname.split("/")[1];
        setPath(currentPathSegment);
        // Закрываем меню, если пользователь перешел на другую страницу
        setIsMenuOpen(false);
    }, [location.pathname]);

    const handleClick = (id) => {
        navigate('/' + id.split('-button').join(""));
    }

    // Обработчик для кнопки меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleOverlayClick = () => {
        setIsMenuOpen(false);
    }

    return (<>
            {/* Меню для больших экранов */}
                <div className="page__menu page__menu--desktop">
                    <div>
                        <Button id="-button" onClick={e => handleClick(e.target.id)}
                                className={!path ? "button secondary" : "button primary"}>{buttons.home}</Button>
                        <Button id="doll-button" onClick={e => handleClick(e.target.id)}
                                className={path === 'doll' ? "button secondary" : "button primary"}>{buttons.doll}</Button>
                        <Button id="table-button" onClick={e => handleClick(e.target.id)}
                                className={path === 'table' ? "button secondary" : "button primary"}>{buttons.table}</Button>
                        <Button id="recipes-button" onClick={e => handleClick(e.target.id)}
                                className={path === 'recipes' ? "button secondary" : "button primary"}>{buttons.recipes}</Button>
                        <Button id="maps-button" onClick={e => handleClick(e.target.id)}
                                className={path === 'maps' ? "button secondary" : "button primary"}>{buttons.maps}</Button>
                        <Button id="stats-button" onClick={e => handleClick(e.target.id)}
                                className={path === 'stats' ? "button secondary" : "button primary"}>{buttons.stats}</Button>
                        <Button id="utils-button" onClick={e => handleClick(e.target.id)}
                                className={path === 'utils' ? "button secondary" : "button primary"}>{buttons.utils}</Button>
                    </div>
                    <div className="table-container__flags">
                        <Flags eng={eng}/>
                    </div>
                </div>

                <CSSTransition
                    in={isMenuOpen}
                    timeout={300}
                    classNames="mobile-menu-overlay"
                    unmountOnExit
                >
                    <div className="mobile-menu-overlay" onClick={handleOverlayClick}></div>
                </CSSTransition>

            {/* Кнопка-иконка меню для мобильных экранов */}
                <div className="menu-icon-container" onClick={toggleMenu}>
                    <div className="menu-icon">
                        <div id="menu-icon1" className={isMenuOpen ? "change" : ""}></div>
                        <div id="menu-icon2" className={isMenuOpen ? "change" : ""}></div>
                        <div id="menu-icon3" className={isMenuOpen ? "change" : ""}></div>
                    </div>
                </div>

            {/* Мобильное меню, которое появляется по клику */}
                <CSSTransition
                    in={isMenuOpen}
                    timeout={300}
                    classNames="mobile-menu"
                    unmountOnExit
                >
                    <div className="page__menu page__menu--mobile">
                        <div className="page__menu--mobile-socials">
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://t.me/h_hush_h"
                                   title="Telegram: @h_hush_h"
                                   className="socials"
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
                                {texts.websiteMade} HUSH
                            </div>

                            <div>
                                <a target="_blank" rel="noreferrer" href="https://discord.gg/6ctmFnHEfk"
                                   title="Discord: 'Sphere: The World of the Chosen'" className="socials"
                                   aria-label="discord">
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
                        <div>
                            <Button id="-button" onClick={e => handleClick(e.target.id)}
                                    className={!path ? "button secondary" : "button primary"}>{buttons.home}</Button>
                            <Button id="doll-button" onClick={e => handleClick(e.target.id)}
                                    className={path === 'doll' ? "button secondary" : "button primary"}>{buttons.doll}</Button>
                            <Button id="table-button" onClick={e => handleClick(e.target.id)}
                                    className={path === 'table' ? "button secondary" : "button primary"}>{buttons.table}</Button>
                            <Button id="recipes-button" onClick={e => handleClick(e.target.id)}
                                    className={path === 'recipes' ? "button secondary" : "button primary"}>{buttons.recipes}</Button>
                            <Button id="maps-button" onClick={e => handleClick(e.target.id)}
                                    className={path === 'maps' ? "button secondary" : "button primary"}>{buttons.maps}</Button>
                            <Button id="stats-button" onClick={e => handleClick(e.target.id)}
                                    className={path === 'stats' ? "button secondary" : "button primary"}>{buttons.stats}</Button>
                            <Button id="utils-button" onClick={e => handleClick(e.target.id)}
                                    className={path === 'utils' ? "button secondary" : "button primary"}>{buttons.utils}</Button>
                        </div>
                        <div className="table-container__flags">
                            <Flags eng={eng}/>
                        </div>
                    </div>
                </CSSTransition>
    </>);
}

export default PageMenu;
