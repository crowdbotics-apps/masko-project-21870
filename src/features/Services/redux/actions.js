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

export const getProducts = ( accessToken, category,
                              keyword,
                              type,
                              price,
                              sort
   )  => ({
  type: actions.SERVICE_PRODUCT_GET_REQUEST,
  accessToken,
  category,
  keyword,
  petType: type,
  price,
  sort
});