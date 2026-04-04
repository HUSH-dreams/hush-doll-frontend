import {addError, addMessage, addNewError, addNewMessage, addNewNotification, addNotification} from "../error/actions";
import {sendJoinTableSignal, sendLeaveTableSignal} from "../websocket/actions";
import {createBrowserHistory} from "history";


const history = createBrowserHistory();

export const TABLE_DETAILS_INITIATE_START = "TABLE::TABLE_DETAILS_INITIATE_START";
export const TABLE_DETAILS_INITIATE_SUCCESS = "TABLE::TABLE_DETAILS_INITIATE_SUCCESS";
export const TABLE_DETAILS_INITIATE_ERROR = "TABLE::TABLE_DETAILS_INITIATE_ERROR";
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
export const TABLE_BAN_START = "TABLE::TABLE_BAN_START";
export const TABLE_BAN_SUCCESS = "TABLE::TABLE_BAN_SUCCESS";
export const TABLE_BAN_ERROR = "TABLE::TABLE_BAN_ERROR";
export const TABLE_UNBAN_START = "TABLE::TABLE_UNBAN_START";
export const TABLE_UNBAN_SUCCESS = "TABLE::TABLE_UNBAN_SUCCESS";
export const TABLE_UNBAN_ERROR = "TABLE::TABLE_UNBAN_ERROR";
export const TABLE_CHANGE_ROLE_START = "TABLE::TABLE_CHANGE_ROLE_START";
export const TABLE_CHANGE_ROLE_SUCCESS = "TABLE::TABLE_CHANGE_ROLE_SUCCESS";
export const TABLE_CHANGE_ROLE_ERROR = "TABLE::TABLE_CHANGE_ROLE_ERROR";
export const TABLE_CREATE_TABLE_START = "TABLE::TABLE_CREATE_TABLE_START";
export const TABLE_CREATE_TABLE_SUCCESS = "TABLE::TABLE_CREATE_TABLE_SUCCESS";
export const TABLE_CREATE_TABLE_ERROR = "TABLE::TABLE_CREATE_TABLE_ERROR";
export const TABLE_ADD_CLAN_START = "TABLE::TABLE_ADD_CLAN_START";
export const TABLE_ADD_CLAN_SUCCESS = "TABLE::TABLE_ADD_CLAN_SUCCESS";
export const TABLE_ADD_CLAN_ERROR = "TABLE::TABLE_ADD_CLAN_ERROR";
export const TABLE_DELETE_CLAN_START = "TABLE::TABLE_DELETE_CLAN_START";
export const TABLE_DELETE_CLAN_SUCCESS = "TABLE::TABLE_DELETE_CLAN_SUCCESS";
export const TABLE_DELETE_CLAN_ERROR = "TABLE::TABLE_DELETE_CLAN_ERROR";
export const TABLE_SELECT = "TABLE::TABLE_SELECT";
export const TABLE_UNSET = "TABLE::TABLE_UNSET";
export const TABLES_UNSET = "TABLE::TABLES_UNSET";
export const TABLE_SELECT_CASTLE = "TABLE::TABLE_SELECT_CASTLE";
export const TABLE_CASTLE_SAVE_START = "TABLE::TABLE_CASTLE_SAVE_START";
export const TABLE_CASTLE_SAVE_SUCCESS = "TABLE::TABLE_CASTLE_SAVE_SUCCESS";
export const TABLE_CASTLE_SAVE_ERROR = "TABLE::TABLE_CASTLE_SAVE_ERROR";
export const TABLE_SELECT_FAVORITE_CASTLES = "TABLE::TABLE_SELECT_FAVORITE_CASTLES";
export const TABLE_CALCULATOR_ERROR_SET = "TABLE::TABLE_CALCULATOR_ERROR_SET";
export const TABLE_CALCULATOR_ERROR_UNSET = "TABLE::TABLE_CALCULATOR_ERROR_UNSET";
export const TABLE_LOGOUT = "TABLE::TABLE_LOGOUT";
export const TABLE_UPDATE_CASTLE_BY_WS = "TABLE::UPDATE_CASTLE_BY_WS";
export const TABLE_UPDATE_USERS_BY_WS = "TABLE::TABLE_UPDATE_USERS_BY_WS";
export const TABLE_UPDATE_BANNED_BY_WS = "TABLE::TABLE_UPDATE_BANNED_BY_WS";
export const TABLE_UPDATE_CLANS_BY_WS = "TABLE::TABLE_UPDATE_CLANS_BY_WS";
export const TABLE_LOAD_BY_NAME_START = "TABLE::LOAD_BY_NAME_START";
export const TABLE_LOAD_BY_NAME_SUCCESS = "TABLE::LOAD_BY_NAME_SUCCESS";
export const TABLE_LOAD_BY_NAME_ERROR = "TABLE::LOAD_BY_NAME_ERROR";
export const TABLE_TOGGLE_CLAN = "TABLE::TABLE_TOGGLE_CLAN";

