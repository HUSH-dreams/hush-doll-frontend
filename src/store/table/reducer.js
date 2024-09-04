import {
    TABLE_ERROR,
    TABLE_SELECT,
    TABLE_START,
    TABLE_SUCCESS,
    TABLE_UNSET,
    TABLE_SELECT_CASTLE,
    TABLE_CASTLE_SAVE_START,
    TABLE_CASTLE_SAVE_SUCCESS,
    TABLE_CASTLE_SAVE_ERROR,
    TABLES_UNSET,
    TABLE_QUIT_START,
    TABLE_QUIT_ERROR,
    TABLE_QUIT_SUCCESS,
    TABLE_KICK_START,
    TABLE_KICK_SUCCESS,
    TABLE_KICK_ERROR,
    TABLE_CHANGE_ROLE_START,
    TABLE_CHANGE_ROLE_ERROR,
    TABLE_CHANGE_ROLE_SUCCESS,
    TABLE_CREATE_TABLE_ERROR,
    TABLE_CREATE_TABLE_SUCCESS,
    TABLE_CREATE_TABLE_START,
    TABLE_ENTER_TABLE_START,
    TABLE_ENTER_TABLE_SUCCESS,
    TABLE_DELETE_TABLE_SUCCESS,
    TABLE_DELETE_TABLE_START,
    TABLE_ADD_CLAN_START,
    TABLE_ADD_CLAN_SUCCESS,
    TABLE_DELETE_CLAN_START, TABLE_DELETE_CLAN_SUCCESS, TABLE_SELECT_FAVORITE_CASTLES, TABLE_UNSET_FAVORITE_CASTLES
} from "./actions";

const initialState = {
    tables: [],
    table: null,
    castles: null,
    castlesLvlId: '90+',
    static: [],
    error: null,
    loading: false,
    castleSaveError: null,
    favoriteCastles: []
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TABLE_START:
            return {
                ...state,
                tables: [],
                static: [],
                error: null,
                loading: true
            }
        case TABLE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TABLE_SUCCESS:
            return {
                ...state,
                tables: action.payload.tables,
                static: action.payload.static,
                error: null,
                loading: false
            }
        case TABLE_QUIT_START:
            return {
                ...state,
                tables: [],
                error: null,
                loading: true
            }
        case TABLE_QUIT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TABLE_QUIT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                table: null,
                castles: null,
                castlesLvlId: '90+'
            }
        case TABLE_DELETE_TABLE_START:
            return {
                ...state,
                error: null
            }
        case TABLE_DELETE_TABLE_SUCCESS:
            return {
                ...state,
                error: null,
                table: null,
                castles: null,
                castlesLvlId: '90+'
            }
        case TABLE_ENTER_TABLE_START:
            return {
                ...state,
                error: null
            }
        case TABLE_ENTER_TABLE_SUCCESS:
            return {
                ...state
            }
        case TABLE_KICK_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case TABLE_KICK_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TABLE_KICK_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            }
        case TABLE_CHANGE_ROLE_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case TABLE_CHANGE_ROLE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TABLE_CHANGE_ROLE_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            }
        case TABLE_CREATE_TABLE_START:
            return {
                ...state,
                error: null
            }
        case TABLE_CREATE_TABLE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case TABLE_CREATE_TABLE_SUCCESS:
            return {
                ...state,
                error: null
            }
        case TABLE_ADD_CLAN_START:
            return {
                ...state
            }
        case TABLE_ADD_CLAN_SUCCESS:
            return {
                ...state
            }
        case TABLE_DELETE_CLAN_START:
            return {
                ...state
            }
        case TABLE_DELETE_CLAN_SUCCESS:
            return {
                ...state
            }
        case TABLE_CASTLE_SAVE_START:
            return {
                ...state,
                error: null
            }
        case TABLE_CASTLE_SAVE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case TABLE_CASTLE_SAVE_SUCCESS:
            return {
                ...state,
                error: null
            }
        case TABLE_SELECT:
            return {
                ...state,
                table: action.payload
            }
        case TABLE_UNSET:
            return {
                ...state,
                table: null,
                castles: null
            }
        case TABLE_SELECT_FAVORITE_CASTLES:
            return {
                ...state,
                favoriteCastles:  action.payload.data,
                favoriteChangeDate: action.payload.date
            }
        case TABLES_UNSET:
            return {
                ...state,
                tables: null
            }
        case TABLE_SELECT_CASTLE:
            return {
                ...state,
                castles: action.payload.castles,
                castlesLvlId: action.payload.castleLvlId
            }
        default:
            return state
    }
}

export default tableReducer;