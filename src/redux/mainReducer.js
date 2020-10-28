import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn474163859Reducer from '../features/SignIn474163859/redux/reducers'
import SignUp271163857Reducer from '../features/SignUp271163857/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn474163859: SignIn474163859Reducer,
SignUp271163857: SignUp271163857Reducer,

});