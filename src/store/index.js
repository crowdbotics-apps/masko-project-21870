import apiReducer from "./reducers";
// import customReducer from "./custom/reducers"
// import rootSaga from "./sagas";
import { mainSaga } from "../redux/mainSaga";
import { combinedReducers } from "../redux/mainReducer";

// import customRootSaga from "./custom/sagas"

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const sagaMiddleware = createSagaMiddleware();

/**
 * this app uses React Native Debugger, but it works without it
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware /** more middlewares if any goes here */];

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);


const persistor = persistStore(store)

sagaMiddleware.run(mainSaga);
// sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(customRootSaga);

export { store, persistor };
