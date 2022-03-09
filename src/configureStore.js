// import { createBrowserHistory } from "history";
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./reducers";

export const sagas = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        createRootReducer(),
        compose(
            applyMiddleware(
                sagas
            )
        )
    );
    return store;
}