export const tableLoadByNameStart = () => ({ type: TABLE_LOAD_BY_NAME_START });
export const tableLoadByNameSuccess = () => ({ type: TABLE_LOAD_BY_NAME_SUCCESS });
export const tableLoadByNameError = (error) => ({ type: TABLE_LOAD_BY_NAME_ERROR, payload: error });

export const tableToggleClan = (payload) => ({
   type: TABLE_TOGGLE_CLAN,
   payload: payload
});

export const updateTableCastleByWebSocket = (payload) => ({
    type: TABLE_UPDATE_CASTLE_BY_WS,
    payload: payload,
});

export const updateTableUsersByWebSocket = (payload) => ({
    type: TABLE_UPDATE_USERS_BY_WS,
    payload: payload,
});

export const updateTableBannedByWebSocket = (payload, user) => ({
    type: TABLE_UPDATE_BANNED_BY_WS,
    payload: payload,
    user: user
});

export const updateTableClansByWebSocket = (payload) => ({
    type: TABLE_UPDATE_CLANS_BY_WS,
    payload,
});

export const tableLogout = () => ({
    type: TABLE_LOGOUT
});

export const tableCalculatorErrorSet = (error) => ({
    type: TABLE_CALCULATOR_ERROR_SET,
    payload: error
});

export const tableCalculatorErrorUnset = () => ({
    type: TABLE_CALCULATOR_ERROR_UNSET
});

export const tableDetailsInitiateStart = () => ({
    type: TABLE_DETAILS_INITIATE_START
});

export const tableDetailsInitiateError = (err) => ({
    type: TABLE_DETAILS_INITIATE_ERROR,
    payload: err
});

export const tableDetailsInitiateSuccess = (data) => ({
    type: TABLE_DETAILS_INITIATE_SUCCESS,
    payload: data
});

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

export const tableBanSuccess = (data) => ({
    type: TABLE_BAN_SUCCESS,
    payload: data
});

export const tableBanStart = () => ({
    type: TABLE_BAN_START
});

export const tableBanError = (err) => ({
    type: TABLE_BAN_ERROR,
    payload: err
});

export const tableUnbanSuccess = (data) => ({
    type: TABLE_UNBAN_SUCCESS,
    payload: data
});

export const tableUnbanStart = () => ({
    type: TABLE_UNBAN_START
});

