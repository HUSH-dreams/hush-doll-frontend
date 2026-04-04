import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import '../styles/table-container.css'
import {useDispatch, useSelector} from "react-redux";
import {
    selectCastles,
    selectCastlesLvlId, selectChosenClan,
    selectError,
    selectFavoriteCastles,
    selectFavoriteDate,
    selectTable
} from "../store/table/selectors";
import Button from "@mui/material/Button";
import {selectLang} from "../store/lang/selectors";
import {setFavoriteCastles, tableSelectCastle, tablesUnset, tableUnset} from "../store/table/actions";
import TableCastle from "./TableCastle";
import {selectToken} from "../store/user/selectors";
import TableLoad from "./TableLoad";
import {useNavigate, useParams} from "react-router-dom";
import Calculator from "./Calculator";
import {useLang} from "../use/lang";
import {calculateTimeToFill} from '../utils/tableUtils';
import {scroll} from "../utils/scrollIntoView";
import {useWindowSize} from "../use/ScreenSize";
import {addError, addNewMessage} from "../store/error/actions";

const TableContainer = () => {
    const table = useSelector(selectTable);
    const castleLvlId = useSelector(selectCastlesLvlId);
    const eng = useSelector(selectLang);
    const {shareString} = useParams();
    const dispatch = useDispatch();
    const castles = useSelector(selectCastles);
    const token = useSelector(selectToken);
    const error = useSelector(selectError);
    const {buttons, texts} = useLang();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [sortedBy, setSortedBy] = useState(buttons.sortedByTime);
    const [openCalc, setOpenCalc] = useState(false);
    const [display, setDisplay] = useState('none');
    const favoriteCastles = useSelector(selectFavoriteCastles);
    const favoriteDate = useSelector(selectFavoriteDate);
    const castleLvls = [15, 30, 45, 60, 75, 90, 120, 250, 350];
    const tableContainerRef = useRef(null);
    const indicatorRef = useRef(null);
    const [isSmall, setSmall] = useState(false);
    const size = useWindowSize();
    const chosenClan = useSelector(selectChosenClan);

    const sortedCastles = useMemo(() => {
        if (!castles || castles.length === 0) {
            return [];
        }

        const castlesWithCalculatedTime = castles.map(thisCastle => {
            const timeToFill = calculateTimeToFill(thisCastle);
            return {...thisCastle, timeToFill};
        });

        if (sortedBy === buttons.sortedByLvl) {
            return castlesWithCalculatedTime.sort((a, b) => a.lvl - b.lvl);
        } else {
            return castlesWithCalculatedTime.sort((a, b) => a.timeToFill - b.timeToFill);
        }
    }, [castles, sortedBy, buttons.sortedByLvl, buttons.sortedByTime]);



    const line = useMemo(() => {
        if (!sortedCastles || sortedCastles.length === 0 || sortedBy !== buttons.sortedByTime) {
            return null;
        }
        return sortedCastles.find(thisCastle => thisCastle.timeToFill > new Date().valueOf());
    }, [sortedCastles, sortedBy, buttons.sortedByTime]);

    useEffect(() => {
        if (indicatorRef.current) {
            const computedStyle = window.getComputedStyle(indicatorRef.current);

            const displayValue = computedStyle.display;

            if (displayValue === 'none') {
                if (!isSmall) {
                    setSmall(true)
                }
            } else {
                if (isSmall) {
                    setSmall(false)
                }
            }
        }
    },[size])

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (tableContainerRef && table) {
            setTimeout(() => {
                scroll(tableContainerRef)
            }, 0)
        }
    },[table, tableContainerRef])

    const handleSelectTable = useCallback((e) => {
        dispatch(tableSelectCastle({lvlId: e.target.id}));
    }, [dispatch]);

    useEffect(() => {
        if (table) {
            dispatch(tableSelectCastle({lvlId: castleLvlId}));
        }
    }, [table, castleLvlId, favoriteCastles, favoriteDate, dispatch]);

    useEffect(() => {
        if (!token && table) {
            dispatch(tableUnset(table.dynamic.id));
        }

        if (!token) {
            dispatch(tablesUnset());
        }
    }, [token, table, dispatch])

    const toggleSort = useCallback(() => {
        setSortedBy(prevSortedBy => {
            return prevSortedBy === buttons.sortedByLvl ? buttons.sortedByTime : buttons.sortedByLvl;
        });
    }, [buttons.sortedByLvl, buttons.sortedByTime]);

    const toggleFavorite = useCallback((lvl) => {
        const newCastles = new Set(favoriteCastles || []);

        if (newCastles.has(lvl)) {
            newCastles.delete(lvl);
        } else {
            newCastles.add(lvl);
        }

        const currentDate = new Date();

        dispatch(setFavoriteCastles(Array.from(newCastles), currentDate));
    }, [favoriteCastles, dispatch]);

    const handleOpenCalc = useCallback(() => {
        setDisplay(prevDisplay => prevDisplay === 'none' ? 'block' : 'none');
        setOpenCalc(prevOpenCalc => !prevOpenCalc);
    }, []);

    const timeOffset = currentTime.getTimezoneOffset();
    const moscowTime = new Date(currentTime.valueOf() + (60 * timeOffset * 1000) + (60 * 180 * 1000));

    return (
        <>
            {shareString && (<TableLoad shareString={shareString} token={token}/>)}
            <div className="table-container__small-screen-indicator" ref={indicatorRef}></div>
            <div className="table-container">
                <div className="container--indicator" ref={tableContainerRef}></div>
                <div className="table-container__header"
                     style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                    <div className="table-container__time">
                        <div className="table-container__time--local">
                            <b>
                                {new Date(currentTime).getHours().toString().padStart(2, "0")}
                                :{new Date(currentTime).getMinutes().toString().padStart(2, "0")}
                            </b>&nbsp;{texts.localTime}
                        </div>

                        {
                            new Date(currentTime).getHours().toString().padStart(2, "0")
                            === new Date(moscowTime).getHours().toString().padStart(2, "0") && <div>
                                <b>
                                    {new Date(moscowTime).getHours().toString().padStart(2, "0")}
                                    :{new Date(moscowTime).getMinutes().toString().padStart(2, "0")}
                                </b>&nbsp;{isSmall ? texts.moscowTimeShort : texts.moscowTime}
                            </div>
                        }
                    </div>
                    <div className="table-container__header-text">
                        {table?.dynamic?.tableName ? table.dynamic.tableName : texts.chooseTable}
                    </div>
                    <div className="table-container__time table-container__calc">

                        <Button className='button secondary' onClick={handleOpenCalc}>
                            {buttons.calculator}
                        </Button>

                    </div>
                    {
                        openCalc && (<>
                            <div className="table-container__calc-modal-content">
                                <Calculator close={handleOpenCalc}/>
                            </div>
                        </>)
                    }
                </div>
                {
                    table ? <>
                        <div className="table-container__nav">
                            <div>
                                {texts.sortedBy}
                                <Button className='button secondary' onClick={toggleSort}>
                                    {sortedBy}
                                </Button>
                            </div>
                            <div className="table-container__menu">
                                <Button
                                    className={castleLvlId === '15-30' ? "content content--selected" : "button primary content"}
                                    id="15-30" onClick={handleSelectTable}>15-30</Button>
                                <Button
                                    className={castleLvlId === '45-75' ? "content content--selected" : "button primary content"}
                                    id="45-75" onClick={handleSelectTable}>45-75</Button>
                                <Button
                                    className={castleLvlId === '90+' ? "content content--selected" : "button primary content"}
                                    id="90+" onClick={handleSelectTable}>90+</Button>
                                <Button
                                    className={castleLvlId === 'chosen' ? "content content--selected" : "button primary content"}
                                    id="chosen" onClick={handleSelectTable}>{buttons.chosen}</Button>
                            </div>
                            {
                                !isSmall && <div className="table-container__nav--right"></div>
                            }
                        </div>
                        {
                            sortedCastles && sortedCastles.length > 0 ? (
                                <div className="table-container__main-content">
                                    <div className="table-container__table-header">
                                        <span className="table-castle__rows--super-wide castle-name">{texts.castle}</span>
                                        <span className="table-castle__rows--wide">{texts.date}</span>
                                        {!isSmall && <span className="table-castle__rows--super-small">{texts.sphereTime}</span>}
                                        <span className="table-castle__rows--super-small">{texts.toAttack}</span>
                                        {!isSmall && <span className="table-castle__rows--super-wide">{texts.dateOf}</span>}
                                        <span className="table-castle__rows--small">{texts.clan}</span>
                                        {!isSmall && <span className="table-castle__rows--normal">{texts.editor}</span>}
                                        {!isSmall && <span className="table-castle__rows--super-wide">{texts.commentary}</span>}
                                    </div>
                                    <div className="table-container__table-content">
                                        <div className="table-container__scroll-shadow">
                                            <div className="table-container__table-content--scroll">
                                                {
                                                    sortedCastles.map((thisCastle, index) => {
                                                        let underline = false;

                                                        if (line?.id === thisCastle.id && sortedBy === buttons.sortedByTime) {
                                                            underline = true;
                                                        }

                                                        const isChosen = thisCastle.ownerClan === chosenClan;

                                                        return <TableCastle underline={underline} key={thisCastle.id}
                                                                            table={table}
                                                                            currentTime={currentTime}
                                                                            token={token} clans={table.clans}
                                                                            castle={thisCastle}
                                                                            tableId={table.dynamic.id}
                                                                            eng={eng} index={index} isSmall={isSmall} isChosen={isChosen}/>
                                                    })
                                                }
                                            </div>
                                            {
                                                castleLvlId === 'chosen' ? (
                                                    <div className="table-container__table-content-add-list">
                                                        {
                                                            castleLvls.map(lvl => {
                                                                const isFavorite = favoriteCastles?.includes(lvl);

                                                                return (<Button key={lvl}
                                                                                onClick={() => toggleFavorite(lvl)}
                                                                                className={isFavorite ? "content content--selected" : "button secondary content"}>
                                                                    {lvl}
                                                                </Button>)
                                                            })
                                                        }
                                                    </div>) : (
                                                    <div className="table-container__table-content-add-list"></div>)
                                            }
                                        </div>
                                    </div>
                                    {
                                        error && (<div className="text-secondary">
                                            {error}
                                        </div>)
                                    }
                                </div>
                            ) : (<div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}>
                                    <div className="text-secondary">{texts.noCastlesAvailable}</div>
                                    {
                                        castleLvlId === 'chosen' ? (
                                            <div className="table-container__table-content-add-list">
                                                {
                                                    castleLvls.map(lvl => {
                                                        const isFavorite = favoriteCastles?.includes(lvl);

                                                        return (<Button key={lvl}
                                                                        onClick={() => toggleFavorite(lvl)}
                                                                        className={isFavorite ? "content content--selected" : "button secondary content"}>
                                                            {lvl}
                                                        </Button>)
                                                    })
                                                }
                                            </div>) : (<div className="table-container__table-content-add-list"></div>)
                                    }
                                </div>

                            )
                        }
                    </> : <div className="table-container__no-table-body">

                    </div>
                }
            </div>
        </>
    )
        ;
};

export default TableContainer;