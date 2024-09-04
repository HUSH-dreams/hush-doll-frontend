export const TABLE_START = "TABLE::TABLE_START";
export const TABLE_SUCCESS = "TABLE::TABLE_SUCCESS";
export const TABLE_ENTER_TABLE_START = "TABLE::TABLE_ENTER_TABLE_START";
export const TABLE_ENTER_TABLE_SUCCESS = "TABLE::TABLE_ENTER_TABLE_SUCCESS";
export const TABLE_ERROR = "TABLE::TABLE_ERROR";
export const TABLE_QUIT_START = "TABLE::TABLE_QUIT_START";
export const TABLE_QUIT_SUCCESS = "TABLE::TABLE_QUIT_SUCCESS";
export const TABLE_QUIT_ERROR = "TABLE::TABLE_QUIT_ERROR";
export const TABLE_DELETE_TABLE_START = "TABLE::TABLE_DELETE_TABLE_START";
export const TABLE_DELETE_TABLE_SUCCESS = "TABLE::TABLE_DELETE_TABLE_SUCCESS";
export const TABLE_KICK_START = "TABLE::TABLE_KICK_START";
export const TABLE_KICK_SUCCESS = "TABLE::TABLE_KICK_SUCCESS";
export const TABLE_KICK_ERROR = "TABLE::TABLE_KICK_ERROR";
export const TABLE_CHANGE_ROLE_START = "TABLE::TABLE_CHANGE_ROLE_START";
export const TABLE_CHANGE_ROLE_SUCCESS = "TABLE::TABLE_CHANGE_ROLE_SUCCESS";
export const TABLE_CHANGE_ROLE_ERROR = "TABLE::TABLE_CHANGE_ROLE_ERROR";
export const TABLE_CREATE_TABLE_START = "TABLE::TABLE_CREATE_TABLE_START";
export const TABLE_CREATE_TABLE_SUCCESS = "TABLE::TABLE_CREATE_TABLE_SUCCESS";
export const TABLE_CREATE_TABLE_ERROR = "TABLE::TABLE_CREATE_TABLE_ERROR";
export const TABLE_ADD_CLAN_START = "TABLE::TABLE_ADD_CLAN_START";
export const TABLE_ADD_CLAN_SUCCESS = "TABLE::TABLE_ADD_CLAN_SUCCESS";
export const TABLE_DELETE_CLAN_START = "TABLE::TABLE_DELETE_CLAN_START";
export const TABLE_DELETE_CLAN_SUCCESS = "TABLE::TABLE_DELETE_CLAN_SUCCESS";
export const TABLE_SELECT = "TABLE::TABLE_SELECT";
export const TABLE_UNSET = "TABLE::TABLE_UNSET";
export const TABLES_UNSET = "TABLE::TABLES_UNSET";
export const TABLE_SELECT_CASTLE = "TABLE::TABLE_SELECT_CASTLE";
export const TABLE_CASTLE_SAVE_START = "TABLE::TABLE_CASTLE_SAVE_START";
export const TABLE_CASTLE_SAVE_SUCCESS = "TABLE::TABLE_CASTLE_SAVE_SUCCESS";
export const TABLE_CASTLE_SAVE_ERROR = "TABLE::TABLE_CASTLE_SAVE_ERROR";
export const TABLE_SELECT_FAVORITE_CASTLES = "TABLE::TABLE_SELECT_FAVORITE_CASTLES";

export const tableStart = () => ({
    type: TABLE_START
});

export const tableError = (err) => ({
    type: TABLE_ERROR,
    payload: err
});

export const tableSuccess = (data) => ({
    type: TABLE_SUCCESS,
    payload: data
});

export const tableEnterTableStart = () => ({
    type: TABLE_ENTER_TABLE_START
});

export const tableEnterTableSuccess = (data) => ({
    type: TABLE_ENTER_TABLE_SUCCESS,
    payload: data
});

export const tableQuitStart = () => ({
    type: TABLE_QUIT_START
});

export const tableQuitError = (err) => ({
    type: TABLE_QUIT_ERROR,
    payload: err
});

export const tableQuitSuccess = (data) => ({
    type: TABLE_QUIT_SUCCESS,
    payload: data
});

export const tableDeleteTableStart = () => ({
    type: TABLE_DELETE_TABLE_START
});

export const tableDeleteTableSuccess = (data) => ({
    type: TABLE_DELETE_TABLE_SUCCESS,
    payload: data
});

export const tableKickStart = () => ({
    type: TABLE_KICK_START
});

export const tableKickError = (err) => ({
    type: TABLE_KICK_ERROR,
    payload: err
});

export const tableKickSuccess = (data) => ({
    type: TABLE_KICK_SUCCESS,
    payload: data
});

export const tableChangeRoleStart = () => ({
    type: TABLE_CHANGE_ROLE_START
});

export const tableChangeRoleError = (err) => ({
    type: TABLE_CHANGE_ROLE_ERROR,
    payload: err
});

export const tableChangeRoleSuccess = (data) => ({
    type: TABLE_CHANGE_ROLE_SUCCESS,
    payload: data
});

