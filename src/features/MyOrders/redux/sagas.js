import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';

import { NavigationActions } from "react-navigation";
import * as utils from '../utils/general';
import * as OrderMethod from 'src/api/methods/order';


import { 
  MY_ORDER_LIST_ERROR,
  MY_ORDER_LIST_REQUEST, MY_ORDER_LIST_SUCCESS,
   } from './constants';

import appConfig from "src/config/app";

import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

import ApiConstants from 'src/api/ApiConstants';
import { translate }  from 'src/utils/translation';

function* handleGetMyOrders(action) {
  const {
  accessToken, 
  from_date, 
  to_date
  } = action;
  
  try {
    const {status, data, error} = yield call( OrderMethod.getMyOrders, accessToken, from_date, to_date);

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
        yield put({
          type: MY_ORDER_LIST_SUCCESS,
          data: data
        });


      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: MY_ORDER_LIST_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: MY_ORDER_LIST_ERROR,
      error: translate('MyOrderGetError'),
    });
  }
   
  
}




export default all([
  takeLatest(MY_ORDER_LIST_REQUEST, handleGetMyOrders),
  
]);
