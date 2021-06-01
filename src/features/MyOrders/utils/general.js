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
  let hasRecurItem = hasRecurringItem(storeCart.items)
  
  if( !userItem.source.is_recurring  && !hasRecurItem ){
    _.forEach(storeCart.items,(i)=>{
      if( i.source.id !== userItem.source.id )
        list.push(i);
     });
  }
  

   storeCart.updateCartItems(list);

   return storeCart; 
}

export function hasRecurringItem( items ){
  let flag = false
  _.forEach(items, (i)=>{
    if(i.source.is_recurring){
      flag = true
    }
  });
  return flag
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

export function formatOrderDetailsProducts(order, userPets){

   let newList = []
   let obj = null
   let sourcePet = null
   _.forEach(order.products, (i)=>{
      
       obj = _.find(newList, (j) => j.product.id == i.refrence_item.id );
       sourcePet = _.find(userPets, (k) => k.id == i.pet )
       if (obj == null){
          let pet = []
          pet.push({
            item: sourcePet,
            quantity: i.quantity,
          })
          newList.push({
            product: i.refrence_item,
            source: i,
            pets: pet,
            totalQty: i.quantity
          })
       }else{
          obj.pets.push({
            item: sourcePet,
            quantity: i.quantity,
          }) 
          obj.totalQty += i.quantity
       }
       

   })
   return newList;


}




