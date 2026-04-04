import {useSelector} from "react-redux";
import {selectLang} from "../store/lang/selectors";

export function recipeType(type, eng) {
    let displayType = '';
    let engType = '';
    let ruType = '';

    switch (type) {
        case 'earth':
            ruType = 'Земля';
            engType = 'Earth';
            break;
        case 'air':
            ruType = 'Воздух';
            engType = 'Air';
            break;
        case 'water':
            ruType = 'Вода';
            engType = 'Water';
            break;
        case 'fire':
            ruType = 'Огонь';
            engType = 'Fire';
            break;
        case 'earth-higher':
            ruType = 'Земля +3';
            engType = 'Earth +3';
            break;
        case 'air-higher':
            ruType = 'Воздух +3';
            engType = 'Air +3';
            break;
        case 'water-higher':
            ruType = 'Вода +3';
            engType = 'Water +3';
            break;
        case 'fire-higher':
            ruType = 'Огонь +3';
            engType = 'Fire +3';
            break;
        case 'druid1':
        case 'druid2':
            ruType = 'Друид';
            engType = 'Druid';
            break;
        case 'inquisitor':
            ruType = 'Инквизитор';
            engType = 'Inquisitor';
            break;
        case 'thief':
            ruType = 'Вор';
            engType = 'Thief';
            break;
        case 'blacksmith':
            ruType = 'Кузнец';
            engType = 'Blacksmith';
            break;
        case 'necromancer':
            ruType = 'Некромант';
            engType = 'Necromancer';
            break;
        case 'sorcerer':
            ruType = 'Чародей';
            engType = 'Sorcerer';
            break;
        case 'armorer':
            ruType = 'Оружейник';
            engType = 'Armorer';
            break;
        default: break;
    }

    if (eng) {
        return engType;
    }

    return ruType;
}