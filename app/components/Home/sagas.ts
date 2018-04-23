import {put} from "redux-saga/effects";
import {increaseCount} from "./actions";

export default function* root() {
    yield put(increaseCount());
}
