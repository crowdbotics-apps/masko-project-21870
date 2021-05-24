import BaseModel from "../../../models/base.model";

export default class OrderProductModel extends BaseModel {

    id = null;
    pType = null;
    quantity = null;
    unit_price = null; 
    timeOption = null;
    date = null;
    time = null;
    order_every = null;
    notes = null;
    pet = null;
    refrence_item = null;
    
   constructor(input){
        super();
        this.id = input.id;
        this.pType = input.pType;
        this.quantity = input.quantity;
        this.unit_price = input.unit_price;
        this.timeOption = input.timeOption;
        this.date = input.date;
        this.time = input.time;
        this.order_every = input.order_every;
        this.notes = input.notes;
        this.pet = input.pet;
        this.refrence_item = input.refrence_item;
   }

    

}