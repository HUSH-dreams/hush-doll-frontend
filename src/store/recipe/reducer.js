import {
    RECIPES_ADD_CHOSEN,
    RECIPES_ERROR,
    RECIPES_REMOVE_CHOSEN,
    RECIPES_START,
    RECIPES_SUCCESS,
    RECIPES_TOGGLE_CHOSEN
} from "./actions";


const initialState = {
    recipes: [],
    error: null,
    chosen: []
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECIPES_START:
            return {
                ...state,
                error: null,
                recipes: []
            }
        case RECIPES_SUCCESS:
            return {
                ...state,
                recipes: [...action.payload[0]]
            }
        case RECIPES_TOGGLE_CHOSEN:
            const recipeToAdd = action.payload;
            const isAlreadyChosen = state.chosen?.some(recipe => recipe.id === recipeToAdd.id);

            if (isAlreadyChosen) {
                const recipeIdToRemove = action.payload.id;

                return {
                    ...state,
                    chosen: state.chosen.filter(recipe => recipe.id !== recipeIdToRemove),
                };
            }

            return {
                ...state,
                chosen: [...state.chosen, recipeToAdd],
            };

        case RECIPES_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default recipeReducer;