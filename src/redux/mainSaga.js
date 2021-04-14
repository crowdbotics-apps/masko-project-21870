import { all, takeEvery, take } from "redux-saga/effects";


import EmailAuthSaga from 'src/features/EmailAuth/redux/sagas';
import UserAccountSaga from 'src/features/UserAccount/redux/sagas';
import ServiceSaga from 'src/features/Services/redux/sagas';

//@BlueprintReduxSagaImportInsertion

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here
    EmailAuthSaga,
    UserAccountSaga,
    ServiceSaga
    //@BlueprintReduxSagaMainInsertion
    
  ]);
}