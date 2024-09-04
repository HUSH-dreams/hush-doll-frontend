export const ITEMS_START = "ITEMS::LOAD_ITEMS";
export const ITEMS_SUCCESS = "ITEMS::LOADING_ITEMS";
export const ITEMS_ERROR = "ITEMS::ERROR_ITEMS";
export const ITEMS_CLEAR = "ITEMS::ITEMS_CLEAR";
export const ITEMS_SET_PREFIX = "ITEMS::ITEMS_SET_PREFIX";
export const ITEMS_UNSET_PREFIX = "ITEMS::ITEMS_UNSET_PREFIX";

export const itemsStart = () => ({
    type: ITEMS_START
});

export const itemsSuccess = (data) => ({
    type: ITEMS_SUCCESS,
    payload: data
});

export const itemsError = (error) => ({
    type: ITEMS_ERROR,
    payload: error
});

export const itemsClear = () => ({
    type: ITEMS_CLEAR
})

export const setPrefix = (prefix) => ({
    type: ITEMS_SET_PREFIX,
    payload: prefix
})

export const unsetPrefix = () => ({
    type: ITEMS_UNSET_PREFIX
})

export const itemsInitiate = (type) => {
    return async dispatch => {
        dispatch(itemsStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/items?item-type=` + type);
            const data = await response.json();
            if (!data.success) {
                dispatch(itemsError(data.reason))
            } else {
                dispatch(itemsSuccess(data.data));
            }
        } catch (e) {
            dispatch(itemsError(e.toString()));
            console.log(e.toString());
        }
    }
}