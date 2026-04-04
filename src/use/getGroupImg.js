export function getGroupImg(type) {
    let img = '';

    switch (type) {
        case 'druid1':
        case 'druid2':
            img = 'sp_spec07';
            break;
        case 'inquisitor':
            img = 'sp_spec03';
            break;
        case 'thief':
            img = 'sp_spec08';
            break;
        case 'blacksmith':
            img = 'sp_spec11';
            break;
        case 'necromancer':
            img = 'sp_spec13';
            break;
        case 'sorcerer':
            img = 'sp_spec12';
            break;
        case 'armorer':
            img = 'sp_spec10';
            break;

    }

    return img;
}