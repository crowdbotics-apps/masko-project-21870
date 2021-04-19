import * as actions from "./constants";

export const getServices = ( accessToken, category, keyword )  => ({
  type: actions.SERVICE_GET_REQUEST,
  accessToken,
  category,
  keyword
});

export const getServiceCategories = accessToken => ({
  type: actions.SERVICE_CATEGORY_GET_REQUEST,
  accessToken
});