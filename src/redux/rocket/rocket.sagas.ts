import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../api/rockets'
import { rocketActions } from './rocket.actions'
import { Rocket } from './rocket.reducer'

export function* getRocketsSaga(action: ReturnType<typeof rocketActions.getRockets>) {
    const rockets: Rocket[] = yield call(api.getRockets)
    yield put(rocketActions.getRocketsSuccess(rockets))
}

export function* getRocketSaga(action: ReturnType<typeof rocketActions.getRocket>) {
    const rocket: Rocket = yield call(api.getRocketById, action.payload)
    yield put(rocketActions.getRocketSuccess(rocket))
}

export default function* watcher() {
    yield takeEvery(rocketActions.getRockets, getRocketsSaga)
    yield takeEvery(rocketActions.getRocket, getRocketSaga)
}