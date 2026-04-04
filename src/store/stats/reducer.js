import {
    STATS_ADD_STATS,
    STATS_CASTLES_ADD_STATS,
    STATS_CASTLES_DATES_ERROR,
    STATS_CASTLES_DATES_START,
    STATS_CASTLES_DATES_SUCCESS,
    STATS_CASTLES_LEFT_ERROR,
    STATS_CASTLES_LEFT_START,
    STATS_CASTLES_LEFT_SUCCESS,
    STATS_CASTLES_RIGHT_ERROR,
    STATS_CASTLES_RIGHT_START,
    STATS_CASTLES_RIGHT_SUCCESS, STATS_CASTLES_TOGGLE_NAME,
    STATS_CLANS_ADD_STATS,
    STATS_CLANS_DATES_ERROR,
    STATS_CLANS_DATES_START,
    STATS_CLANS_DATES_SUCCESS,
    STATS_CLANS_LEFT_ERROR,
    STATS_CLANS_LEFT_START,
    STATS_CLANS_LEFT_SUCCESS,
    STATS_CLANS_RIGHT_ERROR,
    STATS_CLANS_RIGHT_START,
    STATS_CLANS_RIGHT_SUCCESS,
    STATS_CLANS_TOGGLE_NAME,
    STATS_DATES_ERROR,
    STATS_DATES_START,
    STATS_DATES_SUCCESS,
    STATS_LEFT_ERROR,
    STATS_LEFT_START,
    STATS_LEFT_SUCCESS,
    STATS_RIGHT_ERROR,
    STATS_RIGHT_START,
    STATS_RIGHT_SUCCESS,
    STATS_TOGGLE_NAME
} from "./actions";

const initialState = {
    statsLeft: [],
    errorLeft: '',
    leftLoading: false,
    statsRight: [],
    errorRight: '',
    rightLoading: false,
    dates: [],
    datesError: '',
    stats: [],
    myNames: [],
    statsClansLeft: [],
    errorClansLeft: '',
    leftClansLoading: false,
    statsClansRight: [],
    errorClansRight: '',
    rightClansLoading: false,
    datesClans: [],
    datesClansError: '',
    statsClans: [],
    myNamesClans: [],
    statsCastlesLeft: [],
    errorCastlesLeft: '',
    leftCastlesLoading: false,
    statsCastlesRight: [],
    errorCastlesRight: '',
    rightCastlesLoading: false,
    datesCastles: [],
    datesCastlesError: '',
    statsCastles: [],
    myNamesCastles: []
}

