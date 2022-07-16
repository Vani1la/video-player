import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import createSagaMiddleWare from "redux-saga";
import { eventsWatcher } from "./saga";

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(eventsWatcher);
