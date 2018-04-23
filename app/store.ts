import {createStore, compose, applyMiddleware, Store, Reducer} from 'redux';
import createReducer from './reducer';
import freeze from 'redux-freeze';
import {IStore} from "types/redux";
import {IState} from "./types/states";
import createSagaMiddleware from 'redux-saga';

declare const window: Window & {
    devToolsExtension: any,
};

const devtools = window.devToolsExtension || (() => (noop: any) => noop);
const sagaMiddleware = createSagaMiddleware();

export default function configureStore (initialState = {home: {count: 0}}) {
    const middlewares = [
        sagaMiddleware
    ];

    if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
        middlewares.push(freeze)
    }

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools(),
    ]

    const store: IStore = {
        ...createStore<IState>(
            createReducer({}),
            initialState,
            compose(...enhancers),
        ),
        asyncReducers: {},
    }

    store.runSaga = sagaMiddleware.run;

    return store;
}