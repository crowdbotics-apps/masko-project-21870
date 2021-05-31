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
  EMAIL_AUTH_SET_USER_REQUEST,
  EMAIL_AUTH_SET_USER_SUCCESS,
} from './constants';


import * as UserActions from '../../../features/UserAccount/redux/actions';
import * as ServiceActions from '../../../features/Services/redux/actions';
import appConfig from "src/config/app";
import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

import { translate }  from 'src/utils/translation';
import ApiConstants from 'src/api/ApiConstants';
import loginUser from 'src/api/methods/loginUser';
import signUpUser from 'src/api/methods/signUpUser';
import * as UserPasswordMethods from 'src/api/methods/forgetPassword';

function* handleSignUp(action) {
  const {
    user: {email, password, name},
  } = action;
  try {
    const {status, data, error} = yield call(signUpUser, {email, password, name});

      if (status === ApiConstants.STATUS_CODES.SUCCESS_CREATED ) {
        yield put({
          type: EMAIL_AUTH_SIGNUP_SUCCESS,
          user: data,
        });
        setTimeout(()=>{
            showSuccessAlert(translate('SignUpSuccessMsg'))
        },500);
        NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.SignIn );

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
      error: translate('SignUpErrorMsg'),
    });
  }
}

function* handleLogin(action) {
  const {
    user: {email, password},
  } = action;
  try {
    const {status, data, error} = yield call(loginUser, email, password );

    if (status === ApiConstants.STATUS_CODES.SUCCESS_OK) {

      // Take User Pets Data   
      yield put( UserActions.getPets(data.token) );

      // Take Pet Type Data   
      yield put( UserActions.getPetType(data.token) );

      // Take Breed Type Data   
      yield put( UserActions.getBreedType(data.token) );

      // Take Service Categories Data
      yield put( ServiceActions.getServiceCategories(data.token) );
      
      // Take User UNDS Data
      yield put( UserActions.getCd(data.token) );
      

      // // Take Services Data
      // yield put( ServiceActions.getServices(data.token) );


      yield put({
        type: EMAIL_AUTH_LOGIN_SUCCESS,
        accessToken: data.token,
        user: data.user
      });


     
      NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.UserAccount );
      // NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.UserAccount, 
      //   {}, 
      //   NavigationActions.navigate({ 
      //       routeName: 'Home' 
      //   })
      // );
    } else {
      yield put({
        type: EMAIL_AUTH_LOGIN_ERROR,
        error: compileErrorMessage(error,data),
      });
      setTimeout(()=>{
        showErrorAlert(compileErrorMessage(error,data))
    },500);

    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: EMAIL_AUTH_LOGIN_ERROR,
      error: translate('LoginErrorDefault'),
    });
  }
}

function* handlePasswordRecovery(action) {
  const { email } = action;

  try {
    const {status, data, error} = yield call( UserPasswordMethods.forgetPassword, email );

    if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
      yield put({
        type: EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
        email,
      });
      setTimeout(()=>{
          showSuccessAlert(translate('PwdResetSuccessMsg'))
      },500);
     
      NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.SignIn );

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
      error: translate('PwdResetErrorMsg'),
    });
  }
}

function* handleUserSet(action) {
  const { user } = action;
  yield put({
        type: EMAIL_AUTH_SET_USER_SUCCESS,
        user,
      });
  
}

export default all([
  takeLatest(EMAIL_AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp),
  takeLatest(EMAIL_AUTH_PASSWORD_RECOVER_REQUEST, handlePasswordRecovery),
  takeLatest(EMAIL_AUTH_SET_USER_REQUEST, handleUserSet),
  
]);
