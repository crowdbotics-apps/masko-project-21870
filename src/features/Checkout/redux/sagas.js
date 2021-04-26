import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';
import * as utils from '../utils/general';

import { 
  CHECKOUT_CART_ADD_ITEM_REQUEST,
  CHECKOUT_CART_ADD_ITEM_SUCCESS,
  CHECKOUT_CART_UPDATE_ITEM_REQUEST,
  CHECKOUT_CART_UPDATE_ITEM_SUCCESS,
   } from './constants';

import appConfig from "src/config/app";

import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

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


export default all([
  takeLatest(CHECKOUT_CART_ADD_ITEM_REQUEST, handleAddItemToCart),
  takeLatest(CHECKOUT_CART_UPDATE_ITEM_REQUEST, handleUpdateItemToCart),
  
]);
