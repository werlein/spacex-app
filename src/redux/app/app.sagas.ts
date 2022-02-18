import { all } from "redux-saga/effects";
import rocketSagas from "../rocket/rocket.sagas";

export default function* rootSaga() {
    yield all([
        rocketSagas()
    ])
}