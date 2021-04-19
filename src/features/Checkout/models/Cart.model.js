import BaseModel from "../../../models/base.model";

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
        this.id = input.user;
        this.items = input.items;
        this.subTotalPrice = input.subTotalPrice || 0;
        this.totalPrice = input.totalPrice || 0;
        this.shipping = input.shipping || 0;
        this.taxes = input.taxes || 0;
   }



}