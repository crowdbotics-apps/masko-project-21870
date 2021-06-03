import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';

import { NavigationActions } from "react-navigation";
import * as utils from '../utils/general';
import * as OrderMethod from 'src/api/methods/order';


import { 
  RECURRING_ORDER_CANCEL_ERROR,
  RECURRING_ORDER_CANCEL_REQUEST,
  RECURRING_ORDER_CANCEL_SUCCESS,
  RECURRING_ORDER_LIST_ERROR,
  RECURRING_ORDER_LIST_REQUEST, RECURRING_ORDER_LIST_SUCCESS,
   } from './constants';

import appConfig from "src/config/app";

import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

import ApiConstants from 'src/api/ApiConstants';
import { translate }  from 'src/utils/translation';

function* handleGetRecurringOrders(action) {
  const {
  accessToken, 
  from_date, 
  to_date
  } = action;
  
  try {
    const {status, data, error} = yield call( OrderMethod.getRecurringOrders, accessToken, from_date, to_date);

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
        yield put({
          type: RECURRING_ORDER_LIST_SUCCESS,
          data: data
        });


      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: RECURRING_ORDER_LIST_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: RECURRING_ORDER_LIST_ERROR,
      error: translate('RecurringOrderGetError'),
    });
  }
   
  
}

function* handleCancelSubscription(action) {
  const {
  accessToken, 
  order, 
  } = action;
  
  try {
    const {status, data, error} = yield call( OrderMethod.cancelSubscription, accessToken, order);

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
        yield put({
          type: RECURRING_ORDER_CANCEL_SUCCESS,
          data: order
        });
        setTimeout(()=>{
          showSuccessAlert(translate('SubscriptionCancelSuccessMsg'))
       },500);

       NavigationService.goBack();


      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: RECURRING_ORDER_CANCEL_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: RECURRING_ORDER_CANCEL_ERROR,
      error: translate('RecurringOrderCancelError'),
    });
  }
   
  
}




export default all([
  takeLatest(RECURRING_ORDER_LIST_REQUEST, handleGetRecurringOrders),
  takeLatest(RECURRING_ORDER_CANCEL_REQUEST, handleCancelSubscription),
  
]);
