import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {tableCalculatorErrorSet, tableCalculatorErrorUnset} from "../store/table/actions";
import {addError} from "../store/error/actions";
import {useLang} from "../use/lang";

const Calculator = ({close, isUtils = false}) => {
    const {buttons, texts} = useLang()
    const dispatch = useDispatch();
    const [level, setLevel] = useState('1');
    const [fillingLevel, setFillingLevel] = useState('7');
    const [action, setAction] = useState('1');
    const [time, setTime] = useState('');
    const [thetimeYellow, setThetimeYellow] = useState('');
    const [thetimeRed, setThetimeRed] = useState('');
    const [thetimeWhite, setThetimeWhite] = useState('');
    const url = `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
    const calcTime = [['7:00', '8:00', '8:00', '8:00', '8:00', '8:00', '8:00'], ['7:00', '11:00', '12:30', '12:30', '12:30', '12:30', '12:30'], ['7:00', '11:00', '15:00', '17:00', '17:00', '17:00', '17:00'], ['7:00', '11:00', '15:00', '18:00', '20:00', '20:30', '20:30'], ['7:00', '11:00', '15:00', '18:00', '20:00', '21:00', '23:00'], ['7:00', '11:00', '15:00', '18:00', '20:00', '21:00', '24:00']]

    const calcRed = ['1:00', '1:30', '2:00', '2:30', '3:00', '3:30']

    const calcLvls = ['15', '30', '45', '60', '75', '90+']
    const count = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        if (!!time && !!action && !!level && !!fillingLevel) {
            handleCalculate()
        }
    }, [time, action, level, fillingLevel])

    const validateTime = () => {

        if (time) {
            const timeRegex = /\b\d{1,2}(\.|\s|:)\d{2}\b/;

            if (!time.match(timeRegex)) {
                setTime('');
                dispatch(tableCalculatorErrorUnset());

                setTimeout(() => {
                    dispatch(tableCalculatorErrorSet('Wrong time format. Examples: 18.09, 18 09, 18:09'));
                    dispatch(addError('Некорректный формат времени. Примеры: 18.09, 18 09, 18:09'))
                    setThetimeRed('');
                    setThetimeYellow('');
                    setThetimeWhite('');
                }, 100)
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
                        dispatch(addError('Некорректный формат времени. Часы: 0 - 23, минуты: 0 - 59'))
                        setThetimeRed('');
                        setThetimeYellow('');
                        setThetimeWhite('');
                    }, 100)
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
        let error;

        if (!time) {
            error = 'Введите правильное время'
            dispatch(addError(error))
            setThetimeRed('');
            setThetimeYellow('');
            setThetimeWhite('');
            return;
        }

        if (!fillingLevel) {
            error = 'Введите правильный уровень ливы'
            dispatch(addError(error))
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

        const isNumberNan = isNaN(redHours);

        setThetimeRed(isNumberNan ? '-' : redHours + ":" + redMinutes);
        setThetimeYellow(isNumberNan ? '-' : yellowHours + ":" + yellowMinutes);
        setThetimeWhite(isNumberNan ? '-' : whiteHours + ":" + whiteMinutes);
    }

    const handleChangeTime = (target) => {
        setTime(target.value)

        setTimeout(() => {
            if (target.value.length > 4) {
                target.blur();
            }
        },50)
    }

    return (<>
        <div className="calculator-card">
            <div className="table-calculator__header first"
                 style={{background: url, backgroundRepeat: "repeat"}}>{texts.fillingCalculator}
                {!isUtils && <div className="table-calculator__close" onClick={close}>&times;</div>}
            </div>
            <div className="table-calculator__body">
                <div className="table-calculator__calculator-headers">
                    <div className="table-calculator__headers-inputs">
                        <span>{texts.time}</span>
                        <span>{texts.level}</span>
                        <span>{texts.fillingLevel}</span>
                        <span>{texts.action}</span>
                    </div>
                    <div className="table-calculator__inputs">
                        <div>
                            <input style={{
                                background: url
                            }} className="input" type="text" value={time}
                                   onBlur={() => validateTime()}
                                   onClick={() => setTime('')}
                                   onChange={e => handleChangeTime(e.target)}/>
                        </div>
                        <div>
                            <select id="select-castle-lvl" className="select outlined castle"
                                    style={{
                                        background: url
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
                        <div>
                            <select id="select-castle-lvl" className="select outlined castle"
                                    style={{
                                        background: url
                                    }}
                                    value={fillingLevel}
                                    onChange={e => setFillingLevel(e.target.value)}
                            >
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div>
                            <select id="select-castle-lvl" className="select outlined castle"
                                    style={{
                                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                                    }}
                                    value={action}
                                    onChange={e => setAction(e.target.value)}
                            >
                                <option value="1">{texts.actionBlue}</option>
                                <option value="2">{texts.actionYellow}</option>
                                <option value="3">{texts.actionRed}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="table-calculator__calculator-headers">
                    <div className="table-calculator__calculator-output">
                        <div className="text-yellow bold">{thetimeYellow ? thetimeYellow : '-'}</div>
                        <div className="text-red bold">{!!thetimeRed ? thetimeRed : '-'}</div>
                        <div className="text-secondary bold">{!!thetimeWhite ? thetimeWhite : '-'}</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="calculator-card">
            <div className="table-calculator__header second"
                 style={{background: url, backgroundRepeat: "repeat"}}>{texts.fillingTable}</div>
            <div className="table-calculator__body">
                <div className="table-calculator__table-headers">
                    <div></div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>{texts.red}</div>
                </div>
                {count.map((time, index) => {
                    return (<div className="table-calculator__table-rows">
                        <div className="table-calculator__table-rows--bold">{calcLvls[index]}</div>
                        {calcTime[index].map(thisTime => {
                            return <div>{thisTime}</div>
                        })}
                        <div className="text-red">{calcRed[index]}</div>
                    </div>)
                })}
            </div>
        </div>
    </>);
};

export default Calculator;