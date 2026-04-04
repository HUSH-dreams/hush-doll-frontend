export function getGroupName(group, eng) {
    let textRu = '';
    let textEng = '';

    switch (group) {
        case 'professions':
            textRu = 'Профессии';
            textEng = 'Professions';
            break;
        case 'elements':
            textRu = 'Стихии';
            textEng = 'Elements';
            break;
        case 'elements-higher':
            textRu = 'Стихии +3';
            textEng = 'Elements +3';
            break;
    }

    if (eng) {
        return textEng;
    }

    return textRu;
}