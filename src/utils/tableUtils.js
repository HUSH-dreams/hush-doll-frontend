// src/utils/tableUtils.js

// Функция для расчета timeToFill, вынесенная из TableContainer.js
export const calculateTimeToFill = (thisCastle) => {
    if (!thisCastle.fillingDatetime) {
        return Infinity; // Замки без времени в конец списка
    }

    const fillingTime = new Date(Number(thisCastle.fillingDatetime));

    let fillingHours = fillingTime.getHours();
    let fillingMinutes = fillingTime.getMinutes();

    switch (thisCastle.lvl) {
        case 15:
            if (thisCastle.fillingLvl === 1) {
                fillingTime.setHours(fillingHours + 7);
            }
            if (thisCastle.fillingLvl > 1 && thisCastle.fillingLvl < 8) {
                fillingTime.setHours(fillingHours + 8);
            }
            break;
        case 30:
            if (thisCastle.fillingLvl === 1) {
                fillingTime.setHours(fillingHours + 7);
            }
            if (thisCastle.fillingLvl === 2) {
                fillingTime.setHours(fillingHours + 11);
            }
            if (thisCastle.fillingLvl > 2 && thisCastle.fillingLvl < 8) {
                fillingTime.setHours(fillingHours + 12);
                fillingTime.setMinutes(fillingMinutes + 30);
            }
            break;
        case 45:
            if (thisCastle.fillingLvl === 1) {
                fillingTime.setHours(fillingHours + 7);
            }
            if (thisCastle.fillingLvl === 2) {
                fillingTime.setHours(fillingHours + 11);
            }
            if (thisCastle.fillingLvl === 3) {
                fillingTime.setHours(fillingHours + 15);
            }
            if (thisCastle.fillingLvl > 3 && thisCastle.fillingLvl < 8) {
                fillingTime.setHours(fillingHours + 17);
            }
            break;
        case 60:
            if (thisCastle.fillingLvl === 1) {
                fillingTime.setHours(fillingHours + 7);
            }
            if (thisCastle.fillingLvl === 2) {
                fillingTime.setHours(fillingHours + 11);
            }
            if (thisCastle.fillingLvl === 3) {
                fillingTime.setHours(fillingHours + 15);
            }
            if (thisCastle.fillingLvl === 4) {
                fillingTime.setHours(fillingHours + 18);
            }
            if (thisCastle.fillingLvl === 5) {
                fillingTime.setHours(fillingHours + 20);
            }
            if (thisCastle.fillingLvl === 6 || thisCastle.fillingLvl === 7) {
                fillingTime.setHours(fillingHours + 20);
                fillingTime.setMinutes(fillingMinutes + 30);
            }
            break;
        case 75:
            if (thisCastle.fillingLvl === 1) {
                fillingTime.setHours(fillingHours + 7);
            }
            if (thisCastle.fillingLvl === 2) {
                fillingTime.setHours(fillingHours + 11);
            }
            if (thisCastle.fillingLvl === 3) {
                fillingTime.setHours(fillingHours + 15);
            }
            if (thisCastle.fillingLvl === 4) {
                fillingTime.setHours(fillingHours + 18);
            }
            if (thisCastle.fillingLvl === 5) {
                fillingTime.setHours(fillingHours + 20);
            }
            if (thisCastle.fillingLvl === 6) {
                fillingTime.setHours(fillingHours + 21);
            }
            if (thisCastle.fillingLvl === 7) {
                fillingTime.setHours(fillingHours + 23);
            }
            break;
        case 90:
        case 120:
        case 250:
        case 350:
            if (thisCastle.fillingLvl === 1) {
                fillingTime.setHours(fillingHours + 7);
            }
            if (thisCastle.fillingLvl === 2) {
                fillingTime.setHours(fillingHours + 11);
            }
            if (thisCastle.fillingLvl === 3) {
                fillingTime.setHours(fillingHours + 15);
            }
            if (thisCastle.fillingLvl === 4) {
                fillingTime.setHours(fillingHours + 18);
            }
            if (thisCastle.fillingLvl === 5) {
                fillingTime.setHours(fillingHours + 20);
            }
            if (thisCastle.fillingLvl === 6) {
                fillingTime.setHours(fillingHours + 21);
            }
            if (thisCastle.fillingLvl === 7) {
                fillingTime.setHours(fillingHours + 24);
            }
            break;
        default:
            return Infinity; // Замки с неопределенным уровнем в конец
    }
    return fillingTime.valueOf();
};

// Функция для фильтрации замков, используемая в редьюсере
export const handleSelect = (lvlId, allCastles, favoriteCastles) => {
    let filteredCastles = [];
    switch (lvlId) {
        case '15-30':
            filteredCastles = allCastles.filter(castle => castle.lvl >= 15 && castle.lvl <= 30);
            break;
        case '45-75':
            filteredCastles = allCastles.filter(castle => castle.lvl >= 45 && castle.lvl <= 75);
            break;
        case '90+':
            filteredCastles = allCastles.filter(castle => castle.lvl >= 90);
            break;
        case 'chosen':
            // Фильтруем избранные замки
            filteredCastles = allCastles.filter(castle => favoriteCastles?.includes(castle.lvl));
            break;
        default:
            filteredCastles = allCastles; // Если lvlId не распознан, возвращаем все замки
            break;
    }
    return { castles: filteredCastles };
};

export const getCastleNameById = (id) => {
    let name = '';

    switch (Number(id)) {
        case 1:
            name = 'Шателье'
            break;
        case 2:
            name = 'Пельтье'
            break;
        case 3:
            name = 'Льеж'
            break;
        case 4:
            name = 'Арис'
            break;
        case 5:
            name = 'Эйкум-кас'
            break;
        case 6:
            name = 'Фьеф'
            break;
        case 7:
            name = 'Триумфалер'
            break;
        case 8:
            name = 'Латор'
            break;
        case 9:
            name = 'Гедеон'
            break;
        case 10:
            name = 'Сабулат'
            break;
        case 11:
            name = 'Каблак'
            break;
        case 12:
            name = 'Деванагари'
            break;
        case 13:
            name = 'Блессендор'
            break;
        case 14:
            name = 'Айонат'
            break;
        case 15:
            name = 'Туанод'
            break;
        case 16:
            name = 'Терноваль'
            break;
        case 17:
            name = 'Каре-Рояль'
            break;
        case 18:
            name = 'Аммалаэль'
            break;
        case 19:
            name = 'Деффенсат'
            break;
        case 20:
            name = 'Сет'
            break;
        case 21:
            name = 'Кануак'
            break;
        case 22:
            name = 'Иммертель'
            break;
        case 23:
            name = 'Алдарнон'
            break;
        case 24:
            name = 'Багарнак'
            break;
        case 25:
            name = 'Оркобьен'
            break;
        case 26:
            name = 'Лендер'
            break;
        case 27:
            name = 'Нарцисс'
            break;
        case 28:
            name = 'Шепростан'
            break;
        case 29:
            name = 'Кабрад'
            break;
        case 30:
            name = 'Келес'
            break;
        case 31:
            name = 'Йонг'
            break;
        case 32:
            name = 'Ранден'
            break;
        case 33:
            name = 'Элек'
            break;
        case 34:
            name = 'Гавот'
            break;
        case 35:
            name = 'Ниргун'
            break;
        case 36:
            name = 'Кандур'
            break;
        case 37:
            name = 'Гелгивинн'
            break;
        case 38:
            name = 'Иль-Суильи-Руа'
            break;

        default: break;
    }

    return name;
}