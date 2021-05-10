import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';

import { NavigationActions } from "react-navigation";
import * as utils from '../utils/general';
import * as OrderMethod from 'src/api/methods/order';


import { 
  CHECKOUT_CART_ADD_ITEM_REQUEST,
  CHECKOUT_CART_ADD_ITEM_SUCCESS,
  CHECKOUT_CART_UPDATE_ITEM_REQUEST,
  CHECKOUT_CART_UPDATE_ITEM_SUCCESS,
  CHECKOUT_ORDER_ADD_ERROR,
  CHECKOUT_ORDER_ADD_REQUEST,
  CHECKOUT_ORDER_ADD_SUCCESS,
   } from './constants';

import appConfig from "src/config/app";

import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

import ApiConstants from 'src/api/ApiConstants';
import { translate }  from 'src/utils/translation';

function* handleAddItemToCart(action) {
  const {
    cartType,
    item,
    pets,
    userSelection
  } = action;
  
        yield put({
          type: CHECKOUT_CART_ADD_ITEM_SUCCESS,
          data: utils.formatCartItem( cartType, item, pets, userSelection )
        });

        NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.MyCart );
   
  
}


function* handleUpdateItemToCart(action) {
  const {
    item,
    pet,
    quantity
  } = action;
  
        yield put({
          type: CHECKOUT_CART_UPDATE_ITEM_SUCCESS,
          item,
          pet,
          quantity
        });
   
  
}

function* handleAddOrder(action) {
  const {
    accessToken,
    cart,
    payMethod
  } = action;
  try {
    const {status, data, error} = yield call( OrderMethod.addOrder, accessToken, cart, payMethod );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_CREATED ) {
        yield put({
          type: CHECKOUT_ORDER_ADD_SUCCESS
        });

        
        setTimeout(()=>{
            showSuccessAlert( translate('OrderCreateSuccess') )
        },500);
        // NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.Home );
        NavigationService.navigate(
          'UserAccount', 
          {}, 
          NavigationActions.navigate({ 
              routeName: appConfig.NAVIGATOR_ROUTE.Home
          })
        )

      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: CHECKOUT_ORDER_ADD_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: CHECKOUT_ORDER_ADD_ERROR,
      error: translate('AddOrderError'),
    });
  }
}


export default all([
  takeLatest(CHECKOUT_CART_ADD_ITEM_REQUEST, handleAddItemToCart),
  takeLatest(CHECKOUT_CART_UPDATE_ITEM_REQUEST, handleUpdateItemToCart),
  takeLatest(CHECKOUT_ORDER_ADD_REQUEST, handleAddOrder),
  
]);
