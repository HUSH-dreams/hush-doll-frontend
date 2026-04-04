import React, {useEffect, useState} from "react";
import {Outlet, useParams} from 'react-router-dom';
import '../styles/page.css';
import PageMenu from "./PageMenu";
import Message from "./Message";
import {clearError, clearMessage} from "../store/error/actions";
import {useDispatch, useSelector} from "react-redux";
import {logoutStart, logoutSuccess} from "../store/user/actions";
import {selectNotifications} from "../store/error/selectors";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connectWebSocket, disconnectWebSocket} from "../store/websocket/actions";
import {selectIsConnected} from "../store/websocket/selectors";
import {dollUnetDollName} from "../store/doll/actions";
import {selectDollName} from "../store/doll/selectors";
import {selectTable} from "../store/table/selectors";
import {tableUnset} from "../store/table/actions";
import {selectToken} from "../store/user/selectors";

const Layout = () => {
    const [number, setNumber] = useState(1);
    const [isLoaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const notifications = useSelector(selectNotifications);
    const ANIMATION_DURATION = 300;
    const isConnected = useSelector(selectIsConnected);
    const table = useSelector(selectTable);
    const selectedName = useSelector(selectDollName);
    let {string, myName, otherName, defaultName, tableName} = useParams();
    const token = useSelector(selectToken);
    const [isShow, setShow] = useState(true);

    useEffect(() => {
        setLoaded(true);
        setNumber(Math.floor(Math.random() * 100 % 4) + 1);
        dispatch(clearMessage());
        dispatch(clearError());
    }, [dispatch]);

    useEffect(() => {
        dispatch(connectWebSocket());

        return () => {
            if (isConnected) {
                dispatch(disconnectWebSocket());
            }
        };
    }, [dispatch]);

    useEffect(() => {
        const css = `a, button, select, .item-before, #over, .doll__left, .doll-menu-item, .page__flags > img,
         .table-castle__main-container, .table-container__table-content-add-castle, .table-user--header, .table, .socials,
          .auth__close, .message span, .table-castle, .recipe-icon, .copy-button, .map-container__chosen-type,
           .map-element, .map-element__icon, .map-container__world, .stats-container__arrow-right svg, 
           .stats-container__arrow-left svg, .stats-container--table__body-row, .stats-container__difference-row,
            .default-dolls img, .table-calculator__close, .incognito, .logout, .util-card, .default-dolls_img-container {
            cursor: url(${process.env.REACT_APP_BACKEND_URL}/image/cursor2), auto !important;
        }`
        const el = document.createElement('style')
        el.textContent = css
        document.head.appendChild(el)
    }, [])

    useEffect(() => {
        if (isLoaded) {
            setTimeout(() => {
                setShow(false);
            },1000)
        }
    },[isLoaded])

    useEffect(() => {
        if (notifications && notifications.length > 0) {
            for (let i = 0; i < notifications.length; i++)
            {
                if (notifications[i].type === 'error')
                {
                    if (notifications[i].message.startsWith('Token expired')) {
                        dispatch(logoutStart());
                        dispatch(logoutSuccess());
                    }
                }
            }
        }
    },[notifications])

    return (<>
        <div style={{cursor: `url(${process.env.REACT_APP_BACKEND_URL}/image/cursor1), auto`}}>
            <div className="background-container"
                 style={{
                     background: `url(${process.env.REACT_APP_BACKEND_URL}/image/ilsa${number}) center center / cover no-repeat`,
                     backgroundAttachment: 'fixed'
                 }}
            >
                {
                    isShow && <div className={isLoaded ? 'not-loaded loaded' : 'not-loaded'}></div>
                }
                <div className="main-container">
                    <header>
                        <PageMenu/>
                    </header>
                    <Outlet/>
                </div>
                <div className="modal-message-container">
                    <TransitionGroup component={null}>
                        {notifications?.map(notification => (
                            // CSSTransition управляет анимацией для каждого отдельного элемента
                            <CSSTransition
                                key={notification.id} // Ключ очень важен для TransitionGroup
                                timeout={ANIMATION_DURATION} // Длительность анимации для входа и выхода
                                classNames="message-transition" // Префикс для CSS-классов анимации
                                // unmountOnExit={true} // Удаляет компонент из DOM после завершения анимации выхода
                                // appear={true} // Запускает анимацию при первом монтировании компонента (не обязательно)
                            >
                                <Message notification={notification} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        </div>
    </>);
};

export default Layout;