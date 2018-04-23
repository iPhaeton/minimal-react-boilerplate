import {combineReducers} from 'redux';
import {IAsyncReducers} from "types/redux";
import {IState, IInitialState} from "./types/states";
import homeReducer from 'components/Home/reducer';

export default function createReducer(asyncReducers: IAsyncReducers) {
    return combineReducers<IState>({
        home: homeReducer,
        ...asyncReducers,
    });
}