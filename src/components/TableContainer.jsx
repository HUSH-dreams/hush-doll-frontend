import React, {useEffect, useState} from 'react';
import '../styles/table-container.css'
import {useDispatch, useSelector} from "react-redux";
import {
    selectCastles,
    selectCastlesLvlId,
    selectError,
    selectFavoriteCastles,
    selectFavoriteDate,
    selectTable
} from "../store/table/selectors";
import Button from "@mui/material/Button";
import {selectButtons, selectLang, selectTexts} from "../store/lang/selectors";
import {setFavoriteCastles, tableSelectCastle, tablesUnset, tableUnset} from "../store/table/actions";
import TableCastle from "./TableCastle";
import {selectToken} from "../store/user/selectors";
import Flags from "./Flags";
import TableLoad from "./TableLoad";
import {useParams} from "react-router-dom";
import Calculator from "./Calculator";
import AddCastle from "./AddCastle";

export const handleSelect = (id, castles, dispatch, favorite) => {
    if (castles) {
        const selectedCastles = {
            castleLvlId: id,
            castles: []
        };

        switch (id) {
            case '15-30':
                castles.forEach(castle => {
                    if (castle.lvl >= 15 && castle.lvl <= 30) {
                        selectedCastles.castles.push(castle);
                    }
                });
                break;
            case '45-75':
                castles.forEach(castle => {
                    if (castle.lvl >= 45 && castle.lvl <= 75) {
                        selectedCastles.castles.push(castle);
                    }
                });
                break;
            case '90+':
                castles.forEach(castle => {
                    if (castle.lvl >= 90) {
                        selectedCastles.castles.push(castle);
                    }
                });
                break;
            case 'chosen':
                if (favorite) {
                    favorite.sort((a, b) => a - b);

                    castles.forEach(castle => {
                        favorite.forEach(fav => {
                            if (castle.lvl === fav) {
                                selectedCastles.castles.push(castle);
                            } else {
                                return true;
                            }
                        })
                    });
                }

                break;
            default:
                break;
        }

        dispatch(tableSelectCastle(selectedCastles));
    }
}

