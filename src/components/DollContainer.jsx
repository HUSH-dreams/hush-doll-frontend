import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginError} from '../store/user/actions';
import {
    selectAccuracy,
    selectAccuracyStats,
    selectAir,
    selectAirStats,
    selectAmulet,
    selectBelt,
    selectBoots,
    selectBracelet1,
    selectBracelet2,
    selectBuff1,
    selectBuff10,
    selectBuff2,
    selectBuff3,
    selectBuff4,
    selectBuff5,
    selectBuff6,
    selectBuff7,
    selectBuff8,
    selectBuff9,
    selectCrystalMA,
    selectCrystalMD,
    selectCrystalPA,
    selectCrystalPD,
    selectDegreeGreatness,
    selectDegreeLevel,
    selectDegreeStats,
    selectDexterity,
    selectDexterityStats,
    selectDolls,
    selectEarth,
    selectEarthStats,
    selectEndurance,
    selectEnduranceStats,
    selectFire,
    selectFireStats,
    selectGloves,
    selectHelmet,
    selectHP,
    selectHPStats,
    selectJacket,
    selectMAStats,
    selectMDStats,
    selectPants,
    selectPAStats,
    selectPDStats,
    selectPrana,
    selectPranaStats,
    selectProfession,
    selectReqAccuracy,
    selectReqAir,
    selectReqDexterity,
    selectReqEarth,
    selectReqEndurance,
    selectReqFire,
    selectReqStrength,
    selectReqWater,
    selectRing1,
    selectRing2,
    selectRing3,
    selectRing4,
    selectShield,
    selectSlot1,
    selectSlot2,
    selectSlot3,
    selectSlot4,
    selectSlot5,
    selectSlot6,
    selectSlot7,
    selectSlot8,
    selectStrength,
    selectStrengthStats,
    selectTitleGreatness,
    selectTitleLevel,
    selectTitleStats,
    selectWater,
    selectWaterStats,
    selectWeapon
} from '../store/doll/selectors';
import {selectButtons, selectInputs, selectLang, selectSelects, selectTexts} from "../store/lang/selectors";
import {
    decreaseAccuracy,
    decreaseAir,
    decreaseDexterity,
    decreaseEarth,
    decreaseEndurance,
    decreaseFire,
    decreaseStrength,
    decreaseWater,
    dollClear,
    dollSaveInitiate,
    increaseAccuracy,
    increaseAir,
    increaseDexterity,
    increaseEarth,
    increaseEndurance,
    increaseFire,
    increaseStrength,
    increaseWater,
    setAccuracy,
    setAccuracyStats,
    setAir,
    setAirStats,
    setDegreeGreatness,
    setDegreeStats,
    setDexterity,
    setDexterityStats,
    setEarth,
    setEarthStats,
    setEndurance,
    setEnduranceStats,
    setFire,
    setFireStats,
    setHP,
    setHPStats,
    setMAStats,
    setMDStats,
    setPAStats,
    setPDStats,
    setPrana,
    setPranaStats,
    setRequireAccuracy,
    setRequireAir,
    setRequireDexterity,
    setRequireEarth,
    setRequireEndurance,
    setRequireFire,
    setRequireStrength,
    setRequireWater,
    setSlot1,
    setSlot2,
    setSlot3,
    setSlot4,
    setSlot5,
    setSlot6,
    setSlot7,
    setSlot8,
    setStrength,
    setStrengthStats,
    setTitleGreatness,
    setTitleStats,
    setWater,
    setWaterStats
} from '../store/doll/actions';
import Item from './Item';
import '../styles/DollContainer.css';
import {dollsInitiate} from '../store/doll/actions.js';
import {selectToken, selectUser} from '../store/user/selectors';
import Stat from "./Stat";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const DollContainer = () => {
    const [dollNameExists, setDollNameExists] = useState(false);
    const [dollName, setDollName] = useState('');
    const [display, setDisplay] = useState('none');
    const [dollNameError, setDollNameError] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = useState('');

    const dolls = useSelector(selectDolls);
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
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
    const hpStats = useSelector(selectHPStats);
    const pranaStats = useSelector(selectPranaStats);
    const levelHp = useSelector(selectHP);
    const levelPrana = useSelector(selectPrana);
    const pdStats = useSelector(selectPDStats);
    const mdStats = useSelector(selectMDStats);
    const paStats = useSelector(selectPAStats);
    const maStats = useSelector(selectMAStats);
    const titleStats = useSelector(selectTitleStats);
    const degreeStats = useSelector(selectDegreeStats);
    const helmet = useSelector(selectHelmet);
    const amulet = useSelector(selectAmulet);
    const gloves = useSelector(selectGloves);
    const jacket = useSelector(selectJacket);
    const shield = useSelector(selectShield);
    const bracelet1 = useSelector(selectBracelet1);
    const bracelet2 = useSelector(selectBracelet2);
    const belt = useSelector(selectBelt);
    const ring1 = useSelector(selectRing1);
    const ring2 = useSelector(selectRing2);
    const ring3 = useSelector(selectRing3);
    const ring4 = useSelector(selectRing4);
    const pants = useSelector(selectPants);
    const boots = useSelector(selectBoots);
    const weapon = useSelector(selectWeapon);
    const profession = useSelector(selectProfession);
    const buff1 = useSelector(selectBuff1);
    const buff2 = useSelector(selectBuff2);
    const buff3 = useSelector(selectBuff3);
    const buff4 = useSelector(selectBuff4);
    const buff5 = useSelector(selectBuff5);
    const buff6 = useSelector(selectBuff6);
    const buff7 = useSelector(selectBuff7);
    const buff8 = useSelector(selectBuff8);
    const buff9 = useSelector(selectBuff9);
    const buff10 = useSelector(selectBuff10);
    const crystalPD = useSelector(selectCrystalPD);
    const crystalMD = useSelector(selectCrystalMD);
    const crystalPA = useSelector(selectCrystalPA);
    const crystalMA = useSelector(selectCrystalMA);
    const slot1 = useSelector(selectSlot1);
    const slot2 = useSelector(selectSlot2);
    const slot3 = useSelector(selectSlot3);
    const slot4 = useSelector(selectSlot4);
    const slot5 = useSelector(selectSlot5);
    const slot6 = useSelector(selectSlot6);
    const slot7 = useSelector(selectSlot7);
    const slot8 = useSelector(selectSlot8);
    const reqStrength = useSelector(selectReqStrength);
    const reqDexterity = useSelector(selectReqDexterity);
    const reqAccuracy = useSelector(selectReqAccuracy);
    const reqEndurance = useSelector(selectReqEndurance);
    const reqEarth = useSelector(selectReqEarth);
    const reqAir = useSelector(selectReqAir);
    const reqWater = useSelector(selectReqWater);
    const reqFire = useSelector(selectReqFire);
    const titleGreatness = useSelector(selectTitleGreatness);
    const degreeGreatness = useSelector(selectDegreeGreatness);
    const inputs = useSelector(selectInputs);
    const buttons = useSelector(selectButtons);
    const selects = useSelector(selectSelects);
    const eng = useSelector(selectLang);
    const texts = useSelector(selectTexts);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const countStats = () => {
        let counterTitle = 0;
        let counterDegree = 0;

        switch (titleGreatness) {
            case '1':
                for (let i = 0; i < titleLevel; i++) {
                    if (i < 4) {
                        counterTitle += 4;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 4) {
                            counterDegree += 1;
                        }
                        counterTitle += 6;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 9) {
                            counterDegree += 1;
                        }
                        if (i === 14) {
                            counterDegree += 2;
                        }
                        counterTitle += 8;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 19) {
                            counterDegree += 2;
                        }
                        if (i === 24) {
                            counterDegree += 4;
                        }
                        counterTitle += 10;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 29) {
                            counterDegree += 4;
                        }
                        if (i === 34) {
                            counterDegree += 6;
                        }
                        counterTitle += 12;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 39) {
                            counterDegree += 6;
                        }
                        if (i === 44) {
                            counterDegree += 8;
                        }
                        counterTitle += 14;
                    }
                    if (i < 57 && i > 48) {
                        if (i === 49) {
                            counterDegree += 8;
                        }
                        if (i === 54) {
                            counterDegree += 10;
                        }
                        counterTitle += 16;
                    }
                    if (i < 59 && i > 56) {
                        counterTitle += 18;
                    }
                    if (i > 58) {
                        counterDegree += 10;
                        counterTitle += 20;
                    }
                }
                break;

            case '2':
                for (let i = 0; i < titleLevel; i++) {
                    if (i < 1) {
                        counterTitle += 4;
                    }
                    if (i < 4 && i > 0) {
                        counterTitle += 5;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 4) {
                            counterDegree += 1;
                        }
                        if (i === 5) {
                            counterTitle++;
                        }
                        counterTitle += 7;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 9) {
                            counterDegree += 1;
                        }
                        if (i === 14) {
                            counterDegree += 2;
                        }
                        if (i === 9 || i === 15) {
                            counterTitle++;
                        }
                        counterTitle += 9;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 19) {
                            counterDegree += 2;
                        }
                        if (i === 24) {
                            counterDegree += 4;
                        }
                        if (i === 19 || i === 25) {
                            counterTitle++;
                        }
                        counterTitle += 11;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 29) {
                            counterDegree += 4;
                        }
                        if (i === 34) {
                            counterDegree += 6;
                        }
                        if (i === 30 || i === 35) {
                            counterTitle++;
                        }
                        counterTitle += 13;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 39) {
                            counterDegree += 6;
                        }
                        if (i === 44) {
                            counterDegree += 8;
                        }
                        if (i === 40 || i === 45) {
                            counterTitle++;
                        }
                        counterTitle += 15;
                    }
                    if (i < 55 && i > 48) {
                        if (i === 49) {
                            counterDegree += 8;
                        }
                        if (i === 54) {
                            counterDegree += 10;
                        }
                        if (i === 50 || i === 45) {
                            counterTitle++;
                        }
                        counterTitle += 17;
                    }
                    if (i < 59 && i > 54) {
                        if (i === 55) {
                            counterTitle--;
                        }
                        if (i === 56) {
                            counterTitle--;
                            counterTitle--;
                        }
                        counterTitle += 19;
                    }
                    if (i > 58) {
                        counterDegree += 10;
                        counterTitle += 21;
                    }
                }
                break;

            case '3':
                for (let i = 0; i < titleLevel; i++) {
                    if (i < 4) {
                        if (i === 0) {
                            counterTitle--;
                            counterTitle--;
                        }
                        counterTitle += 6;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 5) {
                            counterTitle += 2;
                        }
                        if (i === 4) {
                            counterDegree += 1;
                        }
                        counterTitle += 8;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 10) {
                            counterTitle += 2;
                        }
                        if (i === 15) {
                            counterTitle += 2;
                        }
                        if (i === 9) {
                            counterDegree += 1;
                        }
                        if (i === 14) {
                            counterDegree += 2;
                        }
                        counterTitle += 10;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 20) {
                            counterTitle += 2;
                        }
                        if (i === 25) {
                            counterTitle += 2;
                        }
                        if (i === 19) {
                            counterDegree += 2;
                        }
                        if (i === 24) {
                            counterDegree += 4;
                        }
                        counterTitle += 12;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 30) {
                            counterTitle += 2;
                        }
                        if (i === 35) {
                            counterTitle += 2;
                        }
                        if (i === 29) {
                            counterDegree += 4;
                        }
                        if (i === 34) {
                            counterDegree += 6;
                        }
                        counterTitle += 14;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 40) {
                            counterTitle += 2;
                        }
                        if (i === 45) {
                            counterTitle += 2;
                        }
                        if (i === 39) {
                            counterDegree += 6;
                        }
                        if (i === 44) {
                            counterDegree += 8;
                        }
                        counterTitle += 16;
                    }
                    if (i < 57 && i > 48) {
                        if (i === 50) {
                            counterTitle += 2;
                        }
                        if (i === 55) {
                            counterTitle += 2;
                        }
                        if (i === 49) {
                            counterDegree += 8;
                        }
                        if (i === 54) {
                            counterDegree += 10;
                        }
                        counterTitle += 18;
                    }
                    if (i < 59 && i > 56) {
                        counterTitle += 20;
                    }
                    if (i > 58) {
                        counterDegree += 10;
                        counterTitle += 22;
                    }
                }
                break;

            case '4':
                for (let i = 0; i < titleLevel; i++) {
                    if (i < 4) {
                        if (i === 0) {
                            counterTitle--;
                            counterTitle--;
                            counterTitle--;
                        }
                        counterTitle += 7;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 5) {
                            counterTitle += 3;
                        }
                        if (i === 4) {
                            counterDegree += 1;
                        }
                        counterTitle += 9;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 10) {
                            counterTitle += 3;
                        }
                        if (i === 15) {
                            counterTitle += 3;
                        }
                        if (i === 9) {
                            counterDegree += 1;
                        }
                        if (i === 14) {
                            counterDegree += 2;
                        }
                        counterTitle += 11;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 20) {
                            counterTitle += 3;
                        }
                        if (i === 25) {
                            counterTitle += 3;
                        }
                        if (i === 19) {
                            counterDegree += 2;
                        }
                        if (i === 24) {
                            counterDegree += 4;
                        }
                        counterTitle += 13;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 30) {
                            counterTitle += 3;
                        }
                        if (i === 35) {
                            counterTitle += 3;
                        }
                        if (i === 29) {
                            counterDegree += 4;
                        }
                        if (i === 34) {
                            counterDegree += 6;
                        }
                        counterTitle += 15;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 40) {
                            counterTitle += 3;
                        }
                        if (i === 45) {
                            counterTitle += 3;
                        }
                        if (i === 39) {
                            counterDegree += 6;
                        }
                        if (i === 44) {
                            counterDegree += 8;
                        }
                        counterTitle += 17;
                    }
                    if (i < 57 && i > 48) {
                        if (i === 50) {
                            counterTitle += 3;
                        }
                        if (i === 55) {
                            counterTitle += 3;
                        }
                        if (i === 49) {
                            counterDegree += 8;
                        }
                        if (i === 54) {
                            counterDegree += 10;
                        }
                        counterTitle += 19;
                    }
                    if (i < 59 && i > 56) {
                        counterTitle += 21;
                    }
                    if (i > 58) {
                        counterDegree += 10;
                        counterTitle += 23;
                    }
                }
                break;
            default:
                break;
        }

        switch (degreeGreatness) {
            case '1':
                for (let i = 0; i < degreeLevel; i++) {
                    if (i < 4) {
                        counterDegree += 4;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 4) {
                            counterTitle += 1;
                        }
                        counterDegree += 6;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 9) {
                            counterTitle += 1;
                        }
                        if (i === 14) {
                            counterTitle += 2;
                        }
                        counterDegree += 8;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 19) {
                            counterTitle += 2;
                        }
                        if (i === 24) {
                            counterTitle += 4;
                        }
                        counterDegree += 10;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 29) {
                            counterTitle += 4;
                        }
                        if (i === 34) {
                            counterTitle += 6;
                        }
                        counterDegree += 12;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 39) {
                            counterTitle += 6;
                        }
                        if (i === 44) {
                            counterTitle += 8;
                        }
                        counterDegree += 14;
                    }
                    if (i < 57 && i > 48) {
                        if (i === 49) {
                            counterTitle += 8;
                        }
                        if (i === 54) {
                            counterTitle += 10;
                        }
                        counterDegree += 16;
                    }
                    if (i < 59 && i > 56) {
                        counterDegree += 18;
                    }
                    if (i > 58) {
                        counterTitle += 10;
                        counterDegree += 20;
                    }
                }
                break;

            case '2':
                for (let i = 0; i < degreeLevel; i++) {
                    if (i < 1) {
                        counterDegree += 4;
                    }
                    if (i < 4 && i > 0) {
                        counterDegree += 5;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 4) {
                            counterTitle += 1;
                        }
                        if (i === 5) {
                            counterDegree++;
                        }
                        counterDegree += 7;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 9) {
                            counterTitle += 1;
                        }
                        if (i === 14) {
                            counterTitle += 2;
                        }
                        if (i === 9 || i === 15) {
                            counterDegree++;
                        }
                        counterDegree += 9;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 19) {
                            counterTitle += 2;
                        }
                        if (i === 24) {
                            counterTitle += 4;
                        }
                        if (i === 19 || i === 25) {
                            counterDegree++;
                        }
                        counterDegree += 11;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 29) {
                            counterTitle += 4;
                        }
                        if (i === 34) {
                            counterTitle += 6;
                        }
                        if (i === 30 || i === 35) {
                            counterDegree++;
                        }
                        counterDegree += 13;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 39) {
                            counterTitle += 6;
                        }
                        if (i === 44) {
                            counterTitle += 8;
                        }
                        if (i === 40 || i === 45) {
                            counterDegree++;
                        }
                        counterDegree += 15;
                    }
                    if (i < 55 && i > 48) {
                        if (i === 49) {
                            counterTitle += 8;
                        }
                        if (i === 54) {
                            counterTitle += 10;
                        }
                        if (i === 50 || i === 45) {
                            counterDegree++;
                        }
                        counterDegree += 17;
                    }
                    if (i < 59 && i > 54) {
                        if (i === 55) {
                            counterDegree--;
                        }
                        if (i === 56) {
                            counterDegree--;
                            counterDegree--;
                        }
                        counterDegree += 19;
                    }
                    if (i > 58) {
                        counterTitle += 10;
                        counterDegree += 21;
                    }
                }
                break;

            case '3':
                for (let i = 0; i < degreeLevel; i++) {
                    if (i < 4) {
                        if (i === 0) {
                            counterDegree--;
                            counterDegree--;
                        }
                        counterDegree += 6;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 5) {
                            counterDegree += 2;
                        }
                        if (i === 4) {
                            counterTitle += 1;
                        }
                        counterDegree += 8;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 10) {
                            counterDegree += 2;
                        }
                        if (i === 15) {
                            counterDegree += 2;
                        }
                        if (i === 9) {
                            counterTitle += 1;
                        }
                        if (i === 14) {
                            counterTitle += 2;
                        }
                        counterDegree += 10;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 20) {
                            counterDegree += 2;
                        }
                        if (i === 25) {
                            counterDegree += 2;
                        }
                        if (i === 19) {
                            counterTitle += 2;
                        }
                        if (i === 24) {
                            counterTitle += 4;
                        }
                        counterDegree += 12;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 30) {
                            counterDegree += 2;
                        }
                        if (i === 35) {
                            counterDegree += 2;
                        }
                        if (i === 29) {
                            counterTitle += 4;
                        }
                        if (i === 34) {
                            counterTitle += 6;
                        }
                        counterDegree += 14;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 40) {
                            counterDegree += 2;
                        }
                        if (i === 45) {
                            counterDegree += 2;
                        }
                        if (i === 39) {
                            counterTitle += 6;
                        }
                        if (i === 44) {
                            counterTitle += 8;
                        }
                        counterDegree += 16;
                    }
                    if (i < 57 && i > 48) {
                        if (i === 50) {
                            counterDegree += 2;
                        }
                        if (i === 55) {
                            counterDegree += 2;
                        }
                        if (i === 49) {
                            counterTitle += 8;
                        }
                        if (i === 54) {
                            counterTitle += 10;
                        }
                        counterDegree += 18;
                    }
                    if (i < 59 && i > 56) {
                        counterDegree += 20;
                    }
                    if (i > 58) {
                        counterTitle += 10;
                        counterDegree += 22;
                    }
                }
                break;

            case '4':
                for (let i = 0; i < degreeLevel; i++) {
                    if (i < 4) {
                        if (i === 0) {
                            counterDegree--;
                            counterDegree--;
                            counterDegree--;
                        }
                        counterDegree += 7;
                    }
                    if (i < 9 && i > 3) {
                        if (i === 5) {
                            counterDegree += 3;
                        }
                        if (i === 4) {
                            counterTitle += 1;
                        }
                        counterDegree += 9;
                    }
                    if (i < 19 && i > 8) {
                        if (i === 10) {
                            counterDegree += 3;
                        }
                        if (i === 15) {
                            counterDegree += 3;
                        }
                        if (i === 9) {
                            counterTitle += 1;
                        }
                        if (i === 14) {
                            counterTitle += 2;
                        }
                        counterDegree += 11;
                    }
                    if (i < 29 && i > 18) {
                        if (i === 20) {
                            counterDegree += 3;
                        }
                        if (i === 25) {
                            counterDegree += 3;
                        }
                        if (i === 19) {
                            counterTitle += 2;
                        }
                        if (i === 24) {
                            counterTitle += 4;
                        }
                        counterDegree += 13;
                    }
                    if (i < 39 && i > 28) {
                        if (i === 30) {
                            counterDegree += 3;
                        }
                        if (i === 35) {
                            counterDegree += 3;
                        }
                        if (i === 29) {
                            counterTitle += 4;
                        }
                        if (i === 34) {
                            counterTitle += 6;
                        }
                        counterDegree += 15;
                    }
                    if (i < 49 && i > 38) {
                        if (i === 40) {
                            counterDegree += 3;
                        }
                        if (i === 45) {
                            counterDegree += 3;
                        }
                        if (i === 39) {
                            counterTitle += 6;
                        }
                        if (i === 44) {
                            counterTitle += 8;
                        }
                        counterDegree += 17;
                    }
                    if (i < 57 && i > 48) {
                        if (i === 50) {
                            counterDegree += 3;
                        }
                        if (i === 55) {
                            counterDegree += 3;
                        }
                        if (i === 49) {
                            counterTitle += 8;
                        }
                        if (i === 54) {
                            counterTitle += 10;
                        }
                        counterDegree += 19;
                    }
                    if (i < 59 && i > 56) {
                        counterDegree += 21;
                    }
                    if (i > 58) {
                        counterTitle += 10;
                        counterDegree += 23;
                    }
                }
                break;
            default:
                break;
        }

        let hp = 100;
        let prana = 100;

        for (let i = 1; i < titleLevel; i++) {
            hp += 50;
            prana += 75;
        }

        for (let i = 1; i < degreeLevel; i++) {
            hp += 10;
        }


        prana += Math.floor(degreeLevel / 5) * 25;
        hp += Math.floor(degreeLevel / 5) * 10;

        if (titleLevel === 60) {
            hp += 150;
            prana += 125;
        }

        if (degreeLevel === 60) {
            hp -= 10;
        }

        dispatch(setTitleStats(counterTitle));
        dispatch(setDegreeStats(counterDegree));
        dispatch(setHP(hp));
        dispatch(setPrana(prana));
    }

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    useEffect(() => {
        countStats();
        let sumStrength = 0;
        let sumDexterity = 0;
        let sumAccuracy = 0;
        let sumEndurance = 0;
        let sumEarth = 0;
        let sumAir = 0;
        let sumWater = 0;
        let sumFire = 0;
        let sumHp = 0;
        let sumPrana = 0;
        let sumPd = 0;
        let sumMd = 0;
        let sumPa = 0;
        let sumMa = 0;
        let highReqStrength = 0;
        let highReqDexterity = 0;
        let highReqAccuracy = 0;
        let highReqEndurance = 0;
        let highReqEarth = 0;
        let highReqAir = 0;
        let highReqWater = 0;
        let highReqFire = 0;
        let reqProfession = null;
        let reqProfessionLvl = 0;

        if (helmet) {
            sumStrength += helmet.givesStrength;
            sumDexterity += helmet.givesDexterity;
            sumAccuracy += helmet.givesAccuracy;
            sumEndurance += helmet.givesEndurance;
            sumEarth += helmet.givesEarth;
            sumAir += helmet.givesAir;
            sumWater += helmet.givesWater;
            sumFire += helmet.givesFire;
            sumHp += helmet.givesHp;
            sumPrana += helmet.givesPrana;
            sumPd += helmet.givesPd;
            sumMd += helmet.givesMd;
            sumPa += helmet.givesPa;
            sumMa += helmet.givesMa;
            highReqStrength = helmet.reqStrength > highReqStrength ? helmet.reqStrength : highReqStrength;
            highReqDexterity = helmet.reqDexterity > highReqDexterity ? helmet.reqDexterity : highReqDexterity;
            highReqAccuracy = helmet.reqAccuracy > highReqAccuracy ? helmet.reqAccuracy : highReqAccuracy;
            highReqEndurance = helmet.reqEndurance > highReqEndurance ? helmet.reqEndurance : highReqEndurance;
            highReqEarth = helmet.reqEarth > highReqEarth ? helmet.reqEarth : highReqEarth;
            highReqAir = helmet.reqAir > highReqAir ? helmet.reqAir : highReqAir;
            highReqWater = helmet.reqWater > highReqWater ? helmet.reqWater : highReqWater;
            highReqFire = helmet.reqFire > highReqFire ? helmet.reqFire : highReqFire;
        }

        if (amulet) {
            sumStrength += amulet.givesStrength;
            sumDexterity += amulet.givesDexterity;
            sumAccuracy += amulet.givesAccuracy;
            sumEndurance += amulet.givesEndurance;
            sumEarth += amulet.givesEarth;
            sumAir += amulet.givesAir;
            sumWater += amulet.givesWater;
            sumFire += amulet.givesFire;
            sumHp += amulet.givesHp;
            sumPrana += amulet.givesPrana;
            sumPd += amulet.givesPd;
            sumMd += amulet.givesMd;
            sumPa += amulet.givesPa;
            sumMa += amulet.givesMa;
            highReqStrength = amulet.reqStrength > highReqStrength ? amulet.reqStrength : highReqStrength;
            highReqDexterity = amulet.reqDexterity > highReqDexterity ? amulet.reqDexterity : highReqDexterity;
            highReqAccuracy = amulet.reqAccuracy > highReqAccuracy ? amulet.reqAccuracy : highReqAccuracy;
            highReqEndurance = amulet.reqEndurance > highReqEndurance ? amulet.reqEndurance : highReqEndurance;
            highReqEarth = amulet.reqEarth > highReqEarth ? amulet.reqEarth : highReqEarth;
            highReqAir = amulet.reqAir > highReqAir ? amulet.reqAir : highReqAir;
            highReqWater = amulet.reqWater > highReqWater ? amulet.reqWater : highReqWater;
            highReqFire = amulet.reqFire > highReqFire ? amulet.reqFire : highReqFire;
        }

        if (gloves) {
            sumStrength += gloves.givesStrength;
            sumDexterity += gloves.givesDexterity;
            sumAccuracy += gloves.givesAccuracy;
            sumEndurance += gloves.givesEndurance;
            sumEarth += gloves.givesEarth;
            sumAir += gloves.givesAir;
            sumWater += gloves.givesWater;
            sumFire += gloves.givesFire;
            sumHp += gloves.givesHp;
            sumPrana += gloves.givesPrana;
            sumPd += gloves.givesPd;
            sumMd += gloves.givesMd;
            sumPa += gloves.givesPa;
            sumMa += gloves.givesMa;
            highReqStrength = gloves.reqStrength > highReqStrength ? gloves.reqStrength : highReqStrength;
            highReqDexterity = gloves.reqDexterity > highReqDexterity ? gloves.reqDexterity : highReqDexterity;
            highReqAccuracy = gloves.reqAccuracy > highReqAccuracy ? gloves.reqAccuracy : highReqAccuracy;
            highReqEndurance = gloves.reqEndurance > highReqEndurance ? gloves.reqEndurance : highReqEndurance;
            highReqEarth = gloves.reqEarth > highReqEarth ? gloves.reqEarth : highReqEarth;
            highReqAir = gloves.reqAir > highReqAir ? gloves.reqAir : highReqAir;
            highReqWater = gloves.reqWater > highReqWater ? gloves.reqWater : highReqWater;
            highReqFire = gloves.reqFire > highReqFire ? gloves.reqFire : highReqFire;
        }

        if (jacket) {
            sumStrength += jacket.givesStrength;
            sumDexterity += jacket.givesDexterity;
            sumAccuracy += jacket.givesAccuracy;
            sumEndurance += jacket.givesEndurance;
            sumEarth += jacket.givesEarth;
            sumAir += jacket.givesAir;
            sumWater += jacket.givesWater;
            sumFire += jacket.givesFire;
            sumHp += jacket.givesHp;
            sumPrana += jacket.givesPrana;
            sumPd += jacket.givesPd;
            sumMd += jacket.givesMd;
            sumPa += jacket.givesPa;
            sumMa += jacket.givesMa;
            highReqStrength = jacket.reqStrength > highReqStrength ? jacket.reqStrength : highReqStrength;
            highReqDexterity = jacket.reqDexterity > highReqDexterity ? jacket.reqDexterity : highReqDexterity;
            highReqAccuracy = jacket.reqAccuracy > highReqAccuracy ? jacket.reqAccuracy : highReqAccuracy;
            highReqEndurance = jacket.reqEndurance > highReqEndurance ? jacket.reqEndurance : highReqEndurance;
            highReqEarth = jacket.reqEarth > highReqEarth ? jacket.reqEarth : highReqEarth;
            highReqAir = jacket.reqAir > highReqAir ? jacket.reqAir : highReqAir;
            highReqWater = jacket.reqWater > highReqWater ? jacket.reqWater : highReqWater;
            highReqFire = jacket.reqFire > highReqFire ? jacket.reqFire : highReqFire;
        }

        if (shield) {
            sumStrength += shield.givesStrength;
            sumDexterity += shield.givesDexterity;
            sumAccuracy += shield.givesAccuracy;
            sumEndurance += shield.givesEndurance;
            sumEarth += shield.givesEarth;
            sumAir += shield.givesAir;
            sumWater += shield.givesWater;
            sumFire += shield.givesFire;
            sumHp += shield.givesHp;
            sumPrana += shield.givesPrana;
            sumPd += shield.givesPd;
            sumMd += shield.givesMd;
            sumPa += shield.givesPa;
            sumMa += shield.givesMa;
            highReqStrength = shield.reqStrength > highReqStrength ? shield.reqStrength : highReqStrength;
            highReqDexterity = shield.reqDexterity > highReqDexterity ? shield.reqDexterity : highReqDexterity;
            highReqAccuracy = shield.reqAccuracy > highReqAccuracy ? shield.reqAccuracy : highReqAccuracy;
            highReqEndurance = shield.reqEndurance > highReqEndurance ? shield.reqEndurance : highReqEndurance;
            highReqEarth = shield.reqEarth > highReqEarth ? shield.reqEarth : highReqEarth;
            highReqAir = shield.reqAir > highReqAir ? shield.reqAir : highReqAir;
            highReqWater = shield.reqWater > highReqWater ? shield.reqWater : highReqWater;
            highReqFire = shield.reqFire > highReqFire ? shield.reqFire : highReqFire;
        }

        if (bracelet1) {
            sumStrength += bracelet1.givesStrength;
            sumDexterity += bracelet1.givesDexterity;
            sumAccuracy += bracelet1.givesAccuracy;
            sumEndurance += bracelet1.givesEndurance;
            sumEarth += bracelet1.givesEarth;
            sumAir += bracelet1.givesAir;
            sumWater += bracelet1.givesWater;
            sumFire += bracelet1.givesFire;
            sumHp += bracelet1.givesHp;
            sumPrana += bracelet1.givesPrana;
            sumPd += bracelet1.givesPd;
            sumMd += bracelet1.givesMd;
            sumPa += bracelet1.givesPa;
            sumMa += bracelet1.givesMa;
            highReqStrength = bracelet1.reqStrength > highReqStrength ? bracelet1.reqStrength : highReqStrength;
            highReqDexterity = bracelet1.reqDexterity > highReqDexterity ? bracelet1.reqDexterity : highReqDexterity;
            highReqAccuracy = bracelet1.reqAccuracy > highReqAccuracy ? bracelet1.reqAccuracy : highReqAccuracy;
            highReqEndurance = bracelet1.reqEndurance > highReqEndurance ? bracelet1.reqEndurance : highReqEndurance;
            highReqEarth = bracelet1.reqEarth > highReqEarth ? bracelet1.reqEarth : highReqEarth;
            highReqAir = bracelet1.reqAir > highReqAir ? bracelet1.reqAir : highReqAir;
            highReqWater = bracelet1.reqWater > highReqWater ? bracelet1.reqWater : highReqWater;
            highReqFire = bracelet1.reqFire > highReqFire ? bracelet1.reqFire : highReqFire;
        }

        if (bracelet2) {
            sumStrength += bracelet2.givesStrength;
            sumDexterity += bracelet2.givesDexterity;
            sumAccuracy += bracelet2.givesAccuracy;
            sumEndurance += bracelet2.givesEndurance;
            sumEarth += bracelet2.givesEarth;
            sumAir += bracelet2.givesAir;
            sumWater += bracelet2.givesWater;
            sumFire += bracelet2.givesFire;
            sumHp += bracelet2.givesHp;
            sumPrana += bracelet2.givesPrana;
            sumPd += bracelet2.givesPd;
            sumMd += bracelet2.givesMd;
            sumPa += bracelet2.givesPa;
            sumMa += bracelet2.givesMa;
            highReqStrength = bracelet2.reqStrength > highReqStrength ? bracelet2.reqStrength : highReqStrength;
            highReqDexterity = bracelet2.reqDexterity > highReqDexterity ? bracelet2.reqDexterity : highReqDexterity;
            highReqAccuracy = bracelet2.reqAccuracy > highReqAccuracy ? bracelet2.reqAccuracy : highReqAccuracy;
            highReqEndurance = bracelet2.reqEndurance > highReqEndurance ? bracelet2.reqEndurance : highReqEndurance;
            highReqEarth = bracelet2.reqEarth > highReqEarth ? bracelet2.reqEarth : highReqEarth;
            highReqAir = bracelet2.reqAir > highReqAir ? bracelet2.reqAir : highReqAir;
            highReqWater = bracelet2.reqWater > highReqWater ? bracelet2.reqWater : highReqWater;
            highReqFire = bracelet2.reqFire > highReqFire ? bracelet2.reqFire : highReqFire;
        }

        if (belt) {
            sumStrength += belt.givesStrength;
            sumDexterity += belt.givesDexterity;
            sumAccuracy += belt.givesAccuracy;
            sumEndurance += belt.givesEndurance;
            sumEarth += belt.givesEarth;
            sumAir += belt.givesAir;
            sumWater += belt.givesWater;
            sumFire += belt.givesFire;
            sumHp += belt.givesHp;
            sumPrana += belt.givesPrana;
            sumPd += belt.givesPd;
            sumMd += belt.givesMd;
            sumPa += belt.givesPa;
            sumMa += belt.givesMa;
            highReqStrength = belt.reqStrength > highReqStrength ? belt.reqStrength : highReqStrength;
            highReqDexterity = belt.reqDexterity > highReqDexterity ? belt.reqDexterity : highReqDexterity;
            highReqAccuracy = belt.reqAccuracy > highReqAccuracy ? belt.reqAccuracy : highReqAccuracy;
            highReqEndurance = belt.reqEndurance > highReqEndurance ? belt.reqEndurance : highReqEndurance;
            highReqEarth = belt.reqEarth > highReqEarth ? belt.reqEarth : highReqEarth;
            highReqAir = belt.reqAir > highReqAir ? belt.reqAir : highReqAir;
            highReqWater = belt.reqWater > highReqWater ? belt.reqWater : highReqWater;
            highReqFire = belt.reqFire > highReqFire ? belt.reqFire : highReqFire;
        }

        if (ring1) {
            sumStrength += ring1.givesStrength;
            sumDexterity += ring1.givesDexterity;
            sumAccuracy += ring1.givesAccuracy;
            sumEndurance += ring1.givesEndurance;
            sumEarth += ring1.givesEarth;
            sumAir += ring1.givesAir;
            sumWater += ring1.givesWater;
            sumFire += ring1.givesFire;
            sumHp += ring1.givesHp;
            sumPrana += ring1.givesPrana;
            sumPd += ring1.givesPd;
            sumMd += ring1.givesMd;
            sumPa += ring1.givesPa;
            sumMa += ring1.givesMa;
            highReqStrength = ring1.reqStrength > highReqStrength ? ring1.reqStrength : highReqStrength;
            highReqDexterity = ring1.reqDexterity > highReqDexterity ? ring1.reqDexterity : highReqDexterity;
            highReqAccuracy = ring1.reqAccuracy > highReqAccuracy ? ring1.reqAccuracy : highReqAccuracy;
            highReqEndurance = ring1.reqEndurance > highReqEndurance ? ring1.reqEndurance : highReqEndurance;
            highReqEarth = ring1.reqEarth > highReqEarth ? ring1.reqEarth : highReqEarth;
            highReqAir = ring1.reqAir > highReqAir ? ring1.reqAir : highReqAir;
            highReqWater = ring1.reqWater > highReqWater ? ring1.reqWater : highReqWater;
            highReqFire = ring1.reqFire > highReqFire ? ring1.reqFire : highReqFire;
        }

        if (ring2) {
            sumStrength += ring2.givesStrength;
            sumDexterity += ring2.givesDexterity;
            sumAccuracy += ring2.givesAccuracy;
            sumEndurance += ring2.givesEndurance;
            sumEarth += ring2.givesEarth;
            sumAir += ring2.givesAir;
            sumWater += ring2.givesWater;
            sumFire += ring2.givesFire;
            sumHp += ring2.givesHp;
            sumPrana += ring2.givesPrana;
            sumPd += ring2.givesPd;
            sumMd += ring2.givesMd;
            sumPa += ring2.givesPa;
            sumMa += ring2.givesMa;
            highReqStrength = ring2.reqStrength > highReqStrength ? ring2.reqStrength : highReqStrength;
            highReqDexterity = ring2.reqDexterity > highReqDexterity ? ring2.reqDexterity : highReqDexterity;
            highReqAccuracy = ring2.reqAccuracy > highReqAccuracy ? ring2.reqAccuracy : highReqAccuracy;
            highReqEndurance = ring2.reqEndurance > highReqEndurance ? ring2.reqEndurance : highReqEndurance;
            highReqEarth = ring2.reqEarth > highReqEarth ? ring2.reqEarth : highReqEarth;
            highReqAir = ring2.reqAir > highReqAir ? ring2.reqAir : highReqAir;
            highReqWater = ring2.reqWater > highReqWater ? ring2.reqWater : highReqWater;
            highReqFire = ring2.reqFire > highReqFire ? ring2.reqFire : highReqFire;
        }
        if (ring3) {
            sumStrength += ring3.givesStrength;
            sumDexterity += ring3.givesDexterity;
            sumAccuracy += ring3.givesAccuracy;
            sumEndurance += ring3.givesEndurance;
            sumEarth += ring3.givesEarth;
            sumAir += ring3.givesAir;
            sumWater += ring3.givesWater;
            sumFire += ring3.givesFire;
            sumHp += ring3.givesHp;
            sumPrana += ring3.givesPrana;
            sumPd += ring3.givesPd;
            sumMd += ring3.givesMd;
            sumPa += ring3.givesPa;
            sumMa += ring3.givesMa;
            highReqStrength = ring3.reqStrength > highReqStrength ? ring3.reqStrength : highReqStrength;
            highReqDexterity = ring3.reqDexterity > highReqDexterity ? ring3.reqDexterity : highReqDexterity;
            highReqAccuracy = ring3.reqAccuracy > highReqAccuracy ? ring3.reqAccuracy : highReqAccuracy;
            highReqEndurance = ring3.reqEndurance > highReqEndurance ? ring3.reqEndurance : highReqEndurance;
            highReqEarth = ring3.reqEarth > highReqEarth ? ring3.reqEarth : highReqEarth;
            highReqAir = ring3.reqAir > highReqAir ? ring3.reqAir : highReqAir;
            highReqWater = ring3.reqWater > highReqWater ? ring3.reqWater : highReqWater;
            highReqFire = ring3.reqFire > highReqFire ? ring3.reqFire : highReqFire;
        }
        if (ring4) {
            sumStrength += ring4.givesStrength;
            sumDexterity += ring4.givesDexterity;
            sumAccuracy += ring4.givesAccuracy;
            sumEndurance += ring4.givesEndurance;
            sumEarth += ring4.givesEarth;
            sumAir += ring4.givesAir;
            sumWater += ring4.givesWater;
            sumFire += ring4.givesFire;
            sumHp += ring4.givesHp;
            sumPrana += ring4.givesPrana;
            sumPd += ring4.givesPd;
            sumMd += ring4.givesMd;
            sumPa += ring4.givesPa;
            sumMa += ring4.givesMa;
            highReqStrength = ring4.reqStrength > highReqStrength ? ring4.reqStrength : highReqStrength;
            highReqDexterity = ring4.reqDexterity > highReqDexterity ? ring4.reqDexterity : highReqDexterity;
            highReqAccuracy = ring4.reqAccuracy > highReqAccuracy ? ring4.reqAccuracy : highReqAccuracy;
            highReqEndurance = ring4.reqEndurance > highReqEndurance ? ring4.reqEndurance : highReqEndurance;
            highReqEarth = ring4.reqEarth > highReqEarth ? ring4.reqEarth : highReqEarth;
            highReqAir = ring4.reqAir > highReqAir ? ring4.reqAir : highReqAir;
            highReqWater = ring4.reqWater > highReqWater ? ring4.reqWater : highReqWater;
            highReqFire = ring4.reqFire > highReqFire ? ring4.reqFire : highReqFire;
        }
        if (pants) {
            sumStrength += pants.givesStrength;
            sumDexterity += pants.givesDexterity;
            sumAccuracy += pants.givesAccuracy;
            sumEndurance += pants.givesEndurance;
            sumEarth += pants.givesEarth;
            sumAir += pants.givesAir;
            sumWater += pants.givesWater;
            sumFire += pants.givesFire;
            sumHp += pants.givesHp;
            sumPrana += pants.givesPrana;
            sumPd += pants.givesPd;
            sumMd += pants.givesMd;
            sumPa += pants.givesPa;
            sumMa += pants.givesMa;
            highReqStrength = pants.reqStrength > highReqStrength ? pants.reqStrength : highReqStrength;
            highReqDexterity = pants.reqDexterity > highReqDexterity ? pants.reqDexterity : highReqDexterity;
            highReqAccuracy = pants.reqAccuracy > highReqAccuracy ? pants.reqAccuracy : highReqAccuracy;
            highReqEndurance = pants.reqEndurance > highReqEndurance ? pants.reqEndurance : highReqEndurance;
            highReqEarth = pants.reqEarth > highReqEarth ? pants.reqEarth : highReqEarth;
            highReqAir = pants.reqAir > highReqAir ? pants.reqAir : highReqAir;
            highReqWater = pants.reqWater > highReqWater ? pants.reqWater : highReqWater;
            highReqFire = pants.reqFire > highReqFire ? pants.reqFire : highReqFire;
        }
        if (boots) {
            sumStrength += boots.givesStrength;
            sumDexterity += boots.givesDexterity;
            sumAccuracy += boots.givesAccuracy;
            sumEndurance += boots.givesEndurance;
            sumEarth += boots.givesEarth;
            sumAir += boots.givesAir;
            sumWater += boots.givesWater;
            sumFire += boots.givesFire;
            sumHp += boots.givesHp;
            sumPrana += boots.givesPrana;
            sumPd += boots.givesPd;
            sumMd += boots.givesMd;
            sumPa += boots.givesPa;
            sumMa += boots.givesMa;
            highReqStrength = boots.reqStrength > highReqStrength ? boots.reqStrength : highReqStrength;
            highReqDexterity = boots.reqDexterity > highReqDexterity ? boots.reqDexterity : highReqDexterity;
            highReqAccuracy = boots.reqAccuracy > highReqAccuracy ? boots.reqAccuracy : highReqAccuracy;
            highReqEndurance = boots.reqEndurance > highReqEndurance ? boots.reqEndurance : highReqEndurance;
            highReqEarth = boots.reqEarth > highReqEarth ? boots.reqEarth : highReqEarth;
            highReqAir = boots.reqAir > highReqAir ? boots.reqAir : highReqAir;
            highReqWater = boots.reqWater > highReqWater ? boots.reqWater : highReqWater;
            highReqFire = boots.reqFire > highReqFire ? boots.reqFire : highReqFire;
        }
        if (weapon) {
            sumPd += weapon.avgPd;
            sumMd += weapon.avgMd;
            highReqStrength = weapon.reqStrength > highReqStrength ? weapon.reqStrength : highReqStrength;
            highReqDexterity = weapon.reqDexterity > highReqDexterity ? weapon.reqDexterity : highReqDexterity;
            highReqAccuracy = weapon.reqAccuracy > highReqAccuracy ? weapon.reqAccuracy : highReqAccuracy;
            highReqEndurance = weapon.reqEndurance > highReqEndurance ? weapon.reqEndurance : highReqEndurance;
            highReqEarth = weapon.reqEarth > highReqEarth ? weapon.reqEarth : highReqEarth;
            highReqAir = weapon.reqAir > highReqAir ? weapon.reqAir : highReqAir;
            highReqWater = weapon.reqWater > highReqWater ? weapon.reqWater : highReqWater;
            highReqFire = weapon.reqFire > highReqFire ? weapon.reqFire : highReqFire;
        }
        if (profession) {
            sumStrength += profession.givesStrength;
            sumDexterity += profession.givesDexterity;
            sumAccuracy += profession.givesAccuracy;
            sumEndurance += profession.givesEndurance;
            sumEarth += profession.givesEarth;
            sumAir += profession.givesAir;
            sumWater += profession.givesWater;
            sumFire += profession.givesFire;
            sumHp += profession.givesHp;
            sumPrana += profession.givesPrana;
            sumPd += profession.givesPd;
            sumMd += profession.givesMd;
            sumPa += profession.givesPa;
            sumMa += profession.givesMa;
            highReqStrength = profession.reqStrength > highReqStrength ? profession.reqStrength : highReqStrength;
            highReqDexterity = profession.reqDexterity > highReqDexterity ? profession.reqDexterity : highReqDexterity;
            highReqAccuracy = profession.reqAccuracy > highReqAccuracy ? profession.reqAccuracy : highReqAccuracy;
            highReqEndurance = profession.reqEndurance > highReqEndurance ? profession.reqEndurance : highReqEndurance;
            highReqEarth = profession.reqEarth > highReqEarth ? profession.reqEarth : highReqEarth;
            highReqAir = profession.reqAir > highReqAir ? profession.reqAir : highReqAir;
            highReqWater = profession.reqWater > highReqWater ? profession.reqWater : highReqWater;
            highReqFire = profession.reqFire > highReqFire ? profession.reqFire : highReqFire;
        }
        if (buff1) {
            sumStrength += buff1.givesStrength;
            sumDexterity += buff1.givesDexterity;
            sumAccuracy += buff1.givesAccuracy;
            sumEndurance += buff1.givesEndurance;
            sumEarth += buff1.givesEarth;
            sumAir += buff1.givesAir;
            sumWater += buff1.givesWater;
            sumFire += buff1.givesFire;
            sumHp += buff1.givesHp;
            sumPrana += buff1.givesPrana;
            sumPd += buff1.givesPd;
            sumMd += buff1.givesMd;
            sumPa += buff1.givesPa;
            sumMa += buff1.givesMa;
            highReqStrength = buff1.reqStrength > highReqStrength ? buff1.reqStrength : highReqStrength;
            highReqDexterity = buff1.reqDexterity > highReqDexterity ? buff1.reqDexterity : highReqDexterity;
            highReqAccuracy = buff1.reqAccuracy > highReqAccuracy ? buff1.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff1.reqEndurance > highReqEndurance ? buff1.reqEndurance : highReqEndurance;
            highReqEarth = buff1.reqEarth > highReqEarth ? buff1.reqEarth : highReqEarth;
            highReqAir = buff1.reqAir > highReqAir ? buff1.reqAir : highReqAir;
            highReqWater = buff1.reqWater > highReqWater ? buff1.reqWater : highReqWater;
            highReqFire = buff1.reqFire > highReqFire ? buff1.reqFire : highReqFire;
        }
        if (buff2) {
            sumStrength += buff2.givesStrength;
            sumDexterity += buff2.givesDexterity;
            sumAccuracy += buff2.givesAccuracy;
            sumEndurance += buff2.givesEndurance;
            sumEarth += buff2.givesEarth;
            sumAir += buff2.givesAir;
            sumWater += buff2.givesWater;
            sumFire += buff2.givesFire;
            sumHp += buff2.givesHp;
            sumPrana += buff2.givesPrana;
            sumPd += buff2.givesPd;
            sumMd += buff2.givesMd;
            sumPa += buff2.givesPa;
            sumMa += buff2.givesMa;
            highReqStrength = buff2.reqStrength > highReqStrength ? buff2.reqStrength : highReqStrength;
            highReqDexterity = buff2.reqDexterity > highReqDexterity ? buff2.reqDexterity : highReqDexterity;
            highReqAccuracy = buff2.reqAccuracy > highReqAccuracy ? buff2.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff2.reqEndurance > highReqEndurance ? buff2.reqEndurance : highReqEndurance;
            highReqEarth = buff2.reqEarth > highReqEarth ? buff2.reqEarth : highReqEarth;
            highReqAir = buff2.reqAir > highReqAir ? buff2.reqAir : highReqAir;
            highReqWater = buff2.reqWater > highReqWater ? buff2.reqWater : highReqWater;
            highReqFire = buff2.reqFire > highReqFire ? buff2.reqFire : highReqFire;
        }
        if (buff3) {
            sumStrength += buff3.givesStrength;
            sumDexterity += buff3.givesDexterity;
            sumAccuracy += buff3.givesAccuracy;
            sumEndurance += buff3.givesEndurance;
            sumEarth += buff3.givesEarth;
            sumAir += buff3.givesAir;
            sumWater += buff3.givesWater;
            sumFire += buff3.givesFire;
            sumHp += buff3.givesHp;
            sumPrana += buff3.givesPrana;
            sumPd += buff3.givesPd;
            sumMd += buff3.givesMd;
            sumPa += buff3.givesPa;
            sumMa += buff3.givesMa;
            highReqStrength = buff3.reqStrength > highReqStrength ? buff3.reqStrength : highReqStrength;
            highReqDexterity = buff3.reqDexterity > highReqDexterity ? buff3.reqDexterity : highReqDexterity;
            highReqAccuracy = buff3.reqAccuracy > highReqAccuracy ? buff3.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff3.reqEndurance > highReqEndurance ? buff3.reqEndurance : highReqEndurance;
            highReqEarth = buff3.reqEarth > highReqEarth ? buff3.reqEarth : highReqEarth;
            highReqAir = buff3.reqAir > highReqAir ? buff3.reqAir : highReqAir;
            highReqWater = buff3.reqWater > highReqWater ? buff3.reqWater : highReqWater;
            highReqFire = buff3.reqFire > highReqFire ? buff3.reqFire : highReqFire;
        }
        if (buff4) {
            sumStrength += buff4.givesStrength;
            sumDexterity += buff4.givesDexterity;
            sumAccuracy += buff4.givesAccuracy;
            sumEndurance += buff4.givesEndurance;
            sumEarth += buff4.givesEarth;
            sumAir += buff4.givesAir;
            sumWater += buff4.givesWater;
            sumFire += buff4.givesFire;
            sumHp += buff4.givesHp;
            sumPrana += buff4.givesPrana;
            sumPd += buff4.givesPd;
            sumMd += buff4.givesMd;
            sumPa += buff4.givesPa;
            sumMa += buff4.givesMa;
            highReqStrength = buff4.reqStrength > highReqStrength ? buff4.reqStrength : highReqStrength;
            highReqDexterity = buff4.reqDexterity > highReqDexterity ? buff4.reqDexterity : highReqDexterity;
            highReqAccuracy = buff4.reqAccuracy > highReqAccuracy ? buff4.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff4.reqEndurance > highReqEndurance ? buff4.reqEndurance : highReqEndurance;
            highReqEarth = buff4.reqEarth > highReqEarth ? buff4.reqEarth : highReqEarth;
            highReqAir = buff4.reqAir > highReqAir ? buff4.reqAir : highReqAir;
            highReqWater = buff4.reqWater > highReqWater ? buff4.reqWater : highReqWater;
            highReqFire = buff4.reqFire > highReqFire ? buff4.reqFire : highReqFire;
        }
        if (buff5) {
            sumStrength += buff5.givesStrength;
            sumDexterity += buff5.givesDexterity;
            sumAccuracy += buff5.givesAccuracy;
            sumEndurance += buff5.givesEndurance;
            sumEarth += buff5.givesEarth;
            sumAir += buff5.givesAir;
            sumWater += buff5.givesWater;
            sumFire += buff5.givesFire;
            sumHp += buff5.givesHp;
            sumPrana += buff5.givesPrana;
            sumPd += buff5.givesPd;
            sumMd += buff5.givesMd;
            sumPa += buff5.givesPa;
            sumMa += buff5.givesMa;
            highReqStrength = buff5.reqStrength > highReqStrength ? buff5.reqStrength : highReqStrength;
            highReqDexterity = buff5.reqDexterity > highReqDexterity ? buff5.reqDexterity : highReqDexterity;
            highReqAccuracy = buff5.reqAccuracy > highReqAccuracy ? buff5.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff5.reqEndurance > highReqEndurance ? buff5.reqEndurance : highReqEndurance;
            highReqEarth = buff5.reqEarth > highReqEarth ? buff5.reqEarth : highReqEarth;
            highReqAir = buff5.reqAir > highReqAir ? buff5.reqAir : highReqAir;
            highReqWater = buff5.reqWater > highReqWater ? buff5.reqWater : highReqWater;
            highReqFire = buff5.reqFire > highReqFire ? buff5.reqFire : highReqFire;
        }
        if (buff6) {
            sumStrength += buff6.givesStrength;
            sumDexterity += buff6.givesDexterity;
            sumAccuracy += buff6.givesAccuracy;
            sumEndurance += buff6.givesEndurance;
            sumEarth += buff6.givesEarth;
            sumAir += buff6.givesAir;
            sumWater += buff6.givesWater;
            sumFire += buff6.givesFire;
            sumHp += buff6.givesHp;
            sumPrana += buff6.givesPrana;
            sumPd += buff6.givesPd;
            sumMd += buff6.givesMd;
            sumPa += buff6.givesPa;
            sumMa += buff6.givesMa;
            highReqStrength = buff6.reqStrength > highReqStrength ? buff6.reqStrength : highReqStrength;
            highReqDexterity = buff6.reqDexterity > highReqDexterity ? buff6.reqDexterity : highReqDexterity;
            highReqAccuracy = buff6.reqAccuracy > highReqAccuracy ? buff6.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff6.reqEndurance > highReqEndurance ? buff6.reqEndurance : highReqEndurance;
            highReqEarth = buff6.reqEarth > highReqEarth ? buff6.reqEarth : highReqEarth;
            highReqAir = buff6.reqAir > highReqAir ? buff6.reqAir : highReqAir;
            highReqWater = buff6.reqWater > highReqWater ? buff6.reqWater : highReqWater;
            highReqFire = buff6.reqFire > highReqFire ? buff6.reqFire : highReqFire;
        }
        if (buff7) {
            sumStrength += buff7.givesStrength;
            sumDexterity += buff7.givesDexterity;
            sumAccuracy += buff7.givesAccuracy;
            sumEndurance += buff7.givesEndurance;
            sumEarth += buff7.givesEarth;
            sumAir += buff7.givesAir;
            sumWater += buff7.givesWater;
            sumFire += buff7.givesFire;
            sumHp += buff7.givesHp;
            sumPrana += buff7.givesPrana;
            sumPd += buff7.givesPd;
            sumMd += buff7.givesMd;
            sumPa += buff7.givesPa;
            sumMa += buff7.givesMa;
            highReqStrength = buff7.reqStrength > highReqStrength ? buff7.reqStrength : highReqStrength;
            highReqDexterity = buff7.reqDexterity > highReqDexterity ? buff7.reqDexterity : highReqDexterity;
            highReqAccuracy = buff7.reqAccuracy > highReqAccuracy ? buff7.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff7.reqEndurance > highReqEndurance ? buff7.reqEndurance : highReqEndurance;
            highReqEarth = buff7.reqEarth > highReqEarth ? buff7.reqEarth : highReqEarth;
            highReqAir = buff7.reqAir > highReqAir ? buff7.reqAir : highReqAir;
            highReqWater = buff7.reqWater > highReqWater ? buff7.reqWater : highReqWater;
            highReqFire = buff7.reqFire > highReqFire ? buff7.reqFire : highReqFire;
        }
        if (buff8) {
            sumStrength += buff8.givesStrength;
            sumDexterity += buff8.givesDexterity;
            sumAccuracy += buff8.givesAccuracy;
            sumEndurance += buff8.givesEndurance;
            sumEarth += buff8.givesEarth;
            sumAir += buff8.givesAir;
            sumWater += buff8.givesWater;
            sumFire += buff8.givesFire;
            sumHp += buff8.givesHp;
            sumPrana += buff8.givesPrana;
            sumPd += buff8.givesPd;
            sumMd += buff8.givesMd;
            sumPa += buff8.givesPa;
            sumMa += buff8.givesMa;
            highReqStrength = buff8.reqStrength > highReqStrength ? buff8.reqStrength : highReqStrength;
            highReqDexterity = buff8.reqDexterity > highReqDexterity ? buff8.reqDexterity : highReqDexterity;
            highReqAccuracy = buff8.reqAccuracy > highReqAccuracy ? buff8.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff8.reqEndurance > highReqEndurance ? buff8.reqEndurance : highReqEndurance;
            highReqEarth = buff8.reqEarth > highReqEarth ? buff8.reqEarth : highReqEarth;
            highReqAir = buff8.reqAir > highReqAir ? buff8.reqAir : highReqAir;
            highReqWater = buff8.reqWater > highReqWater ? buff8.reqWater : highReqWater;
            highReqFire = buff8.reqFire > highReqFire ? buff8.reqFire : highReqFire;
        }
        if (buff9) {
            sumStrength += buff9.givesStrength;
            sumDexterity += buff9.givesDexterity;
            sumAccuracy += buff9.givesAccuracy;
            sumEndurance += buff9.givesEndurance;
            sumEarth += buff9.givesEarth;
            sumAir += buff9.givesAir;
            sumWater += buff9.givesWater;
            sumFire += buff9.givesFire;
            sumHp += buff9.givesHp;
            sumPrana += buff9.givesPrana;
            sumPd += buff9.givesPd;
            sumMd += buff9.givesMd;
            sumPa += buff9.givesPa;
            sumMa += buff9.givesMa;
            highReqStrength = buff9.reqStrength > highReqStrength ? buff9.reqStrength : highReqStrength;
            highReqDexterity = buff9.reqDexterity > highReqDexterity ? buff9.reqDexterity : highReqDexterity;
            highReqAccuracy = buff9.reqAccuracy > highReqAccuracy ? buff9.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff9.reqEndurance > highReqEndurance ? buff9.reqEndurance : highReqEndurance;
            highReqEarth = buff9.reqEarth > highReqEarth ? buff9.reqEarth : highReqEarth;
            highReqAir = buff9.reqAir > highReqAir ? buff9.reqAir : highReqAir;
            highReqWater = buff9.reqWater > highReqWater ? buff9.reqWater : highReqWater;
            highReqFire = buff9.reqFire > highReqFire ? buff9.reqFire : highReqFire;
        }
        if (buff10) {
            sumStrength += buff10.givesStrength;
            sumDexterity += buff10.givesDexterity;
            sumAccuracy += buff10.givesAccuracy;
            sumEndurance += buff10.givesEndurance;
            sumEarth += buff10.givesEarth;
            sumAir += buff10.givesAir;
            sumWater += buff10.givesWater;
            sumFire += buff10.givesFire;
            sumHp += buff10.givesHp;
            sumPrana += buff10.givesPrana;
            sumPd += buff10.givesPd;
            sumMd += buff10.givesMd;
            sumPa += buff10.givesPa;
            sumMa += buff10.givesMa;
            highReqStrength = buff10.reqStrength > highReqStrength ? buff10.reqStrength : highReqStrength;
            highReqDexterity = buff10.reqDexterity > highReqDexterity ? buff10.reqDexterity : highReqDexterity;
            highReqAccuracy = buff10.reqAccuracy > highReqAccuracy ? buff10.reqAccuracy : highReqAccuracy;
            highReqEndurance = buff10.reqEndurance > highReqEndurance ? buff10.reqEndurance : highReqEndurance;
            highReqEarth = buff10.reqEarth > highReqEarth ? buff10.reqEarth : highReqEarth;
            highReqAir = buff10.reqAir > highReqAir ? buff10.reqAir : highReqAir;
            highReqWater = buff10.reqWater > highReqWater ? buff10.reqWater : highReqWater;
            highReqFire = buff10.reqFire > highReqFire ? buff10.reqFire : highReqFire;
        }

        if (crystalPD) {
            sumPd += crystalPD.givesPd;
            sumMd += crystalPD.givesMd;
            sumPa += crystalPD.givesPa;
            sumMa += crystalPD.givesMa;
        }
        if (crystalMD) {
            sumPd += crystalMD.givesPd;
            sumMd += crystalMD.givesMd;
            sumPa += crystalMD.givesPa;
            sumMa += crystalMD.givesMa;
        }
        if (crystalPA) {
            sumPd += crystalPA.givesPd;
            sumMd += crystalPA.givesMd;
            sumPa += crystalPA.givesPa;
            sumMa += crystalPA.givesMa;
        }
        if (crystalMA) {
            sumPd += crystalMA.givesPd;
            sumMd += crystalMA.givesMd;
            sumPa += crystalMA.givesPa;
            sumMa += crystalMA.givesMa;
        }

        dispatch(setStrengthStats(sumStrength));
        dispatch(setDexterityStats(sumDexterity));
        dispatch(setAccuracyStats(sumAccuracy));
        dispatch(setEnduranceStats(sumEndurance));
        dispatch(setEarthStats(sumEarth));
        dispatch(setAirStats(sumAir));
        dispatch(setWaterStats(sumWater));
        dispatch(setFireStats(sumFire));
        dispatch(setHPStats(sumHp));
        dispatch(setPranaStats(sumPrana));
        dispatch(setPDStats(sumPd));
        dispatch(setMDStats(sumMd));
        dispatch(setPAStats(sumPa));
        dispatch(setMAStats(sumMa));
        dispatch(setRequireStrength(highReqStrength));
        dispatch(setRequireDexterity(highReqDexterity));
        dispatch(setRequireAccuracy(highReqAccuracy));
        dispatch(setRequireEndurance(highReqEndurance));
        dispatch(setRequireEarth(highReqEarth));
        dispatch(setRequireAir(highReqAir));
        dispatch(setRequireWater(highReqWater));
        dispatch(setRequireFire(highReqFire));
    })

    const title = titleStats - (strength + dexterity + accuracy + endurance);
    const degree = degreeStats - (earth + air + water + fire);

    const handleClear = () => {
        dispatch(dollClear());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay('none');
        if (!name) {
            return true;
        }

        const doll = {
            name: name,
            profession: profession ? profession : null,
            titleLevel: titleLevel,
            degreeLevel: degreeLevel,
            titleGreatness: Number(titleGreatness),
            degreeGreatness: Number(degreeGreatness),
            strength: strength,
            dexterity: dexterity,
            accuracy: accuracy,
            endurance: endurance,
            earth: earth,
            air: air,
            water: water,
            fire: fire,
            crystalMA: crystalMA ? crystalMA : null,
            crystalPA: crystalPA ? crystalPA : null,
            crystalMD: crystalMD ? crystalMD : null,
            crystalPD: crystalPD ? crystalPD : null,
            helmet: helmet ? helmet : null,
            amulet: amulet ? amulet : null,
            shield: shield ? shield : null,
            gloves: gloves ? gloves : null,
            jacket: jacket ? jacket : null,
            bracelet1: bracelet1 ? bracelet1 : null,
            bracelet2: bracelet2 ? bracelet2 : null,
            belt: belt ? belt : null,
            ring1: ring1 ? ring1 : null,
            ring2: ring2 ? ring2 : null,
            ring3: ring3 ? ring3 : null,
            ring4: ring4 ? ring4 : null,
            pants: pants ? pants : null,
            boots: boots ? boots : null,
            weapon: weapon ? weapon : null,
            professionItem: profession ? profession : null,
            buff1: buff1 ? buff1 : null,
            buff2: buff2 ? buff2 : null,
            buff3: buff3 ? buff3 : null,
            buff4: buff4 ? buff4 : null,
            buff5: buff5 ? buff5 : null,
            buff6: buff6 ? buff6 : null,
            buff7: buff7 ? buff7 : null,
            buff8: buff8 ? buff8 : null,
            buff9: buff9 ? buff9 : null,
            buff10: buff10 ? buff10 : null,
            slot1: slot1 ? slot1 : null,
            slot2: slot2 ? slot2 : null,
            slot3: slot3 ? slot3 : null,
            slot4: slot4 ? slot4 : null,
            slot5: slot5 ? slot5 : null,
            slot6: slot6 ? slot6 : null,
            slot7: slot7 ? slot7 : null,
            slot8: slot8 ? slot8 : null
        };

        if (user && token) {
            dispatch(dollSaveInitiate(doll, token));
            dispatch(dollsInitiate(token));
            setDollNameExists(false);
            setDollName('');
            setName('');
        } else {
            dispatch(loginError('You need to log in first to save your doll'));
            navigate('/login');
        }
    }

    const handleIncrease = (e) => {
        switch (e.target.id) {
            case 'strength-up':
                dispatch(increaseStrength());
                break;
            case 'dexterity-up':
                dispatch(increaseDexterity());
                break;
            case 'accuracy-up':
                dispatch(increaseAccuracy());
                break;
            case 'endurance-up':
                dispatch(increaseEndurance());
                break;
            case 'earth-up':
                dispatch(increaseEarth());
                break;
            case 'air-up':
                dispatch(increaseAir());
                break;
            case 'water-up':
                dispatch(increaseWater());
                break;
            case 'fire-up':
                dispatch(increaseFire());
                break;
            default:
                break;
        }
    }

    const handleDecrease = (e) => {
        switch (e.target.id) {
            case 'strength-down':
                if (strength > 0) {
                    dispatch(decreaseStrength());
                }
                break;
            case 'dexterity-down':
                if (dexterity > 0) {
                    dispatch(decreaseDexterity());
                }
                break;
            case 'accuracy-down':
                if (accuracy > 0) {
                    dispatch(decreaseAccuracy());
                }
                break;
            case 'endurance-down':
                if (endurance > 0) {
                    dispatch(decreaseEndurance());
                }
                break;
            case 'earth-down':
                if (earth > 0) {
                    dispatch(decreaseEarth());
                }
                break;
            case 'air-down':
                if (air > 0) {
                    dispatch(decreaseAir());
                }
                break;
            case 'water-down':
                if (water > 0) {
                    dispatch(decreaseWater());
                }
                break;
            case 'fire-down':
                if (fire > 0) {
                    dispatch(decreaseFire());
                }
                break;
            default:
                break;
        }
    }

    const makeObjectCopy = (object, string) => {
        const newObject = {};
        Object.assign(newObject, object);
        newObject.slot = string;
        return newObject;
    }

    function allowDrop(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("item");

        if (!data) {
            return true;
        }
        let transferItem = JSON.parse(data);


        if (!transferItem.id) {
            return true;
        }

        let parentId = e.target.parentNode.parentNode.parentNode.parentNode.id;

        switch (e.target.id) {
            case 'slot1':
                dispatch(setSlot1(makeObjectCopy(transferItem, 'Slot1')));
                break;
            case 'slot2':
                dispatch(setSlot2(makeObjectCopy(transferItem, 'Slot2')));
                break;
            case 'slot3':
                dispatch(setSlot3(makeObjectCopy(transferItem, 'Slot3')));
                break;
            case 'slot4':
                dispatch(setSlot4(makeObjectCopy(transferItem, 'Slot4')));
                break;
            case 'slot5':
                dispatch(setSlot5(makeObjectCopy(transferItem, 'Slot5')));
                break;
            case 'slot6':
                dispatch(setSlot6(makeObjectCopy(transferItem, 'Slot6')));
                break;
            case 'slot7':
                dispatch(setSlot7(makeObjectCopy(transferItem, 'Slot7')));
                break;
            case 'slot8':
                dispatch(setSlot8(makeObjectCopy(transferItem, 'Slot8')));
                break;
            default:
                break;
        }
        switch (e.target.parentNode.id) {
            case 'slot1':
                dispatch(setSlot1(makeObjectCopy(transferItem, 'Slot1')));
                break;
            case 'slot2':
                dispatch(setSlot2(makeObjectCopy(transferItem, 'Slot2')));
                break;
            case 'slot3':
                dispatch(setSlot3(makeObjectCopy(transferItem, 'Slot3')));
                break;
            case 'slot4':
                dispatch(setSlot4(makeObjectCopy(transferItem, 'Slot4')));
                break;
            case 'slot5':
                dispatch(setSlot5(makeObjectCopy(transferItem, 'Slot5')));
                break;
            case 'slot6':
                dispatch(setSlot6(makeObjectCopy(transferItem, 'Slot6')));
                break;
            case 'slot7':
                dispatch(setSlot7(makeObjectCopy(transferItem, 'Slot7')));
                break;
            case 'slot8':
                dispatch(setSlot8(makeObjectCopy(transferItem, 'Slot8')));
                break;
            default:
                break;
        }
        switch (parentId) {
            case 'slot1':
                dispatch(setSlot1(makeObjectCopy(transferItem, 'Slot1')));
                break;
            case 'slot2':
                dispatch(setSlot2(makeObjectCopy(transferItem, 'Slot2')));
                break;
            case 'slot3':
                dispatch(setSlot3(makeObjectCopy(transferItem, 'Slot3')));
                break;
            case 'slot4':
                dispatch(setSlot4(makeObjectCopy(transferItem, 'Slot4')));
                break;
            case 'slot5':
                dispatch(setSlot5(makeObjectCopy(transferItem, 'Slot5')));
                break;
            case 'slot6':
                dispatch(setSlot6(makeObjectCopy(transferItem, 'Slot6')));
                break;
            case 'slot7':
                dispatch(setSlot7(makeObjectCopy(transferItem, 'Slot7')));
                break;
            case 'slot8':
                dispatch(setSlot8(makeObjectCopy(transferItem, 'Slot8')));
                break;
            default:
                break;
        }
    }

    const resetTitle = () => {
        dispatch(setStrength(0));
        dispatch(setDexterity(0));
        dispatch(setAccuracy(0));
        dispatch(setEndurance(0));
    }

    const resetDegree = () => {
        dispatch(setEarth(0));
        dispatch(setAir(0));
        dispatch(setWater(0));
        dispatch(setFire(0));
    }

    const resetSkills = () => {
        resetTitle();
        resetDegree();
    }

    const handleSetName = (e) => {
        e.preventDefault();
        setDollNameError(null);
        if (!name) {
            setDollNameError('Enter doll\'s name');
            return true;
        }
        setDollName(name);

        const exists = dolls.filter(doll => doll.name === name);

        if (exists[0]) {
            setDollNameExists(true);
        }
    }

    const handleCancel = () => {
        setName('');
        setDollName('');
        setDollNameExists(false);
        setDisplay('none');
    }

    const handleFocus = () => {
        setDollNameError(null);
        setDisplay('block');
        setName('');
    }

    const handleSelect = (e) => {
        const num = e.target.value;
        const id = e.target.id;
        const text = e.target.options[num - 1].text;

        switch (id) {
            case 'title-great':
                dispatch(setTitleGreatness(num));
                break;
            case 'degree-great':
                dispatch(setDegreeGreatness(num));
                break;
            default:
                break;
        }
    }

    const handleClick = () => {
        handleCancel();
        setDisplay('block');
    }

    return (<div style={{paddingBottom: eng ? 10 : 9}}>
        <header style={{borderBottom: '1px solid rgb(234, 201, 136)', height: 37}}>
            <div style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: eng ? 0 : 3}}>
                <Button className="button-hover" style={{
                    fontSize: eng ? '0.875rem' : '0.7rem'
                }} onClick={resetSkills}>
                    {buttons.resetSkills}
                </Button>
                <div className="save-button">
                    <Button className="button-hover" style={{fontSize: eng ? '0.875rem' : '0.7rem'}}
                            onClick={handleClick}>
                        {buttons.save}
                    </Button>
                    <div className="modal" style={{display: display}} onClick={handleCancel}></div>
                    <div className="save-popup" style={{
                        flexDirection: 'column',
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                        display: display
                    }}>
                        {dollName ? (<div>
                            {dollNameExists ? (<div>
                                <div>
                                    {texts.dollWithName}
                                    <b style={{color: 'white'}}>{dollName}</b>
                                    {texts.alreadyExists}
                                    <b style={{color: 'white'}}>{dollName}</b>
                                    {texts.doll}
                                </div>
                                <div style={{
                                    justifyContent: 'space-evenly', display: 'flex', marginTop: 8
                                }}>
                                    <Button className="button-hover"
                                            onClick={handleSubmit}>{buttons.confirm}</Button>
                                    <Button className="button-hover"
                                            onClick={handleCancel}>{buttons.cancel}</Button>
                                </div>
                            </div>) : (<div>
                                <div>{texts.saveDoll}<b
                                    style={{color: 'white'}}>{dollName}</b>?
                                </div>
                                <div style={{
                                    justifyContent: 'space-evenly', display: 'flex', marginTop: 8
                                }}>
                                    <Button className="button-hover"
                                            onClick={handleSubmit}>{buttons.confirm}</Button>
                                    <Button className="button-hover"
                                            onClick={handleCancel}>{buttons.cancel}</Button>
                                </div>
                            </div>)}
                        </div>) : (<div>
                            <div style={{marginBottom: 8}}>{texts.dollsName}</div>
                            <form action="" onSubmit={handleSetName}
                                  style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <input type="text" name="save-name" placeholder={inputs.name} value={name} style={{width: '90%', marginTop: 12}}
                                       onClick={handleFocus}
                                       onChange={e => setName(e.target.value)}/>
                                <Button className="button-hover" type="submit"
                                        style={{fontSize: eng ? '0.875rem' : '0.75rem', marginTop: 12}}
                                        sx={{ml: 1}}>{buttons.setName}</Button>
                            </form>
                            {dollNameError && (<div style={{color: 'white', marginTop: 10}}>
                                {dollNameError}
                            </div>)}
                        </div>)}
                    </div>
                </div>
                <Button className="button-hover" style={{
                    fontSize: eng ? '0.875rem' : '0.7rem'
                }} onClick={handleClear}>
                    {buttons.resetItems}
                </Button>
            </div>
        </header>
        <div style={{display: 'flex', justifyContent: 'space-between', height: 60}}>
            <div></div>
            <div style={{
                display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: 200
            }}>
                <div style={{
                    display: 'flex', textAlign: 'center', alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex', textAlign: 'center', alignItems: 'center'
                    }}>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/tl`} alt="degree level"/>
                        <b>
                            <Stat stat={titleLevel} itemStat={0} statName='title'/>
                        </b>
                    </div>
                    <div>
                        <select className="select-great" id="title-great"
                                style={{
                                    fontSize: eng ? '0.875rem' : '0.85rem',
                                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center !important`
                                }} onChange={handleSelect}
                                value={titleGreatness}>
                            <option value="1">{selects.select1}</option>
                            <option value="2">{selects.select2}</option>
                            <option value="3">{selects.select3}</option>
                            <option value="4">{selects.select4}</option>
                        </select>
                    </div>
                </div>
                <div style={{
                    display: 'flex', textAlign: 'center', alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center'
                    }}>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dl`} alt="degree level"/>
                        <b>
                            <Stat stat={degreeLevel} itemStat={0} statName='degree'/>
                        </b>
                    </div>
                    <div>
                        <select className="select-great" id="degree-great"
                                style={{
                                    fontSize: eng ? '0.875rem' : '0.85rem',
                                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center !important`
                                }} onChange={handleSelect}
                                value={degreeGreatness}>
                            <option value="1">{selects.select1}</option>
                            <option value="2">{selects.select2}</option>
                            <option value="3">{selects.select3}</option>
                            <option value="4">{selects.select4}</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            height: 340,
            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/doll-background) center no-repeat`
        }}>
            <div className="doll-column" style={{marginLeft: 28, marginTop: 20}}>

                <div className={crystalPD ? "slot special contains-item" : "slot special"}
                     style={{marginTop: 91, marginLeft: 22}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                         alt=""/>
                    {crystalPD && (<Item itemClassName="doll-item" item={crystalPD} dollItem='true'/>)}
                </div>
                <div className={crystalMD ? "slot special contains-item" : "slot special"} style={{marginLeft: 22}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                         alt=""/>
                    {crystalMD && (<Item itemClassName="doll-item" item={crystalMD} dollItem='true'/>)}
                </div>
                <div className={crystalPA ? "slot special contains-item" : "slot special"} style={{marginLeft: 22}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                         alt=""/>
                    {crystalPA && (<Item itemClassName="doll-item" item={crystalPA} dollItem='true'/>)}
                </div>
                <div className={crystalMA ? "slot special contains-item" : "slot special"} style={{marginLeft: 22}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                         alt=""/>
                    {crystalMA && (<Item itemClassName="doll-item" item={crystalMA} dollItem='true'/>)}
                </div>
            </div>
            <div className="doll-column" style={{marginLeft: 10, marginTop: 3}}>
                <div className={helmet ? "slot helmet contains-item" : "slot helmet"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-helmet`} className="item-before" alt=""/>
                    {helmet && (<Item itemClassName="doll-item" item={helmet} dollItem='true'/>)}
                </div>
                <div className={amulet ? "slot amulet contains-item" : "slot amulet"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-amulet`} className="item-before" alt=""/>
                    {amulet && (<Item itemClassName="doll-item" item={amulet} dollItem='true'/>)}
                </div>
                <div className={shield ? "slot shield contains-item" : "slot shield"} style={{marginTop: 36}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-shield`} className="item-before" alt=""/>
                    {shield && (<Item itemClassName="doll-item" item={shield} dollItem='true'/>)}
                </div>
                <div className={bracelet1 ? "slot bracelet contains-item" : "slot bracelet"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-bracers`} className="item-before"
                         alt=""/>
                    {bracelet1 && (<Item itemClassName="doll-item" item={bracelet1} dollItem='true'/>)}
                </div>
                <div className={ring1 ? "slot ring contains-item" : "slot ring"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-rings`} className="item-before" alt=""/>
                    {ring1 && (<Item itemClassName="doll-item" item={ring1} dollItem='true'/>)}
                </div>
                <div className={ring2 ? "slot ring contains-item" : "slot ring"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-rings`} className="item-before" alt=""/>
                    {ring2 && (<Item itemClassName="doll-item" item={ring2} dollItem='true'/>)}
                </div>
            </div>
            <div className="doll-column" style={{marginLeft: 15, marginTop: 75}}>
                <div className={jacket ? "slot jacket contains-item" : "slot jacket"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-armor`} className="item-before" alt=""/>
                    {jacket && (<Item itemClassName="doll-item" item={jacket} dollItem='true'/>)}
                </div>
                <div className={belt ? "slot belt contains-item" : "slot belt"} style={{marginTop: 36}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-belt`} className="item-before" alt=""/>
                    {belt && (<Item itemClassName="doll-item" item={belt} dollItem='true'/>)}
                </div>
                <div className={pants ? "slot pants contains-item" : "slot pants"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-pants`} className="item-before" alt=""/>
                    {pants && (<Item itemClassName="doll-item" item={pants} dollItem='true'/>)}
                </div>
                <div className={boots ? "slot boots contains-item" : "slot boots"} style={{marginTop: 37}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-shoes`} className="item-before" alt=""/>
                    {boots && (<Item itemClassName="doll-item" item={boots} dollItem='true'/>)}
                </div>
            </div>
            <div className="doll-column" style={{marginLeft: 15, marginTop: 40}}>
                <div className={profession ? "slot special contains-item" : "slot special"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                         alt=""/>
                    {profession && (<Item itemClassName="doll-item" item={profession} dollItem='true'/>)}
                </div>
                <div className={gloves ? "slot gloves contains-item" : "slot gloves"} style={{marginTop: 37}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-gloves`} className="item-before" alt=""/>
                    {gloves && (<Item itemClassName="doll-item" item={gloves} dollItem='true'/>)}
                </div>
                <div className={bracelet2 ? "slot bracelet contains-item" : "slot bracelet"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-bracers`} className="item-before"
                         alt=""/>
                    {bracelet2 && (<Item itemClassName="doll-item" item={bracelet2} dollItem='true'/>)}
                </div>
                <div className={ring3 ? "slot ring contains-item" : "slot ring"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-rings`} className="item-before" alt=""/>
                    {ring3 && (<Item itemClassName="doll-item" item={ring3} dollItem='true'/>)}
                </div>
                <div className={ring4 ? "slot ring contains-item" : "slot ring"}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-rings`} className="item-before" alt=""/>
                    {ring4 && (<Item itemClassName="doll-item" item={ring4} dollItem='true'/>)}
                </div>
            </div>
            <div style={{
                display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginLeft: 15, marginTop: 40
            }}>
                <div style={{display: 'flex',}}>
                    <div className={weapon ? "slot special contains-item" : "slot special"}>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                             alt=""/>
                        {weapon && (<Item itemClassName="doll-item" item={weapon} dollItem='true'/>)}
                    </div>
                </div>
                <div style={{display: 'flex', marginBottom: 48}}>
                    <div className="doll-column">
                        <div className={buff10 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff10 && (<Item itemClassName="doll-item" item={buff10} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff8 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff8 && (<Item itemClassName="doll-item" item={buff8} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff6 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff6 && (<Item itemClassName="doll-item" item={buff6} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff4 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff4 && (<Item itemClassName="doll-item" item={buff4} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff2 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff2 && (<Item itemClassName="doll-item" item={buff2} dollItem='true' buff='true'/>)}
                        </div>
                    </div>
                    <div className="doll-column">
                        <div className={buff9 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff9 && (<Item itemClassName="doll-item" item={buff9} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff7 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff7 && (<Item itemClassName="doll-item" item={buff7} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff5 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff5 && (<Item itemClassName="doll-item" item={buff5} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff3 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff3 && (<Item itemClassName="doll-item" item={buff3} dollItem='true' buff='true'/>)}
                        </div>
                        <div className={buff1 ? "slot special contains-item" : "slot special"}>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/item-special`} className="item-before"
                                 alt=""/>
                            {buff1 && (<Item itemClassName="doll-item" item={buff1} dollItem='true' buff='true'/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop: -20}}>
            <div style={{textAlign: 'center'}}>{texts.extraSlots}</div>
            <div style={{justifyContent: 'center', display: 'flex', marginBottom: 10}}>
                <div className={slot1 ? "slot blank contains-item" : "slot blank"} id="slot1" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot1 && (<Item item={slot1} dollItem='true' slotItem='true'/>)}
                </div>
                <div className={slot2 ? "slot blank contains-item" : "slot blank"} id="slot2" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot2 && (<Item item={slot2} dollItem='true' slotItem='true'/>)}
                </div>
                <div className={slot3 ? "slot blank contains-item" : "slot blank"} id="slot3" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot3 && (<Item item={slot3} dollItem='true' slotItem='true'/>)}
                </div>
                <div className={slot4 ? "slot blank contains-item" : "slot blank"} id="slot4" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot4 && (<Item item={slot4} dollItem='true' slotItem='true'/>)}
                </div>
                <div className={slot5 ? "slot blank contains-item" : "slot blank"} id="slot5" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot5 && (<Item item={slot5} dollItem='true' slotItem='true'/>)}
                </div>
                <div className={slot6 ? "slot blank contains-item" : "slot blank"} id="slot6" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot6 && (<Item item={slot6} dollItem='true' slotItem='true'/>)}
                </div>
                <div className={slot7 ? "slot blank contains-item" : "slot blank"} id="slot7" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot7 && (<Item item={slot7} dollItem='true' slotItem='true'/>)}
                </div>
                <div className={slot8 ? "slot blank contains-item" : "slot blank"} id="slot8" onDrop={drop}
                     onDragOver={allowDrop}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" alt=""/>
                    {slot8 && (<Item item={slot8} dollItem='true' slotItem='true'/>)}
                </div>
            </div>


        </div>
        <div style={{borderTop: '1px solid rgb(234, 201, 136)'}}>
            <div style={{
                display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgb(234, 201, 136)'
            }}>
                <div className="column">
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/th`} width="19px" height="19px" alt=""/>
                        <div className="stat-field">
                            {hpStats + levelHp} / {Math.floor((hpStats + levelHp) * 1.15)}
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/td`} width="19px" height="19px" alt=""/>
                        <div className="stat-field">
                            {pdStats}
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ta`} width="19px" height="19px" alt=""/>
                        <div className="stat-field">
                            {paStats}
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dh`} width="19px" height="19px" alt=""/>
                        <div className="stat-field">
                            {pranaStats + levelPrana}
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dd`} width="19px" height="19px" alt=""/>
                        <div className="stat-field">
                            {mdStats}
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/da`} width="19px" height="19px" alt=""/>
                        <div className="stat-field">
                            {maStats}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgb(234, 201, 136)'
            }}>
                <div className="column">
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t1`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={strength === 0} id='strength-down'
                                onClick={handleDecrease}/>
                        <Stat statsAvailable={title} stat={strength} itemStat={strengthStats} reqStat={reqStrength}
                              statName='strength'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='strength-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqStrength}]
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t2`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={dexterity === 0} id='dexterity-down'
                                onClick={handleDecrease}/>
                        <Stat statsAvailable={title} stat={dexterity} itemStat={dexterityStats} reqStat={reqDexterity}
                              statName='dexterity'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='dexterity-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqDexterity}]
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t3`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={accuracy === 0} id='accuracy-down'
                                onClick={handleDecrease}/>
                        <Stat statsAvailable={title} stat={accuracy} itemStat={accuracyStats} reqStat={reqAccuracy}
                              statName='accuracy'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='accuracy-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqAccuracy}]
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t4`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={endurance === 0} id='endurance-down'
                                onClick={handleDecrease}/>
                        <Stat statsAvailable={title} stat={endurance} itemStat={enduranceStats} reqStat={reqEndurance}
                              statName='endurance'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='endurance-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqEndurance}]
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d1`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={earth === 0} id='earth-down' onClick={handleDecrease}/>
                        <Stat statsAvailable={degree} stat={earth} itemStat={earthStats} reqStat={reqEarth}
                              statName='earth'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='earth-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqEarth}]
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d2`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={air === 0} id='air-down' onClick={handleDecrease}/>
                        <Stat statsAvailable={degree} stat={air} itemStat={airStats} reqStat={reqAir} statName='air'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='air-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqAir}]
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d3`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={water === 0} id='water-down' onClick={handleDecrease}/>
                        <Stat statsAvailable={degree} stat={water} itemStat={waterStats} reqStat={reqWater}
                              statName='water'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='water-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqWater}]
                        </div>
                    </div>
                    <div className="row">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d4`} width="19px" height="19px" alt=""/>
                        <button className="down"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -18px center no-repeat`}}
                                disabled={fire === 0} id='fire-down' onClick={handleDecrease}/>
                        <Stat statsAvailable={degree} stat={fire} itemStat={fireStats} reqStat={reqFire}
                              statName='fire'/>
                        <button className="up"
                                style={{background: `transparent url(${process.env.REACT_APP_BACKEND_URL}/image/ctrls) -0px center no-repeat`}}
                                id='fire-up' onClick={handleIncrease}/>
                        <div className="number">
                            [{reqFire}]
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
                paddingTop: eng ? 5 : 8,
                height: eng ? 38 : 36
            }}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/tl`} alt="" style={{width: 24, height: 19}}/>
                    <div style={{
                        marginLeft: 10, width: 40, color: (title < 0) && 'white', fontWeight: (title < 0) && 'bold',
                        textAlign: 'center'
                    }}>
                        {title}
                    </div>
                </div>
                <Button
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    sx={{marginTop: 0}}
                    className="button-hover"
                    style={{fontSize: eng ? '0.875rem' : '0.7rem'}}
                >
                    {buttons.viewStats}
                </Button>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none'
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom', horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom', horizontal: 'center'
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <div className="popup">
                        <div style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                            display: 'flex',
                            borderBottom: '1px solid rgb(234, 201, 136)',
                            borderTop: '1px solid rgb(234, 201, 136)',
                        }}>
                            <div className="column">
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t1`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {strength}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t2`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {dexterity}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t3`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {accuracy}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/t4`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {endurance}
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d1`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {earth}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d2`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {air}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d3`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {water}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/d4`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {fire}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                        }}>
                            <div className="column">
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/tl`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {title}
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="row">
                                    <div className="popup-img">
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dl`} width="19px"
                                             height="19px" alt=""/>
                                    </div>
                                    <div className="popup-stat">
                                        {degree}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{
                        marginLeft: 10, width: 40, color: (degree < 0) && 'white', fontWeight: (degree < 0) && 'bold',
                        textAlign: 'center'
                    }}>
                        {degree}
                    </div>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/dl`} alt="" style={{width: 24, height: 21}}/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 6}}>
                <div>
                    {texts.reset}
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Button style={{cursor: 'pointer', width: 80, textAlign: 'center'}} className="button-hover"
                        onClick={resetTitle}>
                    {buttons.resetTitle}
                </Button>
                <Button style={{cursor: 'pointer', width: 80, textAlign: 'center'}} className="button-hover"
                        onClick={resetSkills}>
                    {buttons.resetSkillsShort}
                </Button>
                <Button className="button-hover" onClick={resetDegree}>
                    {buttons.resetDegree}
                </Button>
            </div>
        </div>
    </div>);
};

export default DollContainer;