import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import '../styles/PopUp.css';
import {useSelector} from "react-redux";
import {
    selectAccuracy,
    selectAccuracyStats,
    selectAir, selectAirStats,
    selectDegreeLevel,
    selectDexterity,
    selectDexterityStats,
    selectEarth,
    selectEarthStats,
    selectEndurance,
    selectEnduranceStats,
    selectFire, selectFireStats, selectProfession,
    selectStrength,
    selectStrengthStats,
    selectTitleLevel,
    selectWater, selectWaterStats
} from "../store/doll/selectors";
import {selectLang} from "../store/lang/selectors";

const PopUp = ({
                   item
               }) => {

    const titleLevel = useSelector(selectTitleLevel);
    const degreeLevel = useSelector(selectDegreeLevel);
    const strength = useSelector(selectStrength);
    const dexterity = useSelector(selectDexterity);
    const accuracy = useSelector(selectAccuracy);
    const endurance = useSelector(selectEndurance);
    const earth = useSelector(selectEarth);
    const air = useSelector(selectAir);
    const water = useSelector(selectWater);
    const fire = useSelector(selectFire);
    const strengthStats = useSelector(selectStrengthStats);
    const dexterityStats = useSelector(selectDexterityStats);
    const accuracyStats = useSelector(selectAccuracyStats);
    const enduranceStats = useSelector(selectEnduranceStats);
    const earthStats = useSelector(selectEarthStats);
    const airStats = useSelector(selectAirStats);
    const waterStats = useSelector(selectWaterStats);
    const fireStats = useSelector(selectFireStats);
    const profession = useSelector(selectProfession);
    const eng = useSelector(selectLang);

    const [strengthAvailable, setStrengthAvailable] = useState(true);
    const [dexterityAvailable, setDexterityAvailable] = useState(true);
    const [accuracyAvailable, setAccuracyAvailable] = useState(true);
    const [enduranceAvailable, setEnduranceAvailable] = useState(true);
    const [earthAvailable, setEarthAvailable] = useState(true);
    const [airAvailable, setAirAvailable] = useState(true);
    const [waterAvailable, setWaterAvailable] = useState(true);
    const [fireAvailable, setFireAvailable] = useState(true);
    const [professionAvailable, setProfessionAvailable] = useState(true);
    const [titleAvailable, setTitleAvailable] = useState(true);
    const [degreeAvailable, setDegreeAvailable] = useState(true);


    useEffect(() => {
        isAvailable();
    })

    const isAvailable = () => {
        if ((item.reqStrength > 0) && item.reqStrength > (strength + strengthStats)) {
            setStrengthAvailable(false);
        }
        if (item.reqDexterity > 0 && item.reqDexterity > (dexterity + dexterityStats)) {
            setDexterityAvailable(false);
        }
        if (item.reqAccuracy > 0 && item.reqAccuracy > (accuracy + accuracyStats)) {
            setAccuracyAvailable(false);
        }
        if (item.reqEndurance > 0 && item.reqEndurance > (endurance + enduranceStats)) {
            setEnduranceAvailable(false);
        }
        if (item.reqEarth > 0 && item.reqEarth > (earth + earthStats)) {
            setEarthAvailable(false);
        }
        if (item.reqAir > 0 && item.reqAir > (air + airStats)) {
            setAirAvailable(false);
        }
        if (item.reqWater > 0 && item.reqWater > (water + waterStats)) {
            setWaterAvailable(false);
        }
        if (item.reqFire > 0 && item.reqFire > (fire + fireStats)) {
            setFireAvailable(false);
        }
        if ((item.reqTitleLvl > 0 && item.reqTitleLvl > titleLevel)
            || (item.maxTitleLvl > 0 && item.maxTitleLvl < titleLevel)) {
            setTitleAvailable(false);
        }
        if ((item.reqDegreeLvl > 0 && item.reqDegreeLvl > degreeLevel)
            || (item.maxDegreeLvl > 0 && item.maxDegreeLvl < degreeLevel)) {
            setDegreeAvailable(false);
        }
        if (item.reqProfessionNameEng) {
            if (!profession || profession.professionNameEng !== item.reqProfessionNameEng
                || item.reqProfessionLvl > profession.professionLvl) {
                setProfessionAvailable(false);
            }
        }
    }

    const toRoman = (num) => {
        const rules = {
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD": 400,
            "C": 100,
            "XC": 90,
            "L": 50,
            "XL": 40,
            "XXX": 30,
            "XX": 20,
            "X": 10,
            "IX": 9,
            "V": 5,
            "IV": 4,
            "I": 1
        }

        let res = "";
        const romans = Object.keys(rules);

        for (let i = 0; i < romans.length; ++i) {
            const val = rules[romans[i]];

            while (num >= val) {
                num -= val;
                res += romans[i];
            }
        }
        return res;
    }

    const getLowAndHighDamage = (avg) => {
        const low = Math.floor(avg - (avg * (item.dmgSpread + 1) / 10));
        const high = Math.floor(avg + (avg * (item.dmgSpread + 1) / 10));

        return low + ' - ' + high;
    }

    return (
        <Card sx={{display: 'flex', flexDirection: 'column', padding: 0, width: 300}}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'green',
                padding: '8px 16px',
                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                color: 'rgb(234, 201, 136)'
            }}>
                <div style={{fontWeight: 'bold', marginRight: 10}}>
                    {eng ? item.nameEng : item.nameRu}
                </div>
                <div className="header-corner">
                    {toRoman(item.level)}
                </div>
            </div>
            <div className="popup-main">
                <div className="center-container">
                    {item.avgPd > 0 && (
                        <div className="center">
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/td`}
                                 alt="some icon"/> {getLowAndHighDamage(item.avgPd)}
                        </div>
                    )}
                    {item.avgMd > 0 && (
                        <div className="center">
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dd`}
                                 alt="some icon"/> {getLowAndHighDamage(item.avgMd)}
                        </div>
                    )}
                    {item.avgPranaD > 0 && (
                        <div className="center">
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dd2`}
                                 alt="some icon"/> {getLowAndHighDamage(item.avgPranaD)}
                        </div>
                    )}
                    {item.reqHp !== 0 && (
                        <div className="center">
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/tht`} alt="some icon"/> {Math.abs(item.reqHp)}
                        </div>
                    )}
                    {item.reqPrana !== 0 && (
                        <div className="center">
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dht`} alt="some icon"/> {Math.abs(item.reqPrana)}
                        </div>
                    )}
                </div>
                <div className="popup-main" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{padding: '0 6px 0 16px'}}>
                        {item.reqStrength !== 0 && (
                            <div style={{color: !strengthAvailable && 'red', fontWeight: !strengthAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t1`} alt="some icon"/> {item.reqStrength}
                            </div>
                        )}
                        {item.reqDexterity !== 0 && (
                            <div style={{
                                color: !dexterityAvailable && 'red',
                                fontWeight: !dexterityAvailable && 'bold'
                            }}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t2`} alt="some icon"/> {item.reqDexterity}
                            </div>
                        )}
                        {item.reqAccuracy !== 0 && (
                            <div style={{color: !accuracyAvailable && 'red', fontWeight: !accuracyAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t3`} alt="some icon"/> {item.reqAccuracy}
                            </div>
                        )}
                        {item.reqEndurance !== 0 && (
                            <div style={{
                                color: !enduranceAvailable && 'red',
                                fontWeight: !enduranceAvailable && 'bold'
                            }}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t4`} alt="some icon"/> {item.reqEndurance}
                            </div>
                        )}
                        {item.reqEarth !== 0 && (
                            <div style={{color: !earthAvailable && 'red', fontWeight: !earthAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d1`} alt="some icon"/> {item.reqEarth}
                            </div>
                        )}
                        {item.reqAir !== 0 && (
                            <div style={{color: !airAvailable && 'red', fontWeight: !airAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d2`} alt="some icon"/> {item.reqAir}
                            </div>
                        )}
                        {item.reqWater !== 0 && (
                            <div style={{color: !waterAvailable && 'red', fontWeight: !waterAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d3`} alt="some icon"/> {item.reqWater}
                            </div>
                        )}
                        {item.reqFire !== 0 && (
                            <div style={{color: !fireAvailable && 'red', fontWeight: !fireAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d4`} alt="some icon"/> {item.reqFire}
                            </div>
                        )}
                        {item.reqTitleLvl !== 0 && (
                            <div style={{color: !titleAvailable && 'red', fontWeight: !titleAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/tl`} alt="some icon"/> {item.reqTitleLvl}
                            </div>
                        )}
                        {item.reqDegreeLvl !== 0 && (
                            <div style={{color: !degreeAvailable && 'red', fontWeight: !degreeAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dl`} alt="some icon"/> {item.reqDegreeLvl}
                            </div>
                        )}
                        {item.maxTitleLvl !== 0 && (
                            <div style={{color: !titleAvailable && 'red', fontWeight: !titleAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/tl`} alt="some icon"/> &lt;{item.maxTitleLvl + 1}
                            </div>
                        )}
                        {item.maxDegreeLvl !== 0 && (
                            <div style={{color: !degreeAvailable && 'red', fontWeight: !degreeAvailable && 'bold'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dl`} alt="some icon"/> &lt;{item.maxDegreeLvl + 1}
                            </div>
                        )}
                        {item.reqProfessionLvl !== 0 && (
                            <div style={{
                                color: !professionAvailable && 'red',
                                fontWeight: !professionAvailable && 'bold'
                            }}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.reqProfessionIconName}`}
                                     alt="some icon"/> {item.reqProfessionLvl}
                            </div>
                        )}
                    </div>
                    <div style={{padding: '0 16px 0 0', textAlign: 'right'}}>
                        {item.effectIconName && (
                            <div>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.effectIconName}`}
                                     alt="some icon"/>
                                {
                                    item.effectDuration >= 1 ?
                                        (<span>{item.effectDuration} {eng ? 'h.' : 'ч.'}</span>)
                                        : (<span>{item.effectDuration * 100} {eng ? 'min.' : 'мин.'}</span>)
                                }
                            </div>
                        )}
                        {eng ? (item.effectTextEng && (
                            <div style={{maxWidth: 180}}>
                                {item.effectTextEng}
                            </div>
                        )) : (item.effectTextRu && (
                            <div style={{maxWidth: 180}}>
                                {item.effectTextRu}
                            </div>
                        ))}
                        {item.abilityCooldown > 0 && (
                            <div>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/delay`}
                                     alt="some icon"/> {item.abilityCooldown} {eng ? 'h.' : 'ч.'}
                            </div>
                        )}
                        {item.givesHp > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/th`} alt="some icon"/>{Math.abs(item.givesHp)}</div>
                        )}
                        {item.givesHp < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/th`} alt="some icon"/>{Math.abs(item.givesHp)}</div>
                        )}
                        {item.givesPrana > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/dh`} alt="some icon"/>{Math.abs(item.givesPrana)}</div>
                        )}
                        {item.givesPrana < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/dh`} alt="some icon"/>{Math.abs(item.givesPrana)}</div>
                        )}
                        {item.givesPd > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/td`} alt="some icon"/>{Math.abs(item.givesPd)}</div>
                        )}
                        {item.givesPd < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/td`} alt="some icon"/>{Math.abs(item.givesPd)}</div>
                        )}
                        {item.givesMd > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/dd`} alt="some icon"/>{Math.abs(item.givesMd)}</div>
                        )}
                        {item.givesMd < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/dd`} alt="some icon"/>{Math.abs(item.givesMd)}</div>
                        )}
                        {item.givesPa > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/ta`} alt="some icon"/>{Math.abs(item.givesPa)}</div>
                        )}
                        {item.givesPa < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/ta`} alt="some icon"/>{Math.abs(item.givesPa)}</div>
                        )}
                        {item.givesMa > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/da`} alt="some icon"/>{Math.abs(item.givesMa)}</div>
                        )}
                        {item.givesMa < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/da`} alt="some icon"/>{Math.abs(item.givesMa)}</div>
                        )}
                        {item.givesStrength > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t1`} alt="some icon"/>{Math.abs(item.givesStrength)}
                            </div>
                        )}
                        {item.givesStrength < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t1`} alt="some icon"/>{Math.abs(item.givesStrength)}
                            </div>
                        )}
                        {item.givesDexterity > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t2`} alt="some icon"/>{Math.abs(item.givesDexterity)}
                            </div>
                        )}
                        {item.givesDexterity < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t2`} alt="some icon"/>{Math.abs(item.givesDexterity)}
                            </div>
                        )}
                        {item.givesAccuracy > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t3`} alt="some icon"/>{Math.abs(item.givesAccuracy)}
                            </div>
                        )}
                        {item.givesAccuracy < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t3`} alt="some icon"/>{Math.abs(item.givesAccuracy)}
                            </div>
                        )}
                        {item.givesEndurance > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t4`} alt="some icon"/>{Math.abs(item.givesEndurance)}
                            </div>
                        )}
                        {item.givesEndurance < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/t4`} alt="some icon"/>{Math.abs(item.givesEndurance)}
                            </div>
                        )}
                        {item.givesEarth > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d1`} alt="some icon"/>{Math.abs(item.givesEarth)}</div>
                        )}
                        {item.givesEarth < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d1`} alt="some icon"/>{Math.abs(item.givesEarth)}</div>
                        )}
                        {item.givesAir > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d2`} alt="some icon"/>{Math.abs(item.givesAir)}</div>
                        )}
                        {item.givesAir < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d2`} alt="some icon"/>{Math.abs(item.givesAir)}</div>
                        )}
                        {item.givesWater > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d3`} alt="some icon"/>{Math.abs(item.givesWater)}</div>
                        )}
                        {item.givesWater < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d3`} alt="some icon"/>{Math.abs(item.givesWater)}</div>
                        )}
                        {item.givesFire > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/u`} alt="some icon"/><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d4`} alt="some icon"/>{Math.abs(item.givesFire)}</div>
                        )}
                        {item.givesFire < 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/d`} alt="some icon"/> <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/d4`} alt="some icon"/>{Math.abs(item.givesFire)}</div>
                        )}
                        {item.healsHp > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/thg`} alt="some icon"/>{Math.abs(item.healsHp)}
                            </div>
                        )}
                        {item.healsPrana > 0 && (
                            <div><img src={`${process.env.REACT_APP_BACKEND_URL}/image/dhg`} alt="some icon"/>{Math.abs(item.healsPrana)}
                            </div>
                        )}
                    </div>
                </div>
                <div className="center-container">
                    {item.distance > 0 && (
                        <div className="center"><img src={`${process.env.REACT_APP_BACKEND_URL}/image/dist`}
                                                     alt="some icon"/>{Math.abs(item.distance)} {
                            item.aoe > 0 && (
                                <span>[{Math.abs(item.aoe)}]</span>
                            )
                        }</div>
                    )}
                    {item.cooldown !== 0 && (
                        <div className="center" style={{paddingBottom: 12}}><img src={`${process.env.REACT_APP_BACKEND_URL}/image/delay`}
                                                                                 alt="some icon"/>{Math.floor(item.cooldown * 100) / 100} {eng ? 's.' : 'сек.'}
                        </div>
                    )}
                </div>
            </div>

        </Card>
    );
};

export default PopUp;