import React, {useEffect, useRef, useState} from 'react';
import '../styles/UtilsContainer.css';
import {useNavigate, useParams} from "react-router-dom";
import UtilCard from "./UtilCard";
import {useLang} from "../use/lang";
import UtilDolls from "./UtilDolls";
import Button from "@mui/material/Button";
import UtilCalc from "./UtilCalc";
import UtilExp from "./UtilExp";
import {scroll} from "../utils/scrollIntoView";
import UtilOverlay from "./UtilOverlay";

const UtilsContainer = () => {
    const [chosenUtil, setChosenUtil] = useState('');
    const {texts, buttons} = useLang();
    const {util} = useParams();
    const navigate = useNavigate();
    const utilsContainerRef = useRef(null);

    let title = '';
    let utilParam = '';

    switch (util) {
        case 'dolls':
            utilParam = 'dolls';
            title = texts.utilsDolls;
            break;
        case 'elixirs':
            utilParam = 'elixirs';
            title = texts.utilsElixirs;
            break;
        case 'exp':
            utilParam = 'exp';
            title = texts.utilsExp;
            break;
        case 'overlay':
            utilParam = 'overlay';
            title = texts.utilsOverlay;
            break;
        default:
            utilParam = '';
            title = texts.utils;
    }

    if (chosenUtil !== utilParam) {
        setChosenUtil(utilParam)
    }

    if (document.title !== title) {
        document.title = title;
    }

    const handleClick = () => {
        navigate('/utils')
    }

    useEffect(() => {
        if (utilsContainerRef) {
            scroll(utilsContainerRef, 'instant')
        }
    }, [utilsContainerRef])

    return (
        <div className="utils-container">
            <div className="container--indicator" ref={utilsContainerRef}></div>
            <div className="utils-container__header"
                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                <div>{ chosenUtil && <Button className="button secondary" onClick={handleClick}>{buttons.utils}</Button>}</div>
                <div className="utils-container__header-title">{title}</div>
                <div></div>
            </div>
            <div className="utils-container__body">

                {!chosenUtil && <div className="utils-container__body-scroll">
                    <UtilCard header={texts.dollUtil} description={texts.utilsDollsBody} title='dolls'/>
                    <UtilCard header={texts.expUtil} description={texts.utilsExpBody} title='exp' />
                    <UtilCard header={texts.elixirUtil} description={texts.utilsCastleCalcBody} title='elixirs' />
                    <UtilCard header={texts.tableOverlay} description={texts.utilsOverlayBody} title='overlay' />
                </div>}
                {chosenUtil === 'dolls' && <UtilDolls />}
                {chosenUtil === 'elixirs' && <UtilCalc />}
                {chosenUtil === 'exp' && <UtilExp />}
                {chosenUtil === 'overlay' && <UtilOverlay />}
            </div>
        </div>
    );
};

export default UtilsContainer;