import BaseModel from "../../../models/base.model";

export default class OrderModel extends BaseModel {

    id = null;
    address = null;
    country = null;
    subtotal_price = null; 
    ship_price = null;
    tax_price = null;
    total_price = null;
    created_at = null;
    status = null;
    owner = null;
    products = [];
    total_purchases = null;
    
   constructor(input){
        super();
        this.id = input.id;
        this.address = input.address;
        this.country = input.country;
        this.subtotal_price = input.subtotal_price;
        this.ship_price = input.ship_price;
        this.tax_price = input.tax_price;
        this.total_price = input.total_price;
        this.tax_price = input.tax_price;
        this.created_at = input.created_at;
        this.status = input.status;
        this.status = input.status;
        this.owner = input.owner;
        this.products = input.products;
        this.total_purchases = input.total_purchases;
   }

    

}