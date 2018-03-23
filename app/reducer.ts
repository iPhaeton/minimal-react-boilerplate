import {combineReducers} from 'redux';
import {IAsyncReducers} from "types/redux";
import {IState, IInitialState} from "./types/states";

export default function createReducer(asyncReducers: IAsyncReducers) {
    return combineReducers<IState>({
        home: (state: IInitialState) => state || {count: 0},
        ...asyncReducers,
    });
}