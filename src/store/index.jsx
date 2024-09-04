import {applyMiddleware, combineReducers, createStore} from "redux";
import themeReducer from "./theme/reducer";
import itemsReducer from './items/reducer';
import userReducer from './user/reducer';
import dollReducer from './doll/reducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';
import tableReducer from "./table/reducer";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    theme: themeReducer,
    items: itemsReducer,
    doll: dollReducer,
    user: userReducer,
    table: tableReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store);