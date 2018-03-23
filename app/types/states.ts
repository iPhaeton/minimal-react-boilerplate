export interface IAboutState {
    count: number;
}

export interface IInitialState {
    count: number;
}

export interface IState {
    home: IInitialState;
    about?: IAboutState;
}