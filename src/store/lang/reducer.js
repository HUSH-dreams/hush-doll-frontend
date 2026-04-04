import {TOGGLE_LANG} from "./actions";

const initialState = {
    eng: false
}

const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LANG:
            return {
                ...state,
                eng: !state.eng
            }
        default:
            return state;
    }
};

export default langReducer;