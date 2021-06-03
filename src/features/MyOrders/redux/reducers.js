import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';
import * as utils from '../utils/general';
import * as _ from 'lodash';



const initialState = {
  orders: [],
  errors: { 
           ListMyOrder: null,
           
          },
  loaders: { 
            ListMyOrder: null,
          }
};

export default MyOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MY_ORDER_LIST_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ListMyOrder: null
        },
        loaders: {
          ...state.loaders,
          ListMyOrder: true

        }

      };
    case actions.MY_ORDER_LIST_SUCCESS:
      return {
        ...state,
        orders:  action.data,
        errors: {
          ...state.errors,
          ListMyOrder: null
        },
        loaders: {
          ...state.loaders,
          ListMyOrder: null

        }
      };
    case actions.MY_ORDER_LIST_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ListMyOrder: action.error
        },
        loaders: {
          ...state.loaders,
          ListMyOrder: null

        }
      };
  
    case AuthActions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return {
        ...state,
      };
  }
};