import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfSignIn474178288Reducer from '../features/CopyOfSignIn474178288/redux/reducers'
import SignIn474163859Reducer from '../features/SignIn474163859/redux/reducers'
import SignUp271163857Reducer from '../features/SignUp271163857/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfSignIn474178288: CopyOfSignIn474178288Reducer,
SignIn474163859: SignIn474163859Reducer,
SignUp271163857: SignUp271163857Reducer,

});