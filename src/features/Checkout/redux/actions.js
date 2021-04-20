import * as actions from "./constants";

export const addItemToCart = ( type, item, pets, userSelection )  => ({
  type: actions.CHECKOUT_CART_ADD_ITEM_REQUEST,
  cartType: type,
  item,
  pets,
  userSelection
});


