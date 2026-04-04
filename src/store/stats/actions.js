export const STATS_LEFT_START = "STATS::STATS_LEFT_START";
export const STATS_LEFT_SUCCESS = "STATS::STATS_LEFT_SUCCESS";
export const STATS_LEFT_ERROR = "STATS::STATS_LEFT_ERROR";
export const STATS_RIGHT_START = "STATS::STATS_RIGHT_START";
export const STATS_RIGHT_SUCCESS = "STATS::STATS_RIGHT_SUCCESS";
export const STATS_RIGHT_ERROR = "STATS::STATS_RIGHT_ERROR";
export const STATS_DATES_START = "STATS::STATS_DATES_START";
export const STATS_DATES_SUCCESS = "STATS::STATS_DATES_SUCCESS";
export const STATS_DATES_ERROR = "STATS::STATS_DATES_ERROR";
export const STATS_ADD_STATS = "STATS::STATS_ADD_STATS";
export const STATS_TOGGLE_NAME = "STATS::STATS_TOGGLE_NAME";



export const STATS_CLANS_LEFT_START = "STATS::STATS_CLANS_LEFT_START";
export const STATS_CLANS_LEFT_SUCCESS = "STATS::STATS_CLANS_LEFT_SUCCESS";
export const STATS_CLANS_LEFT_ERROR = "STATS::STATS_CLANS_LEFT_ERROR";
export const STATS_CLANS_RIGHT_START = "STATS::STATS_CLANS_RIGHT_START";
export const STATS_CLANS_RIGHT_SUCCESS = "STATS::STATS_CLANS_RIGHT_SUCCESS";
export const STATS_CLANS_RIGHT_ERROR = "STATS::STATS_CLANS_RIGHT_ERROR";
export const STATS_CLANS_DATES_START = "STATS::STATS_CLANS_DATES_START";
export const STATS_CLANS_DATES_SUCCESS = "STATS::STATS_CLANS_DATES_SUCCESS";
export const STATS_CLANS_DATES_ERROR = "STATS::STATS_CLANS_DATES_ERROR";
export const STATS_CLANS_ADD_STATS = "STATS::STATS_CLANS_ADD_STATS";
export const STATS_CLANS_TOGGLE_NAME = "STATS::STATS_CLANS_TOGGLE_NAME";


export const STATS_CASTLES_LEFT_START = "STATS::STATS_CASTLES_LEFT_START";
export const STATS_CASTLES_LEFT_SUCCESS = "STATS::STATS_CASTLES_LEFT_SUCCESS";
export const STATS_CASTLES_LEFT_ERROR = "STATS::STATS_CASTLES_LEFT_ERROR";
export const STATS_CASTLES_RIGHT_START = "STATS::STATS_CASTLES_RIGHT_START";
export const STATS_CASTLES_RIGHT_SUCCESS = "STATS::STATS_CASTLES_RIGHT_SUCCESS";
export const STATS_CASTLES_RIGHT_ERROR = "STATS::STATS_CASTLES_RIGHT_ERROR";
export const STATS_CASTLES_DATES_START = "STATS::STATS_CASTLES_DATES_START";
export const STATS_CASTLES_DATES_SUCCESS = "STATS::STATS_CASTLES_DATES_SUCCESS";
export const STATS_CASTLES_DATES_ERROR = "STATS::STATS_CASTLES_DATES_ERROR";
export const STATS_CASTLES_ADD_STATS = "STATS::STATS_CASTLES_ADD_STATS";
export const STATS_CASTLES_TOGGLE_NAME = "STATS::STATS_CASTLES_TOGGLE_NAME";

export const statsToggleName = (data) => ({
    type: STATS_TOGGLE_NAME,
    payload: data
})

export const statsDatesSuccess = (data) => ({
    type: STATS_DATES_SUCCESS,
    payload: data
})

export const statsDatesStart = () => ({
    type: STATS_DATES_START
})

export const statsDatesError = (error) => ({
    type: STATS_DATES_ERROR,
    payload: error
})

export const statsLeftSuccess = (data) => ({
    type: STATS_LEFT_SUCCESS,
    payload: data
})

