import BaseModel from "../../../models/base.model";

export default class ProductModel extends BaseModel {

    id = null;
    name_en="";
    name_es="";
    description_en="";
    description_es=null;
    brand_en="";
    brand_es="";
    price=0;
    weight=0;
    size="";
    petType=null;
    is_recurring=false;
    category=null;
    photo=null;
    sort=0;
    

   constructor(input){
        super();
        this.id = input.id;
        this.name_en = input.name_en;
        this.name_es = input.name_es;
        
        this.brand_en = input.brand_en;
        this.brand_es = input.brand_es;

        this.description_en = input.description_en;
        this.description_es = input.description_es;
        
        this.size = input.size;
        this.petType = input.petType || null;

        this.photo = input.photo || null;
        this.price = input.price || 0;
        this.weight = input.weight || 0;
        this.sort = input.sort;
        this.is_recurring = input.is_recurring;
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