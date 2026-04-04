export function getTypes() {
    return [
        {
            name: 'city', iconUrl: '/town'
        }, {
            name: 'castle', iconUrl: '/castle'
        }, {
            name: 'guild', iconUrl: '/guild'
        }, {
            name: 'graveyard', iconUrl: '/graveyard'
        }, {
            name: 'crater', iconUrl: '/crater'
        }, {
            name: 'teleport-spot', iconUrl: '/teleport-spot'
        }, {
            name: 'tavern', iconUrl: '/tavern'
        }, {
            name: 'teleport', iconUrl: '/teleport'
        }, {
            name: 'teleport-broken', iconUrl: '/teleport-broken'
        }, {
            name: 'weapons', iconUrl: '/weapons'
        }, {
            name: 'tower', iconUrl: '/tower'
        }, {
            name: 'quest', iconUrl: '/quest'
        }, {
            name: 'specials', iconUrl: '/specials'
        }, {
            name: 'rebirth', iconUrl: '/rebirth'
        }, {
            name: 'quest-dungeon', iconUrl: '/quest-dungeon'
        }, {
            name: 'general-dungeon', iconUrl: '/general-dungeon'
        }]
}

export function getAllTypes() {
    return [
        {name: 'city', type: 1},
        {name: 'castle', type: 1},
        {name: 'guild', type: 1},
        {name: 'graveyard', type: 1},
        {name: 'crater', type: 1},
        {name: 'teleport-spot', type: 1},
        {name: 'tavern', type: 1},
        {name: 'teleport', type: 1},
        {name: 'teleport-broken', type: 1},
        {name: 'weapons', type: 1},
        {name: 'tower', type: 1},
        {name: 'quest', type: 1},
        {name: 'specials', type: 1},
        {name: 'rebirth', type: 1},
        {name: 'quest-dungeon', type: 1},
        {name: 'general-dungeon', type: 1}]
}

