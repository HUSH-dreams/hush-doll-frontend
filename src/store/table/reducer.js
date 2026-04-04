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
    TABLE_DELETE_CLAN_START,
    TABLE_DELETE_CLAN_SUCCESS,
    TABLE_SELECT_FAVORITE_CASTLES,
    TABLE_CALCULATOR_ERROR_SET,
    TABLE_CALCULATOR_ERROR_UNSET,
    TABLE_LOGOUT,
    TABLE_UPDATE_CASTLE_BY_WS,
    TABLE_LOAD_BY_NAME_START,
    TABLE_LOAD_BY_NAME_SUCCESS,
    TABLE_LOAD_BY_NAME_ERROR,
    TABLE_DETAILS_INITIATE_START,
    TABLE_DETAILS_INITIATE_SUCCESS,
    TABLE_DETAILS_INITIATE_ERROR,
    TABLE_DELETE_CLAN_ERROR,
    TABLE_UPDATE_CLANS_BY_WS,
    TABLE_UPDATE_USERS_BY_WS,
    TABLE_UPDATE_BANNED_BY_WS,
    TABLE_ADD_CLAN_ERROR,
    TABLE_TOGGLE_CLAN
} from "./actions";
import { handleSelect } from '../../utils/tableUtils';

const initialState = {
    tables: [], // Список доступных таблиц
    table: null, // Полная активная таблица, включая dynamic.castles
    castles: [], // Отфильтрованный список замков для отображения в TableContainer
    castlesLvlId: 'chosen', // Текущий выбранный фильтр уровня замков
    static: [], // Статические данные, если используются
    error: null, // Общая ошибка
    loading: false, // Состояние загрузки
    clansloading: false,
    bannedLoading: false,
    usersLoading: false,
    castleSaveError: null, // Ошибка при сохранении замка
    favoriteCastles: [], // Список ID уровней избранных замков
    favoriteDate: null, // Дата последнего изменения избранных замков
    calculatorError: '', // Ошибка калькулятора
    chosenClan: ''
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TABLE_DETAILS_INITIATE_START:
            return {
                ...state,
                error: null,
                loading: true,
                table: null
            }
        case TABLE_DETAILS_INITIATE_SUCCESS:
            return {
                ...state,
                loading: false,
                table: action.payload.data
            }
        case TABLE_DETAILS_INITIATE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TABLE_CALCULATOR_ERROR_SET:
            return {
                ...state,
                calculatorError: action.payload
            };
        case TABLE_CALCULATOR_ERROR_UNSET:
            return {
                ...state,
                calculatorError: ''
            };
        case TABLE_START:
            return {
                ...state,
                tables: [],
                static: [],
                error: null,
                loading: true
            };
        case TABLE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case TABLE_SUCCESS:
            return {
                ...state,
                tables: action.payload.tables,
                static: action.payload.static,
                error: null,
                loading: false
            };
        case TABLE_QUIT_START:
            return {
                ...state,
                error: null,
                loading: true
            };
        case TABLE_QUIT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case TABLE_QUIT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                table: null,
                castlesLvlId: 'chosen'
            };
        case TABLE_DELETE_TABLE_START:
            return {
                ...state,
                error: null,
                loading: true // Добавляем loading
            };
        case TABLE_DELETE_TABLE_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                table: null,
                castles: [],
                castlesLvlId: 'chosen',
                tables: state.tables.filter(t => t.id !== action.payload.tableId) // Удаляем таблицу из списка
            };
        case TABLE_ENTER_TABLE_START:
            return {
                ...state,
                error: null,
                loading: true
            };
        case TABLE_ENTER_TABLE_SUCCESS:
            return { ...state, tables: [...action.payload]};
        case TABLE_KICK_START:
            return { ...state, error: null};
        case TABLE_CHANGE_ROLE_START:
            return { ...state, error: null};
        case TABLE_CREATE_TABLE_START:
            return { ...state, error: null, loading: true }; // Начало операции, устанавливаем loading
        case TABLE_ADD_CLAN_START:
        case TABLE_DELETE_CLAN_START:
            return { ...state, error: null, clansLoading: true }; // Начало операции, устанавливаем loading

        case TABLE_KICK_ERROR:
            return { ...state, error: action.payload};
        case TABLE_CHANGE_ROLE_ERROR:
            return { ...state, error: action.payload};
        case TABLE_CREATE_TABLE_ERROR:
            return { ...state, error: action.payload, loading: false }; // Ошибка операции, сбрасываем loading
        case TABLE_ADD_CLAN_ERROR:
        case TABLE_DELETE_CLAN_ERROR:
            return { ...state, error: action.payload, clansLoading: false }; // Ошибка операции, сбрасываем loading
        case TABLE_KICK_SUCCESS:
            return { ...state};
        case TABLE_CHANGE_ROLE_SUCCESS:
            return { ...state, error: null};
        case TABLE_CREATE_TABLE_SUCCESS:
            if (action.payload && action.payload.table) {
                const updatedTable = action.payload.table;
                const { castles: filteredCastles } = handleSelect(
                    state.castlesLvlId,
                    updatedTable.dynamic.castles,
                    state.favoriteCastles
                );
                return {
                    ...state,
                    table: updatedTable,
                    castles: filteredCastles,
                    loading: false,
                    error: null
                };
            }
            // Если action.payload содержит обновленный список таблиц (например, для TABLE_CREATE_TABLE_SUCCESS)
            if (action.payload && action.payload.tables) {
                return {
                    ...state,
                    tables: action.payload.tables,
                    loading: false,
                    error: null
                };
            }
            return { ...state, loading: false }; // В остальных случаях просто сбрасываем loading
        case TABLE_ADD_CLAN_SUCCESS:
        case TABLE_DELETE_CLAN_SUCCESS:
            if (action.payload && action.payload.table) {
                const updatedTable = action.payload.table;
                const { castles: filteredCastles } = handleSelect(
                    state.castlesLvlId,
                    updatedTable.dynamic.castles,
                    state.favoriteCastles
                );
                return {
                    ...state,
                    table: updatedTable,
                    castles: filteredCastles,
                    clansLoading: false,
                    error: null
                };
            }
            // Если action.payload содержит обновленный список таблиц (например, для TABLE_CREATE_TABLE_SUCCESS)
            if (action.payload && action.payload.tables) {
                return {
                    ...state,
                    tables: action.payload.tables,
                    clansLoading: false,
                    error: null
                };
            }
            return { ...state, clansLoading: false }; // В остальных случаях просто сбрасываем loading

        case TABLE_CASTLE_SAVE_START:
            return {
                ...state,
                error: null,
                loading: true
            };
        case TABLE_CASTLE_SAVE_ERROR:
            return {
                ...state,
                castleSaveError: action.payload,
                loading: false
            };
        case TABLE_CASTLE_SAVE_SUCCESS:
            // action.payload должен содержать _полностью обновленный объект table_
            if (action.payload && action.payload.table) {
                const updatedTable = action.payload.table;

                const { castles: filteredCastles } = handleSelect(
                    state.castlesLvlId,
                    updatedTable.dynamic.castles, // Фильтруем от полного обновленного списка
                    state.favoriteCastles
                );

                return {
                    ...state,
                    table: updatedTable, // Обновляем полную таблицу иммутабельно
                    castles: filteredCastles, // Обновляем отфильтрованные замки
                    castleSaveError: null,
                    loading: false
                };
            }
            return { ...state, loading: false }; // Если нет table в payload

        case TABLE_SELECT:
            if (action.payload && action.payload.dynamic.id) { // Проверяем, что это объект таблицы
                const newTable = action.payload;
                const defaultCastlesLvlId = 'chosen'; // При выборе новой таблицы сбрасываем фильтр

                const { castles: filteredCastles } = handleSelect(
                    defaultCastlesLvlId,
                    newTable.dynamic.castles,
                    state.favoriteCastles
                );
                return {
                    ...state,
                    table: newTable,
                    castles: filteredCastles,
                    castlesLvlId: defaultCastlesLvlId
                };
            }
            return state;

        case TABLE_UNSET:
            return {
                ...state,
                table: null
            };

        case TABLE_SELECT_FAVORITE_CASTLES: // Соответствует SET_FAVORITE_CASTLES в TableContainer
            const newFavoriteCastles = action.payload.data;
            const newFavoriteChangeDate = action.payload.date;

            let updatedCastlesForDisplay = [];

            if (state.table && state.table.dynamic && state.table.dynamic.castles) {
                const { castles: filtered } = handleSelect(
                    state.castlesLvlId,
                    state.table.dynamic.castles, // Всегда фильтруем от полного списка
                    newFavoriteCastles
                );

                updatedCastlesForDisplay = filtered;
            }

            return {
                ...state,
                favoriteCastles: newFavoriteCastles,
                favoriteDate: newFavoriteChangeDate,
                castles: updatedCastlesForDisplay
            };

        case TABLES_UNSET:
            return {
                ...initialState // Полный сброс всего состояния до начального
            };

        case TABLE_SELECT_CASTLE:
            if (state.table && state.table.dynamic && state.table.dynamic.castles) {
                const { castles: filteredCastles } = handleSelect(
                    action.payload.lvlId,
                    state.table.dynamic.castles, // Всегда фильтруем от полного списка замков
                    state.favoriteCastles
                );
                return {
                    ...state,
                    castles: filteredCastles,
                    castlesLvlId: action.payload.lvlId
                };
            }
            return state;

        case TABLE_LOGOUT:
            return {
                ...initialState
            };

        case TABLE_UPDATE_CASTLE_BY_WS:
            const wsTableId = action.payload.tableId;
            const wsCastleId = action.payload.data.castleData.id;
            const wsCastleData = action.payload.data.castleData;

            if (!state.table || state.table.dynamic.id !== wsTableId) {
                return state;
            }

            const updatedDynamicCastles = state.table.dynamic.castles.map(castle =>
                castle.id === Number(wsCastleId) ? { ...castle, ...wsCastleData } : castle
            );

            const targetCastle = state.table.dynamic.castles.find(c => c.id === wsCastleId);

            const newDynamic = {
                ...state.table.dynamic,
                castles: updatedDynamicCastles
            };

            const newTable = {
                ...state.table,
                dynamic: newDynamic
            };

            const { castles: updatedDisplayedCastles } = handleSelect(
                state.castlesLvlId,
                newTable.dynamic.castles,
                state.favoriteCastles
            );

            return {
                ...state,
                table: newTable,
                castles: updatedDisplayedCastles
            };
        case TABLE_UPDATE_CLANS_BY_WS:
            const wsTableIdClans = action.payload.tableId;
            const wsTableClans = action.payload.data.clansData;


            if (!state.table || state.table.dynamic.id !== wsTableIdClans) {
                return state;
            }

            return {
                ...state,
                table: {
                    ...state.table,
                    clans: [...wsTableClans]
                }
            }
        case TABLE_UPDATE_USERS_BY_WS:
            const wsTableIdUsers = action.payload.tableId;
            const wsUsers = action.payload.data.usersData;

            if (!state.table || state.table.dynamic.id !== wsTableIdUsers) {
                return state;
            }

            return {
                ...state,
                table: {
                    ...state.table,
                    users: [...wsUsers]
                }
            }
        case TABLE_UPDATE_BANNED_BY_WS:
            const wsTableIdBanned = action.payload.tableId;
            const wsUsersBanned = action.payload.data.usersData;
            const wsBanned = action.payload.data.bannedData;

            if (!state.table || state.table.dynamic.id !== wsTableIdBanned) {
                return state;
            }

            return {
                ...state,
                table: {
                    ...state.table,
                    users: !!wsUsersBanned ? [...wsUsersBanned] : null,
                    banned: !!wsBanned ? [...wsBanned] : null
                }
            }
        case TABLE_LOAD_BY_NAME_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TABLE_LOAD_BY_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case TABLE_LOAD_BY_NAME_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case TABLE_TOGGLE_CLAN:
            return {
                ...state,
                chosenClan: action.payload === state.chosenClan ? '' : action.payload
            }
        default:
            return state;
    }
};

export default tableReducer;