const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATS_LEFT_START:
            return {
                ...state,
                statsLeft: [],
                leftError: '',
                leftLoading: true
            }
        case STATS_LEFT_SUCCESS:
            return {
                ...state,
                statsLeft: action.payload,
                leftLoading: false
            }
        case STATS_LEFT_ERROR:
            return {
                ...state,
                leftError: action.payload,
                leftLoading: false
            }
        case STATS_RIGHT_START:
            return {
                ...state,
                statsRight: [],
                rightError: '',
                rightLoading: true
            }
        case STATS_RIGHT_SUCCESS:
            return {
                ...state,
                statsRight: action.payload,
                rightLoading: false
            }
        case STATS_RIGHT_ERROR:
            return {
                ...state,
                rightError: action.payload,
                rightLoading: false
            }
        case STATS_DATES_START:
            return {
                ...state,
                dates: [],
                datesError: ''
            }
        case STATS_DATES_SUCCESS:
            return {
                ...state,
                dates: action.payload.map(item => item.snapshot_date)
            }
        case STATS_DATES_ERROR:
            return {
                ...state,
                datesError: action.payload
            }
        case STATS_ADD_STATS:
            if (state.stats && state.stats.length > 0) {
                return {
                    ...state,
                    stats: [...state.stats, {date: action.payload[0].snapshot_date, stat: action.payload}]
                }
            } else {
                return {
                    ...state,
                    stats: [{date: action.payload[0].snapshot_date, stat: action.payload}]
                }
            }
        case STATS_TOGGLE_NAME:
            const nameToAdd = action.payload;

            const existingTypeIndex = state.myNames?.findIndex(myName => myName === nameToAdd);

            if (existingTypeIndex || existingTypeIndex === 0) {
                const existingType = state.myNames[existingTypeIndex];

                if (existingType) {
                    return {
                        ...state,
                        myNames: state.myNames?.filter(type => type !== nameToAdd)
                    };
                }
            }

            if (state.myNames && state.myNames.length > 0) {
                return {
                    ...state,
                    myNames: [...state.myNames, nameToAdd]
                }
            } else {
                return {
                    ...state,
                    myNames: [nameToAdd]
                }
            }
            
            
            
            
            
            
            
        case STATS_CLANS_LEFT_START:
            return {
                ...state,
                statsClansLeft: [],
                leftClansError: '',
                leftClansLoading: true
            }
        case STATS_CLANS_LEFT_SUCCESS:
            return {
                ...state,
                statsClansLeft: action.payload,
                leftClansLoading: false
            }
        case STATS_CLANS_LEFT_ERROR:
            return {
                ...state,
                leftClansError: action.payload,
                leftClansLoading: false
            }
        case STATS_CLANS_RIGHT_START:
            return {
                ...state,
                statsClansRight: [],
                rightClansError: '',
                rightClansLoading: true
            }
        case STATS_CLANS_RIGHT_SUCCESS:
            return {
                ...state,
                statsClansRight: action.payload,
                rightClansLoading: false
            }
        case STATS_CLANS_RIGHT_ERROR:
            return {
                ...state,
                rightClansError: action.payload,
                rightClansLoading: false
            }
        case STATS_CLANS_DATES_START:
            return {
                ...state,
                datesClans: [],
                datesClansError: ''
            }
        case STATS_CLANS_DATES_SUCCESS:
            return {
                ...state,
                datesClans: action.payload.map(item => item.snapshot_date)
            }
        case STATS_CLANS_DATES_ERROR:
            return {
                ...state,
                datesClansError: action.payload
            }
        case STATS_CLANS_ADD_STATS:
            if (state.stats && state.stats.length > 0) {
                return {
                    ...state,
                    statsClans: [...state.statsClans, {date: action.payload[0].snapshot_date, stat: action.payload}]
                }
            } else {
                return {
                    ...state,
                    statsClans: [{date: action.payload[0].snapshot_date, stat: action.payload}]
                }
            }
        case STATS_CLANS_TOGGLE_NAME:
            const nameClansToAdd = action.payload;

            const existingClansTypeIndex = state.myNamesClans?.findIndex(myName => myName === nameClansToAdd);

            if (existingClansTypeIndex || existingClansTypeIndex === 0) {
                const existingClansType = state.myNamesClans[existingClansTypeIndex];

                if (existingClansType) {
                    return {
                        ...state,
                        myNamesClans: state.myNamesClans?.filter(type => type !== nameClansToAdd)
                    };
                }
            }

            if (state.myNamesClans && state.myNamesClans.length > 0) {
                return {
                    ...state,
                    myNamesClans: [...state.myNamesClans, nameClansToAdd]
                }
            } else {
                return {
                    ...state,
                    myNamesClans: [nameClansToAdd]
                }
            }




        case STATS_CASTLES_LEFT_START:
            return {
                ...state,
                statsCastlesLeft: [],
                leftCastlesError: '',
                leftCastlesLoading: true
            }
        case STATS_CASTLES_LEFT_SUCCESS:
            return {
                ...state,
                statsCastlesLeft: action.payload,
                leftCastlesLoading: false
            }
        case STATS_CASTLES_LEFT_ERROR:
            return {
                ...state,
                leftCastlesError: action.payload,
                leftCastlesLoading: false
            }
        case STATS_CASTLES_RIGHT_START:
            return {
                ...state,
                statsCastlesRight: [],
                rightCastlesError: '',
                rightCastlesLoading: true
            }
        case STATS_CASTLES_RIGHT_SUCCESS:
            return {
                ...state,
                statsCastlesRight: action.payload,
                rightCastlesLoading: false
            }
        case STATS_CASTLES_RIGHT_ERROR:
            return {
                ...state,
                rightCastlesError: action.payload,
                rightCastlesLoading: false
            }
        case STATS_CASTLES_DATES_START:
            return {
                ...state,
                datesCastles: [],
                datesCastlesError: ''
            }
        case STATS_CASTLES_DATES_SUCCESS:
            return {
                ...state,
                datesCastles: action.payload.map(item => item.snapshot_date)
            }
        case STATS_CASTLES_DATES_ERROR:
            return {
                ...state,
                datesCastlesError: action.payload
            }
        case STATS_CASTLES_ADD_STATS:
            if (state.stats && state.stats.length > 0) {
                return {
                    ...state,
                    statsCastles: [...state.statsCastles, {date: action.payload[0].snapshot_date, stat: action.payload}]
                }
            } else {
                return {
                    ...state,
                    statsCastles: [{date: action.payload[0].snapshot_date, stat: action.payload}]
                }
            }
        case STATS_CASTLES_TOGGLE_NAME:
            const nameCastlesToAdd = action.payload;

            const existingCastlesTypeIndex = state.myNamesCastles?.findIndex(myName => myName === nameCastlesToAdd);

            if (existingCastlesTypeIndex || existingCastlesTypeIndex === 0) {
                const existingCastlesType = state.myNamesCastles[existingCastlesTypeIndex];

                if (existingCastlesType) {
                    return {
                        ...state,
                        myNamesCastles: state.myNamesCastles?.filter(type => type !== nameCastlesToAdd)
                    };
                }
            }

            if (state.myNamesCastles && state.myNamesCastles.length > 0) {
                return {
                    ...state,
                    myNamesCastles: [...state.myNamesCastles, nameCastlesToAdd]
                }
            } else {
                return {
                    ...state,
                    myNamesCastles: [nameCastlesToAdd]
                }
            }


        default:
            return state;
    }
}

export default statsReducer;