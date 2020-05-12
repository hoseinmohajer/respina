import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import RootSaga from "./sagas";
import Reducer from "./reducers";
import createSagaMiddleware from "redux-saga";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        Reducer(history),
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(RootSaga);
    return store;
}
