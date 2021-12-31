import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import {persistStore} from 'redux-persist';
import thunk from "redux-thunk";

import createSagaMiddleware from "@redux-saga/core";
import { fetchCollectionsStart } from "./shop/shop.saga";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

/* 
in store.js
   1. start store.js import {persistStore}
   2. export const persistor = persistStore(store)   

in root-reducer.js
    import {persistReducer}, import storage
    const persistConfig - create a new key 'root' with whitelist
    export default persistReducer(persistConfig, rootReducer);

in index.js
    import {store, persistor} from "./redux/store";
    import {PersistGate} from 'redux-persist/integration/react';

    <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
*/