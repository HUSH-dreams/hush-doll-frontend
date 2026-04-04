import React, { useState } from 'react';
import {useExperienceCalculator} from "../use/experienceCalculator";
import Button from "@mui/material/Button";
import {useLang} from "../use/lang";

const UtilExp = () => {
    const [titleInitial, setTitleInitial] = useState('1');
    const [degreeInitial, setDegreeInitial] = useState('1');
    const [titleLevel, setTitleLevel] = useState('1');
    const [degreeLevel, setDegreeLevel] = useState('1');
    const [desc, setDesc] = useState(false);
    const {texts, buttons} = useLang();

    const totalExperience = useExperienceCalculator(titleInitial, degreeInitial, titleLevel, degreeLevel);

    const handleLevelChange = (setter) => (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && (value === "" || (parseInt(value, 10) >= 1 && parseInt(value, 10) <= 60))) {
            setter(value);
        }

        if (value.length === 2) {
            e.target.blur();
        }
    };

    return (
        <div className="utils-exp">
            <div className="utils-exp__card">
                <div className="util-exp__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>{texts.utilsExp}</div>

                <div className="util-exp__body">
                    <h4>
                        {texts.utilsExpStartLvl}
                    </h4>

                    <div className="util-exp__inputs">
                        <div className="util-exp__inputs-text">
                            <label htmlFor="titleLevel">
                                {texts.title}
                            </label>
                            <input
                                className="input"
                                type="number"
                                id="titleInitial"
                                value={titleInitial}
                                onClick={() => setTitleInitial('')}
                                onChange={handleLevelChange(setTitleInitial)}
                                placeholder="1-60"
                                min="1"
                                max="60"
                            />
                        </div>
                        <div className="util-exp__inputs-splitter"><b>/</b></div>
                        <div className="util-exp__inputs-text">

                            <input
                                className="input"
                                type="number"
                                id="degreeInitial"
                                value={degreeInitial}
                                onClick={() => setDegreeInitial('')}
                                onChange={handleLevelChange(setDegreeInitial)}
                                placeholder="1-60"
                                min="1"
                                max="60"
                            />
                            <label htmlFor="degreeLevel">
                                {texts.degree}
                            </label>
                        </div>
                    </div>
                    <h4>
                        {texts.utilsExpEndLvl}
                    </h4>

                    <div className="util-exp__inputs">
                        <div className="util-exp__inputs-text">
                            <label htmlFor="titleLevel">
                                {texts.title}
                            </label>
                            <input
                                className="input"
                                type="number"
                                id="titleLevel"
                                value={titleLevel}
                                onClick={() => setTitleLevel('')}
                                onChange={handleLevelChange(setTitleLevel)}
                                placeholder="1-60"
                                min="1"
                                max="60"
                            />
                        </div>
                        <div className="util-exp__inputs-splitter">
                            <b>/</b>
                        </div>
                        <div className="util-exp__inputs-text">
                            <input
                                className="input"
                                type="number"
                                id="degreeLevel"
                                value={degreeLevel}
                                onClick={() => setDegreeLevel('')}
                                onChange={handleLevelChange(setDegreeLevel)}
                                placeholder="1-60"
                                min="1"
                                max="60"
                            />
                            <label htmlFor="degreeLevel">
                                {texts.degree}
                            </label>
                        </div>
                    </div>

                    <div className="util-exp__output-container">
                        <h3 className="util-exp__output">{texts.utilsExpRequired}</h3>
                        <h3 className="util-exp__output">
                            {totalExperience > 0 ? totalExperience.toLocaleString('ru-RU') : '—'}
                        </h3>
                    </div>

                    <Button className="button secondary" onClick={() => setDesc(!desc)}>{buttons.description}</Button>
                    {
                        desc && texts.utilsExpDescription
                    }

                </div>
            </div>
        </div>
    );
};

export default UtilExp;