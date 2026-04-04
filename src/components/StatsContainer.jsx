import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    selectDates,
    selectDatesError,
    selectLeftError,
    selectLeftLoading,
    selectLeftStats,
    selectMyNames,
    selectRightError,
    selectRightLoading,
    selectRightStats,
    selectStats
} from "../store/stats/selectors";
import {statsInitiateDates, statsSetDate, statsToggleName} from "../store/stats/actions";
import '../styles/StatsContainer.css';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import StatsTable from "./StatsTable";
import {useLang} from "../use/lang";
import StatsRow from "./StatsRow";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Button from "@mui/material/Button";

const StatsContainer = ({list, setList}) => {
    const statsLeft = useSelector(selectLeftStats);
    const leftLoading = useSelector(selectLeftLoading);
    const leftError = useSelector(selectLeftError);
    const statsRight = useSelector(selectRightStats);
    const rightLoading = useSelector(selectRightLoading);
    const rightError = useSelector(selectRightError);
    const [diff, setDiff] = useState([]);
    const dispatch = useDispatch();
    const datesError = useSelector(selectDatesError);
    const dates = useSelector(selectDates);
    const stats = useSelector(selectStats);
    const myNames = useSelector(selectMyNames);
    const [leftDate, setLeftDate] = useState('');
    const [rightDate, setRightDate] = useState('');
    const [leftLeftDateExists, setLeftLeftDateExists] = useState(false);
    const [leftRightDateExists, setLeftRightDateExists] = useState(false);
    const [rightLeftDateExists, setRightLeftDateExists] = useState(false);
    const [rightRightDateExists, setRightRightDateExists] = useState(false);

    const [leftLeftMonthExists, setLeftLeftMonthExists] = useState(false);
    const [leftRightMonthExists, setLeftRightMonthExists] = useState(false);
    const [rightLeftMonthExists, setRightLeftMonthExists] = useState(false);
    const [rightRightMonthExists, setRightRightMonthExists] = useState(false);

    const {texts, buttons} = useLang();

    useEffect(() => {
        dispatch(statsInitiateDates());
    }, [])

    useEffect(() => {
        if (dates && dates.length > 0) {
            dispatch(statsSetDate('left', dates[dates.length - 1], stats));
            dispatch(statsSetDate('right', dates[dates.length - 2], stats));
        }
    }, [dates])

    useEffect(() => {
        if (statsLeft && statsLeft.length > 0) {
            setLeftDate(statsLeft[0].snapshot_date);
        } else {
            setLeftDate('');
        }
    }, [statsLeft])

    useEffect(() => {
        if (statsRight && statsRight.length > 0) {
            setRightDate(statsRight[0].snapshot_date);
        } else {
            setRightDate('');
        }
    }, [statsRight])

    useEffect(() => {
        if (leftDate && dates?.length > 0) {
            const currentIndex = dates.indexOf(leftDate);

            // Одиночные стрелки
            setLeftLeftDateExists(currentIndex > 0);
            setLeftRightDateExists(currentIndex + 1 < dates.length);

            // Двойные стрелки
            const leftDateObj = new Date(leftDate);
            const targetDateObjLeft = new Date(leftDateObj.setMonth(leftDateObj.getMonth() - 1));
            const targetDateStrLeft = targetDateObjLeft.toISOString().slice(0, 10);
            const earliestDate = dates[0];
            const hasLeftMonth = dates.some(d => d < leftDate && d >= targetDateStrLeft);
            setLeftLeftMonthExists(new Date(earliestDate).getTime() < new Date(leftDate).getTime());

            const targetDateObjRight = new Date(leftDate);
            targetDateObjRight.setMonth(targetDateObjRight.getMonth() + 1);
            const latestDate = dates[dates.length - 1];
            setLeftRightMonthExists(new Date(latestDate).getTime() > new Date(leftDate).getTime());
        }
    }, [leftDate, dates])

    useEffect(() => {
        if (rightDate && dates?.length > 0) {
            const currentIndex = dates.indexOf(rightDate);

            setRightLeftDateExists(currentIndex > 0);
            setRightRightDateExists(currentIndex + 1 < dates.length);

            const rightDateObj = new Date(rightDate);
            const targetDateObjLeft = new Date(rightDateObj.setMonth(rightDateObj.getMonth() - 1));
            const targetDateStrLeft = targetDateObjLeft.toISOString().slice(0, 10);
            const earliestDate = dates[0];
            const hasLeftMonth = dates.some(d => d < rightDate && d >= targetDateStrLeft);
            setRightLeftMonthExists(new Date(earliestDate).getTime() < new Date(rightDate).getTime());

            const targetDateObjRight = new Date(rightDate);
            targetDateObjRight.setMonth(targetDateObjRight.getMonth() + 1);
            const latestDate = dates[dates.length - 1];
            setRightRightMonthExists(new Date(latestDate).getTime() > new Date(rightDate).getTime());
        }
    }, [rightDate, dates])

    useEffect(() => {
        const differences = [];

        const rightStatsMap = [];

        statsRight?.forEach(player => {
            rightStatsMap.push({
                nickname: player.player_nickname,
                pvp: player.pvp_points,
                clan: player.clan
            })
        });

        const leftStatsMap = [];

        statsLeft?.forEach(player => {
            leftStatsMap.push({
                nickname: player.player_nickname,
                pvp: player.pvp_points,
                clan: player.clan
            })
        });

        leftStatsMap.forEach(left => {
            let difference = 0;

            const rightFind = rightStatsMap.find(right => right.nickname === left.nickname)

            if (rightFind) {
                const rightPoints = rightFind.pvp;

                difference = left.pvp - rightPoints;

            } else {
                difference = left.pvp;
            }

            if (difference !== 0) {
                differences.push({
                    nickname: left.nickname,
                    clan: left.clan,
                    difference: difference
                });
            }
        });

        rightStatsMap.forEach(right => {
            const leftFind = leftStatsMap.find(left => left.nickname === right.nickname)

            if (!leftFind) {
                const difference = -right.pvp;

                if (difference !== 0) {
                    differences.push({
                        nickname: right.nickname,
                        clan: right.clan,
                        difference: difference
                    });
                }
            }
        });

        differences.sort((a, b) => b.difference - a.difference);

        setDiff(differences);
    }, [statsRight, statsLeft])

    const handleLeftLeftClick = () => {
        if (leftLeftDateExists && dates?.length > 0) {
            const index = dates.indexOf(leftDate)

            if (index > 0) {
                dispatch(statsSetDate('left', dates[index - 1], stats))
            }
        }
    }
    const handleLeftRightClick = () => {
        if (leftRightDateExists && dates?.length > 0) {
            const index = dates.indexOf(leftDate)

            if (dates.indexOf(leftDate) + 1 < dates.length) {
                dispatch(statsSetDate('left', dates[index + 1], stats))
            }
        }
    }

    const handleRightLeftClick = () => {
        if (rightLeftDateExists && dates?.length > 0) {
            const index = dates.indexOf(rightDate)

            if (index > 0) {
                dispatch(statsSetDate('right', dates[index - 1], stats))
            }
        }
    }
    const handleRightRightClick = () => {
        if (rightRightDateExists && dates?.length > 0) {
            const index = dates.indexOf(rightDate)

            if (dates.indexOf(rightDate) + 1 < dates.length) {
                dispatch(statsSetDate('right', dates[index + 1], stats))
            }
        }
    }

    const findClosestDate = (targetDate, allDates, direction) => {
        const targetTime = new Date(targetDate).getTime();
        if (direction === 'forward') {
            const foundDate = allDates.find(d => new Date(d).getTime() >= targetTime);
            return foundDate || allDates[allDates.length - 1]; // Если не найдено, возвращаем последнюю дату
        } else {
            const reversedDates = [...allDates].reverse();
            const foundDate = reversedDates.find(d => new Date(d).getTime() <= targetTime);
            return foundDate || allDates[0]; // Если не найдено, возвращаем первую дату
        }
    };

    const handleLeftLeftMonthClick = () => {
        const currentDate = new Date(leftDate);
        currentDate.setMonth(currentDate.getMonth() - 1);
        const newDate = findClosestDate(currentDate.toISOString().slice(0, 10), dates, 'backward');
        if (newDate) {
            dispatch(statsSetDate('left', newDate, stats));
        }
    }

    // Новая функция для двойной стрелки вправо
    const handleLeftRightMonthClick = () => {
        const currentDate = new Date(leftDate);
        currentDate.setMonth(currentDate.getMonth() + 1);
        const newDate = findClosestDate(currentDate.toISOString().slice(0, 10), dates, 'forward');
        if (newDate) {
            dispatch(statsSetDate('left', newDate, stats));
        }
    }

    // Новая функция для двойной стрелки влево
    const handleRightLeftMonthClick = () => {
        const currentDate = new Date(rightDate);
        currentDate.setMonth(currentDate.getMonth() - 1);
        const newDate = findClosestDate(currentDate.toISOString().slice(0, 10), dates, 'backward');
        if (newDate) {
            dispatch(statsSetDate('right', newDate, stats));
        }
    }

    // Новая функция для двойной стрелки вправо
    const handleRightRightMonthClick = () => {
        const currentDate = new Date(rightDate);
        currentDate.setMonth(currentDate.getMonth() + 1);
        const newDate = findClosestDate(currentDate.toISOString().slice(0, 10), dates, 'forward');
        if (newDate) {
            dispatch(statsSetDate('right', newDate, stats));
        }
    }

    const handleToggle = (e) => {
        let id = e.target.id

        if (!id) {
            id = e.target.parentNode.id
        }

        const index = id.split('+')[2];
        const side = id.split('+')[1];

        const statsRightSorted = statsRight.filter(stat => stat.pvp_points !== 0);
        const statsLeftSorted = statsLeft.filter(stat => stat.pvp_points !== 0);

        if (side === 'left') {
            if (statsRight[index]) {
                dispatch(statsToggleName(statsRight[index].player_nickname))
            }
        } else if (side === 'right') {
            if (statsLeft[index]) {
                dispatch(statsToggleName(statsLeft[index].player_nickname))
            }
        } else {
            if (diff[index]) {
                dispatch(statsToggleName(diff[index].nickname))
            }
        }
    }

    return (
        <div className="stats-container">
            <div className="stats-container__header"
                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                <div className="stats-container--table__date">
                    <div>
                        <b>{rightLeftMonthExists ?
                            <div onClick={handleRightLeftMonthClick} className="stats-container__arrow-left">
                                <KeyboardDoubleArrowLeftIcon/></div> :
                            <div className="stats-container__arrow-left"></div>}</b>
                        <b>{rightLeftDateExists ?
                            <div onClick={handleRightLeftClick} className="stats-container__arrow-left">
                                <KeyboardArrowLeftIcon/></div> : <div className="stats-container__arrow-left"></div>}</b>
                        &nbsp;{rightDate}&nbsp;
                        <b>{rightRightDateExists ?
                            <div onClick={handleRightRightClick} className="stats-container__arrow-right">
                                <KeyboardArrowRightIcon/></div> : <div className="stats-container__arrow-right"></div>}</b>
                        <b>{rightRightMonthExists ?
                            <div onClick={handleRightRightMonthClick} className="stats-container__arrow-right">
                                <KeyboardDoubleArrowRightIcon/></div> :
                            <div className="stats-container__arrow-right"></div>}</b>
                    </div>
                </div>

                <div>
                    <Button className={list === 'players' ? "content content--selected" : "button secondary content"}
                            onClick={() => setList('players')}>{buttons.users}</Button>
                    <Button className={list === 'clans' ? "content content--selected" : "button secondary content"}
                            onClick={() => setList('clans')}>{buttons.clans}</Button>
                    <Button className={list === 'castles' ? "content content--selected" : "button secondary content"}
                            onClick={() => setList('castles')}>{buttons.castles}</Button>
                </div>

                <div className="stats-container--table__date">
                    <div>
                        <b>{leftLeftMonthExists ?
                            <div onClick={handleLeftLeftMonthClick} className="stats-container__arrow-left">
                                <KeyboardDoubleArrowLeftIcon/></div> :
                            <div className="stats-container__arrow-left"></div>}</b>
                        <b>{leftLeftDateExists ?
                            <div onClick={handleLeftLeftClick} className="stats-container__arrow-left">
                                <KeyboardArrowLeftIcon/></div> : <div className="stats-container__arrow-left"></div>}</b>
                        &nbsp;{leftDate}&nbsp;
                        <b>{leftRightDateExists ?
                            <div onClick={handleLeftRightClick} className="stats-container__arrow-right">
                                <KeyboardArrowRightIcon/></div> : <div className="stats-container__arrow-right"></div>}</b>
                        <b>{leftRightMonthExists ?
                            <div onClick={handleLeftRightMonthClick} className="stats-container__arrow-right">
                                <KeyboardDoubleArrowRightIcon/></div> :
                            <div className="stats-container__arrow-right"></div>}</b>
                    </div>
                </div>
            </div>

            <div className="stats-container__body">
                {
                    statsRight && statsRight.length > 0 &&
                    <StatsTable stats={statsRight} side='right' myNames={myNames} handleToggle={handleToggle}
                                tableFirst={true} list={list}/>
                }
                {
                    rightLoading && <div className="stats-container--table padding-top">
                        <Box className="loader">
                            <CircularProgress/>
                        </Box>
                    </div>
                }
                {
                    rightError && <span>{rightError}</span>
                }
                {
                    statsRight?.length > 0 && statsLeft?.length > 0 ?
                        (<div className="stats-container__difference-container">
                            <div className="stats-container__difference-header"
                                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                                <div className="stats-container--table__row-wide">{texts.nickname}</div>
                                <div className="stats-container--table__row-medium">{texts.clan}</div>
                                <div className="stats-container--table__row-small">PVP</div>
                            </div>
                            <div className="stats-container__difference-body">
                                {
                                    diff?.map((dif, index) => {
                                        const myName = myNames?.some(name => name === dif.nickname)

                                        return <StatsRow data={dif}
                                                         index={index}
                                                         click={handleToggle}
                                                         myName={myName}
                                                         isTable={false}
                                                         key={'middle-dif-' + index}  list={list}/>
                                    })
                                }
                                {diff.length < 1 && <div>PVP не изменилось</div>}
                            </div>
                        </div>) : (<div className="stats-container__difference-container no-shadow"></div>)
                }
                {statsLeft && statsLeft.length > 0 &&
                    <StatsTable stats={statsLeft} side="left" myNames={myNames} handleToggle={handleToggle} list={list}/>
                }
                {
                    leftLoading && <div className="stats-container--table padding-top">
                        <Box className="loader">
                            <CircularProgress/>
                        </Box>
                    </div>
                }
                {
                    leftError && <span>{leftError}</span>
                }
            </div>
        </div>
    );
};

export default StatsContainer;