export const tableUnbanError = (err) => ({
    type: TABLE_UNBAN_ERROR,
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

export const tableAddClanError = (err) => ({
    type: TABLE_ADD_CLAN_ERROR,
    payload: err
});

export const tableDeleteClanStart = () => ({
    type: TABLE_DELETE_CLAN_START
});

export const tableDeleteClanError = (err) => ({
    type: TABLE_DELETE_CLAN_ERROR,
    payload: err
});


export const tableDeleteClanSuccess = (data) => ({
    type: TABLE_DELETE_CLAN_SUCCESS,
    payload: data
});

export const tableSelect = (id, token) => {
    return (dispatch, getState) => {
        const previousTableId = getState().table.table?.id;

        if (previousTableId && previousTableId !== id) {
            dispatch(sendLeaveTableSignal());
        }

        dispatch(tableDetailsInitiate(token, id))
    };
};


export const tableUnset = (id = null) => {
    return (dispatch, getState) => {
        dispatch(sendLeaveTableSignal());

        dispatch({
            type: TABLE_UNSET
        });
    };
};

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
                dispatch(addError(data.reason))
            } else {
                dispatch(tableSuccess(data.data));
            }
        } catch (e) {
            dispatch(tableError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableDetailsInitiate = (token, tableId) => {
    return async dispatch => {
        dispatch(tableDetailsInitiateStart());

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/${tableId}`, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableDetailsInitiateError(data.reason));
                dispatch(addError(data.reason));
                history.push('/table');
            } else {
                dispatch(sendJoinTableSignal(tableId));
                dispatch(tableDetailsInitiateSuccess(data.data));
            }
        } catch (e) {
            dispatch(tableDetailsInitiateError(e.toString()));
            console.log(e.toString());
            history.push('/table');
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
                        'tableId': payload.tableId,
                        'name': payload.castle
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableCastleSaveError(data.reason))
                dispatch(addError(data.reason))
            } else {
                dispatch(tableCastleSaveSuccess(data.data));
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
                        'tableId': payload.tableId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableQuitError(data.reason))
                dispatch(addError(data.reason))
            } else {
                dispatch(tableQuitSuccess(data.data));
                dispatch(sendLeaveTableSignal(payload.tableId));
                dispatch(tableInitiate(token));
                history.push("/table");
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
                dispatch(addError(data.reason))
            } else {
                dispatch(tableKickSuccess(data.data));
            }
        } catch (e) {
            dispatch(tableKickError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableBanFromTable = (token, payload) => {
    return async dispatch => {
        dispatch(tableBanStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/${payload.tableId}/ban`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'ban': {
                        'tableId': payload.tableId,
                        'userId': payload.userId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableBanError(data.reason))
                dispatch(addError(data.reason))
            } else {
                dispatch(tableBanSuccess(data.data));
            }
        } catch (e) {
            dispatch(tableBanError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const tableUnbanFromTable = (token, payload) => {
    return async dispatch => {
        dispatch(tableUnbanStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/table/${payload.tableId}/unban`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'unban': {
                        'tableId': payload.tableId,
                        'userId': payload.userId
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableUnbanError(data.reason))
                dispatch(addError(data.reason))
            } else {
                dispatch(tableUnbanSuccess(data.data));
            }
        } catch (e) {
            dispatch(tableUnbanError(e.toString()));
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
                        'newRole': payload.newRole,
                        'name': payload.roleName
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(tableChangeRoleError(data.reason))
                dispatch(addError(data.reason))
            } else {
                dispatch(tableChangeRoleSuccess(data.data));
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
                dispatch(addError(data.reason))
            } else {
                dispatch(tableCreateTableSuccess(data.data));
                dispatch(addMessage(`Таблица ${payload.tableName} создана`))
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
                dispatch(addError(data.reason))
            } else {
                dispatch(tableAddClanSuccess(data.data));
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
                        'tableId': payload.tableId,
                        'name': payload.name
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(tableDeleteClanError(data.message));
            } else {
                dispatch(tableDeleteClanSuccess(data.data));
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
                dispatch(addError(data.reason))
            } else {
                dispatch(tableEnterTableSuccess(data.data.tables));
                dispatch(addMessage(`Таблица добавлена`));
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
                dispatch(addError(data.reason))
            } else {
                dispatch(tableDeleteTableSuccess(data.data));
                dispatch(addMessage(`Таблица ${payload.name} удалена`))
                dispatch(tableInitiate(token));
            }
        } catch (e) {
            dispatch(tableError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const loadTableByName = (tableNameFromUrl) => {
    return async (dispatch, getState) => {
        dispatch(tableLoadByNameStart());

        const state = getState();
        const token = state.user.token;
        let availableTables = state.table.tables;
        const currentSelectedTable = state.table.table;

        if (!token) {
            dispatch(tableLoadByNameError('Необходима авторизация для просмотра таблиц.'));
            dispatch(addError('Для просмотра таблиц необходима авторизация'));
            return;
        }

        if (!availableTables || availableTables.length === 0) {
            await dispatch(tableInitiate(token));

            const updatedState = getState();
            const reloadedTables = updatedState.table.tables;

            if (!reloadedTables || reloadedTables.length === 0) {
                dispatch(tableLoadByNameError('Список таблиц не загружен или пуст.'));
                dispatch(addError('Не удалось загрузить список таблиц. Пожалуйста, попробуйте позже'));
                return;
            }

            availableTables = reloadedTables;
        }

        const normalizedTableNameFromUrl = tableNameFromUrl.replaceAll(' ', '-').replaceAll('\\', '-').replaceAll('/', '-').toLowerCase();

        const targetTable = availableTables.find(t =>
            t.name.replaceAll(' ', '-').replaceAll('\\', '-').replaceAll('/', '-').toLowerCase() === normalizedTableNameFromUrl
        );

        if (targetTable) {
            dispatch(tableSelect(targetTable.id, token));
            dispatch(tableLoadByNameSuccess());
        } else {
            if (normalizedTableNameFromUrl !== 'enter') {
                dispatch(addError(`Таблица с именем "${tableNameFromUrl}" не найдена.`));
            }

            history.push('/table');
        }
    };
};