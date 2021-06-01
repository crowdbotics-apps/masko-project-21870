import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';
import * as utils from '../utils/general';
import * as _ from 'lodash';



const initialState = {
  orders: [],
  errors: { 
           ListRecurOrder: null,
           CancelRecurOrder: null
           
          },
  loaders: { 
            ListRecurOrder: null,
            CancelRecurOrder: null
          }
};

export default RecurringOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECURRING_ORDER_LIST_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ListRecurOrder: null
        },
        loaders: {
          ...state.loaders,
          ListRecurOrder: true

        }

      };
    case actions.RECURRING_ORDER_LIST_SUCCESS:
      return {
        ...state,
        orders:  action.data,
        errors: {
          ...state.errors,
          ListRecurOrder: null
        },
        loaders: {
          ...state.loaders,
          ListRecurOrder: null

        }
      };
    case actions.RECURRING_ORDER_LIST_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ListRecurOrder: action.error
        },
        loaders: {
          ...state.loaders,
          ListRecurOrder: null

        }
      };
  
    case actions.RECURRING_ORDER_CANCEL_REQUEST:
        return {
          ...state,
          errors: {
            ...state.errors,
            CancelRecurOrder: null
          },
          loaders: {
            ...state.loaders,
            CancelRecurOrder: true
  
          }
  
        };
    case actions.RECURRING_ORDER_CANCEL_SUCCESS:
        return {
          ...state,
          orders:  utils.updateCancelSubscription( state.orders, action.data, true),
          errors: {
            ...state.errors,
            CancelRecurOrder: null
          },
          loaders: {
            ...state.loaders,
            CancelRecurOrder: null
  
          }
        };
    case actions.RECURRING_ORDER_CANCEL_ERROR:
        return {
          ...state,
          errors: {
            ...state.errors,
            CancelRecurOrder: action.error
          },
          loaders: {
            ...state.loaders,
            CancelRecurOrder: null
  
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