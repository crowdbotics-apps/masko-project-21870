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
  if( !userItem.is_recurring ){
    _.forEach(storeCartItems,(i)=>{
      list.push(i);
     });
  }
  

   return list;

}

export function updateCartObject ( storeCart, userItem ){
  
  let list = []
  list.push(userItem);
  
  if( !userItem.source.is_recurring ){
    _.forEach(storeCart.items,(i)=>{
      if( i.source.id !== userItem.source.id )
        list.push(i);
     });
  }
  

   storeCart.updateCartItems(list);

   return storeCart; 
}


export function updateCartItemQty ( storeCart, action ){
  
  let list = []

  _.forEach(storeCart.items,(i)=>{
      if( i.source.id !== action.item.source.id ){
        list.push(i);
      }else{
        let pets = [];
        _.forEach(i.pets,(j)=>{
            if(j.id == action.pet.id){
              if(action.quantity>0){ // Add Only Items Quantity gte Zero

                pets.push({
                  ...j,
                  qty: action.quantity
                })
              }
            }else{
              pets.push(j)
            }
        });

        if(getPetsTotalQty(pets)){
          let item = formatCartItem(i.type, i.source, pets, i.userSelection)
          list.push(item);
        }
         
      }
      
   });

   storeCart.updateCartItems(list);
   return storeCart; 
}

export function getPetsTotalQty ( pets ){
  let count = 0 ; 

  _.forEach(pets,(j)=>{
      count += j.qty
  });

  return count;
}



