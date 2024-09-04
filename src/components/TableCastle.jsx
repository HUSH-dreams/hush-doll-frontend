import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {tableCastleSaveInitiate} from "../store/table/actions";
import {selectButtons, selectSelects, selectTexts} from "../store/lang/selectors";

const TableCastle = ({token, tableId, table, clans, castle, eng, underline}) => {
        const [isMouseOver, setIsMouseOver] = useState(false);
        const [isEdit, setIsEdit] = useState(false);
        const initialSpheretime = castle.fillingSpheretime;
        const initialFillingLvl = castle.fillingLvl;
        const [spheretime, setSpheretime] = useState(castle.fillingSpheretime);
        const [error, setError] = useState('');
        const [clan, setClan] = useState(castle.ownerClan ? castle.ownerClan : clans[0]?.id);
        const [fillingLvl, setFillingLvl] = useState(castle.fillingLvl);
        const [fillingDateValue, setFillingDateValue] = useState('1');
        const [commentary, setCommentary] = useState(castle.commentary);

        const buttons = useSelector(selectButtons);
        const texts = useSelector(selectTexts);
        const selects = useSelector(selectSelects);

        let fillingHours = '';
        let fillingMinutes = '';
        let thetime = '';
        let dateToFill = '';
        const today = new Date();
        let dateOfFilling = '';
        let dateToday = '';
        let fillingDay = '';
        let lastUpdateUsername;
        let currentClan;
        let thisSpheretime;
        let red;
        let yellow;
        let thetimeYellow;
        let thetimeRed;
        let status;
        let statusBgr;

        function dateDiffInDays(a, b) {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;
            // Discard the time and time-zone information.
            const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }

        const getFillingTime = (fillingTime) => {
            fillingHours = fillingTime.getHours();
            fillingMinutes = fillingTime.getMinutes();

            switch (castle.lvl) {
                case 15:
                    if (castle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (castle.fillingLvl > 1 && castle.fillingLvl < 8) {
                        fillingTime.setHours(fillingHours + 8);
                    }

                    red = new Date(fillingTime);
                    red.setHours(red.getHours() - 1);
                    break;
                case 30:
                    if (castle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (castle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (castle.fillingLvl > 2 && castle.fillingLvl < 8) {
                        fillingTime.setHours(fillingHours + 12);
                        fillingTime.setMinutes(fillingMinutes + 30);
                    }

                    red = new Date(fillingTime);
                    red.setHours(red.getHours() - 1);
                    red.setMinutes(red.getMinutes() - 30);
                    break;
                case 45:
                    if (castle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (castle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (castle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (castle.fillingLvl > 3 && castle.fillingLvl < 8) {
                        fillingTime.setHours(fillingHours + 17);
                    }

                    red = new Date(fillingTime);
                    red.setHours(red.getHours() - 2);
                    break;
                case 60:
                    if (castle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (castle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (castle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (castle.fillingLvl === 4) {
                        fillingTime.setHours(fillingHours + 18);
                    }
                    if (castle.fillingLvl === 5) {
                        fillingTime.setHours(fillingHours + 20);
                    }
                    if (castle.fillingLvl === 6 || castle.fillingLvl === 7) {
                        fillingTime.setHours(fillingHours + 20);
                        fillingTime.setMinutes(fillingMinutes + 30);
                    }

                    red = new Date(fillingTime);
                    red.setHours(red.getHours() - 2);
                    red.setMinutes(red.getMinutes() - 30);
                    break;
                case 75:
                    if (castle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (castle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (castle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (castle.fillingLvl === 4) {
                        fillingTime.setHours(fillingHours + 18);
                    }
                    if (castle.fillingLvl === 5) {
                        fillingTime.setHours(fillingHours + 20);
                    }
                    if (castle.fillingLvl === 6) {
                        fillingTime.setHours(fillingHours + 21);
                    }
                    if (castle.fillingLvl === 7) {
                        fillingTime.setHours(fillingHours + 23);
                    }

                    red = new Date(fillingTime);
                    red.setHours(red.getHours() - 3);
                    break;
                case 90:
                case 120:
                case 250:
                case 350:
                    if (castle.fillingLvl === 1) {
                        fillingTime.setHours(fillingHours + 7);
                    }
                    if (castle.fillingLvl === 2) {
                        fillingTime.setHours(fillingHours + 11);
                    }
                    if (castle.fillingLvl === 3) {
                        fillingTime.setHours(fillingHours + 15);
                    }
                    if (castle.fillingLvl === 4) {
                        fillingTime.setHours(fillingHours + 18);
                    }
                    if (castle.fillingLvl === 5) {
                        fillingTime.setHours(fillingHours + 20);
                    }
                    if (castle.fillingLvl === 6) {
                        fillingTime.setHours(fillingHours + 21);
                    }
                    if (castle.fillingLvl === 7) {
                        fillingTime.setHours(fillingHours + 24);
                    }

                    red = new Date(fillingTime);
                    red.setHours(red.getHours() - 3);
                    red.setMinutes(red.getMinutes() - 30);
                    break;
            }

            let month = fillingTime.getUTCMonth() + 1;
            let year = fillingTime.getUTCFullYear();
            let day = fillingTime.getUTCDate();

            let pMonth = month.toString().padStart(2, "0");
            let pDay = day.toString().padStart(2, "0");

            dateOfFilling = new Date(`${year}-${pMonth}-${pDay}`);

            yellow = new Date(red.valueOf() - (1000 * 60 * 60));

            fillingHours = fillingTime.getHours().toString().padStart(2, "0");
            fillingMinutes = fillingTime.getMinutes().toString().padStart(2, "0");

            let redHours = red.getHours().toString().padStart(2, "0");
            let redMinutes = red.getMinutes().toString().padStart(2, "0");
            let yellowHours = yellow.getHours().toString().padStart(2, "0");
            let yellowMinutes = yellow.getMinutes().toString().padStart(2, "0");

            thetimeRed = redHours + ":" + redMinutes;
            thetimeYellow = yellowHours + ":" + yellowMinutes;
            thetime = fillingHours + ":" + fillingMinutes;

            if (today < yellow) {
                status = 'blue';
                statusBgr = 'rgb(74, 94, 240)';
            } else if (today < red && today > yellow) {
                status = 'yellow';
                statusBgr = 'rgb(240, 190, 65)';
            } else if (today > red && today < fillingTime) {
                status = 'red';
                statusBgr = 'rgb(186, 71, 50)';
            } else if (today > fillingTime) {
                status = 'white'
                statusBgr = 'rgb(227, 227, 227)';
            }

            let difference = dateDiffInDays(dateToday, dateOfFilling);

            switch (difference) {
                case -2:
                    fillingDay = selects.twoDaysAgo;
                    break;
                case -1:
                    fillingDay = selects.yesterday;
                    break;
                case 0:
                    fillingDay = selects.today;
                    break;
                case 1:
                    fillingDay = selects.tomorrow;
                    break;
                default:
                    fillingDay = selects.earlier;
                    thisSpheretime = null;
                    statusBgr = null;
                    currentClan = null;
                    break;
            }
        }

        if (castle.fillingDatetime) {
            const fillingTime = new Date(Number(castle.fillingDatetime));

            let month = fillingTime.getUTCMonth() + 1;
            let year = fillingTime.getUTCFullYear();
            let day = fillingTime.getUTCDate();

            let pMonth = month.toString().padStart(2, "0");
            let pDay = day.toString().padStart(2, "0");

            dateOfFilling = new Date(`${year}-${pMonth}-${pDay}`);

            month = today.getUTCMonth() + 1;
            year = today.getUTCFullYear();
            day = today.getUTCDate();

            pMonth = month.toString().padStart(2, "0");
            pDay = day.toString().padStart(2, "0");

            dateToday = new Date(`${year}-${pMonth}-${pDay}`);

            dateToFill = fillingTime.getDate();
            lastUpdateUsername = table.users.filter(user => user.userId === castle.lastChangeUser)[0];

            currentClan = table.clans.filter(clan => clan.id === castle.ownerClan)[0];
            thisSpheretime = castle.fillingSpheretime;

            getFillingTime(fillingTime);
        }

        const [time, setTime] = useState(thetime);

        const dispatch = useDispatch();

        //date regex: \b\d{2}(\.|\s|:)\d{2}\b
        const setMouseOver = () => {
            if (!isMouseOver) {
                setIsMouseOver(true);
            }
        }

        const setMouseAway = () => {
            if (isMouseOver) {
                setIsMouseOver(false);
            }
        }

        const handleClick = () => {
            isEdit ? setIsEdit(false) : setIsEdit(true);
            setError('');
        }

        const timeRegex = /\b\d{1,2}(\.|\s|:)\d{2}\b/;

        const validateTime = () => {
            if (time) {
                if (!time.match(timeRegex)) {
                    setError('Wrong time format. Examples: 18.09, 18 09, 18:09');
                    setTimeout(() => setError(''), 4500);
                    setTime(thetime);
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
                        setError('Wrong time format. Hours: 0 - 23, minutes: 0 - 59')
                        setTimeout(() => setError(''), 4500);
                        setTime(thetime);
                    } else {
                        if (hours.length < 2) {
                            setTime('0' + hours + ':' + minutes);
                        } else {
                            setTime(hours + ':' + minutes);
                        }
                    }
                }
            } else {
                setTime(thetime);
            }
        }

        const validateSpheretime = () => {
            if (spheretime) {
                if (!spheretime.match(timeRegex)) {
                    setError('Wrong sphere-time format. Examples: 18.09, 18 09, 18:09');
                    setTimeout(() => setError(''), 4500);
                    setSpheretime(initialSpheretime);
                } else {
                    let separator = ':';

                    if (spheretime.includes('.')) {
                        separator = '.';
                    }

                    if (spheretime.includes(' ')) {
                        separator = ' ';
                    }

                    const sphereTime = spheretime.split(separator);
                    const sphereHours = sphereTime[0];
                    const sphereMinutes = sphereTime[1];

                    if (Number(sphereHours) > 23 || Number(sphereMinutes) > 59) {
                        setError('Wrong sphere-time format. Hours: 0 - 23, minutes: 0 - 59')
                        setTimeout(() => setError(''), 4500);
                        setSpheretime(initialSpheretime);
                    } else {
                        if (sphereHours.length < 2) {
                            setSpheretime('0' + sphereHours + ':' + sphereMinutes);
                        } else {
                            setSpheretime(sphereHours + ':' + sphereMinutes);
                        }
                    }
                }
            }
        }

        const validateFillingLvl = () => {
            if (fillingLvl) {
                if (isNaN(Number(fillingLvl))) {
                    setFillingLvl(7)
                } else if (Number(fillingLvl) < 1) {
                    setFillingLvl(1);
                } else if (Number(fillingLvl) > 7) {
                    setFillingLvl(7);
                } else {
                    setFillingLvl(Number(fillingLvl));
                }
            } else {
                setFillingLvl(initialFillingLvl)
            }
        }

        const clearTime = () => {
            setTime('');
            setError('');
        }

        const clearFillingLvl = () => {
            setFillingLvl('');
            setError('');
        }

        const clearSpheretime = () => {
            setSpheretime('');
            setError('');
        }

        const clearCommentary = () => {
            setCommentary('');
            setError('');
        }

        const handleSelectClan = (e) => {
            const thisClan = e.target.value;

            setClan(thisClan);
        }

        const handleSelectDate = (e) => {
            const thisDateId = e.target.value;

            setFillingDateValue(thisDateId);
        }

        const handleConfirm = () => {
            let today;

            switch (fillingDateValue) {
                case '1':
                    today = new Date();
                    break;
                case '2':
                    today = new Date(new Date().setDate(new Date().getDate() - 1));
                    break;
                case '3':
                    today = new Date(new Date().setDate(new Date().getDate() - 2));
                    break;
                default:
                    break;
            }

            const hours = time.split(':')[0];
            const minutes = time.split(':')[1];

            today.setHours(hours);
            today.setMinutes(minutes);
            today.setSeconds('00');

            const saveCastle = {
                id: castle.id,
                fillingDate: today.valueOf(),
                fillingLvl: fillingLvl,
                fillingSpheretime: spheretime,
                ownerClan: clan,
                commentary: commentary,
                tableId: tableId
            };

            dispatch(tableCastleSaveInitiate(token, saveCastle));

            handleClick();
        }

        return (<div
            onMouseEnter={setMouseOver}
            onMouseLeave={setMouseAway}
            style={{borderTop: underline && '2px solid whitesmoke'}}
        >
            <div className="modal" style={{display: isEdit ? 'block' : 'none'}} onClick={handleClick}>
            </div>
            <div>
                <div style={{
                    background: isMouseOver && `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
                    borderRadius: !isEdit ? 5 : (error ? 0 : '0 0 5px 5px'),
                    boxShadow: isMouseOver && '0 0 10px 2px white'
                }}>
                    {!isEdit ? (<div className="castle" onClick={handleClick}>
                        <span style={{width: 100}}>{castle.lvl}</span>
                        <span style={{width: 100}}>{eng ? castle.nameEng : castle.nameRu}</span>
                        <span style={{width: 100, fontWeight: 'bold', color: 'whitesmoke'}}>{thetime}</span>
                        <span style={{width: 100}}>{fillingDay}</span>
                        <span style={{width: 100}}>{thetimeRed}</span>
                        <span style={{width: 100}}>{thisSpheretime}</span>
                        <span style={{width: 100, backgroundColor: statusBgr}}>&nbsp;</span>
                        <span style={{width: 100}}>{currentClan?.name}</span>
                        <span style={{width: 150}}>{castle.commentary}</span>
                        <span style={{width: 100}}>{lastUpdateUsername?.nickname}</span>
                        <span style={{width: 130}}></span>

                    </div>) : (<div style={{
                        position: 'relative'
                    }}>
                        <div className="castle-edit-header" style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
                            height: isEdit ? 40 : 0
                        }}>
                            <span style={{width: 100}}>{texts.level}</span>
                            <span style={{width: 100}}>{texts.name}</span>
                            <span style={{width: 100}}>{texts.time}</span>
                            <span style={{width: 100}}>{texts.fillDate}</span>
                            <span style={{width: 100}}>{texts.fillingLevel}</span>
                            <span style={{width: 100}}>{texts.sphereTime}</span>
                            <span style={{width: 100}}></span>
                            <span style={{width: 100}}>{texts.clan}</span>
                            <span style={{width: 150}}>{texts.commentary}</span>
                            <span style={{width: 100}}></span>
                            <span style={{width: 130}}></span>
                        </div>
                        <div className="castle castle-edit">
                            <span style={{width: 100}}>{castle.lvl}</span>
                            <span style={{width: 100}}>{eng ? castle.nameEng : castle.nameRu}</span>
                            <span style={{width: 100}}>
                                    <input
                                        style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}
                                        className="castle-input"
                                        type="text"
                                        value={time}
                                        onClick={clearTime}
                                        onChange={e => setTime(e.target.value)}
                                        onBlur={validateTime}
                                    />
                                </span>
                            <span style={{width: 100}}>
                                    <select id="select-date" className="castle-input select-clan"
                                            style={{
                                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                                            }}
                                            onChange={handleSelectDate}
                                            value={fillingDateValue}
                                    >
                                        <option value="1">{selects.today}</option>
                                        <option value="2">{selects.yesterday}</option>
                                        <option value="3">{selects.twoDaysAgo}</option>
                                    </select>
                                </span>
                            <span style={{width: 100}}>
                                    <input type="text"
                                           style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}
                                           className="castle-input"
                                           value={fillingLvl}
                                           onClick={clearFillingLvl}
                                           onChange={e => setFillingLvl(e.target.value)}
                                           onBlur={validateFillingLvl}
                                    />
                                </span>
                            <span style={{width: 100}}><input
                                style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}
                                className="castle-input" type="text"
                                value={spheretime}
                                onClick={clearSpheretime}
                                onChange={e => setSpheretime(e.target.value)}
                                onBlur={validateSpheretime}
                            /></span>
                            <span style={{width: 100}}></span>
                            <span style={{width: 100}}>
                                    <select id="select-clan" className="castle-input select-clan"
                                            style={{
                                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
                                            }}
                                            onChange={handleSelectClan}
                                            value={clan}
                                    >
                                        {clans.map(clan => (<option value={clan.id}>{clan.name}</option>))}
                                    </select>
                                </span>
                            <span style={{width: 150}}><input style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
                                width: '100%'
                            }} className="castle-input" type="text" value={commentary} onClick={clearCommentary}
                                                              onChange={e => setCommentary(e.target.value)}/></span>
                            <span style={{width: 100}}></span>
                            <span style={{width: 130}}><Button className="button-hover"
                                                               onClick={handleConfirm}>{buttons.confirm}</Button></span>
                        </div>
                        <div className="castle-edit-error" style={{
                            height: error ? 40 : 0,
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
                        }}>
                            {error}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>);
    }
;

export default TableCastle;




// Copy
// import React, {useEffect, useState} from 'react';
// import Button from "@mui/material/Button";
// import {useDispatch, useSelector} from "react-redux";
// import {tableCastleSaveInitiate} from "../store/table/actions";
// import {selectButtons, selectSelects, selectTexts} from "../store/lang/selectors";
//
// const TableCastle = ({token, tableId, table, clans, castle, eng, underline}) => {
//         const [isMouseOver, setIsMouseOver] = useState(false);
//         const [isEdit, setIsEdit] = useState(false);
//         const initialSpheretime = castle.fillingSpheretime;
//         const initialFillingLvl = castle.fillingLvl;
//         const [spheretime, setSpheretime] = useState(castle.fillingSpheretime);
//         const [error, setError] = useState('');
//         const [clan, setClan] = useState(castle.ownerClan ? castle.ownerClan : clans[0]?.id);
//         const [fillingLvl, setFillingLvl] = useState(castle.fillingLvl);
//         const [fillingDateValue, setFillingDateValue] = useState('1');
//         const [commentary, setCommentary] = useState(castle.commentary);
//
//         const buttons = useSelector(selectButtons);
//         const texts = useSelector(selectTexts);
//         const selects = useSelector(selectSelects);
//
//         let fillingHours = '';
//         let fillingMinutes = '';
//         let thetime = '';
//         let dateToFill = '';
//         const today = new Date();
//         let dateOfFilling = '';
//         let dateToday = '';
//         let fillingDay = '';
//         let lastUpdateUsername;
//         let currentClan;
//         let thisSpheretime;
//         let red;
//         let yellow;
//         let thetimeYellow;
//         let thetimeRed;
//         let status;
//         let statusBgr;
//
//         function dateDiffInDays(a, b) {
//             const _MS_PER_DAY = 1000 * 60 * 60 * 24;
//             // Discard the time and time-zone information.
//             const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
//             const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
//
//             return Math.floor((utc2 - utc1) / _MS_PER_DAY);
//         }
//
//         const getFillingTime = (fillingTime) => {
//             fillingHours = fillingTime.getHours();
//             fillingMinutes = fillingTime.getMinutes();
//
//             switch (castle.lvl) {
//                 case 15:
//                     if (castle.fillingLvl === 1) {
//                         fillingTime.setHours(fillingHours + 7);
//                     }
//                     if (castle.fillingLvl > 1 && castle.fillingLvl < 8) {
//                         fillingTime.setHours(fillingHours + 8);
//                     }
//
//                     red = new Date(fillingTime);
//                     red.setHours(red.getHours() - 1);
//                     break;
//                 case 30:
//                     if (castle.fillingLvl === 1) {
//                         fillingTime.setHours(fillingHours + 7);
//                     }
//                     if (castle.fillingLvl === 2) {
//                         fillingTime.setHours(fillingHours + 11);
//                     }
//                     if (castle.fillingLvl > 2 && castle.fillingLvl < 8) {
//                         fillingTime.setHours(fillingHours + 12);
//                         fillingTime.setMinutes(fillingMinutes + 30);
//                     }
//
//                     red = new Date(fillingTime);
//                     red.setHours(red.getHours() - 1);
//                     red.setMinutes(red.getMinutes() - 30);
//                     break;
//                 case 45:
//                     if (castle.fillingLvl === 1) {
//                         fillingTime.setHours(fillingHours + 7);
//                     }
//                     if (castle.fillingLvl === 2) {
//                         fillingTime.setHours(fillingHours + 11);
//                     }
//                     if (castle.fillingLvl === 3) {
//                         fillingTime.setHours(fillingHours + 15);
//                     }
//                     if (castle.fillingLvl > 3 && castle.fillingLvl < 8) {
//                         fillingTime.setHours(fillingHours + 17);
//                     }
//
//                     red = new Date(fillingTime);
//                     red.setHours(red.getHours() - 2);
//                     break;
//                 case 60:
//                     if (castle.fillingLvl === 1) {
//                         fillingTime.setHours(fillingHours + 7);
//                     }
//                     if (castle.fillingLvl === 2) {
//                         fillingTime.setHours(fillingHours + 11);
//                     }
//                     if (castle.fillingLvl === 3) {
//                         fillingTime.setHours(fillingHours + 15);
//                     }
//                     if (castle.fillingLvl === 4) {
//                         fillingTime.setHours(fillingHours + 18);
//                     }
//                     if (castle.fillingLvl === 5) {
//                         fillingTime.setHours(fillingHours + 20);
//                     }
//                     if (castle.fillingLvl === 6 || castle.fillingLvl === 7) {
//                         fillingTime.setHours(fillingHours + 20);
//                         fillingTime.setMinutes(fillingMinutes + 30);
//                     }
//
//                     red = new Date(fillingTime);
//                     red.setHours(red.getHours() - 2);
//                     red.setMinutes(red.getMinutes() - 30);
//                     break;
//                 case 75:
//                     if (castle.fillingLvl === 1) {
//                         fillingTime.setHours(fillingHours + 7);
//                     }
//                     if (castle.fillingLvl === 2) {
//                         fillingTime.setHours(fillingHours + 11);
//                     }
//                     if (castle.fillingLvl === 3) {
//                         fillingTime.setHours(fillingHours + 15);
//                     }
//                     if (castle.fillingLvl === 4) {
//                         fillingTime.setHours(fillingHours + 18);
//                     }
//                     if (castle.fillingLvl === 5) {
//                         fillingTime.setHours(fillingHours + 20);
//                     }
//                     if (castle.fillingLvl === 6) {
//                         fillingTime.setHours(fillingHours + 21);
//                     }
//                     if (castle.fillingLvl === 7) {
//                         fillingTime.setHours(fillingHours + 23);
//                     }
//
//                     red = new Date(fillingTime);
//                     red.setHours(red.getHours() - 3);
//                     break;
//                 case 90:
//                 case 120:
//                 case 250:
//                 case 350:
//                     if (castle.fillingLvl === 1) {
//                         fillingTime.setHours(fillingHours + 7);
//                     }
//                     if (castle.fillingLvl === 2) {
//                         fillingTime.setHours(fillingHours + 11);
//                     }
//                     if (castle.fillingLvl === 3) {
//                         fillingTime.setHours(fillingHours + 15);
//                     }
//                     if (castle.fillingLvl === 4) {
//                         fillingTime.setHours(fillingHours + 18);
//                     }
//                     if (castle.fillingLvl === 5) {
//                         fillingTime.setHours(fillingHours + 20);
//                     }
//                     if (castle.fillingLvl === 6) {
//                         fillingTime.setHours(fillingHours + 21);
//                     }
//                     if (castle.fillingLvl === 7) {
//                         fillingTime.setHours(fillingHours + 24);
//                     }
//
//                     red = new Date(fillingTime);
//                     red.setHours(red.getHours() - 3);
//                     red.setMinutes(red.getMinutes() - 30);
//                     break;
//             }
//
//             let month = fillingTime.getUTCMonth() + 1;
//             let year = fillingTime.getUTCFullYear();
//             let day = fillingTime.getUTCDate();
//
//             let pMonth = month.toString().padStart(2, "0");
//             let pDay = day.toString().padStart(2, "0");
//
//             dateOfFilling = new Date(`${year}-${pMonth}-${pDay}`);
//
//             yellow = new Date(red.valueOf() - (1000 * 60 * 60));
//
//             fillingHours = fillingTime.getHours().toString().padStart(2, "0");
//             fillingMinutes = fillingTime.getMinutes().toString().padStart(2, "0");
//
//             let redHours = red.getHours().toString().padStart(2, "0");
//             let redMinutes = red.getMinutes().toString().padStart(2, "0");
//             let yellowHours = yellow.getHours().toString().padStart(2, "0");
//             let yellowMinutes = yellow.getMinutes().toString().padStart(2, "0");
//
//             thetimeRed = redHours + ":" + redMinutes;
//             thetimeYellow = yellowHours + ":" + yellowMinutes;
//             thetime = fillingHours + ":" + fillingMinutes;
//
//             if (today < yellow) {
//                 status = 'blue';
//                 statusBgr = 'rgb(74, 94, 240)';
//             } else if (today < red && today > yellow) {
//                 status = 'yellow';
//                 statusBgr = 'rgb(240, 190, 65)';
//             } else if (today > red && today < fillingTime) {
//                 status = 'red';
//                 statusBgr = 'rgb(186, 71, 50)';
//             } else if (today > fillingTime) {
//                 status = 'white'
//                 statusBgr = 'rgb(227, 227, 227)';
//             }
//
//             let difference = dateDiffInDays(dateToday, dateOfFilling);
//
//             switch (difference) {
//                 case -2:
//                     fillingDay = selects.twoDaysAgo
//                     break;
//                 case -1:
//                     fillingDay = selects.yesterday
//                     break;
//                 case 0:
//                     fillingDay = selects.today
//                     break;
//                 case 1:
//                     fillingDay = selects.tomorrow
//                     break;
//                 default:
//                     fillingDay = null
//                     break;
//             }
//         }
//
//         if (castle.fillingDatetime) {
//             const fillingTime = new Date(Number(castle.fillingDatetime));
//
//             let month = fillingTime.getUTCMonth() + 1;
//             let year = fillingTime.getUTCFullYear();
//             let day = fillingTime.getUTCDate();
//
//             let pMonth = month.toString().padStart(2, "0");
//             let pDay = day.toString().padStart(2, "0");
//
//             dateOfFilling = new Date(`${year}-${pMonth}-${pDay}`);
//
//             month = today.getUTCMonth() + 1;
//             year = today.getUTCFullYear();
//             day = today.getUTCDate();
//
//             pMonth = month.toString().padStart(2, "0");
//             pDay = day.toString().padStart(2, "0");
//
//             dateToday = new Date(`${year}-${pMonth}-${pDay}`);
//
//             dateToFill = fillingTime.getDate();
//             lastUpdateUsername = table.users.filter(user => user.userId === castle.lastChangeUser)[0];
//
//             currentClan = table.clans.filter(clan => clan.id === castle.ownerClan)[0];
//             thisSpheretime = castle.fillingSpheretime;
//
//             getFillingTime(fillingTime);
//         }
//
//         const [time, setTime] = useState(thetime);
//
//         const dispatch = useDispatch();
//
//         //date regex: \b\d{2}(\.|\s|:)\d{2}\b
//         const setMouseOver = () => {
//             if (!isMouseOver) {
//                 setIsMouseOver(true);
//             }
//         }
//
//         const setMouseAway = () => {
//             if (isMouseOver) {
//                 setIsMouseOver(false);
//             }
//         }
//
//         const handleClick = () => {
//             isEdit ? setIsEdit(false) : setIsEdit(true);
//             setError('');
//         }
//
//         const timeRegex = /\b\d{1,2}(\.|\s|:)\d{2}\b/;
//
//         const validateTime = () => {
//             if (time) {
//                 if (!time.match(timeRegex)) {
//                     setError('Wrong time format. Examples: 18.09, 18 09, 18:09');
//                     setTimeout(() => setError(''), 4500);
//                     setTime(thetime);
//                 } else {
//                     let separator = ':';
//
//                     if (time.includes('.')) {
//                         separator = '.';
//                     }
//
//                     if (time.includes(' ')) {
//                         separator = ' ';
//                     }
//
//                     const newTime = time.split(separator);
//                     const hours = newTime[0];
//                     const minutes = newTime[1];
//
//                     if (Number(hours) > 23 || Number(minutes) > 59) {
//                         setError('Wrong time format. Hours: 0 - 23, minutes: 0 - 59')
//                         setTimeout(() => setError(''), 4500);
//                         setTime(thetime);
//                     } else {
//                         if (hours.length < 2) {
//                             setTime('0' + hours + ':' + minutes);
//                         } else {
//                             setTime(hours + ':' + minutes);
//                         }
//                     }
//                 }
//             } else {
//                 setTime(thetime);
//             }
//         }
//
//         const validateSpheretime = () => {
//             if (spheretime) {
//                 if (!spheretime.match(timeRegex)) {
//                     setError('Wrong sphere-time format. Examples: 18.09, 18 09, 18:09');
//                     setTimeout(() => setError(''), 4500);
//                     setSpheretime(initialSpheretime);
//                 } else {
//                     let separator = ':';
//
//                     if (spheretime.includes('.')) {
//                         separator = '.';
//                     }
//
//                     if (spheretime.includes(' ')) {
//                         separator = ' ';
//                     }
//
//                     const sphereTime = spheretime.split(separator);
//                     const sphereHours = sphereTime[0];
//                     const sphereMinutes = sphereTime[1];
//
//                     if (Number(sphereHours) > 23 || Number(sphereMinutes) > 59) {
//                         setError('Wrong sphere-time format. Hours: 0 - 23, minutes: 0 - 59')
//                         setTimeout(() => setError(''), 4500);
//                         setSpheretime(initialSpheretime);
//                     } else {
//                         if (sphereHours.length < 2) {
//                             setSpheretime('0' + sphereHours + ':' + sphereMinutes);
//                         } else {
//                             setSpheretime(sphereHours + ':' + sphereMinutes);
//                         }
//                     }
//                 }
//             }
//         }
//
//         const validateFillingLvl = () => {
//             if (fillingLvl) {
//                 if (isNaN(Number(fillingLvl))) {
//                     setFillingLvl(7)
//                 } else if (Number(fillingLvl) < 1) {
//                     setFillingLvl(1);
//                 } else if (Number(fillingLvl) > 7) {
//                     setFillingLvl(7);
//                 } else {
//                     setFillingLvl(Number(fillingLvl));
//                 }
//             } else {
//                 setFillingLvl(initialFillingLvl)
//             }
//         }
//
//         const clearTime = () => {
//             setTime('');
//             setError('');
//         }
//
//         const clearFillingLvl = () => {
//             setFillingLvl('');
//             setError('');
//         }
//
//         const clearSpheretime = () => {
//             setSpheretime('');
//             setError('');
//         }
//
//         const clearCommentary = () => {
//             setCommentary('');
//             setError('');
//         }
//
//         const handleSelectClan = (e) => {
//             const thisClan = e.target.value;
//
//             setClan(thisClan);
//         }
//
//         const handleSelectDate = (e) => {
//             const thisDateId = e.target.value;
//
//             setFillingDateValue(thisDateId);
//         }
//
//         const handleConfirm = () => {
//             let today;
//
//             switch (fillingDateValue) {
//                 case '1':
//                     today = new Date();
//                     break;
//                 case '2':
//                     today = new Date(new Date().setDate(new Date().getDate() - 1));
//                     break;
//                 case '3':
//                     today = new Date(new Date().setDate(new Date().getDate() - 2));
//                     break;
//                 default:
//                     break;
//             }
//
//             const hours = time.split(':')[0];
//             const minutes = time.split(':')[1];
//
//             today.setHours(hours);
//             today.setMinutes(minutes);
//             today.setSeconds('00');
//
//             const saveCastle = {
//                 id: castle.id,
//                 fillingDate: today.valueOf(),
//                 fillingLvl: fillingLvl,
//                 fillingSpheretime: spheretime,
//                 ownerClan: clan,
//                 commentary: commentary,
//                 tableId: tableId
//             };
//
//             dispatch(tableCastleSaveInitiate(token, saveCastle));
//
//             handleClick();
//         }
//
//         return (<div
//             onMouseEnter={setMouseOver}
//             onMouseLeave={setMouseAway}
//             style={{borderTop: underline && '2px solid whitesmoke'}}
//         >
//             <div className="modal" style={{display: isEdit ? 'block' : 'none'}} onClick={handleClick}>
//             </div>
//             <div>
//                 <div style={{
//                     background: isMouseOver && `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
//                     borderRadius: !isEdit ? 5 : (error ? 0 : '0 0 5px 5px'),
//                     boxShadow: isMouseOver && '0 0 10px 2px white'
//                 }}>
//                     {!isEdit ? (<div className="castle" onClick={handleClick}>
//                         <span style={{width: 100}}>{castle.lvl}</span>
//                         <span style={{width: 100}}>{eng ? castle.nameEng : castle.nameRu}</span>
//                         <span style={{width: 100, fontWeight: 'bold', color: 'whitesmoke'}}>{thetime}</span>
//                         <span style={{width: 100}}>{fillingDay}</span>
//                         <span style={{width: 100}}>{thetimeRed}</span>
//                         <span style={{width: 100}}>{thisSpheretime}</span>
//                         <span style={{width: 100, backgroundColor: statusBgr}}>&nbsp;</span>
//                         <span style={{width: 100}}>{currentClan?.name}</span>
//                         <span style={{width: 150}}>{castle.commentary}</span>
//                         <span style={{width: 100}}>{lastUpdateUsername?.nickname}</span>
//                         <span style={{width: 130}}></span>
//
//                     </div>) : (<div style={{
//                         position: 'relative'
//                     }}>
//                         <div className="castle-edit-header" style={{
//                             background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
//                             height: isEdit ? 40 : 0
//                         }}>
//                             <span style={{width: 100}}>{texts.level}</span>
//                             <span style={{width: 100}}>{texts.name}</span>
//                             <span style={{width: 100}}>{texts.time}</span>
//                             <span style={{width: 100}}>{texts.fillDate}</span>
//                             <span style={{width: 100}}>{texts.fillingLevel}</span>
//                             <span style={{width: 100}}>{texts.sphereTime}</span>
//                             <span style={{width: 100}}></span>
//                             <span style={{width: 100}}>{texts.clan}</span>
//                             <span style={{width: 150}}>{texts.commentary}</span>
//                             <span style={{width: 100}}></span>
//                             <span style={{width: 130}}></span>
//                         </div>
//                         <div className="castle castle-edit">
//                             <span style={{width: 100}}>{castle.lvl}</span>
//                             <span style={{width: 100}}>{eng ? castle.nameEng : castle.nameRu}</span>
//                             <span style={{width: 100}}>
//                                     <input
//                                         style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}
//                                         className="castle-input"
//                                         type="text"
//                                         value={time}
//                                         onClick={clearTime}
//                                         onChange={e => setTime(e.target.value)}
//                                         onBlur={validateTime}
//                                     />
//                                 </span>
//                             <span style={{width: 100}}>
//                                     <select id="select-date" className="castle-input select-clan"
//                                             style={{
//                                                 background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
//                                             }}
//                                             onChange={handleSelectDate}
//                                             value={fillingDateValue}
//                                     >
//                                         <option value="1">{selects.today}</option>
//                                         <option value="2">{selects.yesterday}</option>
//                                         <option value="3">{selects.twoDaysAgo}</option>
//                                     </select>
//                                 </span>
//                             <span style={{width: 100}}>
//                                     <input type="text"
//                                            style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}
//                                            className="castle-input"
//                                            value={fillingLvl}
//                                            onClick={clearFillingLvl}
//                                            onChange={e => setFillingLvl(e.target.value)}
//                                            onBlur={validateFillingLvl}
//                                     />
//                                 </span>
//                             <span style={{width: 100}}><input
//                                 style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}
//                                 className="castle-input" type="text"
//                                 value={spheretime}
//                                 onClick={clearSpheretime}
//                                 onChange={e => setSpheretime(e.target.value)}
//                                 onBlur={validateSpheretime}
//                             /></span>
//                             <span style={{width: 100}}></span>
//                             <span style={{width: 100}}>
//                                     <select id="select-clan" className="castle-input select-clan"
//                                             style={{
//                                                 background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
//                                             }}
//                                             onChange={handleSelectClan}
//                                             value={clan}
//                                     >
//                                         {clans.map(clan => (<option value={clan.id}>{clan.name}</option>))}
//                                     </select>
//                                 </span>
//                             <span style={{width: 150}}><input style={{
//                                 background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`,
//                                 width: '100%'
//                             }} className="castle-input" type="text" value={commentary} onClick={clearCommentary}
//                                                               onChange={e => setCommentary(e.target.value)}/></span>
//                             <span style={{width: 100}}></span>
//                             <span style={{width: 130}}><Button className="button-hover"
//                                                                onClick={handleConfirm}>{buttons.confirm}</Button></span>
//                         </div>
//                         <div className="castle-edit-error" style={{
//                             height: error ? 40 : 0,
//                             background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
//                         }}>
//                             {error}
//                         </div>
//                     </div>)}
//                 </div>
//             </div>
//         </div>);
//     }
// ;
//
// export default TableCastle;