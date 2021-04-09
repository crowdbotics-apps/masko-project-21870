import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';

const initialState = {
  services: [],
  categories: [],
  errors: { GetService: null, GetCategories: null},
  loaders: { GetService: null, GetCategories: null }
};

export default ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SERVICE_CATEGORY_GET_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          GetCategories: null
        },
        loaders: {
          ...state.loaders,
          GetCategories: true

        }

      };
    case actions.SERVICE_CATEGORY_GET_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        errors: {
          ...state.errors,
          GetCategories: null
        },
        loaders: {
          ...state.loaders,
          GetCategories: null

        }
      };
    case actions.SERVICE_CATEGORY_GET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          GetCategories: action.error
        },
        loaders: {
          ...state.loaders,
          GetCategories: null

        }
      };
    
    case actions.SERVICE_GET_REQUEST:
        return {
          ...state,
          services: [],
          errors: {
            ...state.errors,
            GetService: null
          },
          loaders: {
            ...state.loaders,
            GetService: true
  
          }
  
        };
    case actions.SERVICE_GET_SUCCESS:
        return {
          ...state,
          services: action.services,
          errors: {
            ...state.errors,
            GetService: null
          },
          loaders: {
            ...state.loaders,
            GetService: null
  
          }
        };
    case actions.SERVICE_CATEGORY_GET_ERROR:
        return {
          ...state,
          errors: {
            ...state.errors,
            GetService: action.error
          },
          loaders: {
            ...state.loaders,
            GetService: null
  
          }
        };
  
    

    case AuthActions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};