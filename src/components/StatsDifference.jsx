import React from 'react';
import {useLang} from "../use/lang";
import StatsRow from "./StatsRow";

/**
 * @param {object} props
 * @param {object} props.stats - Данные статистики разницы.
 * @param {string} props.side - Сторона ('players' или 'clans').
 * @param {Array<string>} props.myNames - Массив выбранных имен.
 * @param {function} props.handleToggle - Функция для переключения имен.
 * @param {boolean} props.isClans - Флаг, указывающий, отображаются ли данные кланов.
 */
const StatsDifference = ({stats, side, myNames, handleToggle, isClans}) => {
    const {texts} = useLang();

    return (
        <div className="stats-container__difference">
            <div className="stats-container__difference-header">
                {/* Заголовок "Разница" */}
                <div className="stats-container--table__row-wide">{texts.difference}</div>
                {/* Столбец "Клан" отображается только для игроков */}
                {!isClans && <div className="stats-container--table__row-medium">{texts.clan}</div>}
                <div className="stats-container--table__row-small">PVP</div>
            </div>
            <div className="stats-container__difference-body">
                {
                    stats.map((stat, index) => {
                        const myName = myNames?.some(name => name === (isClans ? stat.clan_name : stat.player_nickname));

                        return <StatsRow data={stat}
                                         index={index}
                                         click={handleToggle}
                                         myName={myName}
                                         isTable={false} // Указываем, что это не основная таблица
                                         side={side}
                                         isClans={isClans}
                                         key={side + '-diff-' + index}/>
                    })
                }
            </div>
        </div>
    );
};

export default StatsDifference;
