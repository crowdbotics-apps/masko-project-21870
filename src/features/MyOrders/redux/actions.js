import * as actions from "./constants";

export const getMyOrders = ( accessToken, from_date, to_date )  => ({
  type: actions.MY_ORDER_LIST_REQUEST,
  accessToken,
  from_date, 
  to_date
});