export function getHyperionElements() {
    return [{id: 'city1', type: 'city', x: 59, y: 78, iconUrl: '/town', nameRu: 'Торвиль'}, {
        id: 'city2', type: 'city', x: 48, y: 52.5, iconUrl: '/town', nameRu: 'Бангвиль'
    }, {id: 'city3', type: 'city', x: 67, y: 27, iconUrl: '/town', nameRu: 'Шипстоун'}, {
        id: 'city4', type: 'city', x: 11, y: 63, iconUrl: '/town', nameRu: 'Санпул'
    },

        {
            id: 'guild1',
            type: 'guild',
            x: 25,
            y: 31,
            iconUrl: '/guild',
            nameRu: 'Чародей',
            descriptionRu: 'Арт Кендальф'
        }, {
            id: 'guild2', type: 'guild', x: 33, y: 22.5, iconUrl: '/guild', nameRu: 'Вор', descriptionRu: 'Брэм Стиллер'
        }, {
            id: 'guild3',
            type: 'guild',
            x: 4,
            y: 46.5,
            iconUrl: '/guild',
            nameRu: 'Крестоносец',
            descriptionRu: 'Крис Кросс'
        }, {
            id: 'guild4',
            type: 'guild',
            x: 86,
            y: 7.5,
            iconUrl: '/guild',
            nameRu: 'Мастер Стали',
            descriptionRu: 'Генри Стронг'
        }, {
            id: 'guild5',
            type: 'guild',
            x: 42,
            y: 42,
            iconUrl: '/guild',
            nameRu: 'Друид',
            descriptionRu: 'Ирвин Нетралс'
        }, {
            id: 'guild6',
            type: 'guild',
            x: 90,
            y: 52.5,
            iconUrl: '/guild',
            nameRu: 'Варвар',
            descriptionRu: 'Рейв Слоттер'
        }, {
            id: 'guild7', type: 'guild', x: 65, y: 33, iconUrl: '/guild', nameRu: 'Кузнец', descriptionRu: 'Роджер Смит'
        }, {
            id: 'guild8',
            type: 'guild',
            x: 10,
            y: 78.5,
            iconUrl: '/guild',
            nameRu: 'Инквизитор',
            descriptionRu: 'Брэд Бэттер'
        }, {
            id: 'guild9',
            type: 'guild',
            x: 60,
            y: 60,
            iconUrl: '/guild',
            nameRu: 'Охотник',
            descriptionRu: 'Шарп Хантер'
        }, {
            id: 'guild10',
            type: 'guild',
            x: 43,
            y: 68,
            iconUrl: '/guild',
            nameRu: 'Некромант',
            descriptionRu: 'Райс Корпс'
        }, {
            id: 'guild11',
            type: 'guild',
            x: 85,
            y: 67.5,
            iconUrl: '/guild',
            nameRu: 'Ассасин',
            descriptionRu: 'Барт Миллер'
        }, {
            id: 'guild12',
            type: 'guild',
            x: 42,
            y: 83,
            iconUrl: '/guild',
            nameRu: 'Архимаг',
            descriptionRu: 'Фил Оакенфилд'
        }, {
            id: 'guild13',
            type: 'guild',
            x: 58,
            y: 96.5,
            iconUrl: '/guild',
            nameRu: 'Оружейник',
            descriptionRu: 'Абрахам Стейр'
        }, {
            id: 'guild14',
            type: 'guild',
            x: 79,
            y: 84,
            iconUrl: '/guild',
            nameRu: 'Бандиер',
            descriptionRu: 'Коннор Гард'
        },

        {
            id: 'castle1',
            type: 'castle',
            x: 86,
            y: 11,
            iconUrl: '/castle',
            nameRu: 'Туанод',
            descriptionRu: '45 уровень'
        }, {
            id: 'castle2',
            type: 'castle',
            x: 51,
            y: 24,
            iconUrl: '/castle',
            nameRu: 'Латор',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle3',
            type: 'castle',
            x: 38,
            y: 32,
            iconUrl: '/castle',
            nameRu: 'Каблак',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle4', type: 'castle', x: 79, y: 31, iconUrl: '/castle', nameRu: 'Арис', descriptionRu: '15 уровень'
        }, {
            id: 'castle5',
            type: 'castle',
            x: 94,
            y: 34,
            iconUrl: '/castle',
            nameRu: 'Терноваль',
            descriptionRu: '45 уровень'
        }, {
            id: 'castle6',
            type: 'castle',
            x: 14,
            y: 39,
            iconUrl: '/castle',
            nameRu: 'Аммалаэль',
            descriptionRu: '45 уровень'
        }, {
            id: 'castle7',
            type: 'castle',
            x: 34,
            y: 40,
            iconUrl: '/castle',
            nameRu: 'Эйкум-кас',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle8', type: 'castle', x: 46, y: 45, iconUrl: '/castle', nameRu: 'Льеж', descriptionRu: '15 уровень'
        }, {
            id: 'castle9', type: 'castle', x: 68, y: 46, iconUrl: '/castle', nameRu: 'Фьеф', descriptionRu: '30 уровень'
        }, {
            id: 'castle10',
            type: 'castle',
            x: 53,
            y: 56.5,
            iconUrl: '/castle',
            nameRu: 'Пельтье',
            descriptionRu: '15 уровень'
        }, {
            id: 'castle11',
            type: 'castle',
            x: 26,
            y: 62,
            iconUrl: '/castle',
            nameRu: 'Шателье',
            descriptionRu: '15 уровень'
        }, {
            id: 'castle12',
            type: 'castle',
            x: 31,
            y: 71,
            iconUrl: '/castle',
            nameRu: 'Сабулат',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle13',
            type: 'castle',
            x: 13,
            y: 76.5,
            iconUrl: '/castle',
            nameRu: 'Гедеон',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle14',
            type: 'castle',
            x: 41,
            y: 78,
            iconUrl: '/castle',
            nameRu: 'Триумфалер',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle15',
            type: 'castle',
            x: 10,
            y: 97,
            iconUrl: '/castle',
            nameRu: 'Деффенсат',
            descriptionRu: '45 уровень'
        }, {
            id: 'castle16',
            type: 'castle',
            x: 52.5,
            y: 93.5,
            iconUrl: '/castle',
            nameRu: 'Блессендор',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle17',
            type: 'castle',
            x: 83,
            y: 78,
            iconUrl: '/castle',
            nameRu: 'Айонат',
            descriptionRu: '30 уровень'
        }, {
            id: 'castle18',
            type: 'castle',
            x: 89,
            y: 64,
            iconUrl: '/castle',
            nameRu: 'Каре-Рояль',
            descriptionRu: '45 уровень'
        }, {
            id: 'castle19',
            type: 'castle',
            x: 61.5,
            y: 68.5,
            iconUrl: '/castle',
            nameRu: 'Дэванагари (30)',
            descriptionRu: ''
        },

        {
            id: 'graveyard1',
            type: 'graveyard',
            x: 69,
            y: 33,
            iconUrl: '/graveyard',
            nameRu: 'Кладбище Шипстоуна',
            descriptionRu: '30 - 60 имена'
        }, {
            id: 'graveyard2',
            type: 'graveyard',
            x: 6,
            y: 65.5,
            iconUrl: '/graveyard',
            nameRu: 'Кладбище Санпула',
            descriptionRu: '30 - 60 имена'
        }, {
            id: 'graveyard3',
            type: 'graveyard',
            x: 55,
            y: 52.5,
            iconUrl: '/graveyard',
            nameRu: 'Кладбище Бангвиля',
            descriptionRu: '30 - 60 имена'
        }, {
            id: 'graveyard4',
            type: 'graveyard',
            x: 67,
            y: 78,
            iconUrl: '/graveyard',
            nameRu: 'Кладбище Торвиля',
            descriptionRu: '30 - 60 имена'
        },

        {
            id: 'crater1', type: 'crater', x: 10, y: 73, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater2', type: 'crater', x: 35, y: 24, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater3',
            type: 'crater',
            x: 76.5,
            y: 18.5,
            iconUrl: '/crater',
            nameRu: 'Кратер',
            descriptionRu: '40 имя'
        }, {
            id: 'crater4',
            type: 'crater',
            x: 25.5,
            y: 37.5,
            iconUrl: '/crater',
            nameRu: 'Кратер',
            descriptionRu: '40 имя'
        }, {
            id: 'crater5', type: 'crater', x: 52, y: 33.5, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater6', type: 'crater', x: 71, y: 38.5, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater7',
            type: 'crater',
            x: 60.5,
            y: 40.5,
            iconUrl: '/crater',
            nameRu: 'Кратер',
            descriptionRu: '40 имя'
        }, {
            id: 'crater8', type: 'crater', x: 37, y: 43.5, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater9', type: 'crater', x: 34, y: 49, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater10', type: 'crater', x: 38, y: 73, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater11',
            type: 'crater',
            x: 11.5,
            y: 92.5,
            iconUrl: '/crater',
            nameRu: 'Кратер',
            descriptionRu: '40 имя'
        }, {
            id: 'crater12', type: 'crater', x: 40, y: 85, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        }, {
            id: 'crater13',
            type: 'crater',
            x: 69,
            y: 85.5,
            iconUrl: '/crater',
            nameRu: 'Кратер',
            descriptionRu: '40 имя'
        }, {
            id: 'crater14', type: 'crater', x: 90, y: 67, iconUrl: '/crater', nameRu: 'Кратер', descriptionRu: '40 имя'
        },

        {
            id: 'teleport-spot1',
            type: 'teleport-spot',
            x: 14,
            y: 30,
            iconUrl: '/teleport-spot',
            nameRu: 'На северо-западный край Гипериона',
            descriptionRu: ''
        }, {
            id: 'teleport-spot2',
            type: 'teleport-spot',
            x: 32,
            y: 28,
            iconUrl: '/teleport-spot',
            nameRu: 'К мосту на Тантал',
            descriptionRu: ''
        }, {
            id: 'teleport-spot3',
            type: 'teleport-spot',
            x: 31,
            y: 25,
            iconUrl: '/teleport-spot',
            nameRu: 'В Обол',
            descriptionRu: ''
        }, {
            id: 'teleport-spot4',
            type: 'teleport-spot',
            x: 46.5,
            y: 29,
            iconUrl: '/teleport-spot',
            nameRu: 'К дороге Шипстоун-Санпул',
            descriptionRu: ''
        }, {
            id: 'teleport-spot5',
            type: 'teleport-spot',
            x: 25.5,
            y: 38.5,
            iconUrl: '/teleport-spot',
            nameRu: 'К Серебряному лесу',
            descriptionRu: ''
        }, {
            id: 'teleport-spot6',
            type: 'teleport-spot',
            x: 49.5,
            y: 33,
            iconUrl: '/teleport-spot',
            nameRu: 'В поле близ дороги Шипстоун-Бангвиль',
            descriptionRu: ''
        }, {
            id: 'teleport-spot7',
            type: 'teleport-spot',
            x: 76,
            y: 17,
            iconUrl: '/teleport-spot',
            nameRu: 'К северной дороге Гипериона',
            descriptionRu: ''
        }, {
            id: 'teleport-spot8',
            type: 'teleport-spot',
            x: 56.5,
            y: 36.5,
            iconUrl: '/teleport-spot',
            nameRu: 'К Умрадскому лесу (Гиперион)',
            descriptionRu: ''
        }, {
            id: 'teleport-spot9',
            type: 'teleport-spot',
            x: 62.5,
            y: 38.5,
            iconUrl: '/teleport-spot',
            nameRu: 'К горам между Шипстоуном и Бангвилем',
            descriptionRu: ''
        }, {
            id: 'teleport-spot10',
            type: 'teleport-spot',
            x: 71.5,
            y: 37,
            iconUrl: '/teleport-spot',
            nameRu: 'К дороге Шипстоун-Торвил',
            descriptionRu: ''
        }, {
            id: 'teleport-spot11',
            type: 'teleport-spot',
            x: 93.5,
            y: 32,
            iconUrl: '/teleport-spot',
            nameRu: 'На северо-восток Гипериона',
            descriptionRu: ''
        }, {
            id: 'teleport-spot12',
            type: 'teleport-spot',
            x: 91,
            y: 47.5,
            iconUrl: '/teleport-spot',
            nameRu: 'К озеру Темер',
            descriptionRu: ''
        }, {
            id: 'teleport-spot13',
            type: 'teleport-spot',
            x: 83.5,
            y: 50.5,
            iconUrl: '/teleport-spot',
            nameRu: 'На остров Гебер (озеро Темер)',
            descriptionRu: ''
        }, {
            id: 'teleport-spot14',
            type: 'teleport-spot',
            x: 39.5,
            y: 54.5,
            iconUrl: '/teleport-spot',
            nameRu: 'К устью реки Нерей',
            descriptionRu: ''
        }, {
            id: 'teleport-spot15',
            type: 'teleport-spot',
            x: 36,
            y: 49,
            iconUrl: '/teleport-spot',
            nameRu: 'К дороге Санпул-Бангвиль, возле озера Вортекс',
            descriptionRu: ''
        }, {
            id: 'teleport-spot16',
            type: 'teleport-spot',
            x: 8.5,
            y: 47.5,
            iconUrl: '/teleport-spot',
            nameRu: 'К дороге Санпул-Шипстоун, возле озера Вортекс',
            descriptionRu: ''
        }, {
            id: 'teleport-spot17',
            type: 'teleport-spot',
            x: 20,
            y: 53,
            iconUrl: '/teleport-spot',
            nameRu: 'На остров Форос (озеро Вортекс)',
            descriptionRu: ''
        }, {
            id: 'teleport-spot18',
            type: 'teleport-spot',
            x: 35.8,
            y: 65,
            iconUrl: '/teleport-spot',
            nameRu: 'На остров Дейрос (озеро Вортекс)',
            descriptionRu: ''
        }, {
            id: 'teleport-spot19',
            type: 'teleport-spot',
            x: 10.6,
            y: 71.5,
            iconUrl: '/teleport-spot',
            nameRu: 'К Хортонскому лесу',
            descriptionRu: ''
        }, {
            id: 'teleport-spot20',
            type: 'teleport-spot',
            x: 22.5,
            y: 83.5,
            iconUrl: '/teleport-spot',
            nameRu: 'В горы близ дороги Санпул-Торвил',
            descriptionRu: ''
        }, {
            id: 'teleport-spot21',
            type: 'teleport-spot',
            x: 12.5,
            y: 91.5,
            iconUrl: '/teleport-spot',
            nameRu: 'На север от Койтонского леса',
            descriptionRu: ''
        }, {
            id: 'teleport-spot22',
            type: 'teleport-spot',
            x: 6,
            y: 98.8,
            iconUrl: '/teleport-spot',
            nameRu: 'С материка Феб',
            descriptionRu: ''
        }, {
            id: 'teleport-spot23',
            type: 'teleport-spot',
            x: 5,
            y: 96.5,
            iconUrl: '/teleport-spot',
            nameRu: 'На юго-западный край Гипериона',
            descriptionRu: ''
        }, {
            id: 'teleport-spot24',
            type: 'teleport-spot',
            x: 41.5,
            y: 84,
            iconUrl: '/teleport-spot',
            nameRu: 'На остров Патрос (озеро Атласное)',
            descriptionRu: ''
        }, {
            id: 'teleport-spot25',
            type: 'teleport-spot',
            x: 66.6,
            y: 85.6,
            iconUrl: '/teleport-spot',
            nameRu: 'В юго-восточный горный карман',
            descriptionRu: ''
        }, {
            id: 'teleport-spot26',
            type: 'teleport-spot',
            x: 54.5,
            y: 70.2,
            iconUrl: '/teleport-spot',
            nameRu: 'К устью реки Диомы',
            descriptionRu: ''
        }, {
            id: 'teleport-spot27',
            type: 'teleport-spot',
            x: 87,
            y: 65.9,
            iconUrl: '/teleport-spot',
            nameRu: 'К Восточному лесу',
            descriptionRu: ''
        },

        {
            id: 'tavern1',
            type: 'tavern',
            x: 30.7,
            y: 23.2,
            iconUrl: '/tavern',
            nameRu: 'Таверна Роджер Хаггар',
            descriptionRu: 'Оружие 7-9, броня 7-9'
        }, {
            id: 'tavern2',
            type: 'tavern',
            x: 60,
            y: 26.5,
            iconUrl: '/tavern',
            nameRu: 'Таверна Джон Рамино',
            descriptionRu: 'Аллан Мамнок - квесты на Степень'
        }, {
            id: 'tavern3',
            type: 'tavern',
            x: 72,
            y: 25,
            iconUrl: '/tavern',
            nameRu: 'Таверна Джелай Бабуно',
            descriptionRu: 'Ромул Канибус - квесты на Титул'
        }, {
            id: 'tavern4',
            type: 'tavern',
            x: 16,
            y: 46.5,
            iconUrl: '/tavern',
            nameRu: 'Таверна Бенджамин Симпсон',
            descriptionRu: 'Оружие 5-6, броня 5-6, Годфрид Сеймак - квесты на Степень'
        }, {
            id: 'tavern5',
            type: 'tavern',
            x: 81,
            y: 37.5,
            iconUrl: '/tavern',
            nameRu: 'Таверна Лайон Пордел',
            descriptionRu: 'Оружие 5-6, броня 5-6, Джером Лежар - квесты на Титул'
        }, {
            id: 'tavern6',
            type: 'tavern',
            x: 71.5,
            y: 52.5,
            iconUrl: '/tavern',
            nameRu: 'Таверна Майкл Биннер',
            descriptionRu: 'Оружие 5-6, броня 5-6, Рейнольд Рейган - квесты на Степень'
        }, {
            id: 'tavern7',
            type: 'tavern',
            x: 19,
            y: 80,
            iconUrl: '/tavern',
            nameRu: 'Таверна Джеки Файн',
            descriptionRu: 'Кельвин Биг - квесты на Титул'
        }, {
            id: 'tavern8',
            type: 'tavern',
            x: 40,
            y: 90.4,
            iconUrl: '/tavern',
            nameRu: 'Таверна Боб Бонбораус',
            descriptionRu: 'Рекс Скаут - квесты на Степень'
        }, {
            id: 'tavern9',
            type: 'tavern',
            x: 79,
            y: 69,
            iconUrl: '/tavern',
            nameRu: 'Таверна Скотт Фугас',
            descriptionRu: 'Оружие 5-6, броня 5-6, Джабраил Даматакар - квесты на Степень'
        },
        {
            id: 'teleport1',
            type: 'teleport',
            x: 47.5,
            y: 51.5,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Родос',
            descriptionRu: 'Необходим Премиум аккаунт'
        },
        {
            id: 'teleport2',
            type: 'teleport',
            x: 52.4,
            y: 52.5,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Феб',
            descriptionRu: ''
        },
        {
            id: 'teleport3',
            type: 'teleport',
            x: 69.3,
            y: 29.5,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Родос',
            descriptionRu: 'Необходим Премиум аккаунт'
        },
        {
            id: 'teleport4',
            type: 'teleport',
            x: 55.5,
            y: 79.2,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Родос',
            descriptionRu: 'Необходим Премиум аккаунт'
        },
        {
            id: 'teleport5',
            type: 'teleport',
            x: 8,
            y: 62,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Родос',
            descriptionRu: 'Необходим Премиум аккаунт'
        },
        {
            id: 'teleport6',
            type: 'teleport',
            x: 28.5,
            y: 24,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Харон',
            descriptionRu: ''
        },
        {
            id: 'teleport7',
            type: 'teleport',
            x: 7,
            y: 64.35,
            iconUrl: '/teleport',
            nameRu: 'Телепорт к замку Иль-Суильи-Руа',
            descriptionRu: 'Необходим Премиум аккаунт'
        },
        {
            id: 'teleport-broken1',
            type: 'teleport-broken',
            x: 32.6,
            y: 24,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken2',
            type: 'teleport-broken',
            x: 2.3,
            y: 47.7,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken3',
            type: 'teleport-broken',
            x: 86,
            y: 2.24,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken4',
            type: 'teleport-broken',
            x: 16.3,
            y: 31.3,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken5',
            type: 'teleport-broken',
            x: 95,
            y: 22.3,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken6',
            type: 'teleport-broken',
            x: 21.5,
            y: 55,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken7',
            type: 'teleport-broken',
            x: 33.5,
            y: 62,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken8',
            type: 'teleport-broken',
            x: 55.5,
            y: 58.5,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken9',
            type: 'teleport-broken',
            x: 85.5,
            y: 51,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken10',
            type: 'teleport-broken',
            x: 95.5,
            y: 57,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken11',
            type: 'teleport-broken',
            x: 20,
            y: 76.3,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken12',
            type: 'teleport-broken',
            x: 44,
            y: 82.8,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken13',
            type: 'teleport-broken',
            x: 13.7,
            y: 87.3,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken14',
            type: 'teleport-broken',
            x: 42.5,
            y: 93.5,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken15',
            type: 'teleport-broken',
            x: 53.5,
            y: 98.5,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'teleport-broken16',
            type: 'teleport-broken',
            x: 82.2,
            y: 75,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'weapons1',
            type: 'weapons',
            x: 8.3,
            y: 32.2,
            iconUrl: '/weapons',
            nameRu: 'Оружие 9-10, броня 7-8',
            descriptionRu: ''
        },
        {
            id: 'weapons2',
            type: 'weapons',
            x: 35.2,
            y: 37.2,
            iconUrl: '/weapons',
            nameRu: 'Оружие 7-8, броня 7-8',
            descriptionRu: ''
        },
        {
            id: 'weapons3',
            type: 'weapons',
            x: 54.2,
            y: 51.7,
            iconUrl: '/weapons',
            nameRu: 'Оружие 3-4, броня 3-4',
            descriptionRu: ''
        },
        {
            id: 'weapons4',
            type: 'weapons',
            x: 62.5,
            y: 30.4,
            iconUrl: '/weapons',
            nameRu: 'Оружие 3-4, броня 3-4',
            descriptionRu: ''
        },
        {
            id: 'weapons5',
            type: 'weapons',
            x: 78.3,
            y: 16,
            iconUrl: '/weapons',
            nameRu: 'Оружие 7-8, броня 7-8',
            descriptionRu: ''
        },
        {
            id: 'weapons6',
            type: 'weapons',
            x: 62.5,
            y: 30.4,
            iconUrl: '/weapons',
            nameRu: 'Оружие 3-4, броня 3-4',
            descriptionRu: ''
        },
        {
            id: 'weapons7',
            type: 'weapons',
            x: 63,
            y: 64,
            iconUrl: '/weapons',
            nameRu: 'Оружие 7-8, броня 7-8',
            descriptionRu: ''
        },
        {
            id: 'weapons8',
            type: 'weapons',
            x: 92.5,
            y: 75.4,
            iconUrl: '/weapons',
            nameRu: 'Оружие 9-10, броня 7-8',
            descriptionRu: ''
        },
        {
            id: 'weapons9',
            type: 'weapons',
            x: 61.5,
            y: 77.5,
            iconUrl: '/weapons',
            nameRu: 'Оружие 3-4, броня 3-4',
            descriptionRu: ''
        },
        {
            id: 'weapons10',
            type: 'weapons',
            x: 22,
            y: 87,
            iconUrl: '/weapons',
            nameRu: 'Оружие 3-4, броня 3-4',
            descriptionRu: ''
        },
        {
            id: 'tower1',
            type: 'tower',
            x: 88.5,
            y: 8,
            iconUrl: '/tower',
            nameRu: 'Порошки 11-12, бижутерия 10-12',
            descriptionRu: ''
        },
        {
            id: 'tower2',
            type: 'tower',
            x: 92.5,
            y: 18.5,
            iconUrl: '/tower',
            nameRu: 'Порошки 7-11, бижутерия 9-11',
            descriptionRu: ''
        },
        {
            id: 'tower3',
            type: 'tower',
            x: 64,
            y: 25.5,
            iconUrl: '/tower',
            nameRu: 'Порошки 4-8, бижутерия 4-6',
            descriptionRu: ''
        },
        {
            id: 'tower4',
            type: 'tower',
            x: 41.7,
            y: 31.2,
            iconUrl: '/tower',
            nameRu: 'Порошки 6-10, бижутерия 7-9',
            descriptionRu: ''
        },
        {
            id: 'tower5',
            type: 'tower',
            x: 28,
            y: 48,
            iconUrl: '/tower',
            nameRu: 'Порошки 7-11, бижутерия 9-11',
            descriptionRu: ''
        },
        {
            id: 'tower6',
            type: 'tower',
            x: 66,
            y: 50,
            iconUrl: '/tower',
            nameRu: 'Порошки 6-10, бижутерия 7-9',
            descriptionRu: ''
        },
        {
            id: 'tower7',
            type: 'tower',
            x: 44.5,
            y: 53,
            iconUrl: '/tower',
            nameRu: 'Порошки 4-8, бижутерия 4-6',
            descriptionRu: ''
        },
        {
            id: 'tower8',
            type: 'tower',
            x: 9,
            y: 65.5,
            iconUrl: '/tower',
            nameRu: 'Порошки 4-8, бижутерия 4-6',
            descriptionRu: ''
        },
        {
            id: 'tower9',
            type: 'tower',
            x: 24.5,
            y: 79.5,
            iconUrl: '/tower',
            nameRu: 'Порошки 6-10, бижутерия 7-9',
            descriptionRu: ''
        },
        {
            id: 'tower10',
            type: 'tower',
            x: 7.8,
            y: 91.5,
            iconUrl: '/tower',
            nameRu: 'Порошки 11-12, бижутерия 10-12',
            descriptionRu: ''
        },
        {
            id: 'tower11',
            type: 'tower',
            x: 32.8,
            y: 93.3,
            iconUrl: '/tower',
            nameRu: 'Порошки 7-11, бижутерия 9-11',
            descriptionRu: ''
        },
        {
            id: 'tower12',
            type: 'tower',
            x: 61.4,
            y: 73.7,
            iconUrl: '/tower',
            nameRu: 'Порошки 4-8, бижутерия 4-6',
            descriptionRu: ''
        },
        {
            id: 'tower13',
            type: 'tower',
            x: 71.5,
            y: 74.8,
            iconUrl: '/tower',
            nameRu: 'Порошки 6-10, бижутерия 7-9',
            descriptionRu: ''
        },
        {
            id: 'tower14',
            type: 'tower',
            x: 80.3,
            y: 62.8,
            iconUrl: '/tower',
            nameRu: 'Порошки 7-11, бижутерия 9-11',
            descriptionRu: ''
        },
        {
            id: 'quest1',
            type: 'quest',
            x: 59.3,
            y: 25.3,
            iconUrl: '/quest',
            nameRu: 'Анагорад Каратагор',
            descriptionRu: 'Квесты на Карму'
        },
        {
            id: 'quest2',
            type: 'quest',
            x: 72,
            y: 53,
            iconUrl: '/quest',
            nameRu: 'Ивален Ханаред',
            descriptionRu: 'Квесты на Карму'
        },
        {
            id: 'quest3',
            type: 'quest',
            x: 58.3,
            y: 38,
            iconUrl: '/quest',
            nameRu: 'Аминик Айон',
            descriptionRu: 'Квесты на Степень'
        },
        {
            id: 'quest4',
            type: 'quest',
            x: 54.5,
            y: 37.5,
            iconUrl: '/quest',
            nameRu: 'Лабанар Саранаман',
            descriptionRu: 'Квесты на Карму'
        },
        {
            id: 'quest5',
            type: 'quest',
            x: 8,
            y: 53.5,
            iconUrl: '/quest',
            nameRu: 'Карамил Белендо',
            descriptionRu: 'Квесты на Карму'
        },
        {
            id: 'quest6',
            type: 'quest',
            x: 15.7,
            y: 71.4,
            iconUrl: '/quest',
            nameRu: 'Тенус Харбаланзо',
            descriptionRu: 'Квесты на Карму'
        },
        {
            id: 'quest7',
            type: 'quest',
            x: 56.5,
            y: 76.3,
            iconUrl: '/quest',
            nameRu: 'Манокар Арабрахнар',
            descriptionRu: 'Квесты на Карму'
        },
        {
            id: 'specials1',
            type: 'specials',
            x: 32.3,
            y: 27,
            iconUrl: '/specials',
            nameRu: 'Мост нифонов',
            descriptionRu: ''
        },
        {
            id: 'specials2',
            type: 'specials',
            x: 10,
            y: 43,
            iconUrl: '/specials',
            nameRu: 'Единороги',
            descriptionRu: ''
        },
        {
            id: 'specials3',
            type: 'specials',
            x: 6,
            y: 40.3,
            iconUrl: '/specials',
            nameRu: 'Темная комната Воздуха',
            descriptionRu: ''
        },
        {
            id: 'specials4',
            type: 'specials',
            x: 40,
            y: 21.4,
            iconUrl: '/specials',
            nameRu: 'Темная комната Земли',
            descriptionRu: ''
        },
        {
            id: 'specials5',
            type: 'specials',
            x: 50,
            y: 59,
            iconUrl: '/specials',
            nameRu: 'Светлая комната Воздуха',
            descriptionRu: ''
        },
        {
            id: 'specials6',
            type: 'specials',
            x: 72.2,
            y: 96.5,
            iconUrl: '/specials',
            nameRu: 'Светлая комната Земли',
            descriptionRu: ''
        },
        {
            id: 'specials7',
            type: 'specials',
            x: 34.7,
            y: 86,
            iconUrl: '/specials',
            nameRu: 'Темная комната Воды',
            descriptionRu: ''
        },
        {
            id: 'specials8',
            type: 'specials',
            x: 84.5,
            y: 52,
            iconUrl: '/specials',
            nameRu: 'Картина - Телепорт на остров Выбора',
            descriptionRu: ''
        },
        {
            id: 'specials9',
            type: 'specials',
            x: 76.5,
            y: 18.5,
            iconUrl: '/specials',
            nameRu: 'Демон Воды',
            descriptionRu: ''
        },
        {
            id: 'specials10',
            type: 'specials',
            x: 69,
            y: 85.5,
            iconUrl: '/specials',
            nameRu: 'Демон Воздуха',
            descriptionRu: ''
        },
        {
            id: 'specials11',
            type: 'specials',
            x: 52,
            y: 33.5,
            iconUrl: '/specials',
            nameRu: 'Демон Огня',
            descriptionRu: ''
        },
        {
            id: 'specials12',
            type: 'specials',
            x: 71,
            y: 38.5,
            iconUrl: '/specials',
            nameRu: 'Демон Земли',
            descriptionRu: ''
        },
        {
            id: 'rebirth1',
            type: 'rebirth',
            x: 57.2,
            y: 30,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Плохих',
            descriptionRu: ''
        },
        {
            id: 'rebirth2',
            type: 'rebirth',
            x: 13.3,
            y: 70.5,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Плохих',
            descriptionRu: ''
        },
        {
            id: 'rebirth3',
            type: 'rebirth',
            x: 46,
            y: 51.3,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Плохих',
            descriptionRu: ''
        },
        {
            id: 'rebirth4',
            type: 'rebirth',
            x: 65.5,
            y: 76.5,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Плохих',
            descriptionRu: ''
        },
        {
            id: 'rebirth5',
            type: 'rebirth',
            x: 30,
            y: 75.5,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Очень плохих',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon1',
            type: 'quest-dungeon',
            x: 19,
            y: 30.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon2',
            type: 'quest-dungeon',
            x: 27,
            y: 33.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon3',
            type: 'quest-dungeon',
            x: 7.3,
            y: 41.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon4',
            type: 'quest-dungeon',
            x: 23.5,
            y: 40,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon5',
            type: 'quest-dungeon',
            x: 37.5,
            y: 30,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon6',
            type: 'quest-dungeon',
            x: 40,
            y: 34.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon7',
            type: 'quest-dungeon',
            x: 51.5,
            y: 26.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon8',
            type: 'quest-dungeon',
            x: 55.2,
            y: 23.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon9',
            type: 'quest-dungeon',
            x: 68.8,
            y: 21.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon10',
            type: 'quest-dungeon',
            x: 78.5,
            y: 35.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon11',
            type: 'quest-dungeon',
            x: 91.4,
            y: 23.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon12',
            type: 'quest-dungeon',
            x: 87,
            y: 17.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon13',
            type: 'quest-dungeon',
            x: 90,
            y: 14,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon14',
            type: 'quest-dungeon',
            x: 88,
            y: 6.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon15',
            type: 'quest-dungeon',
            x: 94.2,
            y: 40,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon16',
            type: 'quest-dungeon',
            x: 60.5,
            y: 44,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon17',
            type: 'quest-dungeon',
            x: 54,
            y: 38.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon18',
            type: 'quest-dungeon',
            x: 48.3,
            y: 36.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon19',
            type: 'quest-dungeon',
            x: 42.5,
            y: 45.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon20',
            type: 'quest-dungeon',
            x: 29,
            y: 45,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon21',
            type: 'quest-dungeon',
            x: 13.5,
            y: 45.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon22',
            type: 'quest-dungeon',
            x: 57.3,
            y: 52.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon23',
            type: 'quest-dungeon',
            x: 93.5,
            y: 53,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon24',
            type: 'quest-dungeon',
            x: 67.5,
            y: 58.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon25',
            type: 'quest-dungeon',
            x: 5,
            y: 60,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon26',
            type: 'quest-dungeon',
            x: 5,
            y: 69.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon27',
            type: 'quest-dungeon',
            x: 21.6,
            y: 66,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon28',
            type: 'quest-dungeon',
            x: 24.5,
            y: 70,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon29',
            type: 'quest-dungeon',
            x: 13.3,
            y: 71.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon30',
            type: 'quest-dungeon',
            x: 30.2,
            y: 73.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon31',
            type: 'quest-dungeon',
            x: 38.3,
            y: 75.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon32',
            type: 'quest-dungeon',
            x: 27.5,
            y: 84,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon33',
            type: 'quest-dungeon',
            x: 37,
            y: 80,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon34',
            type: 'quest-dungeon',
            x: 12.4,
            y: 78,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon35',
            type: 'quest-dungeon',
            x: 14.4,
            y: 84.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon36',
            type: 'quest-dungeon',
            x: 9.5,
            y: 89.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon37',
            type: 'quest-dungeon',
            x: 16,
            y: 97,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon38',
            type: 'quest-dungeon',
            x: 24.3,
            y: 95,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon39',
            type: 'quest-dungeon',
            x: 39.6,
            y: 96.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon40',
            type: 'quest-dungeon',
            x: 68.6,
            y: 94.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon41',
            type: 'quest-dungeon',
            x: 64.6,
            y: 84.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon42',
            type: 'quest-dungeon',
            x: 75,
            y: 89.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon43',
            type: 'quest-dungeon',
            x: 82.5,
            y: 85.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon44',
            type: 'quest-dungeon',
            x: 87.8,
            y: 72.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon45',
            type: 'quest-dungeon',
            x: 79,
            y: 79,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon46',
            type: 'quest-dungeon',
            x: 72.6,
            y: 77,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon47',
            type: 'quest-dungeon',
            x: 65,
            y: 71.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: 'Тороданж для 47+ уровней'
        },
        {
            id: 'quest-dungeon48',
            type: 'quest-dungeon',
            x: 66.4,
            y: 65.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon49',
            type: 'quest-dungeon',
            x: 81.5,
            y: 68.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon50',
            type: 'quest-dungeon',
            x: 85,
            y: 63.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon51',
            type: 'quest-dungeon',
            x: 87.4,
            y: 61,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon52',
            type: 'quest-dungeon',
            x: 45.6,
            y: 69.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon53',
            type: 'quest-dungeon',
            x: 56.5,
            y: 62,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'quest-dungeon54',
            type: 'quest-dungeon',
            x: 70,
            y: 14,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon1',
            type: 'general-dungeon',
            x: 63.5,
            y: 21.5,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon2',
            type: 'general-dungeon',
            x: 56,
            y: 47,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon3',
            type: 'general-dungeon',
            x: 46,
            y: 28,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon4',
            type: 'general-dungeon',
            x: 19,
            y: 40,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon5',
            type: 'general-dungeon',
            x: 68,
            y: 41.5,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon6',
            type: 'general-dungeon',
            x: 92.5,
            y: 59.6,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon7',
            type: 'general-dungeon',
            x: 92.8,
            y: 70,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon8',
            type: 'general-dungeon',
            x: 3.3,
            y: 54.3,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon9',
            type: 'general-dungeon',
            x: 18.5,
            y: 69.7,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon10',
            type: 'general-dungeon',
            x: 24,
            y: 67.5,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon11',
            type: 'general-dungeon',
            x: 19.5,
            y: 81.5,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon12',
            type: 'general-dungeon',
            x: 45.7,
            y: 93.3,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        },
        {
            id: 'general-dungeon13',
            type: 'general-dungeon',
            x: 68.5,
            y: 79.5,
            iconUrl: '/general-dungeon',
            nameRu: 'Общий данж',
            descriptionRu: ''
        }
    ];
}

