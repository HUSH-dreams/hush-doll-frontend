

export function getElement(id, eng, type) {
    let displayElementRu = '';
    let displayElementEng = '';
    let img = ''

    switch (id) {
        case 1:
            displayElementRu = 'Земля';
            displayElementEng = 'Earth';
            img = 'd1';
            break;
        case 2:
            displayElementRu = 'Воздух';
            displayElementEng = 'Air';
            img = 'd2';
            break;
        case 3:
            displayElementRu = 'Вода';
            displayElementEng = 'Water';
            img = 'd3';
            break;
        case 4:
            displayElementRu = 'Огонь';
            displayElementEng = 'Fire';
            img = 'd4';
            break;
        default:
            break;
    }

    if (type === 'text') {
        if (eng) {
            return displayElementEng;
        }

        return displayElementRu;
    }

    return img;
}