export const tableCreateTableStart = () => ({
    type: TABLE_CREATE_TABLE_START
});

export const tableCreateTableError = (err) => ({
    type: TABLE_CREATE_TABLE_ERROR,
    payload: err
});

export const tableCreateTableSuccess = (data) => ({
    type: TABLE_CREATE_TABLE_SUCCESS,
    payload: data
});

export const tableAddClanStart = () => ({
    type: TABLE_ADD_CLAN_START
});

export const tableAddClanSuccess = (data) => ({
    type: TABLE_ADD_CLAN_SUCCESS,
    payload: data
});

export const tableDeleteClanStart = () => ({
    type: TABLE_DELETE_CLAN_START
});

export const tableDeleteClanSuccess = (data) => ({
    type: TABLE_DELETE_CLAN_SUCCESS,
    payload: data
});

export const tableSelect = (table) => ({
    type: TABLE_SELECT,
    payload: table
});

export const tableUnset = () => ({
    type: TABLE_UNSET
})

export const tablesUnset = () => ({
    type: TABLES_UNSET
})


export const tableSelectCastle = (data) => ({
    type: TABLE_SELECT_CASTLE,
    payload: data
});

export const tableCastleSaveStart = () => ({
    type: TABLE_CASTLE_SAVE_START
})

export const tableCastleSaveSuccess = (data) => ({
    type: TABLE_CASTLE_SAVE_SUCCESS,
    payload: data
})

export const tableCastleSaveError = (error) => ({
    type: TABLE_CASTLE_SAVE_ERROR,
    payload: error
})
export const setFavoriteCastles = (data, date) => ({
    type: TABLE_SELECT_FAVORITE_CASTLES,
    payload: {
        data: data,
        date: date
    }
})

export const tableInitiate = (token) => {
    return async dispatch => {
        dispatch(tableStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table`, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableError(data.reason))
            } else {
                dispatch(tableSuccess(data.data));
            }
        } catch (e) {
            dispatch(tableError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableCastleSaveInitiate = (token, payload) => {
    return async dispatch => {
        dispatch(tableCastleSaveStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/${payload.tableId}/save-castle`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'castle': {
                        'id': payload.id,
                        'fillingDatetime': payload.fillingDate ? payload.fillingDate : null,
                        'fillingLvl': payload.fillingLvl ? payload.fillingLvl : null,
                        'fillingSpheretime': payload.fillingSpheretime ? payload.fillingSpheretime : null,
                        'ownerClan': payload.ownerClan ? payload.ownerClan : null,
                        'commentary': payload.commentary ? payload.commentary : null,
                        'tableId': payload.tableId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableCastleSaveError(data.reason))
            } else {
                dispatch(tableCastleSaveSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableCastleSaveError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableQuitFromTable = (token, payload) => {
    return async dispatch => {
        dispatch(tableQuitStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/${payload.tableId}/quit`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'quit': {
                        'tableId': payload
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableQuitError(data.reason))
            } else {
                dispatch(tableQuitSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableQuitError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableKickFromTable = (token, payload) => {
    return async dispatch => {
        dispatch(tableKickStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/${payload.tableId}/kick`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'kick': {
                        'tableId': payload.tableId,
                        'userId': payload.userId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableKickError(data.reason))
            } else {
                dispatch(tableKickSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableKickError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableChangeRole = (token, payload) => {
    return async dispatch => {
        dispatch(tableChangeRoleStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/${payload.tableId}/role`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'role': {
                        'tableId': payload.tableId,
                        'userId': payload.userId,
                        'newRole': payload.newRole
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableChangeRoleError(data.reason))
            } else {
                dispatch(tableChangeRoleSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableChangeRoleError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableCreateTable = (token, payload) => {
    return async dispatch => {
        dispatch(tableCreateTableStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/create`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'create': {
                        'tableName': payload.tableName
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableCreateTableError(data.reason))
            } else {
                dispatch(tableCreateTableSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableCreateTableError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableAddClan = (token, payload) => {
    return async dispatch => {
        dispatch(tableAddClanStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/add-clan`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'add-clan': {
                        'clan-name': payload.clanName,
                        'tableId': payload.tableId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableError(data.reason))
            } else {
                dispatch(tableAddClanSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableDeleteClan = (token, payload) => {
    return async dispatch => {
        dispatch(tableDeleteClanStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/delete-clan`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'delete-clan': {
                        'clanId': payload.clanId,
                        'tableId': payload.tableId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableError(data.reason))
            } else {
                dispatch(tableDeleteClanSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableEnterTable = (token, payload) => {
    return async dispatch => {
        dispatch(tableEnterTableStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/enter`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'enter': {
                        'shareString': payload.shareString
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableError(data.reason))
            } else {
                dispatch(tableEnterTableSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableDeleteTable = (token, payload) => {
    return async dispatch => {
        dispatch(tableDeleteTableStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/delete`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'delete': {
                        'tableId': payload.tableId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableError(data.reason))
            } else {
                dispatch(tableDeleteTableSuccess(data.data));
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableError(e.toString()));
            console.log(e.toString());
        }
    }
}