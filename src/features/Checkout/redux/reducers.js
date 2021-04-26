import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';
import * as utils from '../utils/general';
import * as _ from 'lodash';

import { CartModel } from '../models';

let tempCart = new CartModel();

const initialState = {
  cart: tempCart,
  errors: { AddItemToCart: null, UpdateItemToCart: null, GetCategories: null},
  loaders: { AddItemToCart: null, UpdateItemToCart: null,  GetCategories: null }
};

export default CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHECKOUT_CART_ADD_ITEM_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          AddItemToCart: null
        },
        loaders: {
          ...state.loaders,
          AddItemToCart: true

        }

      };
    case actions.CHECKOUT_CART_ADD_ITEM_SUCCESS:
      return {
        ...state,
        cart: utils.updateCartObject( state.cart, action.data),
        errors: {
          ...state.errors,
          AddItemToCart: null
        },
        loaders: {
          ...state.loaders,
          AddItemToCart: null

        }
      };
    case actions.CHECKOUT_CART_ADD_ITEM_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          AddItemToCart: action.error
        },
        loaders: {
          ...state.loaders,
          AddItemToCart: null

        }
      };
      case actions.CHECKOUT_CART_UPDATE_ITEM_REQUEST:
        return {
          ...state,
          errors: {
            ...state.errors,
            UpdateItemToCart: null
          },
          loaders: {
            ...state.loaders,
            UpdateItemToCart: true
  
          }
        };  
  
    case actions.CHECKOUT_CART_UPDATE_ITEM_SUCCESS:
        return {
          ...state,
          cart: utils.updateCartItemQty( state.cart, action ),
          errors: {
            ...state.errors,
            UpdateItemToCart: null
          },
          loaders: {
            ...state.loaders,
            UpdateItemToCart: null
  
          }
        };  

    case AuthActions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};