export const statsLeftStart = () => ({
    type: STATS_LEFT_START
})

export const statsLeftError = (error) => ({
    type: STATS_LEFT_ERROR,
    payload: error
})

export const statsRightSuccess = (data) => ({
    type: STATS_RIGHT_SUCCESS,
    payload: data
})

export const statsRightStart = () => ({
    type: STATS_RIGHT_START
})

export const statsRightError = (error) => ({
    type: STATS_RIGHT_ERROR,
    payload: error
})

export const statsAddStats = (data) => ({
    type: STATS_ADD_STATS,
    payload: data
})




export const statsClansToggleName = (data) => ({
    type: STATS_CLANS_TOGGLE_NAME,
    payload: data
})

export const statsClansDatesSuccess = (data) => ({
    type: STATS_CLANS_DATES_SUCCESS,
    payload: data
})

export const statsClansDatesStart = () => ({
    type: STATS_CLANS_DATES_START
})

export const statsClansDatesError = (error) => ({
    type: STATS_CLANS_DATES_ERROR,
    payload: error
})

export const statsClansLeftSuccess = (data) => ({
    type: STATS_CLANS_LEFT_SUCCESS,
    payload: data
})

export const statsClansLeftStart = () => ({
    type: STATS_CLANS_LEFT_START
})

export const statsClansLeftError = (error) => ({
    type: STATS_CLANS_LEFT_ERROR,
    payload: error
})

export const statsClansRightSuccess = (data) => ({
    type: STATS_CLANS_RIGHT_SUCCESS,
    payload: data
})

export const statsClansRightStart = () => ({
    type: STATS_CLANS_RIGHT_START
})

export const statsClansRightError = (error) => ({
    type: STATS_CLANS_RIGHT_ERROR,
    payload: error
})

export const statsClansAddStats = (data) => ({
    type: STATS_CLANS_ADD_STATS,
    payload: data
})



export const statsCastlesToggleName = (data) => ({
    type: STATS_CASTLES_TOGGLE_NAME,
    payload: data
})

export const statsCastlesDatesSuccess = (data) => ({
    type: STATS_CASTLES_DATES_SUCCESS,
    payload: data
})

export const statsCastlesDatesStart = () => ({
    type: STATS_CASTLES_DATES_START
})

export const statsCastlesDatesError = (error) => ({
    type: STATS_CASTLES_DATES_ERROR,
    payload: error
})

export const statsCastlesLeftSuccess = (data) => ({
    type: STATS_CASTLES_LEFT_SUCCESS,
    payload: data
})

export const statsCastlesLeftStart = () => ({
    type: STATS_CASTLES_LEFT_START
})

export const statsCastlesLeftError = (error) => ({
    type: STATS_CASTLES_LEFT_ERROR,
    payload: error
})

export const statsCastlesRightSuccess = (data) => ({
    type: STATS_CASTLES_RIGHT_SUCCESS,
    payload: data
})

export const statsCastlesRightStart = () => ({
    type: STATS_CASTLES_RIGHT_START
})

export const statsCastlesRightError = (error) => ({
    type: STATS_CASTLES_RIGHT_ERROR,
    payload: error
})

export const statsCastlesAddStats = (data) => ({
    type: STATS_CASTLES_ADD_STATS,
    payload: data
})



