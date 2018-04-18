import {Store, Reducer} from 'redux';
import {IState} from "./states";

export interface IAsyncReducers {
    [key: string]: Reducer<IState>;
}

export interface IStore extends Store<IState> {
    asyncReducers: IAsyncReducers;
    runSaga?: (saga: any)=>void; //todo: get rid of any
}
