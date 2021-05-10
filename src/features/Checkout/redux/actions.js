import * as actions from "./constants";

export const addItemToCart = ( type, item, pets, userSelection )  => ({
  type: actions.CHECKOUT_CART_ADD_ITEM_REQUEST,
  cartType: type,
  item,
  pets,
  userSelection
});

export const updateItemToCart = ( item, pet, quantity ) => ({
  type: actions.CHECKOUT_CART_UPDATE_ITEM_REQUEST,
  item,
  pet,
  quantity
});


export const submitOrder = ( accessToken, cart, payMethod ) => ({
  type: actions.CHECKOUT_ORDER_ADD_REQUEST,
  accessToken,
  cart,
  payMethod
});

