import {applyMiddleware, combineReducers, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themeReducer from "./theme/reducer";
import dollReducer from "./doll/reducer";
import itemsReducer from "./items/reducer";
import userReducer from "./user/reducer";
import {thunk} from "redux-thunk";
import langReducer from "./lang/reducer";
import tableReducer from "./table/reducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    items: itemsReducer,
    doll: dollReducer,
    lang: langReducer,
    table: tableReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);