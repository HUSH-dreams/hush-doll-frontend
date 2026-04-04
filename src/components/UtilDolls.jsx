import React, {useEffect, useState} from 'react';
import DollContainer from "./DollContainer";
import {useDispatch, useSelector} from "react-redux";
import {selectToken, selectUser} from "../store/user/selectors";
import Dolls from "./Dolls";
import {addError} from "../store/error/actions";
import {selectDollDetailsLoading} from "../store/doll/selectors";
import {
    selectDollDetailsLoading as selectRightDollDetailsLoading
} from "../store/rightDoll/selectors";
import DollRightContainer from "./DollRightContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemsContainer from "./ItemsContainer";
import {useLang} from "../use/lang";

const UtilDolls = () => {
    const [left, setLeft] = useState('yes');
    const [right, setRight] = useState('');
    const [leftStats, setLeftStats] = useState({});
    const [rightStats, setRightStats] = useState({});
    const [comparison, setComparison] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [isLeftItems, setLeftItems] = useState(false);
    const [isRightItems, setRightItems] = useState(false);
    const {texts} = useLang();

    const loadingLeft = useSelector(selectDollDetailsLoading);
    const loadingRight = useSelector(selectRightDollDetailsLoading);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);


    useEffect(() => {
        if (!!leftStats && !!rightStats && !!left && !!right) {
            setLoading(true)

            const timerId = setTimeout(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/utils`, {
                            method: 'POST', body: JSON.stringify({
                                "pdLeft": !!leftStats.pd ? leftStats.pd + 1 : 'none',
                                "paLeft": !!leftStats.pa ? leftStats.pa + 1 : 'none',
                                "pdMinLeft": !!leftStats.weaponAvgPd ? Math.floor(leftStats.weaponAvgPd - (leftStats.weaponAvgPd * (leftStats.spread + 1) / 10)) + 1 : 'none',
                                "pdMaxLeft": !!leftStats.weaponAvgPd ? Math.floor(leftStats.weaponAvgPd + (leftStats.weaponAvgPd * (leftStats.spread + 1) / 10)) + 1 : 'none',

                                "mdLeft": !!leftStats.md ? leftStats.md + 1 : 'none',
                                "maLeft": !!leftStats.ma ? leftStats.ma + 1 : 'none',
                                "mdMinLeft": !!leftStats.weaponAvgMd ? Math.floor(leftStats.weaponAvgMd - (leftStats.weaponAvgMd * (leftStats.spread + 1) / 10)) + 1 : 'none',
                                "mdMaxLeft": !!leftStats.weaponAvgMd ? Math.floor(leftStats.weaponAvgMd + (leftStats.weaponAvgMd * (leftStats.spread + 1) / 10)) + 1 : 'none',

                                "leftHp": !!leftStats.maxHp ? leftStats.maxHp + 1 : 'none',
                                "leftCooldown": !!leftStats.cooldown ? leftStats.cooldown + 1 : 'none',

                                "paRight": !!rightStats.pa ? rightStats.pa + 1 : 'none',
                                "pdRight": !!rightStats.pd ? rightStats.pd + 1 : 'none',
                                "pdMinRight": !!rightStats.weaponAvgPd ? Math.floor(rightStats.weaponAvgPd - (rightStats.weaponAvgPd * (rightStats.spread + 1) / 10)) + 1 : 'none',
                                "pdMaxRight": !!rightStats.weaponAvgPd ? Math.floor(rightStats.weaponAvgPd + (rightStats.weaponAvgPd * (rightStats.spread + 1) / 10)) + 1 : 'none',

                                "maRight": !!rightStats.ma ? rightStats.ma + 1 : 'none',
                                "mdRight": !!rightStats.md ? rightStats.md + 1 : 'none',
                                "mdMinRight": !!rightStats.weaponAvgMd ? Math.floor(rightStats.weaponAvgMd - (rightStats.weaponAvgMd * (rightStats.spread + 1) / 10)) + 1 : 'none',
                                "mdMaxRight": !!rightStats.weaponAvgMd ? Math.floor(rightStats.weaponAvgMd + (rightStats.weaponAvgMd * (rightStats.spread + 1) / 10)) + 1 : 'none',

                                "rightHp": !!rightStats.maxHp ? rightStats.maxHp + 1 : 'none',
                                "rightCooldown": !!rightStats.cooldown ? rightStats.cooldown + 1 : 'none',
                            })
                        });


                        const data = await response.json();

                        if (!data.success) {
                            dispatch(addError(data.reason));
                            setLoading(false)
                        } else {
                            setComparison(data.data)
                            setLoading(false)
                        }
                    } catch (e) {
                        console.log(e.toString());
                    }
                };

                fetchData();
            }, 1000);

            return () => clearTimeout(timerId);
        }
    }, [
        leftStats,
        leftStats.minHp,
        leftStats.maxHp,
        leftStats.pd,
        leftStats.pa,
        leftStats.md,
        leftStats.ma,
        leftStats.weaponAvgPd,
        leftStats.weaponAvgMd,
        leftStats.spread,
        leftStats.cooldown,
        rightStats,
        rightStats.minHp,
        rightStats.maxHp,
        rightStats.pd,
        rightStats.pa,
        rightStats.md,
        rightStats.ma,
        rightStats.weaponAvgPd,
        rightStats.weaponAvgMd,
        rightStats.spread,
        rightStats.cooldown,
        left,
        right,
        dispatch,
        loadingLeft,
        loadingRight])

    const getColor = (first, second, reverse = false) => {
        if (first > second) {
            return 'util-dolls__compare-number--green'
        }

        if (first < second) {
            return 'util-dolls__compare-number--red'
        }

        if (first === second) {
            return 'util-dolls__compare-number--default'
        }

        if (!reverse) {
            if (Number.isFinite(first) && !Number.isFinite(second)) {
                return 'util-dolls__compare-number--green'
            }

            if (!Number.isFinite(first)) {
                return 'util-dolls__compare-number--default'
            }
        } else {
            if (Number.isFinite(second) && !Number.isFinite(first)) {
                return 'util-dolls__compare-number--green'
            }

            if (!Number.isFinite(second)) {
                return 'util-dolls__compare-number--default'
            }
        }
    }

    const handleLeftItems = () => {
        isLeftItems ? setLeftItems(false) : setLeftItems(true);
    }

    const handleRightItems = () => {
        isRightItems ? setRightItems(false) : setRightItems(true);
    }

    const unsetLeft = () => {
        setLeft('');
    }

    const unsetRight = () => {
        setRight('');
    }

    return (<div className="util-dolls">
        <div className={left ? "util-dolls__left" : "util-dolls__left border"}>
            {left ? <DollContainer isUtils={true} setStats={setLeftStats} handleLeftItems={handleLeftItems}
                                   unsetLeft={unsetLeft}/> :
                <Dolls user={user} token={token} isUtils={true} setUtils={setLeft} side='left'/>}
        </div>

        {left && right && <>
            <div className="util-dolls__compare">
                <div className="util-dolls__compare-row-block__header">{texts.stats}</div>
                <div className="util-dolls__compare-row-block">
                    <div className="util-dolls__compare-row">
                        <div className={`util-dolls__compare-value ${getColor(leftStats.pd, rightStats.pd)}`}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/td`}
                                 width="19px" height="19px"
                                 alt=""/>{leftStats.pd}</div>
                        <div> {texts.pd}</div>
                        <div className={`util-dolls__compare-value ${getColor(rightStats.pd, leftStats.pd)}`}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/td`}
                                 width="19px" height="19px"
                                 alt=""/>{rightStats.pd}</div>
                    </div>
                    <div className="util-dolls__compare-row">
                        <div className={`util-dolls__compare-value ${getColor(leftStats.md, rightStats.md)}`}><img
                            src={`${process.env.REACT_APP_BACKEND_URL}/image/dd`} width="19px" height="19px"
                            alt=""/>{leftStats.md}</div>
                        <div>{texts.md}</div>
                        <div className={`util-dolls__compare-value ${getColor(rightStats.md, leftStats.md)}`}><img
                            src={`${process.env.REACT_APP_BACKEND_URL}/image/dd`} width="19px" height="19px"
                            alt=""/>{rightStats.md}</div>
                    </div>
                    <div className="util-dolls__compare-row">
                        <div className={`util-dolls__compare-value ${getColor(leftStats.pa, rightStats.pa)}`}><img
                            src={`${process.env.REACT_APP_BACKEND_URL}/image/ta`} width="19px" height="19px"
                            alt=""/>{leftStats.pa}</div>
                        <div>{texts.pa}</div>
                        <div className={`util-dolls__compare-value ${getColor(rightStats.pa, leftStats.pa)}`}><img
                            src={`${process.env.REACT_APP_BACKEND_URL}/image/ta`} width="19px" height="19px"
                            alt=""/>{rightStats.pa}</div>
                    </div>
                    <div className="util-dolls__compare-row">
                        <div className={`util-dolls__compare-value ${getColor(leftStats.ma, rightStats.ma)}`}><img
                            src={`${process.env.REACT_APP_BACKEND_URL}/image/da`} width="19px" height="19px"
                            alt=""/>{leftStats.ma}</div>
                        <div>{texts.ma}</div>
                        <div className={`util-dolls__compare-value ${getColor(rightStats.ma, leftStats.ma)}`}><img
                            src={`${process.env.REACT_APP_BACKEND_URL}/image/da`} width="19px" height="19px"
                            alt=""/>{rightStats.ma}</div>
                    </div>
                    <div className="util-dolls__compare-row">
                        <div className={`util-dolls__compare-value ${getColor(leftStats.maxHp, rightStats.maxHp)}`}><img
                            src={`${process.env.REACT_APP_BACKEND_URL}/image/th`}
                            width="19px" height="19px"
                            alt=""/>{leftStats.maxHp}</div>
                        <div>{texts.hp}</div>
                        <div className={`util-dolls__compare-value ${getColor(rightStats.maxHp, leftStats.maxHp)}`}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/th`}
                                 width="19px" height="19px"
                                 alt=""/>{rightStats.maxHp}</div>
                    </div>
                </div>

                {!isLoading && comparison ? <>
                    <div className="util-dolls__compare-row-block__header" style={{animationDelay: '100ms'}}>{texts.damage}</div>
                    <div className="util-dolls__compare-row-block" style={{animationDelay: '100ms'}}>
                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.finalOverallMinLeftToRight), Math.floor(comparison.finalOverallMinRightToLeft))}`}>{!Number.isFinite(comparison.finalOverallMinLeftToRight) ? comparison.finalOverallMinLeftToRight : Math.floor(comparison.finalOverallMinLeftToRight)}</div>
                            <div>{texts.min}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.finalOverallMinRightToLeft), Math.floor(comparison.finalOverallMinLeftToRight))}`}>{!Number.isFinite(comparison.finalOverallMinRightToLeft) ? comparison.finalOverallMinRightToLeft : Math.floor(comparison.finalOverallMinRightToLeft)}</div>
                        </div>

                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.finalOverallAvgLeftToRight), Math.floor(comparison.finalOverallAvgRightToLeft))}`}>{!Number.isFinite(comparison.finalOverallAvgLeftToRight) ? comparison.finalOverallAvgLeftToRight : Math.floor(comparison.finalOverallAvgLeftToRight)}</div>
                            <div>{texts.avg}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.finalOverallAvgRightToLeft), Math.floor(comparison.finalOverallAvgLeftToRight))}`}>{!Number.isFinite(comparison.finalOverallAvgRightToLeft) ? comparison.finalOverallAvgRightToLeft : Math.floor(comparison.finalOverallAvgRightToLeft)}</div>
                        </div>

                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.finalOverallMaxLeftToRight), Math.floor(comparison.finalOverallMaxRightToLeft))}`}>{!Number.isFinite(comparison.finalOverallMaxLeftToRight) ? comparison.finalOverallMaxLeftToRight : Math.floor(comparison.finalOverallMaxLeftToRight)}</div>
                            <div>{texts.max}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.finalOverallMaxRightToLeft), Math.floor(comparison.finalOverallMaxLeftToRight))}`}>{!Number.isFinite(comparison.finalOverallMaxRightToLeft) ? comparison.finalOverallMaxRightToLeft : Math.floor(comparison.finalOverallMaxRightToLeft)}</div>
                        </div>
                    </div>

                    <div className="util-dolls__compare-row-block__header" style={{animationDelay: '200ms'}}>{texts.hitsToKill}</div>
                    <div className="util-dolls__compare-row-block" style={{animationDelay: '200ms'}}>
                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(comparison.hitsToKillRightToLeftMin, comparison.hitsToKillLeftToRightMin, true)}`}>{comparison.hitsToKillLeftToRightMin}</div>
                            <div>{texts.min}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(comparison.hitsToKillLeftToRightMin, comparison.hitsToKillRightToLeftMin, true)}`}>{comparison.hitsToKillRightToLeftMin}</div>
                        </div>

                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(comparison.hitsToKillRightToLeftAvg, comparison.hitsToKillLeftToRightAvg, true)}`}>{comparison.hitsToKillLeftToRightAvg}</div>
                            <div>{texts.avg}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(comparison.hitsToKillLeftToRightAvg, comparison.hitsToKillRightToLeftAvg, true)}`}>{comparison.hitsToKillRightToLeftAvg}</div>
                        </div>

                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(comparison.hitsToKillRightToLeftMax, comparison.hitsToKillLeftToRightMax, true)}`}>{comparison.hitsToKillLeftToRightMax}</div>
                            <div>{texts.max}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(comparison.hitsToKillLeftToRightMax, comparison.hitsToKillRightToLeftMax, true)}`}>{comparison.hitsToKillRightToLeftMax}</div>
                        </div>
                    </div>

                    <div className="util-dolls__compare-row-block__header" style={{animationDelay: '300ms'}}>{texts.timeToKill}</div>
                    <div className="util-dolls__compare-row-block" style={{animationDelay: '300ms'}}>
                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.timeToKillRightToLeftMin), Math.floor(comparison.timeToKillLeftToRightMin), true)}`}>{comparison.timeToKillLeftToRightMin}{Number.isFinite(comparison.timeToKillLeftToRightMin) && ' с'}</div>
                            <div>{texts.min}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.timeToKillLeftToRightMin), Math.floor(comparison.timeToKillRightToLeftMin), true)}`}>{comparison.timeToKillRightToLeftMin}{Number.isFinite(comparison.timeToKillRightToLeftMin) && ' с'}</div>
                        </div>

                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.timeToKillRightToLeftAvg), Math.floor(comparison.timeToKillLeftToRightAvg), true)}`}>{comparison.timeToKillLeftToRightAvg}{Number.isFinite(comparison.timeToKillLeftToRightAvg) && ' с'}</div>
                            <div>{texts.avg}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.timeToKillLeftToRightAvg), Math.floor(comparison.timeToKillRightToLeftAvg), true)}`}>{comparison.timeToKillRightToLeftAvg}{Number.isFinite(comparison.timeToKillRightToLeftAvg) && ' с'}</div>
                        </div>

                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.timeToKillRightToLeftMax), Math.floor(comparison.timeToKillLeftToRightMax), true)}`}>{comparison.timeToKillLeftToRightMax}{Number.isFinite(comparison.timeToKillLeftToRightMax) && ' с'}</div>
                            <div>{texts.max}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.timeToKillLeftToRightMax), Math.floor(comparison.timeToKillRightToLeftMax), true)}`}>{comparison.timeToKillRightToLeftMax}{Number.isFinite(comparison.timeToKillRightToLeftMax) && ' с'}</div>
                        </div>
                    </div>
                    <div className="util-dolls__compare-row-block__header" style={{animationDelay: '400ms'}}>{texts.summary}</div>
                    <div className="util-dolls__compare-row-block" style={{animationDelay: '400ms'}}>
                        <div className="util-dolls__compare-row">
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.chanceToWinLeft), Math.floor(comparison.chanceToWinRight))}`}>{comparison.chanceToWinLeft} %
                            </div>
                            <div>{texts.chanceToWin}</div>
                            <div
                                className={`util-dolls__compare-value ${getColor(Math.floor(comparison.chanceToWinRight), Math.floor(comparison.chanceToWinLeft))}`}>{comparison.chanceToWinRight} %
                            </div>
                        </div>
                    </div>
                </> : <Box className="loader" sx={{mt: 2}}>
                    <CircularProgress/>
                </Box>}
            </div>
        </>}


        <div className={right ? "util-dolls__right" : "util-dolls__right border"}>
            {right ? <DollRightContainer isUtils={true} setLeftStats={setLeftStats} setStats={setRightStats}
                                         handleRightItems={handleRightItems} unsetRight={unsetRight}/> :
                <Dolls user={user} token={token} isUtils={true} setUtils={setRight} side='right'/>}
        </div>

        {
            isLeftItems && <>
                <div className="util-dolls__items util-dolls__items--left" style={{
                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`
                }}>
                    <ItemsContainer isUtils={true}/>
                </div>
                <div className={left && right ? "util-dolls__items--modal modal300" : "util-dolls__items--modal modal200"} onClick={handleLeftItems}></div>
            </>
        }

        {
            isRightItems && <>
                <div className="util-dolls__items util-dolls__items--right" style={{
                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`
                }}>
                    <ItemsContainer isUtils={true} isRight={true}/>
                </div>
                <div className={left && right ? "util-dolls__items--modal modal300" : "util-dolls__items--modal modal200"} onClick={handleRightItems}></div>
            </>
        }
    </div>);
};

export default UtilDolls;