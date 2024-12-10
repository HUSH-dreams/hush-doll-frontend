import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {selectButtons, selectTexts} from "../store/lang/selectors";
import {selectCalculatorError} from "../store/table/selectors";
import {tableCalculatorErrorSet, tableCalculatorErrorUnset} from "../store/table/actions";
import CalcError from "./CalcError";

const Calculator = () => {
    const buttons = useSelector(selectButtons);
    const texts = useSelector(selectTexts);
    const dispatch = useDispatch();
    const [level, setLevel] = useState('1');
    const [fillingLevel, setFillingLevel] = useState('7');
    const [action, setAction] = useState('1');
    const [time, setTime] = useState('');
    const [thetimeYellow, setThetimeYellow] = useState('');
    const [thetimeRed, setThetimeRed] = useState('');
    const [thetimeWhite, setThetimeWhite] = useState('');
    const error = useSelector(selectCalculatorError);

    const validateTime = () => {
        if (time) {
            const timeRegex = /\b\d{1,2}(\.|\s|:)\d{2}\b/;

            if (!time.match(timeRegex)) {
                setTime('');
                dispatch(tableCalculatorErrorUnset());

                setTimeout(() => {
                    dispatch(tableCalculatorErrorSet('Wrong time format. Examples: 18.09, 18 09, 18:09'));
                    setThetimeRed('');
                    setThetimeYellow('');
                    setThetimeWhite('');
                },100)
            } else {
                let separator = ':';

                if (time.includes('.')) {
                    separator = '.';
                }

                if (time.includes(' ')) {
                    separator = ' ';
                }

                const newTime = time.split(separator);
                const hours = newTime[0];
                const minutes = newTime[1];

                if (Number(hours) > 23 || Number(minutes) > 59) {
                    setTime('');
                    dispatch(tableCalculatorErrorUnset());

                    setTimeout(() => {
                        dispatch(tableCalculatorErrorSet('Wrong time format. Hours: 0 - 23, minutes: 0 - 59'));
                        setThetimeRed('');
                        setThetimeYellow('');
                        setThetimeWhite('');
                    },100)
                } else {
                    if (hours.length < 2) {
                        setTime('0' + hours + ':' + minutes);
                    } else {
                        setTime(hours + ':' + minutes);
                    }
                }
            }
        }
    }

    const clearFillingLvl = () => {
        setFillingLevel('');
    }

    const validateFillingLvl = () => {
        if (fillingLevel) {
            if (isNaN(Number(fillingLevel))) {
                setFillingLevel(7)
            } else if (Number(fillingLevel) < 1) {
                setFillingLevel(1);
            } else if (Number(fillingLevel) > 7) {
                setFillingLevel(7);
            } else {
                setFillingLevel(Number(fillingLevel));
            }
        } else {
            setFillingLevel('')
        }
    }

    const handleCalculate = () => {
        dispatch(tableCalculatorErrorUnset());

        if (!time) {
            dispatch(tableCalculatorErrorSet('Enter valid time'));
            setThetimeRed('');
            setThetimeYellow('');
            setThetimeWhite('');
            return;
        }

        if (!fillingLevel) {
            dispatch(tableCalculatorErrorSet('Enter valid filling level'));
            setThetimeRed('');
            setThetimeYellow('');
            setThetimeWhite('');
            return;
        }
        
        const thetime = new Date();

        const hours = time.split(':')[0];
        const minutes = time.split(':')[1];

        thetime.setHours(hours);
        thetime.setMinutes(minutes);
        thetime.setSeconds('00');

        const newRed = new Date(thetime);
        const newYellow = new Date(thetime);
        const newWhite = new Date(thetime);

        switch (action) {
            case '1':
                switch (level) {
                    case '6':
                        if (Number(fillingLevel) === 1) {
                            newWhite.setHours(newWhite.getHours() + 7);
                        }
                        if (Number(fillingLevel) > 1 && Number(fillingLevel) < 8) {
                            newWhite.setHours(newWhite.getHours() + 8);
                        }

                        newRed.setHours(newWhite.getHours() - 1);
                        newYellow.setHours(newWhite.getHours() - 2);

                        break;
                    case '5':
                        if (Number(fillingLevel) === 1) {
                            newWhite.setHours(newWhite.getHours() + 7);
                        }
                        if (Number(fillingLevel) === 2) {
                            newWhite.setHours(newWhite.getHours() + 11);
                        }
                        if (Number(fillingLevel) > 2 && Number(fillingLevel) < 8) {
                            newWhite.setHours(newWhite.getHours() + 12);
                            newWhite.setMinutes(newWhite.getMinutes() + 30);
                        }

                        newRed.setHours(newWhite.getHours() - 1);
                        newYellow.setHours(newWhite.getHours() - 2);
                        newRed.setMinutes(newWhite.getMinutes() - 30);
                        newYellow.setMinutes(newWhite.getMinutes() - 30);

                        break;
                    case '4':
                        if (Number(fillingLevel) === 1) {
                            newWhite.setHours(newWhite.getHours() + 7);
                        }
                        if (Number(fillingLevel) === 2) {
                            newWhite.setHours(newWhite.getHours() + 11);
                        }
                        if (Number(fillingLevel) === 3) {
                            newWhite.setHours(newWhite.getHours() + 15);
                        }
                        if (Number(fillingLevel) > 3 && Number(fillingLevel) < 8) {
                            newWhite.setHours(newWhite.getHours() + 17);
                        }

                        newRed.setHours(newWhite.getHours() - 2);
                        newYellow.setHours(newWhite.getHours() - 3);

                        break;
                    case '3':
                        if (Number(fillingLevel) === 1) {
                            newWhite.setHours(newWhite.getHours() + 7);
                        }
                        if (Number(fillingLevel) === 2) {
                            newWhite.setHours(newWhite.getHours() + 11);
                        }
                        if (Number(fillingLevel) === 3) {
                            newWhite.setHours(newWhite.getHours() + 15);
                        }
                        if (Number(fillingLevel) === 4) {
                            newWhite.setHours(newWhite.getHours() + 18);
                        }
                        if (Number(fillingLevel) === 5) {
                            newWhite.setHours(newWhite.getHours() + 20);
                        }
                        if (Number(fillingLevel) === 6 || Number(fillingLevel) === 7) {
                            newWhite.setHours(newWhite.getHours() + 20);
                            newWhite.setMinutes(newWhite.getMinutes() + 30);
                        }

                        newRed.setHours(newWhite.getHours() - 2);
                        newYellow.setHours(newWhite.getHours() - 3);
                        newRed.setMinutes(newWhite.getMinutes() - 30);
                        newYellow.setMinutes(newWhite.getMinutes() - 30);

                        break;
                    case '2':
                        if (Number(fillingLevel) === 1) {
                            newWhite.setHours(newWhite.getHours() + 7);
                        }
                        if (Number(fillingLevel) === 2) {
                            newWhite.setHours(newWhite.getHours() + 11);
                        }
                        if (Number(fillingLevel) === 3) {
                            newWhite.setHours(newWhite.getHours() + 15);
                        }
                        if (Number(fillingLevel) === 4) {
                            newWhite.setHours(newWhite.getHours() + 18);
                        }
                        if (Number(fillingLevel) === 5) {
                            newWhite.setHours(newWhite.getHours() + 20);
                        }
                        if (Number(fillingLevel) === 6) {
                            newWhite.setHours(newWhite.getHours() + 21);
                        }
                        if (Number(fillingLevel) === 7) {
                            newWhite.setHours(newWhite.getHours() + 23);
                        }

                        newRed.setHours(newWhite.getHours() - 3);
                        newYellow.setHours(newWhite.getHours() - 4);

                        break;
                    case '1':
                        if (Number(fillingLevel) === 1) {
                            newWhite.setHours(newWhite.getHours() + 7);
                        }
                        if (Number(fillingLevel) === 2) {
                            newWhite.setHours(newWhite.getHours() + 11);
                        }
                        if (Number(fillingLevel) === 3) {
                            newWhite.setHours(newWhite.getHours() + 15);
                        }
                        if (Number(fillingLevel) === 4) {
                            newWhite.setHours(newWhite.getHours() + 18);
                        }
                        if (Number(fillingLevel) === 5) {
                            newWhite.setHours(newWhite.getHours() + 20);
                        }
                        if (Number(fillingLevel) === 6) {
                            newWhite.setHours(newWhite.getHours() + 21);
                        }
                        if (Number(fillingLevel) === 7) {
                            newWhite.setHours(newWhite.getHours() + 24);
                        }

                        newRed.setHours(newWhite.getHours() - 3);
                        newYellow.setHours(newWhite.getHours() - 4);
                        newRed.setMinutes(newWhite.getMinutes() - 30);
                        newYellow.setMinutes(newWhite.getMinutes() - 30);

                        break;
                }

                break;
            case '2':
                switch (level) {
                    case '6':
                        newWhite.setHours(thetime.getHours() + 2);
                        break;
                    case '5':
                        newWhite.setHours(thetime.getHours() + 2);
                        newWhite.setMinutes(thetime.getMinutes() + 30);
                        break;
                    case '4':
                        newWhite.setHours(thetime.getHours() + 3);
                        break;
                    case '3':
                        newWhite.setHours(thetime.getHours() + 3);
                        newWhite.setMinutes(thetime.getMinutes() + 30);
                        break;
                    case '2':
                        newWhite.setHours(thetime.getHours() + 4);
                        break;
                    case '1':
                        newWhite.setHours(thetime.getHours() + 4);
                        newWhite.setMinutes(thetime.getMinutes() + 30);
                        break;
                }
                newRed.setHours(thetime.getHours() + 1);
                break;
            case '3':
                switch (level) {
                    case '6':
                        newWhite.setHours(thetime.getHours() + 1);
                        break;
                    case '5':
                        newWhite.setHours(thetime.getHours() + 1);
                        newWhite.setMinutes(thetime.getMinutes() + 30);
                        break;
                    case '4':
                        newWhite.setHours(thetime.getHours() + 2);
                        break;
                    case '3':
                        newWhite.setHours(thetime.getHours() + 2);
                        newWhite.setMinutes(thetime.getMinutes() + 30);
                        break;
                    case '2':
                        newWhite.setHours(thetime.getHours() + 3);
                        break;
                    case '1':
                        newWhite.setHours(thetime.getHours() + 3);
                        newWhite.setMinutes(thetime.getMinutes() + 30);
                        break;
                }
                newYellow.setHours(thetime.getHours() - 1);
                break;
        }

        let redHours = newRed.getHours().toString().padStart(2, "0");
        let redMinutes = newRed.getMinutes().toString().padStart(2, "0");
        let yellowHours = newYellow.getHours().toString().padStart(2, "0");
        let yellowMinutes = newYellow.getMinutes().toString().padStart(2, "0");
        let whiteHours = newWhite.getHours().toString().padStart(2, "0");
        let whiteMinutes = newWhite.getMinutes().toString().padStart(2, "0");

        setThetimeRed(redHours + ":" + redMinutes);
        setThetimeYellow(yellowHours + ":" + yellowMinutes);
        setThetimeWhite(whiteHours + ":" + whiteMinutes);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
            backgroundSize: 'cover',
            borderRadius: 5,
            padding: 10,
            boxShadow: '0 0 10px 5px white'
        }}>
            <h3 style={{textAlign: 'center'}}>Filling calculator</h3>
            <div style={{display: "flex", color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 120}}>{texts.time}</div>
                <div style={{width: 120}}>{texts.level}</div>
                <div style={{width: 120}}>{texts.level}</div>
                <div style={{width: 120}}>Action</div>
                <div style={{width: 120}}>Yellow</div>
                <div style={{width: 120}}>Red</div>
                <div style={{width: 120}}>White</div>
                <div style={{width: 120}}></div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center', paddingBottom: 20, borderBottom: '2px solid whitesmoke'}}>
                <div style={{width: 120}}><input style={{
                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
                    width: '90%'
                }} className="castle-input" type="text" value={time}
                                                 onBlur={() => validateTime()}
                                                 onClick={() => setTime('')}
                                                 onChange={e => setTime(e.target.value)}/></div>
                <div style={{width: 120}}>
                    <select id="select-castle-lvl" className="castle-input select-clan"
                        style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                            width: '90%',
                            margin: 'auto'
                        }}
                            value={level}
                            onChange={e => setLevel(e.target.value)}
                    >
                        <option value="1">90+</option>
                        <option value="2">75</option>
                        <option value="3">60</option>
                        <option value="4">45</option>
                        <option value="5">30</option>
                        <option value="6">15</option>
                    </select>
                </div>
                <div style={{width: 120}}>
                    <input type="text"
                           style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
                               width: '90%'
                           }}
                           className="castle-input"
                           onClick={clearFillingLvl}
                           value={fillingLevel}
                           onChange={e => setFillingLevel(e.target.value)}
                           onBlur={validateFillingLvl}
                    />
                </div>
                <div style={{width: 120}}>
                    <select id="select-castle-lvl" className="castle-input select-clan"
                            style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                                margin: 'auto',
                                width: '90%'
                            }}
                            value={action}
                            onChange={e => setAction(e.target.value)}
                    >
                        <option value="1">Залит</option>
                        <option value="2">Пожелтел</option>
                        <option value="3">Покраснел</option>
                    </select>
                </div>
                <div style={{width: 120, color: 'rgb(240, 190, 65)', fontWeight: 700}}>{thetimeYellow}</div>
                <div style={{width: 120, color: 'rgb(186, 71, 50)', fontWeight: 700}}>{thetimeRed}</div>
                <div style={{width: 120, color: 'rgb(227, 227, 227)', fontWeight: 700}}>{thetimeWhite}</div>
                <div style={{width: 120}}>
                    <Button className="button-hover"
                            onClick={handleCalculate}>{buttons.confirm}</Button>
                </div>
            </div>
            {error && <CalcError message={error} action={tableCalculatorErrorUnset}/>}
            <h3 style={{textAlign: 'center'}}>Filling table</h3>
            <div style={{display: "flex", color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 120}}></div>
                <div style={{width: 120}}>1</div>
                <div style={{width: 120}}>2</div>
                <div style={{width: 120}}>3</div>
                <div style={{width: 120}}>4</div>
                <div style={{width: 120}}>5</div>
                <div style={{width: 120}}>6</div>
                <div style={{width: 120}}>7</div>
                <div style={{width: 120}}>Red</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 120, color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center'}}>15</div>
                <div style={{width: 120}}>7:00</div>
                <div style={{width: 120}}>8:00</div>
                <div style={{width: 120}}>8:00</div>
                <div style={{width: 120}}>8:00</div>
                <div style={{width: 120}}>8:00</div>
                <div style={{width: 120}}>8:00</div>
                <div style={{width: 120}}>8:00</div>
                <div style={{width: 120, color: 'rgb(186, 71, 50)'}}>1:00</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 120, color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center'}}>30</div>
                <div style={{width: 120}}>7:00</div>
                <div style={{width: 120}}>11:00</div>
                <div style={{width: 120}}>12:30</div>
                <div style={{width: 120}}>12:30</div>
                <div style={{width: 120}}>12:30</div>
                <div style={{width: 120}}>12:30</div>
                <div style={{width: 120}}>12:30</div>
                <div style={{width: 120, color: 'rgb(186, 71, 50)'}}>1:30</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 120, color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center'}}>45</div>
                <div style={{width: 120}}>7:00</div>
                <div style={{width: 120}}>11:00</div>
                <div style={{width: 120}}>15:00</div>
                <div style={{width: 120}}>17:00</div>
                <div style={{width: 120}}>17:00</div>
                <div style={{width: 120}}>17:00</div>
                <div style={{width: 120}}>17:00</div>
                <div style={{width: 120, color: 'rgb(186, 71, 50)'}}>2:00</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 120, color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center'}}>60</div>
                <div style={{width: 120}}>7:00</div>
                <div style={{width: 120}}>11:00</div>
                <div style={{width: 120}}>15:00</div>
                <div style={{width: 120}}>18:00</div>
                <div style={{width: 120}}>20:00</div>
                <div style={{width: 120}}>20:30</div>
                <div style={{width: 120}}>20:30</div>
                <div style={{width: 120, color: 'rgb(186, 71, 50)'}}>2:30</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 120, color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center'}}>75</div>
                <div style={{width: 120}}>7:00</div>
                <div style={{width: 120}}>11:00</div>
                <div style={{width: 120}}>15:00</div>
                <div style={{width: 120}}>18:00</div>
                <div style={{width: 120}}>20:00</div>
                <div style={{width: 120}}>21:00</div>
                <div style={{width: 120}}>23:00</div>
                <div style={{width: 120, color: 'rgb(186, 71, 50)'}}>3:00</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center', marginBottom: 20}}>
                <div style={{width: 120, color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center'}}>90+</div>
                <div style={{width: 120}}>7:00</div>
                <div style={{width: 120}}>11:00</div>
                <div style={{width: 120}}>15:00</div>
                <div style={{width: 120}}>18:00</div>
                <div style={{width: 120}}>20:00</div>
                <div style={{width: 120}}>21:00</div>
                <div style={{width: 120}}>24:00</div>
                <div style={{width: 120, color: 'rgb(186, 71, 50)'}}>3:30</div>
            </div>
        </div>
    );
};

export default Calculator;