export function getHaronElements() {
    return [
        {
            id: 'haron-city1',
            type: 'city',
            x: 14.5,
            y: 55.7,
            iconUrl: '/town',
            nameRu: 'Город Номрад',
            descriptionRu: ''
        },
        {
            id: 'haron-city2',
            type: 'city',
            x: 82.6,
            y: 28.6,
            iconUrl: '/town',
            nameRu: 'Город Гифес',
            descriptionRu: ''
        },
        {
            id: 'haron-castle1',
            type: 'castle',
            x: 8.2,
            y: 65,
            iconUrl: '/castle',
            nameRu: 'Кануак',
            descriptionRu: '60'
        },
        {
            id: 'haron-castle2',
            type: 'castle',
            x: 94.3,
            y: 25,
            iconUrl: '/castle',
            nameRu: 'Сет',
            descriptionRu: '60'
        },
        {
            id: 'haron-castle3',
            type: 'castle',
            x: 17.8,
            y: 26,
            iconUrl: '/castle',
            nameRu: 'Лендер',
            descriptionRu: '75'
        },
        {
            id: 'haron-castle4',
            type: 'castle',
            x: 32.2,
            y: 63.7,
            iconUrl: '/castle',
            nameRu: 'Алдарнон',
            descriptionRu: '75'
        },
        {
            id: 'haron-castle5',
            type: 'castle',
            x: 72,
            y: 10.8,
            iconUrl: '/castle',
            nameRu: 'Багарнак',
            descriptionRu: '75'
        },
        {
            id: 'haron-castle6',
            type: 'castle',
            x: 74,
            y: 55.7,
            iconUrl: '/castle',
            nameRu: 'Оркобьен',
            descriptionRu: '75'
        },
        {
            id: 'haron-castle7',
            type: 'castle',
            x: 43,
            y: 15,
            iconUrl: '/castle',
            nameRu: 'Кабрад',
            descriptionRu: '90'
        },
        {
            id: 'haron-castle8',
            type: 'castle',
            x: 43.8,
            y: 40,
            iconUrl: '/castle',
            nameRu: 'Келес',
            descriptionRu: '90'
        },
        {
            id: 'haron-castle9',
            type: 'castle',
            x: 49.8,
            y: 83.4,
            iconUrl: '/castle',
            nameRu: 'Йонг',
            descriptionRu: '90'
        },
        {
            id: 'haron-castle10',
            type: 'castle',
            x: 62.2,
            y: 39.6,
            iconUrl: '/castle',
            nameRu: 'Шепростан',
            descriptionRu: '90'
        },
        {
            id: 'haron-graveyard1',
            type: 'graveyard',
            x: 11.5,
            y: 76.9,
            iconUrl: '/graveyard',
            nameRu: 'Кладбище Номрада',
            descriptionRu: '60-85 имена'
        },
        {
            id: 'haron-graveyard2',
            type: 'graveyard',
            x: 73,
            y: 28.2,
            iconUrl: '/graveyard',
            nameRu: 'Кладбище Гифеса',
            descriptionRu: '60-85 имена'
        },
        {
            id: 'haron-graveyard3',
            type: 'graveyard',
            x: 57.6,
            y: 23.3,
            iconUrl: '/graveyard',
            nameRu: 'Ущелье с печкой',
            descriptionRu: '60-85 имена, печь'
        },
        {
            id: 'haron-graveyard4',
            type: 'graveyard',
            x: 23.8,
            y: 50,
            iconUrl: '/graveyard',
            nameRu: 'Ущелье с печкой',
            descriptionRu: '60-85 имена, печь'
        },
        {
            id: 'haron-rebirth1',
            type: 'rebirth',
            x: 37.8,
            y: 53.4,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Очень плохих',
            descriptionRu: ''
        },
        {
            id: 'haron-rebirth2',
            type: 'rebirth',
            x: 4,
            y: 50.4,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Плохих',
            descriptionRu: ''
        },
        {
            id: 'haron-rebirth3',
            type: 'rebirth',
            x: 93.2,
            y: 41,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Плохих',
            descriptionRu: ''
        },
        {
            id: 'haron-rebirth4',
            type: 'rebirth',
            x: 51.5,
            y: 43.2,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Очень плохих',
            descriptionRu: ''
        },
        {
            id: 'haron-specials1',
            type: 'specials',
            x: 36.5,
            y: 53.6,
            iconUrl: '/specials',
            nameRu: 'Колодец Выбора',
            descriptionRu: ''
        },
        {
            id: 'haron-specials2',
            type: 'specials',
            x: 55,
            y: 64,
            iconUrl: '/specials',
            nameRu: 'Колодец Выбора',
            descriptionRu: ''
        },
        {
            id: 'haron-specials3',
            type: 'specials',
            x: 54.5,
            y: 62,
            iconUrl: '/specials',
            nameRu: 'Башня Культа',
            descriptionRu: ''
        },
        {
            id: 'haron-specials4',
            type: 'specials',
            x: 11,
            y: 35,
            iconUrl: '/specials',
            nameRu: 'Темная комната Огня',
            descriptionRu: ''
        },
        {
            id: 'haron-quest1',
            type: 'quest',
            x: 46,
            y: 92.2,
            iconUrl: '/quest',
            nameRu: 'Квест на Карму',
            descriptionRu: ''
        },
        {
            id: 'haron-quest2',
            type: 'quest',
            x: 51.5,
            y: 51.6,
            iconUrl: '/quest',
            nameRu: 'Квест на Карму',
            descriptionRu: ''
        },
        {
            id: 'haron-teleport-broken1',
            type: 'teleport-broken',
            x: 2.4,
            y: 58.9,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport-broken2',
            type: 'teleport-broken',
            x: 34.6,
            y: 66.3,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport-broken3',
            type: 'teleport-broken',
            x: 40.6,
            y: 83.8,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport-broken4',
            type: 'teleport-broken',
            x: 45.8,
            y: 49.8,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport-broken5',
            type: 'teleport-broken',
            x: 45,
            y: 44.5,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport-broken6',
            type: 'teleport-broken',
            x: 35.2,
            y: 7.5,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport-broken7',
            type: 'teleport-broken',
            x: 80.2,
            y: 18.5,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport-broken8',
            type: 'teleport-broken',
            x: 93.5,
            y: 17.2,
            iconUrl: '/teleport-broken',
            nameRu: 'Сломанный телепорт',
            descriptionRu: 'Может отправить в случайную точку телепорта на материке'
        },
        {
            id: 'haron-teleport1',
            type: 'teleport',
            x: 16.3,
            y: 54.3,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на Гиперион, точка телепорта с Гипериона',
            descriptionRu: ''
        },
        {
            id: 'haron-crater1',
            type: 'crater',
            x: 32.1,
            y: 53.4,
            iconUrl: '/crater',
            nameRu: 'Именной моб',
            descriptionRu: '66 уровень'
        },
        {
            id: 'haron-crater2',
            type: 'crater',
            x: 44.5,
            y: 53.4,
            iconUrl: '/crater',
            nameRu: 'Именной моб',
            descriptionRu: '66 уровень'
        },
        {
            id: 'haron-crater3',
            type: 'crater',
            x: 54.5,
            y: 46.6,
            iconUrl: '/crater',
            nameRu: 'Именной моб',
            descriptionRu: '66 уровень'
        },
        {
            id: 'haron-weapons1',
            type: 'weapons',
            x: 21,
            y: 69.9,
            iconUrl: '/weapons',
            nameRu: 'Оружие и броня',
            descriptionRu: ''
        },
        {
            id: 'haron-weapons2',
            type: 'weapons',
            x: 52.1,
            y: 69,
            iconUrl: '/weapons',
            nameRu: 'Оружие и броня',
            descriptionRu: ''
        },
        {
            id: 'haron-weapons3',
            type: 'weapons',
            x: 76.9,
            y: 22.5,
            iconUrl: '/weapons',
            nameRu: 'Оружие и броня',
            descriptionRu: ''
        },
        {
            id: 'haron-tower1',
            type: 'tower',
            x: 16.1,
            y: 43.2,
            iconUrl: '/tower',
            nameRu: 'Порошки и бижутерия',
            descriptionRu: ''
        },
        {
            id: 'haron-tower2',
            type: 'tower',
            x: 41.9,
            y: 33.3,
            iconUrl: '/tower',
            nameRu: 'Порошки и бижутерия',
            descriptionRu: ''
        },
        {
            id: 'haron-tower3',
            type: 'tower',
            x: 77.5,
            y: 37.5,
            iconUrl: '/tower',
            nameRu: 'Порошки и бижутерия',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon1',
            type: 'quest-dungeon',
            x: 7.6,
            y: 69.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon2',
            type: 'quest-dungeon',
            x: 11.5,
            y: 57.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon3',
            type: 'quest-dungeon',
            x: 6.5,
            y: 51.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon4',
            type: 'quest-dungeon',
            x: 10.5,
            y: 38,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon5',
            type: 'quest-dungeon',
            x: 17.7,
            y: 77,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon6',
            type: 'quest-dungeon',
            x: 22,
            y: 30.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon7',
            type: 'quest-dungeon',
            x: 21.5,
            y: 53.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon8',
            type: 'quest-dungeon',
            x: 28.4,
            y: 66.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon9',
            type: 'quest-dungeon',
            x: 29.1,
            y: 75,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon10',
            type: 'quest-dungeon',
            x: 29.3,
            y: 54,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon11',
            type: 'quest-dungeon',
            x: 32.4,
            y: 34.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon12',
            type: 'quest-dungeon',
            x: 31.7,
            y: 28.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon13',
            type: 'quest-dungeon',
            x: 32,
            y: 8.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon14',
            type: 'quest-dungeon',
            x: 35.3,
            y: 21,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon15',
            type: 'quest-dungeon',
            x: 49,
            y: 6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon16',
            type: 'quest-dungeon',
            x: 44.6,
            y: 29.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon17',
            type: 'quest-dungeon',
            x: 47,
            y: 45,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon18',
            type: 'quest-dungeon',
            x: 40.3,
            y: 53.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon19',
            type: 'quest-dungeon',
            x: 38.7,
            y: 78.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon20',
            type: 'quest-dungeon',
            x: 47.1,
            y: 89.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon21',
            type: 'quest-dungeon',
            x: 46.8,
            y: 65,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon22',
            type: 'quest-dungeon',
            x: 50.2,
            y: 64.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon23',
            type: 'quest-dungeon',
            x: 54.8,
            y: 75.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon24',
            type: 'quest-dungeon',
            x: 60.2,
            y: 71.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon25',
            type: 'quest-dungeon',
            x: 58.9,
            y: 55.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon26',
            type: 'quest-dungeon',
            x: 68.3,
            y: 56.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon27',
            type: 'quest-dungeon',
            x: 54.3,
            y: 24.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon28',
            type: 'quest-dungeon',
            x: 62.8,
            y: 28.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon29',
            type: 'quest-dungeon',
            x: 64.4,
            y: 15.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon30',
            type: 'quest-dungeon',
            x: 73,
            y: 32.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon31',
            type: 'quest-dungeon',
            x: 77,
            y: 11,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon32',
            type: 'quest-dungeon',
            x: 85.8,
            y: 9.1,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon33',
            type: 'quest-dungeon',
            x: 95,
            y: 12.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon34',
            type: 'quest-dungeon',
            x: 90.8,
            y: 28,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon35',
            type: 'quest-dungeon',
            x: 95,
            y: 35.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon36',
            type: 'quest-dungeon',
            x: 84.5,
            y: 28.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon37',
            type: 'quest-dungeon',
            x: 86.8,
            y: 39.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon38',
            type: 'quest-dungeon',
            x: 81.8,
            y: 51,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'haron-quest-dungeon39',
            type: 'quest-dungeon',
            x: 77,
            y: 47,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
    ]
}

export function getRhodesElements() {
    return [
        {
            id: 'rhodes-city1',
            type: 'city',
            x: 21.7,
            y: 58.3,
            iconUrl: '/town',
            nameRu: 'Город Анхельм',
            descriptionRu: ''
        },
        {
            id: 'rhodes-castle1',
            type: 'castle',
            x: 22.3,
            y: 37,
            iconUrl: '/castle',
            nameRu: 'Иммертель',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-castle2',
            type: 'castle',
            x: 62,
            y: 68,
            iconUrl: '/castle',
            nameRu: 'Нарцисс',
            descriptionRu: '75'
        },
        {
            id: 'rhodes-castle3',
            type: 'castle',
            x: 14,
            y: 86,
            iconUrl: '/castle',
            nameRu: 'Ранден',
            descriptionRu: '90'
        },
        {
            id: 'rhodes-castle4',
            type: 'castle',
            x: 30.1,
            y: 15.4,
            iconUrl: '/castle',
            nameRu: 'Ниргун',
            descriptionRu: '120'
        },
        {
            id: 'rhodes-castle5',
            type: 'castle',
            x: 54.4,
            y: 85.1,
            iconUrl: '/castle',
            nameRu: 'Гелгивинн',
            descriptionRu: '250'
        },
        {
            id: 'rhodes-crater1',
            type: 'crater',
            x: 33.5,
            y: 53.7,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '45'
        },
        {
            id: 'rhodes-crater2',
            type: 'crater',
            x: 42.3,
            y: 59.6,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '45'
        },
        {
            id: 'rhodes-crater3',
            type: 'crater',
            x: 68.6,
            y: 63,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '45'
        },
        {
            id: 'rhodes-crater4',
            type: 'crater',
            x: 39.8,
            y: 86.1,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '45'
        },
        {
            id: 'rhodes-crater5',
            type: 'crater',
            x: 22,
            y: 68.1,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '45'
        },
        {
            id: 'rhodes-crater6',
            type: 'crater',
            x: 15.7,
            y: 62.6,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '45'
        },
        {
            id: 'rhodes-crater7',
            type: 'crater',
            x: 12.7,
            y: 30.4,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '45'
        },
        {
            id: 'rhodes-crater8',
            type: 'crater',
            x: 94.2,
            y: 67.7,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater9',
            type: 'crater',
            x: 93.7,
            y: 78,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater10',
            type: 'crater',
            x: 24.3,
            y: 93.5,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater11',
            type: 'crater',
            x: 39,
            y: 75.8,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater12',
            type: 'crater',
            x: 11.4,
            y: 75.8,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater13',
            type: 'crater',
            x: 11.8,
            y: 53.1,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater14',
            type: 'crater',
            x: 14,
            y: 45,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater15',
            type: 'crater',
            x: 6.2,
            y: 28.5,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '60'
        },
        {
            id: 'rhodes-crater16',
            type: 'crater',
            x: 72,
            y: 85.6,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '90'
        },
        {
            id: 'rhodes-crater17',
            type: 'crater',
            x: 57.8,
            y: 91.6,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '90'
        },
        {
            id: 'rhodes-crater18',
            type: 'crater',
            x: 35.7,
            y: 94.8,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '90'
        },
        {
            id: 'rhodes-crater19',
            type: 'crater',
            x: 21.3,
            y: 25.5,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '90'
        },
        {
            id: 'rhodes-crater20',
            type: 'crater',
            x: 34.4,
            y: 7.4,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '90'
        },
        {
            id: 'rhodes-crater21',
            type: 'crater',
            x: 4.5,
            y: 2.5,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '90'
        },
        {
            id: 'rhodes-crater22',
            type: 'crater',
            x: 17.4,
            y: 13.8,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '120'
        },
        {
            id: 'rhodes-crater23',
            type: 'crater',
            x: 71,
            y: 77.5,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '120'
        },
        {
            id: 'rhodes-crater24',
            type: 'crater',
            x: 26.7,
            y: 82,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '120'
        },
        {
            id: 'rhodes-rebirth1',
            type: 'rebirth',
            x: 48.8,
            y: 89.1,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Очень плохих',
            descriptionRu: '120'
        },
        {
            id: 'rhodes-rebirth2',
            type: 'rebirth',
            x: 19.8,
            y: 92.8,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Очень плохих',
            descriptionRu: '120'
        },
        {
            id: 'rhodes-rebirth3',
            type: 'rebirth',
            x: 13.5,
            y: 4.3,
            iconUrl: '/rebirth',
            nameRu: 'Точка возрождения Очень плохих',
            descriptionRu: '120'
        },
        {
            id: 'rhodes-specials1',
            type: 'specials',
            x: 50.7,
            y: 89.9,
            iconUrl: '/specials',
            nameRu: 'Замок внутри горы',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild1',
            type: 'guild',
            x: 6,
            y: 14.5,
            iconUrl: '/guild',
            nameRu: 'Оружейник',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild2',
            type: 'guild',
            x: 22.1,
            y: 20.1,
            iconUrl: '/guild',
            nameRu: 'Кузнец',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild3',
            type: 'guild',
            x: 38,
            y: 27.5,
            iconUrl: '/guild',
            nameRu: 'Вор',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild4',
            type: 'guild',
            x: 3.8,
            y: 30.5,
            iconUrl: '/guild',
            nameRu: 'Некромант',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild5',
            type: 'guild',
            x: 8.8,
            y: 40.8,
            iconUrl: '/guild',
            nameRu: 'Друид',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild6',
            type: 'guild',
            x: 42.8,
            y: 53.4,
            iconUrl: '/guild',
            nameRu: 'Крестоносец',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild7',
            type: 'guild',
            x: 23.5,
            y: 64,
            iconUrl: '/guild',
            nameRu: 'Бандиер',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild8',
            type: 'guild',
            x: 26,
            y: 91,
            iconUrl: '/guild',
            nameRu: 'Инквизитор',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild9',
            type: 'guild',
            x: 36.7,
            y: 90.4,
            iconUrl: '/guild',
            nameRu: 'Чародей',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild10',
            type: 'guild',
            x: 52,
            y: 94,
            iconUrl: '/guild',
            nameRu: 'Варвар',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild11',
            type: 'guild',
            x: 60.2,
            y: 78.4,
            iconUrl: '/guild',
            nameRu: 'Охотник',
            descriptionRu: ''
        },
        {
            id: 'rhodes-guild12',
            type: 'guild',
            x: 69.7,
            y: 88.3,
            iconUrl: '/guild',
            nameRu: 'Архимаг',
            descriptionRu: ''
        },
        {
            id: 'rhodes-weapons1',
            type: 'weapons',
            x: 88,
            y: 72.5,
            iconUrl: '/weapons',
            nameRu: 'Оружие 15, броня 15',
            descriptionRu: ''
        },
        {
            id: 'rhodes-weapons2',
            type: 'weapons',
            x: 88,
            y: 72.5,
            iconUrl: '/weapons',
            nameRu: 'Броня 15',
            descriptionRu: ''
        },
        {
            id: 'rhodes-weapons2',
            type: 'weapons',
            x: 17.4,
            y: 49.5,
            iconUrl: '/weapons',
            nameRu: 'Оружие 14',
            descriptionRu: ''
        },
        {
            id: 'rhodes-tower1',
            type: 'tower',
            x: 9.5,
            y: 3,
            iconUrl: '/tower',
            nameRu: 'Порошки 11-12',
            descriptionRu: ''
        },
        {
            id: 'rhodes-tower2',
            type: 'tower',
            x: 9.5,
            y: 3,
            iconUrl: '/tower',
            nameRu: 'Бижутерия 11-15',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest1',
            type: 'quest',
            x: 20.8,
            y: 76.7,
            iconUrl: '/quest',
            nameRu: 'Квест на Карму',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon1',
            type: 'quest-dungeon',
            x: 10.5,
            y: 13.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon2',
            type: 'quest-dungeon',
            x: 8.4,
            y: 17.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon3',
            type: 'quest-dungeon',
            x: 9,
            y: 21.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon4',
            type: 'quest-dungeon',
            x: 32.7,
            y: 25.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon5',
            type: 'quest-dungeon',
            x: 23,
            y: 31.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon6',
            type: 'quest-dungeon',
            x: 24,
            y: 42.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon7',
            type: 'quest-dungeon',
            x: 11.2,
            y: 47.4,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon8',
            type: 'quest-dungeon',
            x: 12.7,
            y: 51.1,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon9',
            type: 'quest-dungeon',
            x: 5.8,
            y: 57.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon10',
            type: 'quest-dungeon',
            x: 40.4,
            y: 65,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon11',
            type: 'quest-dungeon',
            x: 56.1,
            y: 66.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon12',
            type: 'quest-dungeon',
            x: 73,
            y: 74.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon13',
            type: 'quest-dungeon',
            x: 86.2,
            y: 70.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon14',
            type: 'quest-dungeon',
            x: 86.2,
            y: 85,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon15',
            type: 'quest-dungeon',
            x: 68.6,
            y: 82.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon16',
            type: 'quest-dungeon',
            x: 60.2,
            y: 81.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon17',
            type: 'quest-dungeon',
            x: 51.5,
            y: 75.2,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon18',
            type: 'quest-dungeon',
            x: 44.3,
            y: 80.1,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon19',
            type: 'quest-dungeon',
            x: 49.5,
            y: 96,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'rhodes-quest-dungeon20',
            type: 'quest-dungeon',
            x: 41,
            y: 91,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
    ]
}

export function getPhoebusElements() {
    return [
        {
            id: 'phoebus-city1',
            type: 'city',
            x: 36.5,
            y: 36,
            iconUrl: '/town',
            nameRu: 'Город Умрад',
            descriptionRu: ''
        },
        {
            id: 'phoebus-castle1',
            type: 'castle',
            x: 16.2,
            y: 64.6,
            iconUrl: '/castle',
            nameRu: 'Элек',
            descriptionRu: '120'
        },
        {
            id: 'phoebus-castle2',
            type: 'castle',
            x: 55.7,
            y: 27,
            iconUrl: '/castle',
            nameRu: 'Гавот',
            descriptionRu: '120'
        },
        {
            id: 'phoebus-castle3',
            type: 'castle',
            x: 82.6,
            y: 64.7,
            iconUrl: '/castle',
            nameRu: 'Кандур',
            descriptionRu: '250'
        },
        {
            id: 'phoebus-crater1',
            type: 'crater',
            x: 9.1,
            y: 37.5,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '66'
        },
        {
            id: 'phoebus-crater2',
            type: 'crater',
            x: 52.4,
            y: 16.6,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '66'
        },
        {
            id: 'phoebus-crater3',
            type: 'crater',
            x: 97.3,
            y: 68,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '66'
        },
        {
            id: 'phoebus-crater4',
            type: 'crater',
            x: 32.7,
            y: 74.7,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '120'
        },
        {
            id: 'phoebus-crater5',
            type: 'crater',
            x: 72.3,
            y: 37.2,
            iconUrl: '/crater',
            nameRu: 'Именной монстр',
            descriptionRu: '120'
        },
        {
            id: 'phoebus-weapons1',
            type: 'weapons',
            x: 34.7,
            y: 93,
            iconUrl: '/weapons',
            nameRu: 'Оружие, броня',
            descriptionRu: ''
        },
        {
            id: 'phoebus-weapons2',
            type: 'weapons',
            x: 29.3,
            y: 37.3,
            iconUrl: '/weapons',
            nameRu: 'Оружие, броня',
            descriptionRu: ''
        },
        {
            id: 'phoebus-tower1',
            type: 'tower',
            x: 94.3,
            y: 84.3,
            iconUrl: '/tower',
            nameRu: 'Оружие, броня',
            descriptionRu: ''
        },
        {
            id: 'phoebus-teleport1',
            type: 'teleport',
            x: 37.5,
            y: 37.3,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Гиперион',
            descriptionRu: ''
        },
        {
            id: 'phoebus-teleport2',
            type: 'teleport',
            x: 35,
            y: 36.3,
            iconUrl: '/teleport',
            nameRu: 'Телепорт на материк Родос',
            descriptionRu: ''
        },
        {
            id: 'phoebus-specials1',
            type: 'specials',
            x: 17,
            y: 90.5,
            iconUrl: '/specials',
            nameRu: 'Фебоданж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-specials2',
            type: 'specials',
            x: 26.5,
            y: 69.3,
            iconUrl: '/specials',
            nameRu: 'Белая Башня',
            descriptionRu: ''
        },
        {
            id: 'phoebus-specials3',
            type: 'specials',
            x: 47.6,
            y: 69.4,
            iconUrl: '/specials',
            nameRu: 'Светлая комната Воды',
            descriptionRu: ''
        },
        {
            id: 'phoebus-specials4',
            type: 'specials',
            x: 70.2,
            y: 38.3,
            iconUrl: '/specials',
            nameRu: 'Светлая комната Огня',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest1',
            type: 'quest',
            x: 27,
            y: 70.3,
            iconUrl: '/quest',
            nameRu: 'Бреонар',
            descriptionRu: 'Квест на случайный Ключ от Комнаты стихий'
        },
        {
            id: 'phoebus-quest-dungeon1',
            type: 'quest-dungeon',
            x: 8.8,
            y: 34.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon2',
            type: 'quest-dungeon',
            x: 3.8,
            y: 68.3,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon3',
            type: 'quest-dungeon',
            x: 46,
            y: 88.6,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon4',
            type: 'quest-dungeon',
            x: 60,
            y: 68,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon5',
            type: 'quest-dungeon',
            x: 91.4,
            y: 83.1,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon6',
            type: 'quest-dungeon',
            x: 83.9,
            y: 55,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon7',
            type: 'quest-dungeon',
            x: 73.9,
            y: 24.9,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon8',
            type: 'quest-dungeon',
            x: 62.1,
            y: 41.8,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon9',
            type: 'quest-dungeon',
            x: 56.8,
            y: 44.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon10',
            type: 'quest-dungeon',
            x: 36.4,
            y: 53.9,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon11',
            type: 'quest-dungeon',
            x: 41,
            y: 26.5,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon12',
            type: 'quest-dungeon',
            x: 36.4,
            y: 53.9,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
        {
            id: 'phoebus-quest-dungeon13',
            type: 'quest-dungeon',
            x: 49.5,
            y: 18.7,
            iconUrl: '/quest-dungeon',
            nameRu: 'Квестовый данж',
            descriptionRu: ''
        },
    ];
}

export function getLeonElements() {
    return [
        {
            id: 'leon-teleport-spot1',
            type: 'teleport-spot',
            x: 26,
            y: 78,
            iconUrl: '/teleport-spot',
            nameRu: 'Точка телепорта замкового жетона',
            descriptionRu: ''
        },
        {
            id: 'leon-teleport-spot2',
            type: 'teleport-spot',
            x: 23,
            y: 91,
            iconUrl: '/teleport-spot',
            nameRu: 'Точка телепорта с материка Гиперион',
            descriptionRu: ''
        },
        {
            id: 'leon-weapons1',
            type: 'weapons',
            x: 60,
            y: 32,
            iconUrl: '/weapons',
            nameRu: 'Путешественник',
            descriptionRu: 'Замковый торговец'
        },
        {
            id: 'leon-castle1',
            type: 'castle',
            x: 54,
            y: 30,
            iconUrl: '/',
            nameRu: 'Иль-Суильи-Руа',
            descriptionRu: '350 уровень'
        },
        {
            id: 'leon-teleport1',
            type: 'teleport',
            x: 25,
            y: 93,
            iconUrl: '/teleport',
            nameRu: 'Телепорт',
            descriptionRu: ''
        },
    ]
}

export function getChoiceElements() {
    return [
        {
            id: 'choice-teleport-spot1',
            type: 'teleport-spot',
            x: 7,
            y: 57,
            iconUrl: '/teleport-spot',
            nameRu: 'Точка телепорта с материка Гиперион',
            descriptionRu: ''
        },
        {
            id: 'choice-teleport-broken1',
            type: 'teleport-broken',
            x: 10,
            y: 47,
            iconUrl: '/teleport-broken',
            nameRu: 'Дикий телепорт',
            descriptionRu: ''
        },
        {
            id: 'choice-crater1',
            type: 'crater',
            x: 40,
            y: 29.5,
            iconUrl: '/crater',
            nameRu: 'Точка появления Великого Демона',
            descriptionRu: ''
        },
        {
            id: 'choice-special1',
            type: 'specials',
            x: 80,
            y: 90,
            iconUrl: '/specials',
            nameRu: 'Алтарь',
            descriptionRu: ''
        },
    ]
}