import * as actions from "./constants";

export const getRecuringOrders = ( accessToken, from_date, to_date )  => ({
  type: actions.RECURRING_ORDER_LIST_REQUEST,
  accessToken,
  from_date, 
  to_date
});

export const cancelSubscription = ( accessToken, order )  => ({
  type: actions.RECURRING_ORDER_CANCEL_REQUEST,
  accessToken,
  order, 
});