import {ITEMS_CLEAR, ITEMS_ERROR, ITEMS_SET_PREFIX, ITEMS_START, ITEMS_SUCCESS, ITEMS_UNSET_PREFIX} from "./actions";

const initialState = {
    items: [],
    prefixes: [],
    currentPrefix: null,
    error: null
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_START:
            
            return {
                ...state,
                error: null
            }
        case ITEMS_SUCCESS:
            
            return {
                ...state,
                items: action.payload.items,
                prefixes: action.payload.prefixes
            }
        case ITEMS_ERROR:
            
            return {
                ...state,
                error: action.payload
            }
        case ITEMS_CLEAR:
            
            return {
                ...state,
                error: null,
                items: [],
                prefixes: [],
                currentPrefix: null
            }
        case ITEMS_SET_PREFIX:
            
            return {
                ...state,
                currentPrefix: action.payload
            }
        case ITEMS_UNSET_PREFIX:
            
            return {
                ...state,
                currentPrefix: null
            }
        default:
            return state
    }
}

export default itemsReducer;



