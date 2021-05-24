import { combineReducers } from "redux";
import { persistCombineReducers, persistReducer } from "redux-persist";

import AsyncStorage from '@react-native-community/async-storage';
/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuthReducer from 'src/features/EmailAuth/redux/reducers'

import UserAccountReducer from 'src/features/UserAccount/redux/reducers'
import ServiceReducer from 'src/features/Services/redux/reducers'
import CheckoutReducer from 'src/features/Checkout/redux/reducers'
import RecurringOrderReducer from 'src/features/RecurringOrders/redux/reducers'


const config = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [
    "netInfo",
    "toast",
    "nav",
  ],
};

const emailAuthPersistConfig = {
  key: "emailAuth",
  storage : AsyncStorage,
  blacklist: ["errors","loaders"],
};

const userAccountPersistConfig = {
  key: "userAccount",
  storage : AsyncStorage,
  blacklist: ["errors","loaders"],
};

const servicePersistConfig = {
  key: "service",
  storage : AsyncStorage,
  blacklist: ["errors","loaders"],
};

const checkoutPersistConfig = {
  key: "checkout",
  storage : AsyncStorage,
  blacklist: ["errors","loaders"],
};

const recurOrderPersistConfig = {
  key: "recurOrder",
  storage : AsyncStorage,
  blacklist: ["errors","loaders"],
};

export const combinedReducers = persistCombineReducers(config,{
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
  EmailAuth: persistReducer( emailAuthPersistConfig, EmailAuthReducer),
  UserAccount: persistReducer( userAccountPersistConfig, UserAccountReducer),
  Service: persistReducer( servicePersistConfig, ServiceReducer),
  Checkout: persistReducer( checkoutPersistConfig, CheckoutReducer),
  RecurringOrder: persistReducer( recurOrderPersistConfig, RecurringOrderReducer),

});