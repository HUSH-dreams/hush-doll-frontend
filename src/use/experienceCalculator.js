import {useMemo} from 'react';
// Импортируем реальные данные из таблицы
import {expTable} from "../assets/exp";

/**
 * Получает точное количество опыта для апа до уровня (levelT, levelD)
 * используя прямой поиск в таблице.
 * @param {number} targetLevelT - Целевой уровень титула (1-60)
 * @param {number} targetLevelD - Целевой уровень степени (1-60)
 * @returns {number} Количество опыта
 */
const getExpForLevelUp = (targetLevelT, targetLevelD) => {
    const rowIndex = targetLevelT - 1;
    const colIndex = targetLevelD - 1;

    if (rowIndex < 0 || colIndex < 0 || rowIndex >= expTable.length || colIndex >= expTable[0].length) {
        return 0;
    }

    return expTable[rowIndex][colIndex];
};

export const useExperienceCalculator = (firstInit, secondInit, firstFinal, secondFinal) => {
    const totalExperience = useMemo(() => {
        if (Number(firstFinal) < Number(firstInit) || Number(secondFinal) < Number(secondInit)) {
            return 0;
        }

        if (Number(firstFinal) === Number(firstInit) && Number(secondFinal) === Number(secondInit)) {
            return 0;
        }

        let sum = 0;
        let currentT = Number(firstInit);
        let currentD = Number(secondInit);

        while (currentT <= Number(firstFinal) || currentD <= Number(secondFinal)) {
            if (currentT === Number(firstFinal) && currentD === Number(secondFinal)) {
                break;
            }

            const expToAdd = getExpForLevelUp(currentT, currentD);
            sum += expToAdd;

            if (currentT === Number(firstFinal)) {
                currentD++;
            } else if (currentD === Number(secondFinal)) {
                currentT++;
            } else if (currentT < currentD) {
                currentT++;
            } else if (currentD < currentT) {
                currentD++;
            } else {
                if (currentT < Number(firstFinal)) {
                    currentT++;
                } else {
                    currentD++;
                }
            }
        }

        return sum;
    }, [firstInit, secondInit, firstFinal, secondFinal]);

    return totalExperience;
};