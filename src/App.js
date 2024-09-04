import {Route, Routes} from 'react-router-dom';

import {Provider} from "react-redux";
import {store, persistor} from "./store/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <Routes>
                  <Route path='/' element={<Layout/>} >
                      <Route index element={<Home/>} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/register' element={<Register />} />
                  </Route>
              </Routes>
          </PersistGate>
      </Provider>
  );
}

export default App;