export const statsInitiateDates = () => {
    return async dispatch => {
        dispatch(statsDatesStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/stats/dates`);
            const data = await response.json();

            if (!data.success) {
                dispatch(statsDatesError(data.reason));
            } else {
                dispatch(statsDatesSuccess(data.data[0]));
            }
        } catch (e) {
            dispatch(statsDatesError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const statsInitiateDatesClans = () => {
    return async dispatch => {
        dispatch(statsClansDatesStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/stats/dates-clans`);
            const data = await response.json();

            if (!data.success) {
                dispatch(statsClansDatesError(data.reason));
            } else {
                dispatch(statsClansDatesSuccess(data.data[0]));
            }
        } catch (e) {
            dispatch(statsClansDatesError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const statsInitiateDatesCastles = () => {
    return async dispatch => {
        dispatch(statsCastlesDatesStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/stats/dates-castles`);
            const data = await response.json();

            if (!data.success) {
                dispatch(statsCastlesDatesError(data.reason));
            } else {
                dispatch(statsCastlesDatesSuccess(data.data[0]));
            }
        } catch (e) {
            dispatch(statsCastlesDatesError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const statsSetDate = (side, date, stats = null) => {
    if (stats) {
        const exists = stats.find(stat => stat.date === date)

        if (exists) {
            return dispatch => {
                if (side === 'left') {
                    dispatch(statsLeftSuccess(exists.stat));
                } else {
                    dispatch(statsRightSuccess(exists.stat));
                }
            }
        }
    }

    return async dispatch => {
        if (side === 'left') {
            dispatch(statsLeftStart());
        } else {
            dispatch(statsRightStart());
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/stats/${side}/${date}`);
            const data = await response.json();

            if (!data.success) {
                if (side === 'left') {
                    dispatch(statsLeftError(data.reason));
                } else {
                    dispatch(statsRightError(data.reason));
                }
            } else {
                if (side === 'left') {
                    dispatch(statsLeftSuccess(data.data[0]));
                } else {
                    dispatch(statsRightSuccess(data.data[0]));
                }

                dispatch(statsAddStats(data.data[0]));
            }
        } catch (e) {
            if (side === 'left') {
                dispatch(statsLeftError(e.toString()));
            } else {
                dispatch(statsRightError(e.toString()));
            }

            console.log(e.toString());
        }
    }
}

export const statsSetDateClans = (side, date, stats = null) => {
    if (stats) {
        const exists = stats.find(stat => stat.date === date)

        if (exists) {
            return dispatch => {
                if (side === 'left') {
                    dispatch(statsClansLeftSuccess(exists.stat));
                } else {
                    dispatch(statsClansRightSuccess(exists.stat));
                }
            }
        }
    }

    return async dispatch => {
        if (side === 'left') {
            dispatch(statsClansLeftStart());
        } else {
            dispatch(statsClansRightStart());
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/stats/${side}-clans/${date}`);
            const data = await response.json();

            if (!data.success) {
                if (side === 'left') {
                    dispatch(statsClansLeftError(data.reason));
                } else {
                    dispatch(statsClansRightError(data.reason));
                }
            } else {
                if (side === 'left') {
                    dispatch(statsClansLeftSuccess(data.data[0]));
                } else {
                    dispatch(statsClansRightSuccess(data.data[0]));
                }

                dispatch(statsClansAddStats(data.data[0]));
            }
        } catch (e) {
            if (side === 'left') {
                dispatch(statsClansLeftError(e.toString()));
            } else {
                dispatch(statsClansRightError(e.toString()));
            }

            console.log(e.toString());
        }
    }
}

export const statsSetDateCastles = (side, date, stats = null) => {
    if (stats) {
        const exists = stats.find(stat => stat.date === date)

        if (exists) {
            return dispatch => {
                if (side === 'left') {
                    dispatch(statsCastlesLeftSuccess(exists.stat));
                } else {
                    dispatch(statsCastlesRightSuccess(exists.stat));
                }
            }
        }
    }

    return async dispatch => {
        if (side === 'left') {
            dispatch(statsCastlesLeftStart());
        } else {
            dispatch(statsCastlesRightStart());
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/stats/${side}-castles/${date}`);
            const data = await response.json();

            if (!data.success) {
                if (side === 'left') {
                    dispatch(statsCastlesLeftError(data.reason));
                } else {
                    dispatch(statsCastlesRightError(data.reason));
                }
            } else {
                if (side === 'left') {
                    dispatch(statsCastlesLeftSuccess(data.data[0]));
                } else {
                    dispatch(statsCastlesRightSuccess(data.data[0]));
                }

                dispatch(statsCastlesAddStats(data.data[0]));
            }
        } catch (e) {
            if (side === 'left') {
                dispatch(statsCastlesLeftError(e.toString()));
            } else {
                dispatch(statsCastlesRightError(e.toString()));
            }

            console.log(e.toString());
        }
    }
}
