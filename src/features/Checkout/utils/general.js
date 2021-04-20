import * as _ from 'lodash';
import { CartItemModel as CartItem } from '../models';


export function formatCartItem( type, item, pets, userSelection){
    let input = {
      type: type,
      source: item, 
      pets: pets,
      userSelection: userSelection
  };
    return new CartItem(input);
}

export function appendCart( storeCartItems, userItem ){

  let list = []
  list.push(userItem);
  
  _.forEach(storeCartItems,(i)=>{
    list.push(i);
   });

   return list;

}

export function updateCartObject ( storeCart, userItem ){
  
  let list = []
  list.push(userItem);
  
  _.forEach(storeCart.items,(i)=>{
    if( i.source.id !== userItem.source.id )
      list.push(i);
   });

   storeCart.updateCartItems(list);

   return storeCart; 
}




