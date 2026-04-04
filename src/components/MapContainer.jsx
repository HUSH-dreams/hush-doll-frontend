import React, {useEffect, useRef, useState} from 'react';
import '../styles/MapContainer.css';
import {useLang} from "../use/lang";
import {useDispatch, useSelector} from "react-redux";
import {selectChosenMapTypes} from "../store/map/selectors";
import {mapSetAll, mapToggleChosen, mapUnsetAll} from "../store/map/actions";
import Button from "@mui/material/Button";
import {
    getAllTypes, getChoiceElements,
    getHaronElements,
    getHyperionElements, getLeonElements,
    getPhoebusElements,
    getRhodesElements,
    getTypes
} from "../utils/mapUtils";
import {scroll} from "../utils/scrollIntoView";

const mapElementsSources = {
    'world': null,
    'hyper': getHyperionElements,
    'haron': getHaronElements,
    'rhodes': getRhodesElements,
    'phoebus': getPhoebusElements,
    'leon-with-castle': getLeonElements,
    'choice': getChoiceElements
};

const MapContainer = () => {
    const {texts, buttons} = useLang();
    const mapImageRef = useRef(null);
    const containerRef = useRef(null);
    const [overlayStyle, setOverlayStyle] = useState({});
    const hyperRef = useRef(null);
    const charonRef = useRef(null);
    const phoebusRef = useRef(null);
    const rhodesRef = useRef(null);
    const thisRef = useRef(null);

    const [imageLoaded, setImageLoaded] = useState(false);
    const selectedTypes = useSelector(selectChosenMapTypes);
    const dispatch = useDispatch();
    const [chosenMap, setChosenMap] = useState('world');
    const [mouseOver, setMouseOver] = useState('');
    const [mouseOverIcon, setMouseOverIcon] = useState(null);
    const [modalPos, setModalPos] = useState({});
    const [modalElement, setModalElement] = useState(null);
    const mapContainerRef = useRef(null);

    const types = getTypes();
    const allTypes = getAllTypes();

    const [mouseCoords, setMouseCoords] = useState({x: 0, y: 0, percentX: 0, percentY: 0});
    const currentMapElements = mapElementsSources[chosenMap] ? mapElementsSources[chosenMap]() : [];

    const updateOverlayPosition = () => {
        const baseImage = mapImageRef.current;

        if (baseImage) {
            const {offsetWidth, offsetHeight, offsetLeft, offsetTop} = baseImage;

            const newTop = offsetTop - 10;
            const newLeft = offsetLeft - 10;
            const newWidth = offsetWidth;
            const newHeight = offsetHeight;

            setOverlayStyle({
                position: 'absolute',
                top: `${newTop}px`,
                left: `${newLeft}px`,
                width: `${newWidth}px`,
                height: `${newHeight}px`
            });
        }
    };

    const handleMouseMove = (event) => {
        if (mapImageRef.current) {
            const imageRect = mapImageRef.current.getBoundingClientRect();

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const relativeX = mouseX - imageRect.left;
            const relativeY = mouseY - imageRect.top;

            const percentX = (relativeX / imageRect.width) * 100;
            const percentY = (relativeY / imageRect.height) * 100;

            setMouseCoords({
                x: Math.round(relativeX),
                y: Math.round(relativeY), percentX: percentX.toFixed(2),
                percentY: percentY.toFixed(2)
            });
        }
    };

    useEffect(() => {
        if (mapContainerRef) {
            scroll(mapContainerRef, 'instant');
        }
    },[mapContainerRef])

    useEffect(() => {
        const imageElement = mapImageRef.current;

        imageElement.onload = () => {
            updateOverlayPosition();
        };

        if (imageElement.complete) {
            updateOverlayPosition();
        }

        window.addEventListener('resize', updateOverlayPosition);

        return () => {
            window.removeEventListener('resize', updateOverlayPosition);
        };
    }, []);

    const handleChoose = (e) => {
        e.stopPropagation();

        if (e.target.id) {
            dispatch(mapToggleChosen(e.target.id));
            return;
        }
        if (e.target.parentNode.id) {
            dispatch(mapToggleChosen(e.target.parentNode.id));
        }
    }

    const handleSet = () => {
        dispatch(mapSetAll(allTypes));
    }

    const handleUnset = () => {
        dispatch(mapUnsetAll());
    }

    return (<div className="map-container">
        <div className="container--indicator" ref={mapContainerRef}></div>
        <div className="map-container__header"
             style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
            {/*<div style={{marginLeft: '10px', fontSize: '0.8em', color: 'white'}}>*/}
            {/*    Mouse: {mouseCoords.x}x, {mouseCoords.y}y | {mouseCoords.percentX}%, {mouseCoords.percentY}%*/}
            {/*</div>*/}
            <div className="map-container__menu">
                {
                    chosenMap !== 'world' && <Button className={chosenMap === 'world' ? "content content--selected" : "button secondary content"}
                            onClick={() => {
                                setChosenMap('world');
                                chosenMap !== 'world' && setImageLoaded(false);
                            }}>{buttons.worldMap}</Button>
                }

            </div>
            <div>{texts.maps}</div>
        </div>
        <div className="map-container__content" ref={containerRef}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/${chosenMap}`}
                 ref={mapImageRef}
                 onLoad={() => setImageLoaded(true)}
                 alt="Hyperion map"
                 className="map-image"
                 style={{opacity: chosenMap === 'world' ? 0 : 1}}
                 onMouseMove={e => handleMouseMove(e)}/>
            {
                imageLoaded && <div
                    className="map-icons-overlay"
                    style={overlayStyle}
                >
                    {
                        chosenMap === 'world' && <>
                            <div className="map-image--world-part map-image--world-hyper" style={{animationDelay: '100ms'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/hyper`}
                                     alt="Hyperion map"
                                     className={mouseOver === 'hyperion-map' ? 'map-image--world-part-over hyperion-map' : 'hyperion-map'}
                                     ref={hyperRef}
                                />
                            </div>
                            <div className="map-image--world-part map-image--world-charon" style={{animationDelay: '200ms'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/haron`}
                                     alt="Charon map"
                                     className={mouseOver === 'charon-map' ? 'map-image--world-part-over charon-map' : 'charon-map'}
                                     ref={charonRef}
                                />
                            </div>
                            <div className="map-image--world-part map-image--world-phoebus" style={{animationDelay: '350ms'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/phoebus`}
                                     alt="Phoebus map"
                                     className={mouseOver === 'phoebus-map' ? 'map-image--world-part-over phoebus-map' : 'phoebus-map'}
                                     ref={phoebusRef}
                                />
                            </div>
                            <div className="map-image--world-part map-image--world-rhodes" style={{animationDelay: '500ms'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/rhodes`}
                                     alt="Rhodes map"
                                     className={mouseOver === 'rhodes-map' ? 'map-image--world-part-over rhodes-map' : 'rhodes-map'}
                                     ref={rhodesRef}
                                />
                            </div>
                            <div className="map-image--world-part map-image--world-choice" style={{animationDelay: '700ms'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/choice`}
                                     alt="Island of Choice map"
                                     className={mouseOver === 'choice-map' ? 'map-image--world-part-over choice-map' : 'choice-map'}
                                     ref={rhodesRef}
                                />
                            </div>
                            <div className="map-image--world-part map-image--world-leon" style={{animationDelay: '1000ms'}}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/image/leon`}
                                     alt="Leon Island map"
                                     className={mouseOver === 'leon-map' ? 'map-image--world-part-over leon-map' : 'leon-map'}
                                     ref={rhodesRef}
                                />
                            </div>
                            set LLAMA_SET_ROWS=1
                            C:\llamacpp\llama-server.exe -m "W:\LMStudio\models\bartowski\google_gemma-4-26B-A4B-it-GGUF\google_gemma-4-26B-A4B-it-Q4_K_S.gguf" -md "W:\LMStudio\models\bartowski\google_gemma-4-E2B-it-GGUF\google_gemma-4-E2B-it-Q4_K_S.gguf" --host 127.0.0.1 --port 12345 -c 8192 -ngl 25 --flash-attn 1 -b 4096 -ub 2048 --draft 8 -t 6

                            <div style={{animationDelay: '300ms'}}
                                className={mouseOver === 'hyperion-map' ? "map-container__world-name hyper over" : "map-container__world-name hyper"}>{texts.hyperion}</div>
                            <div style={{animationDelay: '400ms'}}
                                className={mouseOver === 'charon-map' ? "map-container__world-name charon over" : "map-container__world-name charon"}>{texts.charon}</div>
                            <div style={{animationDelay: '550ms'}}
                                className={mouseOver === 'phoebus-map' ? "map-container__world-name phoebus over" : "map-container__world-name phoebus"}>{texts.phoebus}</div>
                            <div style={{animationDelay: '750ms'}}
                                className={mouseOver === 'rhodes-map' ? "map-container__world-name rhodes over" : "map-container__world-name rhodes"}>{texts.rhodes}</div>
                            <div style={{animationDelay: '1000ms'}}
                                 className={mouseOver === 'choice-map' ? "map-container__world-name choice over" : "map-container__world-name choice"}>{texts.ov}</div>
                            <div style={{animationDelay: '1350ms'}}
                                 className={mouseOver === 'leon-map' ? "map-container__world-name leon over" : "map-container__world-name leon"}>{texts.leon}</div>

                            <div className="map-container__world map-container__map--charon1"
                                 onMouseOver={() => setMouseOver('charon-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('haron'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--charon2"
                                 onMouseOver={() => setMouseOver('charon-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('haron'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--charon3"
                                 onMouseOver={() => setMouseOver('charon-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('haron'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--charon4"
                                 onMouseOver={() => setMouseOver('charon-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('haron'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--rhodes1"
                                 onMouseOver={() => setMouseOver('rhodes-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('rhodes'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--rhodes2"
                                 onMouseOver={() => setMouseOver('rhodes-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('rhodes'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--rhodes3"
                                 onMouseOver={() => setMouseOver('rhodes-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('rhodes'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--phoebus1"
                                 onMouseOver={() => setMouseOver('phoebus-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('phoebus'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--phoebus2"
                                 onMouseOver={() => setMouseOver('phoebus-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('phoebus'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--phoebus3"
                                 onMouseOver={() => setMouseOver('phoebus-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('phoebus'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--hyperion1"
                                 onMouseOver={() => setMouseOver('hyperion-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('hyper'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--hyperion2"
                                 onMouseOver={() => setMouseOver('hyperion-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('hyper'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--hyperion3"
                                 onMouseOver={() => setMouseOver('hyperion-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('hyper'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--hyperion4"
                                 onMouseOver={() => setMouseOver('hyperion-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('hyper'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--leon1"
                                 onMouseOver={() => setMouseOver('leon-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('leon-with-castle'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--choice1"
                                 onMouseOver={() => setMouseOver('choice-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('choice'); setMouseOver('')}}></div>
                            <div className="map-container__world map-container__map--choice2"
                                 onMouseOver={() => setMouseOver('choice-map')}
                                 onMouseLeave={() => setMouseOver('')}
                                 onClick={() => {setChosenMap('choice'); setMouseOver('')}}></div>
                        </>
                    }
                    {currentMapElements?.map(element => {
                        if (!selectedTypes?.some(chsn => chsn.name === element.type)) {
                            return null;
                        }

                        const thisChosenType = selectedTypes.find(tp => tp.name === element.type);

                        return (
                            <div
                                key={'map-element-' + element.id}
                                className={`map-element map-element--${element.type}`}
                                style={{
                                    position: 'absolute',
                                    left: `${element.x}%`,
                                    top: `${element.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    pointerEvents: 'auto',
                                    zIndex: thisChosenType.type === 2 ? 1000 : 1
                                }}
                            >
                                {
                                    element.iconUrl !== '/' && <img
                                        src={`${process.env.REACT_APP_BACKEND_URL}/image${element.iconUrl}`}
                                        alt={element.name || element.type}
                                        className="map-element__icon"
                                        loading="lazy"
                                    />
                                }
                                <div
                                    style={{display: thisChosenType.type === 2 ? 'flex' : 'none'}}
                                    className="map-container__icon-modal">
                                    <div className="map-container__icon-modal-header">{element.nameRu}</div>
                                    {element.descriptionRu &&
                                        <div style={{display: thisChosenType.type === 2 ? 'none' : 'flex'}}
                                             className="map-container__icon-modal-text">{element.descriptionRu}</div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            }
        </div>
        <div className="map-container__chosen">
            <div className="map-container__chosen-button" onClick={handleSet}>
                <Button className="button primary">{buttons.selectAll}</Button>
            </div>

            <div className="map-container__chosen-icons">
                {types.map(type => {
                    const thisChosenType = selectedTypes.find(tp => tp.name === type.name);

                    return <div
                        id={type.name}
                        key={'map-chosen-'+type.name}
                        className={selectedTypes?.some(t => t.name === type.name) ? "map-container__chosen-type chosen" : "map-container__chosen-type"}
                        style={{backgroundColor: thisChosenType ? (thisChosenType.type === 1 ? 'rgb(234, 201, 136)' : 'rgb(245,255,250)') : 'unset'}}
                        onClick={e => handleChoose(e)}>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/image${type.iconUrl}`}
                                 alt={type.iconUrl}
                            />
                    </div>
                    }
                )}
            </div>

            <div className="map-container__chosen-button" onClick={handleUnset}>
                <Button className="button primary">{buttons.unsetAll}</Button>
            </div>
        </div>
    </div>);
};

export default MapContainer;