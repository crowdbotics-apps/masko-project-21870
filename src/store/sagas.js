import {put, call, all, spawn, takeEvery} from 'redux-saga/effects';
import {apiService} from './services';
import * as types from './constants';

import SignUpSaga from '../features/EmailAuth/redux/sagas';

export default function* rootSaga() {
  const sagas = [
    // SignUpSaga
    // Example watcher
    // getBalanceWatcher
  ];
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
