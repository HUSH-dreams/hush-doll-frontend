import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import '../styles/ItemsContainer.css';
import {useDispatch, useSelector} from 'react-redux';
import {selectError, selectItems, selectPrefixes} from '../store/items/selectors';
import Items from './Items';
import {itemsClear, itemsInitiate} from '../store/items/actions';
import {selectButtons, selectLang, selectTexts} from "../store/lang/selectors";
import {toggleLang} from "../store/lang/actions";
import ReactCountryFlag from "react-country-flag"
import Flags from "./Flags";

const ItemsContainer = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const prefixes = useSelector(selectPrefixes);
    const error = useSelector(selectError);
    const buttons = useSelector(selectButtons);
    const texts = useSelector(selectTexts);
    const eng = useSelector(selectLang);

    useEffect(() => {
        dispatch(itemsClear());
    }, [dispatch])

    const handleSelect = (e) => {
        e.preventDefault();
        e.target.parentNode.parentNode.style.display = 'none !important';

        e.stopPropagation();
        const type = e.target.id ? e.target.id : e.target.parentNode.id;
        dispatch(itemsInitiate(type));
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgb(234, 201, 136)'}}>
                <ul className="menu-bar" style={{width: '80%'}}>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}>{buttons.weapons}</Button>
                        <Card className="dropdown" style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                        }}>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>{texts.swords}</h4>
                                <div className="item" id="sword-light" onClick={handleSelect}>{buttons.lightSwords}</div>
                                <div className="item" id="sword-semi" onClick={handleSelect}>{buttons.semiSworder}</div>
                                <div className="item" id="sword-heavy" onClick={handleSelect}>{buttons.heavySwords}</div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>{texts.heavyWeapons}</h4>
                                <div className="item" id="axe" onClick={handleSelect}>{buttons.axes}</div>
                                <div className="item" id="hammer" onClick={handleSelect}>{buttons.hammers}</div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>{texts.crossbows}</h4>
                                <div className="item" id="crossbow-light"
                                     onClick={handleSelect}>{buttons.lightCrossbows}</div>
                                <div className="item" id="crossbow-heavy"
                                     onClick={handleSelect}>{buttons.heavyCrossbows}</div>
                            </div>
                        </Card>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}>{buttons.armors}</Button>
                        <Card className="dropdown" style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                        }}>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>{texts.armors}</h4>
                                <div className="item" id="helmet" onClick={handleSelect}>{buttons.helmets}</div>
                                <div className="item" id="jacket" onClick={handleSelect}>{buttons.cuirasses}</div>
                                <div className="item" id="shield" onClick={handleSelect}>{buttons.shields}</div>
                                <div className="item" id="gloves" onClick={handleSelect}>{buttons.gloves}</div>
                                <div className="item" id="belt" onClick={handleSelect}>{buttons.belts}</div>
                                <div className="item" id="pants" onClick={handleSelect}>{buttons.pants}</div>
                                <div className="item" id="boots" onClick={handleSelect}>{buttons.boots}</div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>{texts.robes}</h4>
                                <div className="item" id="robe-green" onClick={handleSelect}>{buttons.greenRobe}</div>
                                <div className="item" id="robe-white" onClick={handleSelect}>{buttons.whiteRobe}</div>
                                <div className="item" id="robe-blue" onClick={handleSelect}>{buttons.blueRobe}</div>
                                <div className="item" id="robe-red" onClick={handleSelect}>{buttons.redRobe}</div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>{texts.jewerly}</h4>
                                <div className="item" id="amulet" onClick={handleSelect}>{buttons.amulets}</div>
                                <div className="item" id="bracelet" onClick={handleSelect}>{buttons.bracers}</div>
                                <div className="item" id="ring-title" onClick={handleSelect}>{buttons.titleRings}</div>
                                <div className="item" id="ring-degree" onClick={handleSelect}>{buttons.degreeRings}</div>
                            </div>
                        </Card>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}>{buttons.professions}</Button>
                        <Card className="dropdown" style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                        }}>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.multy}
                                </h4>
                                <div className="item" id="assassin" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_01`} alt=""/>
                                    <div>{buttons.assassin}</div>
                                </div>
                                <div className="item" id="barbarian" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_06`} alt=""/>
                                    <div>{buttons.barbarian}</div>
                                </div>
                                <div className="item" id="blacksmith" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_11`} alt=""/>
                                    <div>{buttons.blacksmith}</div>
                                </div>
                                <div className="item" id="thief" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_08`} alt=""/>
                                    <div>{buttons.thief}</div>
                                </div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.degree}
                                </h4>
                                <div className="item" id="archmage" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_05`} alt=""/>
                                    <div>{buttons.archmage}</div>
                                </div>
                                <div className="item" id="druid" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_07`} alt=""/>
                                    <div>{buttons.druid}</div>
                                </div>
                                <div className="item" id="inquisitor" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_03`} alt=""/>
                                    <div>{buttons.inquisitor}</div>
                                </div>
                                <div className="item" id="necromancer" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_13`} alt=""/>
                                    <div>{buttons.necromancer}</div>
                                </div>
                                <div className="item" id="sorcerer" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_12`} alt=""/>
                                    <div>{buttons.sorcerer}</div>
                                </div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.title}
                                </h4>
                                <div className="item" id="bandier" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_14`} alt=""/>
                                    <div>{buttons.bandier}</div>
                                </div>
                                <div className="item" id="crusader" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_02`} alt=""/>
                                    <div>{buttons.crusader}</div>
                                </div>
                                <div className="item" id="steel-master" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_09`} alt=""/>
                                    <div>{buttons.steelMaster}</div>
                                </div>
                                <div className="item" id="armorer" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_10`} alt=""/>
                                    <div>{buttons.armorer}</div>
                                </div>
                                <div className="item" id="hunter" onClick={handleSelect} style={{display: 'flex'}}>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_04`} alt=""/>
                                    <div>{buttons.hunter}</div>
                                </div>
                            </div>
                        </Card>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}>{buttons.magic}</Button>
                        <Card className="dropdown" style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                        }}>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.mantras}
                                </h4>
                                <div className="item" id="mantra-radiant" onClick={handleSelect}>
                                    {buttons.radiantMantras}
                                </div>
                                <div className="item" id="mantra-dire" onClick={handleSelect}>
                                    {buttons.direMantras}
                                </div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.powder}
                                </h4>
                                <div className="item" id="powder-earth" onClick={handleSelect}>
                                    {buttons.earthPowder}
                                </div>
                                <div className="item" id="powder-air" onClick={handleSelect}>
                                    {buttons.airPowder}
                                </div>
                                <div className="item" id="powder-water" onClick={handleSelect}>
                                    {buttons.waterPowder}
                                </div>
                                <div className="item" id="powder-fire" onClick={handleSelect}>
                                    {buttons.firePowder}
                                </div>
                            </div>
                        </Card>
                    </li>
                    <li className="menu-item">
                        <Button sx={{fontWeight: 'bold', color: 'rgb(234, 201, 136)'}}>{buttons.other}</Button>
                        <Card className="dropdown" style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                        }}>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.castleItems}
                                </h4>
                                <div className="item" id="castle15" onClick={handleSelect}>
                                    15
                                </div>
                                <div className="item" id="castle30" onClick={handleSelect}>
                                    30
                                </div>
                                <div className="item" id="castle45" onClick={handleSelect}>
                                    45
                                </div>
                                <div className="item" id="castle60" onClick={handleSelect}>
                                    60
                                </div>
                                <div className="item" id="castle75" onClick={handleSelect}>
                                    75
                                </div>
                                <div className="item" id="castle90" onClick={handleSelect}>
                                    90
                                </div>
                                <div className="item" id="castle120" onClick={handleSelect}>
                                    120+
                                </div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.other}
                                </h4>
                                <div className="item" id="crystals" onClick={handleSelect}>
                                    {buttons.crystals}
                                </div>
                                <div className="item" id="premium" onClick={handleSelect}>
                                    {buttons.premium}
                                </div>
                                <div className="item" id="event" onClick={handleSelect}>
                                    {buttons.eventItems}
                                </div>
                            </div>
                            <div>
                                <h4 style={{marginTop: 0, marginBottom: 10, fontWeight: 'bold'}}>
                                    {texts.otherMantras}
                                </h4>
                                <div className="item" id="radiant-useless" onClick={handleSelect}>
                                    {buttons.radiantUseless}
                                </div>
                                <div className="item" id="dire-useless" onClick={handleSelect}>
                                    {buttons.direUseless}
                                </div>
                            </div>
                        </Card>
                    </li>
                </ul>
                <Flags eng={eng}/>
            </div>
            {
                error && (
                    <div style={{color: 'red'}}>{error}</div>
                )
            }
            {
                (items?.length > 0) && (
                    <Items items={items} prefixes={prefixes}/>
                )
            }
        </div>
    );
};

export default ItemsContainer;