import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import '../styles/DollContainer.css';
import {
    setAccuracy,
    setAir, setDegreeLevel,
    setDexterity,
    setEarth,
    setEndurance,
    setFire,
    setStrength, setTitleLevel,
    setWater
} from "../store/doll/actions";

const Stat = ({statsAvailable, stat, itemStat, reqStat, statName}) => {
    const [value, setValue] = useState('');
    const [opacity, setOpacity] = useState(0);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (value.length > 2) {
            e.currentTarget.blur();
        }

        setValue(e.target.value)
    }

    let newValue = 0;

    const handleClick = (e) => {
        if (opacity === 1) {
            if (reqStat !== 0) {
                // newValue = reqStat - itemStat;
                if (reqStat - itemStat >= 0) {
                    if (statsAvailable >= reqStat - itemStat) {
                        newValue = reqStat - itemStat;
                    } else {
                        newValue = statsAvailable
                    }
                }
            }

            e.currentTarget.blur();
        } else {
            setValue('');
            setOpacity(1);
        }
    }

    const handleBlur = (e) => {
        let number = e.target.value ? e.target.value : 0;
        if (newValue) {
            number = newValue;
        }

        switch (statName) {
            case 'strength':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setStrength(Number(number)));
                break;
            case 'dexterity':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setDexterity(Number(number)));
                break;
            case 'accuracy':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setAccuracy(Number(number)));
                break;
            case 'endurance':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setEndurance(Number(number)));
                break;
            case 'earth':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setEarth(Number(number)));
                break;
            case 'air':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setAir(Number(number)));
                break;
            case 'water':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setWater(Number(number)));
                break;
            case 'fire':
                if (isNaN(Number(number))) {
                    break;
                }
                dispatch(setFire(Number(number)));
                break;
            case 'title':
                if (isNaN(Number(number))) {
                    break;
                }
                if (Number(number) > 60) {
                    dispatch(setTitleLevel(60));
                    break;
                }
                if (Number(number) < 1) {
                    dispatch(setTitleLevel(1));
                    break;
                }
                dispatch(setTitleLevel(Number(number)));
                break;
            case 'degree':
                if (isNaN(Number(number))) {
                    break;
                }
                if (Number(number) > 60) {
                    dispatch(setDegreeLevel(60));
                    break;
                }
                if (Number(number) < 1) {
                    dispatch(setDegreeLevel(1));
                    break;
                }
                dispatch(setDegreeLevel(Number(number)));
                break;
            default:
                break;
        }
        setOpacity(0);
    }

    return (
        <div style={{position: 'relative'}} className="number">
            <div>
                {
                    Number(stat) + Number(itemStat)
                }
            </div>
            <input style={{
                position: 'absolute',
                top: 1,
                left: 4,
                opacity: opacity,
                width: 24,
                backgroundColor: 'rgb(234, 201, 136)'
            }}
                   name={statName}
                   value={value}
                   onChange={handleChange}
                   onClick={handleClick}
                   onBlur={handleBlur}
                   placeholder={(reqStat > 0) ? (reqStat - itemStat) : 0}
            />

        </div>
    );
};

export default Stat;