import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';
import * as utils from '../utils/general';

const initialState = {
  services: [],
  products: [],
  categories: [],
  errors: { GetService: null, GetProducts: null, GetCategories: null},
  loaders: { GetService: null, GetProducts: null,  GetCategories: null }
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
    case actions.SERVICE_GET_ERROR:
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
  
    case actions.SERVICE_PRODUCT_GET_REQUEST:
          return {
            ...state,
            products: [],
            errors: {
              ...state.errors,
              GetProducts: null
            },
            loaders: {
              ...state.loaders,
              GetProducts: true
    
            }
    
          };
    case actions.SERVICE_PRODUCT_GET_SUCCESS:
          return {
            ...state,
            products: action.products,
            errors: {
              ...state.errors,
              GetProducts: null
            },
            loaders: {
              ...state.loaders,
              GetProducts: null
    
            }
          };
    case actions.SERVICE_PRODUCT_GET_ERROR:
          return {
            ...state,
            errors: {
              ...state.errors,
              GetProducts: action.error
            },
            loaders: {
              ...state.loaders,
              GetProducts: null
    
            }
          };
    
    case AuthActions.EMAIL_AUTH_REINIT_STORE:
            return {
              ...state,
              categories: utils.formatServiceCategories(state.categories),
              products: [],
              services: []
            };
      

    case AuthActions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};