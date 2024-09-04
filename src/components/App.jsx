import {Route, Routes} from 'react-router-dom';

import {Provider} from "react-redux";
import {store, persistor} from "../store/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import Layout from "./Layout";
import Home from "./Home";
import DollSiteContainer from "./DollSiteContainer";
import TableSiteContainer from "./TableSiteContainer";
import EmailTest from "./EmailTest";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes>
                    <Route path='/' element={<Layout/>} >
                        <Route index element={<DollSiteContainer/>} />
                        <Route path='/doll' element={<DollSiteContainer/>} >
                            <Route path='/doll/:string' element={<DollSiteContainer/>} />
                        </Route>
                        <Route path='/table' element={<TableSiteContainer/>}>
                            <Route path='/table/:tableName' element={<TableSiteContainer/>}/>
                            <Route path='/table/:tableName/:shareString' element={<TableSiteContainer/>}/>
                        </Route>
                        <Route path='/test' element={<EmailTest />} />
                        <Route path='*' element={<Home />} />
                    </Route>
                </Routes>
            </PersistGate>
        </Provider>
    );
}

export default App;
