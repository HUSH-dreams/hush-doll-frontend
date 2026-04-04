export const RECIPES_START = "RECIPES::RECIPES_START";
export const RECIPES_SUCCESS = "RECIPES::RECIPES_SUCCESS";
export const RECIPES_ERROR = "RECIPES::RECIPES_ERROR";
export const RECIPES_TOGGLE_CHOSEN = "RECIPES::RECIPES_TOGGLE_CHOSEN";

export const recipesToggleChosen = (data) => ({
    type: RECIPES_TOGGLE_CHOSEN,
    payload: data
})

export const recipesStart = () => ({
    type: RECIPES_START
});

export const recipesSuccess = (data) => ({
    type: RECIPES_SUCCESS,
    payload: data
});

export const recipesError = (error) => ({
    type: RECIPES_ERROR,
    payload: error
});

export const recipesInitiate = () => {
    return async dispatch => {
        dispatch(recipesStart());
        
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recipes`);
            const data = await response.json();

            if (!data.success) {
                dispatch(recipesError(data.reason))
            } else {
                dispatch(recipesSuccess(data.data));
            }
        } catch (e) {
            dispatch(recipesError(e.toString()));
            console.log(e.toString());
        }
    }
}