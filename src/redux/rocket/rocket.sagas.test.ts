import { testSaga } from 'redux-saga-test-plan';
import * as api from '../../api/rockets'
import { rocketActions } from './rocket.actions';
import { Rocket } from './rocket.reducer';
import { getRocketSaga, getRocketsSaga } from './rocket.sagas';

test('getRocketsSaga', () => {
    const rocket: Rocket[] = []
    const action = rocketActions.getRockets()
    testSaga(getRocketsSaga, action)
        .next().call(api.getRockets)
        .next(rocket).put(rocketActions.getRocketsSuccess(rocket))
        .next().isDone()
});

test('getRocketSaga', () => {
    const rocket: Rocket = {
        active: true,
        id: "dummyId",
        name: "dummy name",
        flickr_images: []
    }
    const action = rocketActions.getRocket(rocket.id)
    testSaga(getRocketSaga, action)
        .next().call(api.getRocketById, rocket.id)
        .next(rocket).put(rocketActions.getRocketSuccess(rocket))
        .next().isDone()
})