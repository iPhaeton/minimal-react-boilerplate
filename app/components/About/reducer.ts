import {IAboutState} from "types/states";
import {INCREASE_COUNT} from "./constants";

const defaultState = {
    count: 0
}

export default function (state: IAboutState = defaultState, action: any) {
    switch (action.type) {
        case INCREASE_COUNT:
            return {
                count: state.count + 1,
            }
        default:
            return state;
    }
}