import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider, useSelector} from "react-redux";
import {store, persistor} from "../store/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import Layout from "./Layout";
import Home from "./Home";
import DollPage from "./DollPage";
import TablePage from "./TablePage";
import '../styles/main.css'
import Chat from "./Chat";
import RecipesPage from "./RecipesPage";
import HomePage from "./HomePage";
import MapPage from "./MapPage";
import StatsPage from "./StatsPage";
import UtilsPage from "./UtilsPage";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes>
                    <Route path='/' element={<Layout/>} >
                        <Route index element={<HomePage/>} />
                        <Route path='/doll' element={<DollPage/>} >
                            <Route path='/doll/:string' element={<DollPage/>} />
                            <Route path='/doll/my/:myName' element={<DollPage/>} />
                            <Route path='/doll/shared/:otherName' element={<DollPage/>} />
                            <Route path='/doll/default/:defaultName' element={<DollPage/>} />
                        </Route>
                        <Route path='/table' element={<TablePage/>}>
                            <Route path='/table/:tableName' element={<TablePage/>}/>
                            <Route path='/table/:tableName/:shareString' element={<TablePage/>}/>
                        </Route>
                        <Route path='/stats' element={<StatsPage/>}>
                            <Route path='/stats/:day' element={<StatsPage />}/>
                        </Route>
                        <Route path='/utils' element={<UtilsPage/>}>
                            <Route path='/utils/:util' element={<UtilsPage />}/>
                        </Route>
                        <Route path='/recipes' element={<RecipesPage />}/>
                        <Route path='/maps' element={<MapPage />}/>
                        <Route path='*' element={<HomePage />} />
                    </Route>
                </Routes>
            </PersistGate>
        </Provider>
    );
}

export default App;
