import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import '../styles/ItemsContainer.css';
import {useDispatch, useSelector} from 'react-redux';
import {selectError, selectItems, selectPrefixes} from '../store/items/selectors';
import Items from './Items';
import {itemsClear, itemsInitiate} from '../store/items/actions';
import {selectLang} from "../store/lang/selectors";
import {useLang} from "../use/lang";
import {useIsSmall} from "../use/IsSmall";
import {setItemHeader} from "../use/setItemHeader";

const ItemsContainer = ({isUtils = false, isRight = false}) => {
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const prefixes = useSelector(selectPrefixes);
    const error = useSelector(selectError);
    const eng = useSelector(selectLang);
    const {texts, buttons} = useLang()
    const [isSmall] = useIsSmall();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
        dispatch(itemsClear());
    }, [dispatch])

    const handleSelect = (e, type, el) => {
        e.preventDefault();

        handleOut(el);

        dispatch(itemsInitiate(type));
    }

    const handleOut = (id) => {
        if (document.getElementById(id).style.display !== 'none') {
            document.getElementById(id).style.display = 'none'
        }
    }

    const handleEnter = (id) => {
        if (document.getElementById(id).style.display !== 'flex') {
            document.getElementById(id).style.display = 'flex'
        }
    }

    return (<>
        <div className="items-container">
            <header style={{
                // background: isSmall ? `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center` : 'none',
                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
            }}>
                <ul className="menu-bar">
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}
                                onMouseEnter={() => handleEnter('dropdown-weapons')}
                                onMouseLeave={() => handleOut('dropdown-weapons')}
                                className="button secondary"
                        >{buttons.weapons}</Button>
                        <div className="dropdown-container" id="dropdown-weapons"
                             onMouseEnter={() => handleEnter('dropdown-weapons')}
                             onMouseLeave={() => handleOut('dropdown-weapons')}>
                            <div className="dropdown"
                                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}
                            >
                                <div className="doll-menu-item__row">
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">{texts.swords}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="sword-light"
                                                 onClick={e => handleSelect(e, 'sword-light', 'dropdown-weapons')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_sword23`}
                                                     alt=""/>{buttons.lightSwords}</div>
                                            <div className="doll-menu-item" id="sword-semi"
                                                 onClick={e => handleSelect(e, 'sword-semi', 'dropdown-weapons')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_sword43`}
                                                     alt=""/>{buttons.semiSworder}</div>
                                            <div className="doll-menu-item" id="sword-heavy"
                                                 onClick={e => handleSelect(e, 'sword-heavy', 'dropdown-weapons')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_sword33`}
                                                     alt=""/>{buttons.heavySwords}</div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">{texts.heavyWeapons}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="axe"
                                                 onClick={e => handleSelect(e, 'axe', 'dropdown-weapons')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_axe23`}
                                                     alt=""/>{buttons.axes}</div>
                                            <div className="doll-menu-item" id="hammer"
                                                 onClick={e => handleSelect(e, 'hammer', 'dropdown-weapons')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_dub33`}
                                                     alt=""/>{buttons.hammers}</div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">{texts.crossbows}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="crossbow-light"
                                                 onClick={e => handleSelect(e, 'crossbow-light', 'dropdown-weapons')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_arb13`}
                                                     alt=""/>{buttons.lightCrossbows}</div>
                                            <div className="doll-menu-item" id="crossbow-heavy"
                                                 onClick={e => handleSelect(e, 'crossbow-heavy', 'dropdown-weapons')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_arb23`}
                                                     alt=""/>{buttons.heavyCrossbows}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}
                                onMouseEnter={() => handleEnter('dropdown-armors')}
                                onMouseLeave={() => handleOut('dropdown-armors')}
                                className="button secondary"
                        >{buttons.armors}</Button>
                        <div className="dropdown-container" id="dropdown-armors"
                             onMouseEnter={() => handleEnter('dropdown-armors')}
                             onMouseLeave={() => handleOut('dropdown-armors')}>
                            <div className="dropdown"
                                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}>
                                <div className="doll-menu-item__row">
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">{texts.armors}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="helmet"
                                                 onClick={e => handleSelect(e, 'helmet', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_cap6`}
                                                     alt=""/>{buttons.helmets}</div>
                                            <div className="doll-menu-item" id="jacket"
                                                 onClick={e => handleSelect(e, 'jacket', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_bronya6`}
                                                     alt=""/>{buttons.cuirasses}</div>
                                            <div className="doll-menu-item" id="shield"
                                                 onClick={e => handleSelect(e, 'shield', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_sheet`}
                                                     alt=""/>{buttons.shields}</div>
                                            <div className="doll-menu-item" id="gloves"
                                                 onClick={e => handleSelect(e, 'gloves', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_gloves6`}
                                                     alt=""/>{buttons.gloves}</div>
                                            <div className="doll-menu-item" id="belt"
                                                 onClick={e => handleSelect(e, 'belt', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_belt6`}
                                                     alt=""/>{buttons.belts}</div>
                                            <div className="doll-menu-item" id="pants"
                                                 onClick={e => handleSelect(e, 'pants', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_pants6`}
                                                     alt=""/>{buttons.pants}</div>
                                            <div className="doll-menu-item" id="boots"
                                                 onClick={e => handleSelect(e, 'boots', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_bt6`}
                                                     alt=""/>{buttons.boots}</div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">{texts.robes}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="robe-green"
                                                 onClick={e => handleSelect(e, 'robe-green', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_roba31`}
                                                     alt=""/>{buttons.greenRobe}</div>
                                            <div className="doll-menu-item" id="robe-white"
                                                 onClick={e => handleSelect(e, 'robe-white', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_roba33`}
                                                     alt=""/>{buttons.whiteRobe}</div>
                                            <div className="doll-menu-item" id="robe-blue"
                                                 onClick={e => handleSelect(e, 'robe-blue', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_roba32`}
                                                     alt=""/>{buttons.blueRobe}</div>
                                            <div className="doll-menu-item" id="robe-red"
                                                 onClick={e => handleSelect(e, 'robe-red', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_roba34`}
                                                     alt=""/>{buttons.redRobe}</div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">{texts.jewerly}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="amulet"
                                                 onClick={e => handleSelect(e, 'amulet', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_amulet3`}
                                                     alt=""/>{buttons.amulets}</div>
                                            <div className="doll-menu-item" id="bracelet"
                                                 onClick={e => handleSelect(e, 'bracelet', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_bracelet3`}
                                                     alt=""/>{buttons.bracers}</div>
                                            <div className="doll-menu-item" id="ring-title"
                                                 onClick={e => handleSelect(e, 'ring-title', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/jw_diamring08`}
                                                     alt=""/>{buttons.titleRings}</div>
                                            <div className="doll-menu-item" id="ring-degree"
                                                 onClick={e => handleSelect(e, 'ring-degree', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/jw_diamring07`}
                                                     alt=""/>{buttons.degreeRings}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="doll-menu-item__row">
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">{texts.sets}: {texts.armors}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="armor-sets"
                                                 onClick={e => handleSelect(e, 'armor-set', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_cap6`}
                                                     alt=""/>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_gloves6`}
                                                     alt=""/>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_belt6`}
                                                     alt=""/>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_pants6`}
                                                     alt=""/>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_bt6`}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="doll-menu-item__header">{texts.jewerly}</div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="jewerly-sets"
                                                 onClick={e => handleSelect(e, 'jewerly-set', 'dropdown-armors')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_bracelet3`}
                                                     alt=""/>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_amulet3`}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}
                                onMouseEnter={() => handleEnter('dropdown-professions')}
                                onMouseLeave={() => handleOut('dropdown-professions')}
                                className="button secondary"
                        >{buttons.professions}</Button>
                        <div className="dropdown-container" id="dropdown-professions"
                             onMouseEnter={() => handleEnter('dropdown-professions')}
                             onMouseLeave={() => handleOut('dropdown-professions')}>
                            <div className="dropdown"
                                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}>
                                <div className="doll-menu-item__row">
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header"
                                        >
                                            {texts.multy}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="assassin"
                                                 onClick={e => handleSelect(e, 'assassin', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec01`}
                                                     alt=""/>
                                                <div>{buttons.assassin}</div>
                                            </div>
                                            <div className="doll-menu-item" id="barbarian"
                                                 onClick={e => handleSelect(e, 'barbarian', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec06`}
                                                     alt=""/>
                                                <div>{buttons.barbarian}</div>
                                            </div>
                                            <div className="doll-menu-item" id="blacksmith"
                                                 onClick={e => handleSelect(e, 'blacksmith', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec11`}
                                                     alt=""/>
                                                <div>{buttons.blacksmith}</div>
                                            </div>
                                            <div className="doll-menu-item" id="thief"
                                                 onClick={e => handleSelect(e, 'thief', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec08`}
                                                     alt=""/>
                                                <div>{buttons.thief}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header"
                                        >
                                            {texts.degree}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="archmage"
                                                 onClick={e => handleSelect(e, 'archmage', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec05`}
                                                     alt=""/>
                                                <div>{buttons.archmage}</div>
                                            </div>
                                            <div className="doll-menu-item" id="druid"
                                                 onClick={e => handleSelect(e, 'druid', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec07`}
                                                     alt=""/>
                                                <div>{buttons.druid}</div>
                                            </div>
                                            <div className="doll-menu-item" id="inquisitor"
                                                 onClick={e => handleSelect(e, 'inquisitor', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec03`}
                                                     alt=""/>
                                                <div>{buttons.inquisitor}</div>
                                            </div>
                                            <div className="doll-menu-item" id="necromancer"
                                                 onClick={e => handleSelect(e, 'necromancer', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec13`}
                                                     alt=""/>
                                                <div>{buttons.necromancer}</div>
                                            </div>
                                            <div className="doll-menu-item" id="sorcerer"
                                                 onClick={e => handleSelect(e, 'sorcerer', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec12`}
                                                     alt=""/>
                                                <div>{buttons.sorcerer}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header"
                                        >
                                            {texts.title}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="bandier"
                                                 onClick={e => handleSelect(e, 'bandier', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec14`}
                                                     alt=""/>
                                                <div>{buttons.bandier}</div>
                                            </div>
                                            <div className="doll-menu-item" id="crusader"
                                                 onClick={e => handleSelect(e, 'crusader', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec02`}
                                                     alt=""/>
                                                <div>{buttons.crusader}</div>
                                            </div>
                                            <div className="doll-menu-item" id="steel-master"
                                                 onClick={e => handleSelect(e, 'steel-master', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec09`}
                                                     alt=""/>
                                                <div>{buttons.steelMaster}</div>
                                            </div>
                                            <div className="doll-menu-item" id="armorer"
                                                 onClick={e => handleSelect(e, 'armorer', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec10`}
                                                     alt=""/>
                                                <div>{buttons.armorer}</div>
                                            </div>
                                            <div className="doll-menu-item" id="hunter"
                                                 onClick={e => handleSelect(e, 'hunter', 'dropdown-professions')}
                                                 style={{display: 'flex'}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_spec04`}
                                                     alt=""/>
                                                <div>{buttons.hunter}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}
                                onMouseEnter={() => handleEnter('dropdown-magic')}
                                onMouseLeave={() => handleOut('dropdown-magic')}
                                className="button secondary"
                        >{buttons.magic}</Button>
                        <div className="dropdown-container" id="dropdown-magic"
                             onMouseEnter={() => handleEnter('dropdown-magic')}
                             onMouseLeave={() => handleOut('dropdown-magic')}>
                            <div className="dropdown"
                                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}>
                                <div className="doll-menu-item__row">
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header"
                                        >
                                            {texts.mantras}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="mantra-radiant"
                                                 onClick={e => handleSelect(e, 'mantra-radiant', 'dropdown-magic')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/msgl`}
                                                     alt=""/>{buttons.radiantMantras}
                                            </div>
                                            <div className="doll-menu-item" id="mantra-dire"
                                                 onClick={e => handleSelect(e, 'mantra-dire', 'dropdown-magic')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/mbgt`}
                                                     alt=""/>{buttons.direMantras}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header"
                                        >
                                            {texts.powder}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="powder-earth"
                                                 onClick={e => handleSelect(e, 'powder-earth', 'dropdown-magic')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/mgml`}
                                                     alt=""/>{buttons.earthPowder}
                                            </div>
                                            <div className="doll-menu-item" id="powder-air"
                                                 onClick={e => handleSelect(e, 'powder-air', 'dropdown-magic')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/mgcg`}
                                                     alt=""/>{buttons.airPowder}
                                            </div>
                                            <div className="doll-menu-item" id="powder-water"
                                                 onClick={e => handleSelect(e, 'powder-water', 'dropdown-magic')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/mscl`}
                                                     alt=""/>{buttons.waterPowder}
                                            </div>
                                            <div className="doll-menu-item" id="powder-fire"
                                                 onClick={e => handleSelect(e, 'powder-fire', 'dropdown-magic')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/mgst`}
                                                     alt=""/>{buttons.firePowder}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}
                                onMouseEnter={() => handleEnter('dropdown-other')}
                                onMouseLeave={() => handleOut('dropdown-other')}
                                className="button secondary"
                        >{buttons.other}</Button>
                        <div className="dropdown-container" id="dropdown-other"
                             onMouseEnter={() => handleEnter('dropdown-other')}
                             onMouseLeave={() => handleOut('dropdown-other')}>
                            <div className="dropdown"
                                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}>
                                <div className="doll-menu-item__row">
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header"
                                        >
                                            {texts.castleItems}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="castle15"
                                                 onClick={e => handleSelect(e, 'castle15', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_fa15`} alt=""/>15
                                            </div>
                                            <div className="doll-menu-item" id="castle30"
                                                 onClick={e => handleSelect(e, 'castle30', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_fa30`} alt=""/>30
                                            </div>
                                            <div className="doll-menu-item" id="castle45"
                                                 onClick={e => handleSelect(e, 'castle45', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_fa45`} alt=""/>45
                                            </div>
                                            <div className="doll-menu-item" id="castle60"
                                                 onClick={e => handleSelect(e, 'castle60', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_ma15`} alt=""/>60
                                            </div>
                                            <div className="doll-menu-item" id="castle75"
                                                 onClick={e => handleSelect(e, 'castle75', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_ma30`} alt=""/>75
                                            </div>
                                            <div className="doll-menu-item" id="castle90"
                                                 onClick={e => handleSelect(e, 'castle90', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_ma45`} alt=""/>90
                                            </div>
                                            <div className="doll-menu-item" id="castle120"
                                                 onClick={e => handleSelect(e, 'castle120', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_sword23`}
                                                     alt=""/>120+
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">
                                            {texts.other}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="crystals"
                                                 onClick={e => handleSelect(e, 'crystals', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_md45`}
                                                     alt=""/>{buttons.crystals}
                                            </div>
                                            <div className="doll-menu-item" id="premium"
                                                 onClick={e => handleSelect(e, 'premium', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/st_cap6`}
                                                     alt=""/>{buttons.premium}
                                            </div>
                                            <div className="doll-menu-item" id="event"
                                                 onClick={e => handleSelect(e, 'event', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/wp_dub11`}
                                                     alt=""/>{buttons.eventItems}
                                            </div>

                                            <div className="doll-menu-item" id="elixir"
                                                 onClick={e => handleSelect(e, 'elixir', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/ct_jar`}
                                                     alt=""/>{buttons.elixir}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doll-menu-item__column">
                                        <div className="doll-menu-item__header">
                                            {texts.otherMantras}
                                        </div>
                                        <div className="doll-menu-item__body">
                                            <div className="doll-menu-item" id="radiant-useless"
                                                 onClick={e => handleSelect(e, 'radiant-useless', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/mgmt`}
                                                     alt=""/>{buttons.radiantUseless}
                                            </div>
                                            <div className="doll-menu-item" id="dire-useless"
                                                 onClick={e => handleSelect(e, 'dire-useless', 'dropdown-other')}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/mbds`}
                                                     alt=""/>{buttons.direUseless}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {!isUtils && <div className="small-placeholder"></div>}
                </ul>
            </header>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
            {(items?.length > 0) && (<>
                <div className="items__header">{setItemHeader(items[0].getType, buttons)}</div>
                <Items items={items} prefixes={prefixes} isRight={isRight}/>
            </>)}
        </div>
    </>);
};

export default ItemsContainer;