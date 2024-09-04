import * as React from 'react';
import Popover from '@mui/material/Popover';
import PopUp from './PopUp';
import '../styles/DollContainer.css';
import {
    setAmulet,
    setBelt,
    setBoots,
    setBracelet1,
    setBracelet2,
    setBuff1,
    setBuff10,
    setBuff2,
    setBuff3,
    setBuff4,
    setBuff5,
    setBuff6,
    setBuff7,
    setBuff8,
    setBuff9,
    setCrystalMA,
    setCrystalMD,
    setCrystalPA,
    setCrystalPD,
    setGloves,
    setHelmet,
    setJacket,
    setPants,
    setProfession,
    setRing1,
    setRing2,
    setRing3,
    setRing4,
    setShield,
    setWeapon,
    unsetAmulet,
    unsetBelt,
    unsetBoots,
    unsetBracelet1,
    unsetBracelet2,
    unsetBuff1,
    unsetBuff10,
    unsetBuff2,
    unsetBuff3,
    unsetBuff4,
    unsetBuff5,
    unsetBuff6,
    unsetBuff7,
    unsetBuff8,
    unsetBuff9,
    unsetCrystalMA,
    unsetCrystalMD,
    unsetCrystalPA,
    unsetCrystalPD,
    unsetGloves,
    unsetHelmet,
    unsetJacket,
    unsetPants,
    unsetProfession,
    unsetRing1,
    unsetRing2,
    unsetRing3,
    unsetRing4,
    unsetShield, unsetSlot1, unsetSlot2, unsetSlot3, unsetSlot4, unsetSlot5, unsetSlot6, unsetSlot7, unsetSlot8,
    unsetWeapon
} from '../store/doll/actions';
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
    selectDegreeLevel,
    selectDexterity,
    selectDexterityStats,
    selectEarth,
    selectEarthStats,
    selectEndurance,
    selectEnduranceStats,
    selectFire,
    selectFireStats,
    selectGloves,
    selectHelmet,
    selectJacket,
    selectPants,
    selectProfession,
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
    selectTitleLevel,
    selectWater,
    selectWaterStats,
    selectWeapon
} from '../store/doll/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef, useState} from "react";


