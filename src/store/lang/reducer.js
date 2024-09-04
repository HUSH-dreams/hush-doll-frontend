import {TOGGLE_THEME} from "./actions";

const initialState = {
    theme: 'light',
    mainColor: '#f3f0f5',
    secondaryColor: '#403645'
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
                mainColor: state.theme === 'light' ? '#403645' : '#f3f0f5',
                secondaryColor: state.theme === 'light' ? '#f3f0f5' : '#403645'
            }
        default:
            return state
    }
}

export default themeReducer;