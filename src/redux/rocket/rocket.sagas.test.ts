import { testSaga } from 'redux-saga-test-plan';
import * as api from '../../api/rockets'
import { rocketActions } from './rocket.actions';
import { Rocket } from './rocket.reducer';
import { getRocketsSaga } from './rocket.sagas';

test('exact order with redux-saga-test-plan', () => {
    const rocket: Rocket[] = []
    const action = rocketActions.getRockets()
    testSaga(getRocketsSaga, action)
        .next().call(api.getRockets)
        .next(rocket).put(rocketActions.getRocketsSuccess(rocket))
        .next().isDone()
});