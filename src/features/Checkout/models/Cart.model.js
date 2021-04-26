import BaseModel from "../../../models/base.model";
import * as _ from 'lodash';

export default class CartModel extends BaseModel {

    id = null;
    user = null;
    items=[];
    subTotalPrice=0;
    totalPrice=0;
    shipping=0;
    taxes=0;
    

   constructor(input){
        super();
        if(input){
          this.id = input.id || null;
          this.items = input.items || [];
          this.subTotalPrice = input.subTotalPrice || 0;
          this.totalPrice = input.totalPrice || 0;
          this.shipping = input.shipping || 0;
          this.taxes = input.taxes || 0;
        }
   }

   calculateItemTotalPrice(item){
     qty = 0
     _.forEach(item.pets, (i) => {
          qty = parseInt(qty)+parseInt(i.qty)
     })
     return parseFloat(item.source.price) * qty
   }

   updateCartItems(items){
     
     this.items = items;
     let subTotal = 0;
     
     _.forEach(items,(i)=>{
          subTotal = parseFloat(subTotal) + this.calculateItemTotalPrice(i)

     });

     this.subTotalPrice =  subTotal;
     this.totalPrice = subTotal;

   }

   getTotalItemCount(){
        let qty = 0;
        _.forEach(this.items, (i)=>{
               _.forEach(i.pets,(j)=>{
                    qty += j.qty
               })
        })

        return qty;
   }


}