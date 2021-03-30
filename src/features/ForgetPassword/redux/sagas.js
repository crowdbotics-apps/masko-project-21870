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
import {request} from '../../../utils/http';


import appConfig from "../../../config/app";
import { showSuccessAlert, showErrorAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

function sendPasswordRecovery(email) {
 
  let url = appConfig.emailAuthAPIEndPoint+'/rest-auth/password/reset/';
  let body = {
      email
    };
  return fetch(url, { 
    method: 'post', 
    body: JSON.stringify(body),
    headers: {
      'Content-Type': appConfig.contentType.json
    }
  }).then((response) => {
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


// function sendLogin({email, password}) {
//   return request.post('/api/v1/login/', {
//     username: email,
//     password,
//   });
// }

// function sendSignUp({email, password}) {
//   return request.post('/api/v1/signup/', {
//     email,
//     password,
//   });
// }



// function* handleLogin(action) {
//   const {
//     user: {email, password},
//   } = action;
//   try {
//     const {status, data} = yield call(sendLogin, {email, password});

//     if (status === 200) {
//       yield put({
//         type: EMAIL_AUTH_LOGIN_SUCCESS,
//         accessToken: data.token,
//       });

//       // you can change the navigate for navigateAndResetStack to go to a protected route
//       //NavigationService.navigate('ProtectedRoute');
//     } else {
//       yield put({
//         type: EMAIL_AUTH_LOGIN_ERROR,
//         error: 'Unknown Error',
//       });
//     }
//   } catch (error) {
//     // todo add errors with similar structure in backend
//     yield put({
//       type: EMAIL_AUTH_LOGIN_ERROR,
//       error: "Can't sign in with provided credentials",
//     });
//   }
// }

// function* handleSignUp(action) {
//   const {
//     user: {email, password},
//   } = action;
//   try {
//     const {status, data} = yield call(sendSignUp, {email, password});

//     if (status === 201) {
//       yield put({
//         type: EMAIL_AUTH_SIGNUP_SUCCESS,
//         user: data.user,
//       });

//       // you can change the navigate for navigateAndResetStack to go to a protected route
//       //NavigationService.navigate('ConfirmationRequired');
//     } else {
//       yield put({
//         type: EMAIL_AUTH_SIGNUP_ERROR,
//         error: 'Unknown Error',
//       });
//     }
//   } catch (error) {
//     // todo add errors with similar structure in backend
//     yield put({
//       type: EMAIL_AUTH_SIGNUP_ERROR,
//       error: "Can't sign up with provided credentials",
//     });
//   }
// }

function* handlePasswordRecovery(action) {
  const {email} = action;

  try {
    const {status, data, error} = yield call(sendPasswordRecovery, email);

    if (status === 200) {
      yield put({
        type: EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
        email,
      });
      setTimeout(()=>{
        showSuccessAlert("Password Reset Request has been sent!")
    },500);
      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate('SignIn4');

    } else {
      yield put({
        type: EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
        error: compileErrorMessage(error,data),
      });
        setTimeout(()=>{
          showErrorAlert(compileErrorMessage(error,data))
      },500);
    }
  } catch (error) {
    yield put({
      type: EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
      error: "Can't recover password with provided email",
    });
  }
}

export default all([
  // takeLatest(EMAIL_AUTH_LOGIN_REQUEST, handleLogin),
  // takeLatest(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp),
  takeLatest(EMAIL_AUTH_PASSWORD_RECOVER_REQUEST, handlePasswordRecovery),
]);
