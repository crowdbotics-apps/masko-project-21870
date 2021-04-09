import * as actions from "./constants";

const initialState = {
  user: null,
  accessToken: null,
  errors: { SignIn: null, SignUp: null, PasswordRecover: null },
  loaders: { SignIn: null, SignUp: null, PasswordRecover: null }
};

export default EmailAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.EMAIL_AUTH_LOGIN_REQUEST:
      return { 
                ...state,
                errors: { ...state.errors, SignIn: null },
                loaders: { ...state.loaders, SignIn: true },
               };
    case actions.EMAIL_AUTH_LOGIN_SUCCESS:
      return { 
                ...state,
                accessToken: action.accessToken,
                user: action.user,
                errors: {  ...state.errors, SignIn: null },
                loaders: { ...state.loaders, SignIn: null },
               };
    case actions.EMAIL_AUTH_LOGIN_ERROR:

      return { 
        ...state,
        errors: { ...state.errors, SignIn: action.error },
        loaders: { ...state.loaders, SignIn: null },
       };
    
    case actions.EMAIL_AUTH_SIGNUP_REQUEST:
        return { 
                  ...state,
                  errors: { ...state.errors, SignUp: null },
                  loaders: { ...state.loaders, SignUp: true },
                 };   

    case actions.EMAIL_AUTH_SIGNUP_SUCCESS:
      return { 
        ...state,
        user: action.user,
        errors: {  ...state.errors, SignUp: null },
        loaders: { ...state.loaders, SignUp: null },
       };
    case actions.EMAIL_AUTH_SIGNUP_ERROR:
      return { 
        ...state,
        errors: { ...state.errors, SignUp: action.error },
        loaders: { ...state.loaders, SignUp: null },
       };
    
    
       case actions.EMAIL_AUTH_PASSWORD_RECOVER_REQUEST:
        return { 
          ...state,
          errors: {  ...state.errors, PasswordRecover: null },
          loaders: { ...state.loaders, PasswordRecover: true },
         };
      case actions.EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS:
        return { 
          ...state,
          loaders: { ...state.loaders, PasswordRecover: null },
         };   

    case actions.EMAIL_AUTH_PASSWORD_RECOVER_ERROR:
      return { ...state,
            errors: { PasswordRecover: action.error },
            loaders: { ...state.loaders, PasswordRecover: null }
           };  
    case actions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};