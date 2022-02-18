import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../api/rockets'
import { rocketActions } from './rocket.actions'
import { Rocket } from './rocket.reducer'


export function* getRocketsSaga() {
    const rockets: Rocket[] = yield call(api.getRockets)
    yield put(rocketActions.getRocketsSuccess(rockets))
}

export function* getRocketByIdSaga() {}

export default function* watcher() {
    yield takeEvery(rocketActions.getRockets, getRocketsSaga)
}