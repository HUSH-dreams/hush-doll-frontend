import {MAP_SET_ALL, MAP_TOGGLE_CHOSEN, MAP_UNSET_ALL} from "./actions";

const initialState = {
    chosen: [
        {name: 'city', type: 2},
        {name: 'castle', type: 2},
        {name: 'guild', type: 1},
        {name: 'crater', type: 1},
        {name: 'teleport-spot', type: 1},
        {name: 'tavern', type: 1},
        {name: 'weapons', type: 1},
        {name: 'tower', type: 1},
        {name: 'specials', type: 1}
    ]
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAP_TOGGLE_CHOSEN:
            const typeToAdd = action.payload;

            const existingTypeIndex = state.chosen.findIndex(item => item.name === typeToAdd);
            const existingType = state.chosen[existingTypeIndex];

            if (existingType) {
                if (existingType.type === 2) {
                    return {
                        ...state,
                        chosen: state.chosen.filter(type => type.name !== typeToAdd),
                    };
                }

                if (existingType.type === 1) {
                    const updatedChosen = state.chosen.map(item =>
                        item.name === typeToAdd
                            ? { ...item, type: 2 } // Создаем новый объект с измененным type
                            : item // Оставляем остальные объекты как есть
                    );
                    return {
                        ...state,
                        chosen: updatedChosen,
                    };
                }
            }

            return {
                ...state,
                chosen: [...state.chosen, {name: typeToAdd, type: 1}],
            };
        case MAP_SET_ALL:
            return {
                ...state,
                chosen: [...action.payload]
            }
        case MAP_UNSET_ALL:
            return {
                ...state,
                chosen: []
            }
        default:
            return state;
    }
}

export default mapReducer;