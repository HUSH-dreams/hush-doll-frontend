import React from 'react';
import {useLang} from "../use/lang";
import StatsRow from "./StatsRow";

const StatsTable = ({stats, side, myNames, handleToggle, tableFirst = false, list}) => {
    const {texts} = useLang();

    return (
        <div className={`stats-container--table ${list === 'castles' && 'castles'}`}>
            {/* Заголовок таблицы */}
            <div className="stats-container--table__header">
                {list === 'castles' && <div className="stats-container--table__row-small">{texts.level}</div>}
                {list === 'castles' && <div className="stats-container--table__row-medium">{texts.castle}</div>}
                {list === 'players' && <div className="stats-container--table__row-wide">{texts.nickname}</div>}
                <div className="stats-container--table__row-medium">{texts.clan}</div>
                {list === 'clans' && <div className="stats-container--table__row-small">{texts.charNumber}</div>}
                {(list === 'clans' || list === 'players') && <div className="stats-container--table__row-small">PVP</div>}
            </div>

            <div className="stats-container--table__body">
                {
                    stats.map((stat, index) => {
                        if (stat.pvp_points !== 0) {
                            let myName = '';

                            if (list === 'players') {
                                myName = myNames?.some(name => name === stat.player_nickname);
                            }

                            if (list === 'clans') {
                                myName = myNames?.some(name => name === stat.clan_name);
                            }

                            if (list === 'castles') {
                                myName = myNames?.some(name => name === stat.clan_name);
                            }

                            // Рендер компонента StatsRow для каждой строки данных.
                            return <StatsRow data={stat}
                                             index={index}
                                             click={handleToggle}
                                             myName={myName}
                                             position={tableFirst ? 'left' : 'right'}
                                             key={side + '-dif-' + index} list={list}/>
                        }

                        return null;
                    })
                }
            </div>
        </div>
    );
};

export default StatsTable;
