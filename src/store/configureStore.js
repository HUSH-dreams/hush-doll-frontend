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
import errorReducer from "./error/reducer";
import websocketReducer from "./websocket/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import recipeReducer from "./recipe/reducer";
import {initWebSocketManager} from "../websocket/WebSocketManager";
import migrations, {createMigrate} from "./migrations";
import mapReducer from "./map/reducer";
import statsReducer from "./stats/reducer";
import rightDollReducer from "./rightDoll/reducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    items: itemsReducer,
    doll: dollReducer,
    lang: langReducer,
    table: tableReducer,
    error: errorReducer,
    websocket: websocketReducer,
    recipes: recipeReducer,
    map: mapReducer,
    stats: statsReducer,
    rightDoll: rightDollReducer
})

const persistConfig = {
    key: 'root',
    storage,
    version: 5,
    migrate: createMigrate(migrations, {debug: true})
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

initWebSocketManager(store);

export const persistor = persistStore(store);