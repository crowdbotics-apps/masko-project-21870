import BaseModel from "../../../models/base.model";

export default class ProductPriceModel extends BaseModel {

    id = null;
    Li

   constructor(input){
        super();
        this.id = input.id;
        
   }

   getName(){
       return this.name_en;
   }

   getBrand(){
    return this.brand_en;
   }

   getDescription(){
       return this.description_en;
   }

   toObject(){
       return {
           id: this.id,
           name_en: this.name_en,
           name_es: this.name_es,
           description_en: this.description_en,
           description_es: this.description_es,
           price: this.price,
           sort: this.sort,
           photo: this.photo


       }
   }

}