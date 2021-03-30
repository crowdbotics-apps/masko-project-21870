import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';

import {
  EMAIL_AUTH_LOGIN_REQUEST,
  EMAIL_AUTH_LOGIN_ERROR,
  EMAIL_AUTH_SIGNUP_REQUEST,
  EMAIL_AUTH_PASSWORD_RECOVER_REQUEST,
  EMAIL_AUTH_LOGIN_SUCCESS,
  EMAIL_AUTH_SIGNUP_ERROR,
  EMAIL_AUTH_SIGNUP_SUCCESS,
  EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
  EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
} from './constants';
import { request } from '../../../utils/http';

import appConfig from "../../../config/app";
import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';
import app from '../../../config/app';


function sendSignUp({email, password, name}) {

  let url = appConfig.emailAuthAPIEndPoint+'/api/v1/signup/';
  let body = {
      name,
      email,
      username: email,
      password,
    };
  return fetch(url, { 
    method: 'post', 
    body: JSON.stringify(body),
    headers: {
      'Content-Type': appConfig.contentType.json
    }
  }, ).then((response) => {
    const statusCode = response.status;
    const data =
      statusCode != 204
        ? response.json()
        : {};
    return Promise.all([statusCode, data]);
  })
  .then((response) => {
    return { status: response[0], data: response[1], error: response[1] };
    
  })
  .catch(error => {
    return {status: 400, data: error, error: error};
  });
}

function sendPasswordRecovery(email) {
  //There is no reset password endpoint in backend, it's just a fake url
  return request.post('/api/v1/password-reset/', {
    email,
  });
}

function* handleSignUp(action) {
  const {
    user: {email, password, name},
  } = action;
  try {
    const {status, data, error} = yield call(sendSignUp, {email, password, name});

      if (status === 201) {
        yield put({
          type: EMAIL_AUTH_SIGNUP_SUCCESS,
          user: data,
        });
        setTimeout(()=>{
            showSuccessAlert("Your account has been created successfully!")
        },500);
        NavigationService.navigate('SignIn4');

      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: EMAIL_AUTH_SIGNUP_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: EMAIL_AUTH_SIGNUP_ERROR,
      error: "Can't sign up with provided credentials",
    });
  }
}

// function* handlePasswordRecovery(action) {
//   const {email} = action;

//   try {
//     const {status} = yield call(sendPasswordRecovery, email);

//     if (status === 200) {
//       yield put({
//         type: EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
//         email,
//       });

//       // you can change the navigate for navigateAndResetStack to go to a protected route
//       NavigationService.navigate('ConfirmationRequired');
//     } else {
//       yield put({
//         type: EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
//         error: 'Unknown Error',
//       });
//     }
//   } catch (error) {
//     yield put({
//       type: EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
//       error: "Can't recover password with provided email",
//     });
//   }
// }

export default all([
  takeLatest(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp),
  
]);