const Item = ({item, opacity, dollItem, buff, itemClassName, slotItem}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
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
    const prefix = item.prefix;

    const [available, setAvailable] = useState(true);

    useEffect(() => {
        setPrefixValues();
        setAvailable(true);
        isAvailable();
    })

    const setPrefixValues = () => {
        if (prefix) {
            if (item.nameEng.includes(prefix.nameEng)) {
                return true;
            }
            const multiply = (number) => {
                const prefix_additional_stat_multiplier = [0, 1, 2, 3, 5, 7, 9, 12, 15, 18, 23, 28, 34, 37, 42, 48];

                return number * prefix_additional_stat_multiplier[item.level];
            }

            item.nameEng += ` of ${prefix.nameEng}`;
            item.nameRu += ` ${prefix.nameRu}`;
            item.cooldown += item.cooldown * (prefix.additionalCooldown / 100);
            item.distance += item.distance * (prefix.additionalDistance / 100);
            item.dmgSpread += prefix.additionalDmgSpread;
            item.givesStrength += multiply(prefix.additionalGivenStrength);
            item.givesDexterity += multiply(prefix.additionalGivenDexterity);
            item.givesAccuracy += multiply(prefix.additionalGivenAccuracy);
            item.givesEndurance += multiply(prefix.additionalGivenEndurance);
            item.givesEarth += multiply(prefix.additionalGivenEarth);
            item.givesAir += multiply(prefix.additionalGivenAir);
            item.givesWater += multiply(prefix.additionalGivenWater);
            item.givesFire += multiply(prefix.additionalGivenFire);
            item.givesHp += multiply(prefix.additionalGivenHP);
            item.givesPrana += multiply(prefix.additionalGivenPrana);
            item.givesMa += multiply(prefix.additionalGivenMa);
            item.givesPa += multiply(prefix.additionalGivenPa);
            item.givesMd -= multiply(prefix.additionalReducedMD);
            item.givesPd -= multiply(prefix.additionalReducedPD);
            item.effectDuration = prefix.effectDuration;
            item.effectIconName = prefix.effectIconName;
            item.effectTextEng = prefix.effectTextEng;
            item.effectTextRu = prefix.effectTextRu;
            item.avgMd -= multiply(prefix.reducesAvgMd);
            item.avgPd -= multiply(prefix.reducesAvgPd);
            item.avgPranaD -= multiply(prefix.reducesAvgPranaDmg);
            if (prefix.nameEng !== 'dragon' && prefix.nameEng !== 'elements' && prefix.nameEng !== 'rule'
                && prefix.nameEng !== 'vortex' && prefix.nameEng !== 'fetter' && prefix.nameEng !== 'cleansing'
                && prefix.nameEng !== 'curse'
            ) {
                item.reqStrength += multiply(prefix.reqAdditionalStrength);
                item.reqDexterity += multiply(prefix.reqAdditionalDexterity);
                item.reqAccuracy += multiply(prefix.reqAdditionalAccuracy);
                item.reqEndurance += multiply(prefix.reqAdditionalEndurance);
                item.reqEarth += multiply(prefix.reqAdditionalEarth);
                item.reqAir += multiply(prefix.reqAdditionalAir);
                item.reqWater += multiply(prefix.reqAdditionalWater);
                item.reqFire += multiply(prefix.reqAdditionalFire);
                item.reqPrana += prefix.reqAdditionalPrana;
            } else {
                if (item.reqStrength > 0) {
                    item.reqStrength += multiply(prefix.reqAdditionalStrength);
                }
                if (item.reqDexterity > 0) {
                    item.reqDexterity += multiply(prefix.reqAdditionalDexterity);
                }
                if (item.reqAccuracy > 0) {
                    item.reqAccuracy += multiply(prefix.reqAdditionalAccuracy);
                }
                if (item.reqEndurance > 0) {
                    item.reqEndurance += multiply(prefix.reqAdditionalEndurance);
                }
                if (item.reqEarth > 0) {
                    item.reqEarth += multiply(prefix.reqAdditionalEarth);
                }
                if (item.reqAir > 0) {
                    item.reqAir += multiply(prefix.reqAdditionalAir);
                }
                if (item.reqWater > 0) {
                    item.reqWater += multiply(prefix.reqAdditionalWater);
                }
                if (item.reqFire > 0) {
                    item.reqFire += multiply(prefix.reqAdditionalFire);
                }
            }
        }
    }

    const isAvailable = () => {
        if ((item.reqStrength > 0) && item.reqStrength > (strength + strengthStats)) {
            setAvailable(false);
        } else if (item.reqDexterity > 0 && item.reqDexterity > (dexterity + dexterityStats)) {
            setAvailable(false);
        } else if (item.reqAccuracy > 0 && item.reqAccuracy > (accuracy + accuracyStats)) {
            setAvailable(false);
        } else if (item.reqEndurance > 0 && item.reqEndurance > (endurance + enduranceStats)) {
            setAvailable(false);
        } else if (item.reqEarth > 0 && item.reqEarth > (earth + earthStats)) {
            setAvailable(false);
        } else if (item.reqAir > 0 && item.reqAir > (air + airStats)) {
            setAvailable(false);
        } else if (item.reqWater > 0 && item.reqWater > (water + waterStats)) {
            setAvailable(false);
        } else if (item.reqFire > 0 && item.reqFire > (fire + fireStats)) {
            setAvailable(false);
        } else if ((item.reqTitleLvl > 0 && item.reqTitleLvl > titleLevel)
            || (item.maxTitleLvl > 0 && item.maxTitleLvl < titleLevel)) {
            setAvailable(false);
        } else if ((item.reqDegreeLvl > 0 && item.reqDegreeLvl > degreeLevel)
            || (item.maxDegreeLvl > 0 && item.maxDegreeLvl < degreeLevel)) {
            setAvailable(false);
        } else if (item.reqProfessionNameEng) {
            if (!profession || profession.professionNameEng !== item.reqProfessionNameEng
                || item.reqProfessionLvl > profession.professionLvl) {
                setAvailable(false);
            }
        } else {
            setAvailable(true);
        }
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const makeObjectCopy = (object, string) => {
        const newObject = {};
        Object.assign(newObject, object);
        newObject.slot = string;
        return newObject;
    }

    const slotSwitch = () => {
        switch (item.typeNameEng) {
            case 'Helmet':
                dispatch(setHelmet(makeObjectCopy(item, 'Helmet')));
                break;
            case 'Amulet':
                dispatch(setAmulet(makeObjectCopy(item, 'Amulet')));
                break;
            case 'Gloves':
                dispatch(setGloves(makeObjectCopy(item, 'Gloves')));
                break;
            case 'Cuirass/Robe':
                dispatch(setJacket(makeObjectCopy(item, 'Jacket')));
                break;
            case 'Shield':
                dispatch(setShield(makeObjectCopy(item, 'Shield')));
                break;
            case 'Bracelet':
                if (!bracelet1) {
                    dispatch(setBracelet1(makeObjectCopy(item, 'Bracelet1')));
                } else {
                    dispatch(setBracelet2(makeObjectCopy(item, 'Bracelet2')));
                }
                break;
            case 'Belt':
                dispatch(setBelt(makeObjectCopy(item, 'Belt')));
                break;
            case 'Ring':
                if (!ring1) {
                    dispatch(setRing1(makeObjectCopy(item, 'Ring1')));
                } else if (!ring2) {
                    dispatch(setRing2(makeObjectCopy(item, 'Ring2')));
                } else if (!ring3) {
                    dispatch(setRing3(makeObjectCopy(item, 'Ring3')));
                } else {
                    dispatch(setRing4(makeObjectCopy(item, 'Ring4')));
                }
                break;
            case 'Pants':
                dispatch(setPants(makeObjectCopy(item, 'Pants')));
                break;
            case 'Boots':
                dispatch(setBoots(makeObjectCopy(item, 'Boots')));
                break;
            case 'Weapon':
                dispatch(setWeapon(makeObjectCopy(item, 'Weapon')));
                break;
            case 'Guild':
                dispatch(setProfession(makeObjectCopy(item, 'Guild')));
                break;
            case 'Ability':
            case 'Powder':
            case 'Mantra':
            case 'Flag':
                if (buff1?.nameEng === item.nameEng && buff1.getType === item.getType) {
                    dispatch(setBuff1(makeObjectCopy(item, 'Buff1')));
                    return;
                }
                if (buff2?.nameEng === item.nameEng && buff2.getType === item.getType) {
                    dispatch(setBuff2(makeObjectCopy(item, 'Buff2')));
                    return;
                }
                if (buff3?.nameEng === item.nameEng && buff3.getType === item.getType) {
                    dispatch(setBuff3(makeObjectCopy(item, 'Buff3')));
                    return;
                }
                if (buff4?.nameEng === item.nameEng && buff4.getType === item.getType) {
                    dispatch(setBuff4(makeObjectCopy(item, 'Buff4')));
                    return;
                }
                if (buff5?.nameEng === item.nameEng && buff5.getType === item.getType) {
                    dispatch(setBuff5(makeObjectCopy(item, 'Buff5')));
                    return;
                }
                if (buff6?.nameEng === item.nameEng && buff6.getType === item.getType) {
                    dispatch(setBuff6(makeObjectCopy(item, 'Buff6')));
                    return;
                }
                if (buff7?.nameEng === item.nameEng && buff7.getType === item.getType) {
                    dispatch(setBuff7(makeObjectCopy(item, 'Buff7')));
                    return;
                }
                if (buff8?.nameEng === item.nameEng && buff8.getType === item.getType) {
                    dispatch(setBuff8(makeObjectCopy(item, 'Buff8')));
                    return;
                }
                if (buff9?.nameEng === item.nameEng && buff9.getType === item.getType) {
                    dispatch(setBuff9(makeObjectCopy(item, 'Buff9')));
                    return;
                }
                if (buff10?.nameEng === item.nameEng && buff10.getType === item.getType) {
                    dispatch(setBuff10(makeObjectCopy(item, 'Buff10')));
                    return;
                }
                if (item.avgMd > 0 || item.avgPd > 0 || item.avgPranaD > 0) {
                    dispatch(setWeapon(makeObjectCopy(item, 'Weapon')));
                    break;
                }
                if (item.effectIconName) {
                    if (!buff1) {
                        dispatch(setBuff1(makeObjectCopy(item, 'Buff1')));
                    } else if (!buff2) {
                        dispatch(setBuff2(makeObjectCopy(item, 'Buff2')));
                    } else if (!buff3) {
                        dispatch(setBuff3(makeObjectCopy(item, 'Buff3')));
                    } else if (!buff4) {
                        dispatch(setBuff4(makeObjectCopy(item, 'Buff4')));
                    } else if (!buff5) {
                        dispatch(setBuff5(makeObjectCopy(item, 'Buff5')));
                    } else if (!buff6) {
                        dispatch(setBuff6(makeObjectCopy(item, 'Buff6')));
                    } else if (!buff7) {
                        dispatch(setBuff7(makeObjectCopy(item, 'Buff7')));
                    } else if (!buff8) {
                        dispatch(setBuff8(makeObjectCopy(item, 'Buff8')));
                    } else if (!buff9) {
                        dispatch(setBuff9(makeObjectCopy(item, 'Buff9')));
                    } else {
                        dispatch(setBuff10(makeObjectCopy(item, 'Buff10')));
                    }
                }

                break;
            case 'Crystal':
                const words = item.nameEng.split(" ");
                const lastWord = words[words.length - 1];

                switch (lastWord) {
                    case 'power':
                        dispatch(setCrystalPD(makeObjectCopy(item, 'CrystalPD')));
                        break;
                    case 'energy':
                        dispatch(setCrystalMD(makeObjectCopy(item, 'CrystalMD')));
                        break;
                    case 'stability':
                        dispatch(setCrystalPA(makeObjectCopy(item, 'CrystalPA')));
                        break;
                    case 'reflection':
                        dispatch(setCrystalMA(makeObjectCopy(item, 'CrystalMA')));
                        break;
                }
                break;
            default:
                break;
        }
    }
    const handleClick = () => {
        setAnchorEl(null);
        if (!item.slot) {
            slotSwitch();
        } else {
            switch (item.slot) {
                case 'Helmet':
                    dispatch(unsetHelmet());
                    break;
                case 'Amulet':
                    dispatch(unsetAmulet());
                    break;
                case 'Gloves':
                    dispatch(unsetGloves());
                    break;
                case 'Jacket':
                    dispatch(unsetJacket());
                    break;
                case 'Shield':
                    dispatch(unsetShield());
                    break;
                case 'Bracelet1':
                    dispatch(unsetBracelet1());
                    break;
                case 'Bracelet2':
                    dispatch(unsetBracelet2());
                    break;
                case 'Belt':
                    dispatch(unsetBelt());
                    break;
                case 'Ring1':
                    dispatch(unsetRing1());
                    break;
                case 'Ring2':
                    dispatch(unsetRing2());
                    break;
                case 'Ring3':
                    dispatch(unsetRing3());
                    break;
                case 'Ring4':
                    dispatch(unsetRing4());
                    break;
                case 'Pants':
                    dispatch(unsetPants());
                    break;
                case 'Boots':
                    dispatch(unsetBoots());
                    break;
                case 'Weapon':
                    dispatch(unsetWeapon());
                    break;
                case 'Guild':
                    dispatch(unsetProfession());
                    break;
                case 'Powder':
                case 'Mantra':
                case 'Ability':
                case 'Buff1':
                    dispatch(unsetBuff1());
                    break;
                case 'Buff2':
                    dispatch(unsetBuff2());
                    break;
                case 'Buff3':
                    dispatch(unsetBuff3());
                    break;
                case 'Buff4':
                    dispatch(unsetBuff4());
                    break;
                case 'Buff5':
                    dispatch(unsetBuff5());
                    break;
                case 'Buff6':
                    dispatch(unsetBuff6());
                    break;
                case 'Buff7':
                    dispatch(unsetBuff7());
                    break;
                case 'Buff8':
                    dispatch(unsetBuff8());
                    break;
                case 'Buff9':
                    dispatch(unsetBuff9());
                    break;
                case 'Buff10':
                    dispatch(unsetBuff10());
                    break;
                case 'CrystalPD':
                    dispatch(unsetCrystalPD());
                    break;
                case 'CrystalMD':
                    dispatch(unsetCrystalMD());
                    break;
                case 'CrystalPA':
                    dispatch(unsetCrystalPA());
                    break;
                case 'CrystalMA':
                    dispatch(unsetCrystalMA());
                    break;
                case 'Slot1':
                    dispatch(unsetSlot1());
                    break;
                case 'Slot2':
                    dispatch(unsetSlot2());
                    break;
                case 'Slot3':
                    dispatch(unsetSlot3());
                    break;
                case 'Slot4':
                    dispatch(unsetSlot4());
                    break;
                case 'Slot5':
                    dispatch(unsetSlot5());
                    break;
                case 'Slot6':
                    dispatch(unsetSlot6());
                    break;
                case 'Slot7':
                    dispatch(unsetSlot7());
                    break;
                case 'Slot8':
                    dispatch(unsetSlot8());
                    break;
                default:
                    break;
            }
        }
    }


    const useDoubleClick = (delay = 300) => {
        const timePassed = useRef(0);
        return (e) => {
            if (e.detail === 1) {
                setTimeout(() => {
                    if (Date.now() - timePassed.current >= delay) {
                        setAnchorEl(null);
                        slotSwitch();
                    }
                }, delay)
            }

            if (e.detail === 2) {
                timePassed.current = Date.now();
                handleClick();
            }
        }
    }

    const myDoubleClickCallback = useDoubleClick();

    function drag(e) {
        const transferitem = JSON.stringify(item);
        e.dataTransfer.setData("item", transferitem);
    }


    return (
        <div className={itemClassName} draggable="true" onDragStart={drag} style={{
            background: !available && ('rgb(115, 5, 5)'),
            maxHeight: 30,
            maxWidth: 31,
            minHeight: 30,
            minWidth: 31,
            borderRadius: '2px',
            margin: '3px 2px'
        }}>
            <div style={{
                maxHeight: 32,
                maxWidth: 32,
                minHeight: 32,
                minWidth: 32,
                borderRadius: '2px',
                opacity: opacity,
                margin: '-1px 0 0 0',
                cursor: 'pointer'

            }}
                 aria-owns={open ? 'mouse-over-popover' : undefined}
                 aria-haspopup="true"
                 onMouseEnter={handlePopoverOpen}
                 onMouseLeave={handlePopoverClose}
                 onClick={slotItem ? myDoubleClickCallback : handleClick}
                 onMouseDown={() => setAnchorEl(null)}
            >
                <div>
                    {buff ?
                        (<img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.effectIconName}`} alt=""/>)
                        : (<img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.iconName}`} alt=""/>)
                    }
                </div>
            </div>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                    opacity: opacity
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <PopUp item={item} />
            </Popover>
        </div>
    )
}


export default Item;