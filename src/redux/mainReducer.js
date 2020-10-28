import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn270163858Reducer from '../features/SignIn270163858/redux/reducers'
import SignUp271163857Reducer from '../features/SignUp271163857/redux/reducers'
import EmailAuth73163855Reducer from '../features/EmailAuth73163855/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn270163858: SignIn270163858Reducer,
SignUp271163857: SignUp271163857Reducer,
EmailAuth73163855: EmailAuth73163855Reducer,

});