const TableContainer = () => {
    const table = useSelector(selectTable);
    const castleLvlId = useSelector(selectCastlesLvlId);
    const eng = useSelector(selectLang);
    const {shareString} = useParams();
    const dispatch = useDispatch();
    const castle = useSelector(selectCastles);
    const token = useSelector(selectToken);
    const error = useSelector(selectError);
    const texts = useSelector(selectTexts);
    const buttons = useSelector(selectButtons);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [sortedBy, setSortedBy] = useState(buttons.sortedByTime);
    const [openCalc, setOpenCalc] = useState(false);
    const [display, setDisplay] = useState('none');
    const favoriteCastles = useSelector(selectFavoriteCastles);
    const favoriteDate = useSelector(selectFavoriteDate);
    const castleLvls = [15, 30, 45, 60, 75, 90, 120, 250, 350];

    const today = new Date();

    const sortByTime = () => {
        castle?.map(thisCastle => {
            if (!thisCastle.fillingDatetime) {
                return true;
            }

            const fillingTime = new Date(Number(thisCastle.fillingDatetime));

            let fillingHours = fillingTime.getHours();
            let fillingMinutes = fillingTime.getMinutes();

            switch (thisCastle.lvl) {
                case 15:
                    if (thisCastle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (thisCastle.fillingLvl > 1 && thisCastle.fillingLvl < 8) {
                        fillingTime.setHours(fillingHours + 8);
                    }

                    break;
                case 30:
                    if (thisCastle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (thisCastle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (thisCastle.fillingLvl > 2 && thisCastle.fillingLvl < 8) {
                        fillingTime.setHours(fillingHours + 12);
                        fillingTime.setMinutes(fillingMinutes + 30);
                    }

                    break;
                case 45:
                    if (thisCastle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (thisCastle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (thisCastle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (thisCastle.fillingLvl > 3 && thisCastle.fillingLvl < 8) {
                        fillingTime.setHours(fillingHours + 17);
                    }

                    break;
                case 60:
                    if (thisCastle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (thisCastle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (thisCastle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (thisCastle.fillingLvl === 4) {
                        fillingTime.setHours(fillingHours + 18);
                    }
                    if (thisCastle.fillingLvl === 5) {
                        fillingTime.setHours(fillingHours + 20);
                    }
                    if (thisCastle.fillingLvl === 6 || thisCastle.fillingLvl === 7) {
                        fillingTime.setHours(fillingHours + 20);
                        fillingTime.setMinutes(fillingMinutes + 30);
                    }

                    break;
                case 75:
                    if (thisCastle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (thisCastle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (thisCastle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (thisCastle.fillingLvl === 4) {
                        fillingTime.setHours(fillingHours + 18);
                    }
                    if (thisCastle.fillingLvl === 5) {
                        fillingTime.setHours(fillingHours + 20);
                    }
                    if (thisCastle.fillingLvl === 6) {
                        fillingTime.setHours(fillingHours + 21);
                    }
                    if (thisCastle.fillingLvl === 7) {
                        fillingTime.setHours(fillingHours + 23);
                    }

                    break;
                case 90:
                case 120:
                case 250:
                case 350:
                    if (thisCastle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (thisCastle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (thisCastle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (thisCastle.fillingLvl === 4) {
                        fillingTime.setHours(fillingHours + 18);
                    }
                    if (thisCastle.fillingLvl === 5) {
                        fillingTime.setHours(fillingHours + 20);
                    }
                    if (thisCastle.fillingLvl === 6) {
                        fillingTime.setHours(fillingHours + 21);
                    }
                    if (thisCastle.fillingLvl === 7) {
                        fillingTime.setHours(fillingHours + 24);
                    }

                    break;
            }

            return thisCastle.timeToFill = fillingTime ? fillingTime : null
        });

        castle?.sort((a, b) => a.timeToFill - b.timeToFill);

    }

    const sortByLvl = () => {
        castle?.sort((a, b) => a.lvl - b.lvl);
    }

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 10000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    sortedBy === buttons.sortedByLvl ? sortByLvl() : sortByTime();
    const line = castle?.filter(thisCastle => thisCastle.timeToFill > new Date().valueOf())[0];

    const handleSelectTable = (e) => {
        handleSelect(e.target.id, table.dynamic.castles, dispatch, favoriteCastles);
    }

    useEffect(() => {
        if (table) {
            handleSelect(castleLvlId, table.dynamic.castles, dispatch, favoriteCastles)
        }
    }, [table])

    useEffect(() => {
        if (table) {
            handleSelect(castleLvlId, table.dynamic.castles, dispatch, favoriteCastles)
        }
    }, [favoriteCastles, favoriteDate])

    useEffect(() => {
        if (!token) {
            dispatch(tableUnset());
            dispatch(tablesUnset());
        }
    })

    const toggleSort = () => {
        if (sortedBy === buttons.sortedByLvl) {
            setSortedBy(buttons.sortedByTime);
        } else {
            setSortedBy(buttons.sortedByLvl);
        }
    }

    const toggleFavorite = (lvl) => {
        const already = favoriteCastles?.filter(fav => fav === lvl);
        const newCastles = favoriteCastles;

        if (already && already[0]) {
            const index = favoriteCastles.indexOf(lvl);
            newCastles.splice(index, 1)
        } else {
            newCastles.push(lvl);
        }

        const currentDate = new Date();

        dispatch(setFavoriteCastles(newCastles, currentDate));
    }

    const handleOpenCalc = () => {
        setDisplay(display === 'none' ? 'block' : 'none');
        setOpenCalc(!openCalc);
    }

    const timeOffset = currentTime.getTimezoneOffset();
    const moscowTime = new Date(currentTime.valueOf() + (60 * timeOffset * 1000) + (60 * 180 * 1000));

    return (
        <>
            {shareString && (<TableLoad shareString={shareString} token={token}/>)}
            {table ? (<div className="table-container">
                <div className="table-container__header">
                    <div className="table-container__time">
                        <div>
                            <b>
                                {new Date(currentTime).getHours().toString().padStart(2, "0")}
                                :{new Date(currentTime).getMinutes().toString().padStart(2, "0")}
                            </b>&nbsp;{texts.localTime}
                        </div>
                        <div>
                            <b>
                                {new Date(moscowTime).getHours().toString().padStart(2, "0")}
                                :{new Date(moscowTime).getMinutes().toString().padStart(2, "0")}
                            </b>&nbsp;{texts.moscowTime}
                        </div>
                    </div>
                    <h3 className="table-container__header-text">
                        {table.dynamic.tableName}
                    </h3>
                    <div className="table-container__flags">
                        <Flags eng={eng}/>
                    </div>
                </div>
                <div className="table-container__nav">
                    <div>
                        {texts.sortedBy}
                        <Button className='button-hover' onClick={toggleSort} sx={{color: 'whitesmoke !important'}}>
                            {sortedBy}
                        </Button>
                    </div>
                    <div className="table-container__menu">
                        <Button className={castleLvlId === '15-30' ? "list list--selected" : "button-hover"}
                                id="15-30" onClick={handleSelectTable}>15-30</Button>
                        <Button className={castleLvlId === '45-75' ? "list list--selected" : "button-hover"}
                                id="45-75" onClick={handleSelectTable}>45-75</Button>
                        <Button className={castleLvlId === '90+' ? "list list--selected" : "button-hover"}
                                id="90+" onClick={handleSelectTable}>90+</Button>
                        <Button className={castleLvlId === 'chosen' ? "list list--selected" : "button-hover"}
                                id="chosen" onClick={handleSelectTable}>{buttons.chosen}</Button>
                    </div>
                    <div className="table-container__calc">
                        <Button className='button-hover' onClick={handleOpenCalc}>
                            Toggle
                        </Button>
                        Hello Vitaliy
                    </div>
                </div>
                {
                    castle && (<div className="table-container__main-content">
                        <div className="table-container__table-header">
                            <span className="table-container__table-header--small">{texts.level}</span>
                            <span className="table-container__table-header--wide">{texts.name}</span>
                            <span className="table-container__table-header--small">{texts.time}</span>
                            <span className="table-container__table-header--wide">{texts.date}</span>
                            <span className="table-container__table-header--small">{texts.toAttack}</span>
                            <span className="table-container__table-header--small">{texts.sphereTime}</span>
                            <span className="table-container__table-header--small">{texts.fillingLevel}</span>
                            <span className="table-container__table-header--small">{texts.status}</span>
                            <span className="table-container__table-header--wide">{texts.clan}</span>
                            <span className="table-container__table-header--wide">{texts.commentary}</span>
                            <span className="table-container__table-header--wide">{texts.editor}</span>
                        </div>
                        {
                            openCalc && (<div className="table-container__calc-modal">
                                <div className="table-container__calc-modal-content">
                                    <Calculator/>
                                </div>
                                <div className="modal" style={{display: display}} onClick={handleOpenCalc}>
                                </div>
                            </div>)
                        }
                        <div className="table-container__table-content">
                            <div
                                className="table-container__table-content-scroll">
                                {
                                    castle.map(thisCastle => {
                                        let underline = false;
                                        if (line?.nameEng === thisCastle.nameEng && sortedBy === buttons.sortedByTime) {
                                            underline = true;
                                        }
                                        return <TableCastle underline={underline} key={thisCastle.nameEng} table={table}
                                                            token={token} clans={table.clans}
                                                            castle={thisCastle} tableId={table.dynamic.id} eng={eng}/>
                                    })
                                }
                            </div>
                            {
                                castleLvlId === 'chosen' && (<div className="table-container__table-content-add-list">
                                    {
                                        castleLvls.map(lvl => {
                                            const isFavorite = favoriteCastles?.filter(fav => fav === lvl);
                                            let chosen = false;

                                            if (isFavorite && isFavorite[0]) {
                                                chosen = true;
                                            }

                                            return (<div key={lvl} onClick={() => toggleFavorite(lvl)}>
                                                <AddCastle chosen={chosen}>{lvl}</AddCastle>
                                            </div>)
                                        })
                                    }
                                </div>)
                            }
                        </div>
                        {
                            error && (<div className="text-secondary">
                                {error}
                            </div>)
                        }
                    </div>)
                }
            </div>) : (
                <div className="table-container--no-table">
                    <div className="table-container__flags">
                        <Flags eng={eng}/>
                    </div>
                </div>)}
        </>
    );
};

export default TableContainer;