import { combineReducers } from "redux";
import { persistCombineReducers, persistReducer } from "redux-persist";

import AsyncStorage from '@react-native-community/async-storage';
/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuthReducer from '../features/EmailAuth/redux/reducers'

const emailAuthPersistConfig = {
  key: "emailAuth",
  storage : AsyncStorage,
  blacklist: ["errors","loaders"],
};

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion

  EmailAuth: persistReducer( emailAuthPersistConfig, EmailAuthReducer),

});