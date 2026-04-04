import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
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
    unsetShield,
    unsetSlot1,
    unsetSlot2,
    unsetSlot3,
    unsetSlot4,
    unsetSlot5,
    unsetSlot6,
    unsetSlot7,
    unsetSlot8,
    unsetWeapon
} from '../store/rightDoll/actions';
import {
    selectAccuracy,
    selectAccuracyStats,
    selectAir,
    selectAirStats,
    selectBracelet1,
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
    selectDegreeLevel,
    selectDexterity,
    selectDexterityStats,
    selectEarth,
    selectEarthStats,
    selectEndurance,
    selectEnduranceStats,
    selectFire,
    selectFireStats,
    selectProfession,
    selectRing1,
    selectRing2,
    selectRing3,
    selectStrength,
    selectStrengthStats,
    selectTitleLevel,
    selectWater,
    selectWaterStats,
} from '../store/rightDoll/selectors';
import {useDispatch, useSelector} from 'react-redux';
import '../styles/item.css';
import {setPrefixValues} from "./Item";

const ItemRight = ({item, opacity, prefix, dollItem, buff, itemClassName, slotItem, isRing, index}) => {
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
    const bracelet1 = useSelector(selectBracelet1);
    const ring1 = useSelector(selectRing1);
    const ring2 = useSelector(selectRing2);
    const ring3 = useSelector(selectRing3);
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
    const itemRef = useRef(null);
    const imageRef = useRef(null);

    const [available, setAvailable] = useState(true);

    if (isRing && prefix) {
        item.iconName = prefix.ringIconName
    }

    useEffect(() => {
        itemRef.current.style.animationDelay = `${index * 30}ms`;
    },[])

    useEffect(() => {
        setPrefixValues();
        setAvailable(true);
        isAvailable();
    })

    const handleMove = (el, func, funcUnset) => {
        if (!imageRef.current) return;
        if (!el) return;

        const targetDollItem = el.querySelector('.doll-item');

        if (targetDollItem) {
            targetDollItem.classList.add('doll-item--remove');
        }

        if (imageRef.current && el) {

            const from = imageRef.current.getBoundingClientRect();
            const to = el.getBoundingClientRect();

            let deltaX = (from.left - to.left - 2) * -1;
            let deltaY = (from.top - to.top - 1) * -1;

            const backgroundContainer = document.querySelector('.background-container');

            if (backgroundContainer) {
                const newImage = document.createElement('img');

                newImage.src = item.typeNameEng === 'Powder' || item.typeNameEng === 'Ability' ? `${process.env.REACT_APP_BACKEND_URL}/image/${item.effectIconName}` : `${process.env.REACT_APP_BACKEND_URL}/image/${item.iconName}`;

                newImage.style.position = 'absolute';
                newImage.style.top = `${from.top}px`;
                newImage.style.left = `${from.left}px`;
                newImage.className = 'item-move'

                backgroundContainer.appendChild(newImage);

                setTimeout(() => {
                    newImage.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                }, 20)

                setTimeout(() => {
                    dispatch(funcUnset)
                    dispatch(func)
                }, 220)

                setTimeout(() => {
                    backgroundContainer.removeChild(newImage);

                    if (targetDollItem) {
                        targetDollItem.classList.remove('doll-item--remove');
                    }
                }, 400)
            }
        }
    }

   setPrefixValues(item, prefix);

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
        let el;

        switch (item.typeNameEng) {
            case 'Helmet':
                el = document.getElementById("right-doll-slot__helmet")
                handleMove(el, setHelmet(makeObjectCopy(item, 'Helmet')), unsetHelmet());
                break;
            case 'Amulet':
                el = document.getElementById("right-doll-slot__amulet")
                handleMove(el, setAmulet(makeObjectCopy(item, 'Amulet')), unsetAmulet());
                break;
            case 'Gloves':
                el = document.getElementById("right-doll-slot__gloves")
                handleMove(el, setGloves(makeObjectCopy(item, 'Gloves')), unsetGloves());
                break;
            case 'Cuirass/Robe':
                el = document.getElementById("right-doll-slot__cuirass")
                handleMove(el, setJacket(makeObjectCopy(item, 'Jacket')), unsetJacket());
                break;
            case 'Shield':
                el = document.getElementById("right-doll-slot__shield")
                handleMove(el, setShield(makeObjectCopy(item, 'Shield')), unsetShield());
                break;
            case 'Bracelet':
                if (!bracelet1) {
                    el = document.getElementById("right-doll-slot__bracer1")
                    handleMove(el, setBracelet1(makeObjectCopy(item, 'Bracelet1')), unsetBracelet1());
                } else {
                    el = document.getElementById("right-doll-slot__bracer2")
                    handleMove(el, setBracelet2(makeObjectCopy(item, 'Bracelet2')), unsetBracelet2());
                }
                break;
            case 'Belt':
                el = document.getElementById("right-doll-slot__belt")
                handleMove(el, setBelt(makeObjectCopy(item, 'Belt')), unsetBelt());
                break;
            case 'Ring':
                if (!ring1) {
                    el = document.getElementById("right-doll-slot__ring1")
                    handleMove(el, setRing1(makeObjectCopy(item, 'Ring1')), unsetRing1());
                } else if (!ring2) {
                    el = document.getElementById("right-doll-slot__ring2")
                    handleMove(el, setRing2(makeObjectCopy(item, 'Ring2')), unsetRing2());
                } else if (!ring3) {
                    el = document.getElementById("right-doll-slot__ring3")
                    handleMove(el, setRing3(makeObjectCopy(item, 'Ring3')), unsetRing3());
                } else {
                    el = document.getElementById("right-doll-slot__ring4")
                    handleMove(el, setRing4(makeObjectCopy(item, 'Ring4')), unsetRing4());
                }
                break;
            case 'Pants':
                el = document.getElementById("right-doll-slot__pants")
                handleMove(el, setPants(makeObjectCopy(item, 'Pants')), unsetPants());
                break;
            case 'Boots':
                el = document.getElementById("right-doll-slot__boots")
                handleMove(el, setBoots(makeObjectCopy(item, 'Boots')), unsetBoots());
                break;
            case 'Weapon':
                el = document.getElementById("right-doll-slot__weapon")
                handleMove(el, setWeapon(makeObjectCopy(item, 'Weapon')), unsetWeapon());
                break;
            case 'Guild':
                el = document.getElementById("right-doll-slot__profession")
                handleMove(el, setProfession(makeObjectCopy(item, 'Guild')), unsetProfession());
                break;
            case 'Ability':
            case 'Powder':
            case 'Mantra':
            case 'Flag':
                if (buff1?.nameEng === item.nameEng && buff1.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff1")
                    handleMove(el, setBuff1(makeObjectCopy(item, 'Buff1')), unsetBuff1());
                    return;
                }
                if (buff2?.nameEng === item.nameEng && buff2.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff2")
                    handleMove(el, setBuff2(makeObjectCopy(item, 'Buff2')), unsetBuff2());
                    return;
                }
                if (buff3?.nameEng === item.nameEng && buff3.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff3")
                    handleMove(el, setBuff3(makeObjectCopy(item, 'Buff3')), unsetBuff3());
                    return;
                }
                if (buff4?.nameEng === item.nameEng && buff4.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff4")
                    handleMove(el, setBuff4(makeObjectCopy(item, 'Buff4')), unsetBuff4());
                    return;
                }
                if (buff5?.nameEng === item.nameEng && buff5.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff5")
                    handleMove(el, setBuff5(makeObjectCopy(item, 'Buff5')), unsetBuff5());
                    return;
                }
                if (buff6?.nameEng === item.nameEng && buff6.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff6")
                    handleMove(el, setBuff6(makeObjectCopy(item, 'Buff6')), unsetBuff6());
                    return;
                }
                if (buff7?.nameEng === item.nameEng && buff7.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff7")
                    handleMove(el, setBuff7(makeObjectCopy(item, 'Buff7')), unsetBuff7());
                    return;
                }
                if (buff8?.nameEng === item.nameEng && buff8.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff8")
                    handleMove(el, setBuff8(makeObjectCopy(item, 'Buff8')), unsetBuff8());
                    return;
                }
                if (buff9?.nameEng === item.nameEng && buff9.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff9")
                    handleMove(el, setBuff9(makeObjectCopy(item, 'Buff9')), unsetBuff9());
                    return;
                }
                if (buff10?.nameEng === item.nameEng && buff10.getType === item.getType) {
                    el = document.getElementById("right-doll-slot__buff10")
                    handleMove(el, setBuff10(makeObjectCopy(item, 'Buff10')), unsetBuff10());
                    return;
                }
                if (item.avgMd > 0 || item.avgPd > 0 || item.avgPranaD > 0) {
                    el = document.getElementById("right-doll-slot__weapon")
                    handleMove(el, setWeapon(makeObjectCopy(item, 'Weapon')), unsetWeapon());
                    break;
                }

                if (item.effectIconName) {
                    if (!buff1) {
                        el = document.getElementById("right-doll-slot__buff1")
                        handleMove(el, setBuff1(makeObjectCopy(item, 'Buff1')), unsetBuff1());
                    } else if (!buff2) {
                        el = document.getElementById("right-doll-slot__buff2")
                        handleMove(el, setBuff2(makeObjectCopy(item, 'Buff2')), unsetBuff2());
                    } else if (!buff3) {
                        el = document.getElementById("right-doll-slot__buff3")
                        handleMove(el, setBuff3(makeObjectCopy(item, 'Buff3')), unsetBuff3());
                    } else if (!buff4) {
                        el = document.getElementById("right-doll-slot__buff4")
                        handleMove(el, setBuff4(makeObjectCopy(item, 'Buff4')), unsetBuff4());
                    } else if (!buff5) {
                        el = document.getElementById("right-doll-slot__buff5")
                        handleMove(el, setBuff5(makeObjectCopy(item, 'Buff5')), unsetBuff5());
                    } else if (!buff6) {
                        el = document.getElementById("right-doll-slot__buff6")
                        handleMove(el, setBuff6(makeObjectCopy(item, 'Buff6')), unsetBuff6());
                    } else if (!buff7) {
                        el = document.getElementById("right-doll-slot__buff7")
                        handleMove(el, setBuff7(makeObjectCopy(item, 'Buff7')), unsetBuff7());
                    } else if (!buff8) {
                        el = document.getElementById("right-doll-slot__buff8")
                        handleMove(el, setBuff8(makeObjectCopy(item, 'Buff8')), unsetBuff8());
                    } else if (!buff9) {
                        el = document.getElementById("right-doll-slot__buff9")
                        handleMove(el, setBuff9(makeObjectCopy(item, 'Buff9')), unsetBuff9());
                    } else {
                        el = document.getElementById("right-doll-slot__buff10")
                        handleMove(el, setBuff10(makeObjectCopy(item, 'Buff10')), unsetBuff10());
                    }
                }

                break;
            case 'Crystal':
                const words = item.nameEng.split(" ");
                const lastWord = words[words.length - 1];

                switch (lastWord) {
                    case 'power':
                        el = document.getElementById("right-doll-slot__crystalPD")
                        handleMove(el, setCrystalPD(makeObjectCopy(item, 'CrystalPD')), unsetCrystalPD());
                        break;
                    case 'energy':
                        el = document.getElementById("right-doll-slot__crystalMD")
                        handleMove(el, setCrystalMD(makeObjectCopy(item, 'CrystalMD')), unsetCrystalMD());
                        break;
                    case 'stability':
                        el = document.getElementById("right-doll-slot__crystalPA")
                        handleMove(el, setCrystalPA(makeObjectCopy(item, 'CrystalPA')), unsetCrystalPA());
                        break;
                    case 'reflection':
                        el = document.getElementById("right-doll-slot__crystalMA")
                        handleMove(el, setCrystalMA(makeObjectCopy(item, 'CrystalMA')), unsetCrystalMA());
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    const handleClick = (e) => {
        e.stopPropagation()

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
                handleClick(e);
            }
        }
    }

    const myDoubleClickCallback = useDoubleClick();

    function drag(e) {
        const transferItem = JSON.stringify(item);
        e.dataTransfer.setData("item", transferItem);
    }


    return (
        <div className={`item ${itemClassName}`} draggable="true" onDragStart={drag} ref={itemRef} style={{
            background: !available && 'rgb(115, 5, 5)'
        }}>
            <div
                className="item__inner"
                style={{opacity: opacity}}
                id="over"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                onClick={e => slotItem ? myDoubleClickCallback(e) : handleClick(e)}
                onMouseDown={() => setAnchorEl(null)}
                onContextMenu={event => event.preventDefault()}
            >
                <div>
                    {
                        buff ? (<img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.effectIconName}`} alt="" ref={imageRef}/>)
                            : (<img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.iconName}`} alt="" ref={imageRef}/>)
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
                <PopUp item={item}/>
            </Popover>
        </div>
    )
}


export default ItemRight;