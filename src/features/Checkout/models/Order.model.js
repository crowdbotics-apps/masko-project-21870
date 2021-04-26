import BaseModel from "../../../models/base.model";

export default class ServiceCategoryModel extends BaseModel {

    id = null;
    name_en=""
    name_es=""
    description_en=""
    description_es=""
    sort = 0;
    photo = null;
    
   constructor(input){
        super();
        this.id = input.id;
        this.name_en = input.name_en;
        this.name_es = input.name_es;
        this.description_en = input.description_en;
        this.description_es = input.description_es;
        this.photo = input.photo || null;
        this.sort = input.sort;
   }

    getName(){
        return this.name_en;
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
        sort: this.sort,
        photo: this.photo
    }
   }

}