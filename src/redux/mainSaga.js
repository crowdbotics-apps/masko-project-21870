import { all, takeEvery, take } from "redux-saga/effects";


import SignUpSaga from '../features/SignUp/redux/sagas';
import SignInSaga from '../features/SignIn/redux/sagas';
import ForgetPasswordSaga from '../features/ForgetPassword/redux/sagas';

//@BlueprintReduxSagaImportInsertion

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here
    SignUpSaga,
    SignInSaga,
    ForgetPasswordSaga

    //@BlueprintReduxSagaMainInsertion
    
  ]);
}