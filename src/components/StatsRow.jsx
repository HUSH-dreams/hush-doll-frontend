import React, {useEffect, useRef} from 'react';
import {useLang} from "../use/lang";
import {useSelector} from "react-redux";
import {selectLang} from "../store/lang/selectors";

const StatsRow = ({data, index, click, myName, isTable = true, position = 'middle', list}) => {
    // useRef используется для доступа к DOM-элементу строки.
    const rowRef = useRef(null);
    const eng = useSelector(selectLang);

    // useEffect устанавливает задержку анимации для каждой строки,
    // создавая эффект "падающей" таблицы.
    useEffect(() => {
        if (rowRef.current) {
            rowRef.current.style.animationDelay = `${(index * 20) * (index / 20)}ms`;
        }
    },[index]);

    let keyPrefix = '';
    let idPrefix = '';

    switch (position) {
        case 'left':
            keyPrefix = 'pvp-left-';
            idPrefix = 'pvp-points+left+';
            break;
        case 'middle':
            keyPrefix = 'pvp-middle-';
            idPrefix = 'pvp-points+middle+';
            break;
        case 'right':
            keyPrefix = 'pvp-right-';
            idPrefix = 'pvp-points+right+';
            break;
        default: break;
    }

    return (
        <div
            className={isTable ? "stats-container--table__body-row" : "stats-container__difference-row"}
            key={list + keyPrefix + index}
            id={idPrefix + index}
            onClick={e => click(e)}
            ref={rowRef}
        >
            {
                list === 'players' && <>
                    <div className={myName ? 'my-name stats-container--table__row-wide' : 'stats-container--table__row-wide'}>{isTable ? data.player_nickname : data.nickname}</div>
                    <div className={myName ? 'my-name stats-container--table__row-medium' : 'stats-container--table__row-medium'}>{data.clan}</div>
                    {
                        isTable && <div className="stats-container--table__row-small">{data.pvp_points}</div>
                    }
                    {
                        !isTable && <div className={data.difference > 0 ? "stats-container--table__row-small green" : "stats-container--table__row-small red"} >{data.difference > 0 && '+'}{data.difference}</div>
                    }
                </>
            }
            {
                list === 'clans' && <>
                    <div className={myName ? 'my-name stats-container--table__row-wide' : 'stats-container--table__row-wide'}>{data.clan_name}</div>
                    <div className={myName ? 'my-name stats-container--table__row-small' : 'stats-container--table__row-small'}>{data.players_count}</div>
                    {
                        isTable && <div className="stats-container--table__row-small">{data.pvp_points}</div>
                    }
                    {
                        !isTable && <div className={data.difference > 0 ? "stats-container--table__row-small green" : "stats-container--table__row-small red"} >{data.difference > 0 && '+'}{data.difference}</div>
                    }
                </>

            }
            {
                list === 'castles' && <>
                    <div className={myName ? 'my-name stats-container--table__row-small' : 'stats-container--table__row-small'}>{data.castle_lvl}</div>
                    <div className={myName ? 'my-name stats-container--table__row-wide' : 'stats-container--table__row-wide'}>{eng ? data.castle_name_eng : data.castle_name_ru}</div>
                    <div className={myName ? 'my-name stats-container--table__row-medium' : 'stats-container--table__row-medium'}>{data.clan}</div>
                </>
            }

        </div>
    );
};

export default StatsRow;
