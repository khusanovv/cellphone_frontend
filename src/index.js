import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import "./language/i18next";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './context/reducers';
import storage from 'redux-persist/lib/storage'
import Spinner from "./components/spinner/Spinner";
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  // blacklist: ["userAuthReducer"],
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
const App = React.lazy(() => import("./App"));

const store = createStore(persistedReducer);
let persistor = persistStore(store)


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
