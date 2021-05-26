import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';
import * as utils from '../utils/general';
import * as _ from 'lodash';



const initialState = {
  orders: [],
  errors: { 
           ListRecurOrder: null,
           
          },
  loaders: { 
            ListRecurOrder: null,
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
  
    case AuthActions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return {
        ...state,
      };
  }
};