import * as actions from "./constants";

export const getServices = ( accessToken, category )  => ({
  type: actions.SERVICE_GET_REQUEST,
  accessToken,
  category
});

export const getServiceCategories = accessToken => ({
  type: actions.SERVICE_CATEGORY_GET_REQUEST,
  accessToken
});