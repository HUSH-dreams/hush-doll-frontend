import React from 'react';
import StatsTable from "./StatsTable";
import StatsDifference from "./StatsDifference";

/**
 * @param {object} props
 * @param {object} props.stats - Данные статистики. Содержит поля 'main' и 'difference'.
 * @param {string} props.side - Сторона ('players' или 'clans').
 * @param {Array<string>} props.myNames - Массив выбранных имен.
 * @param {function} props.handleToggle - Функция для переключения имен.
 * @param {boolean} props.isClans - Флаг, указывающий, отображаются ли данные кланов.
 */
const Stats = ({stats, side, myNames, handleToggle, isClans}) => {
    return (
        <div className="stats">
            {/* Рендерим основную таблицу */}
            <StatsTable stats={stats.main}
                        side={side}
                        myNames={myNames}
                        handleToggle={handleToggle}
                        tableFirst={true}
                        isClans={isClans}
            />
            {/* Рендерим таблицу с разницей, если данные существуют */}
            {stats.difference && (
                <StatsDifference stats={stats.difference}
                                 side={side}
                                 myNames={myNames}
                                 handleToggle={handleToggle}
                                 isClans={isClans}
                />
            )}
        </div>
    );
};

export default Stats;
