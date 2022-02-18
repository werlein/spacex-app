import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../api/rockets'
import { getRockets, getRocketsSuccess, Rocket } from './rocketSlice'

export function* getRocketsSaga() {
    const rockets: Rocket[] = yield call(api.getRockets)
    yield put(getRocketsSuccess(rockets))
}

export default function* watcher() {
    yield takeEvery(getRockets, getRocketsSaga)
}