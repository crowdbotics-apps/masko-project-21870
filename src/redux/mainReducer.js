import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignInReducer from '../features/SignIn/redux/reducers'
import SignUpReducer from '../features/SignUp/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn: SignInReducer,
SignUp: SignUpReducer,

});