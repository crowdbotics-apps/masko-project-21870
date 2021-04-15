import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';
import * as utils from '../utils/general';

import { 
   SERVICE_CATEGORY_GET_ERROR,
   SERVICE_CATEGORY_GET_REQUEST,
   SERVICE_CATEGORY_GET_SUCCESS,
   SERVICE_GET_ERROR,
   SERVICE_GET_REQUEST,
   SERVICE_GET_SUCCESS
   } from './constants';

import appConfig from "src/config/app";

import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

import { translate }  from 'src/utils/translation';
import ApiConstants from 'src/api/ApiConstants';
import getServices from 'src/api/methods/service';
import getServiceCategories from 'src/api/methods/serviceCategory';


function* handleGetServices(action) {
  const {
    accessToken,
    category,
    keyword
  } = action;
  try {
    const {status, data, error} = yield call( getServices, accessToken,category,keyword );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
        yield put({
          type: SERVICE_GET_SUCCESS,
          services: utils.formatServices(data),
        });
       
      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: SERVICE_GET_ERROR,
          error: msg,
        });
      
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: SERVICE_GET_ERROR,
      error: translate('ServiceGetErrorMsg'),
    });
  }
}

function* handleGetServiceCategories(action) {
  const {
    accessToken
  } = action;
  try {
    const {status, data, error} = yield call( getServiceCategories, accessToken );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
        yield put({
          type: SERVICE_CATEGORY_GET_SUCCESS,
          categories: utils.formatServiceCategories(data),
        });
       
      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: SERVICE_CATEGORY_GET_ERROR,
          error: msg,
        });
      
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: SERVICE_CATEGORY_GET_ERROR,
      error: translate('ServiceCategoriesGetErrorMsg'),
    });
  }
}


export default all([
  takeLatest(SERVICE_CATEGORY_GET_REQUEST, handleGetServiceCategories),
  takeLatest(SERVICE_GET_REQUEST, handleGetServices),
  
]);
