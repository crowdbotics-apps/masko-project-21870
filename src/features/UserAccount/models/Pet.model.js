import BaseModel from "../../../models/base.model";

export default class PetModel extends BaseModel {

    id = null;
    name="";
    age="";
    type="";
    typeInfo=null;
    breed="";
    breedInfo=null;
    photo="";
    

   constructor(input){
        super();
        this.id = input.id;
        this.name = input.name;
        this.age = input.age || 0;
        this.type = input.type;
        this.typeInfo = input.typeInfo || null;
        this.breed = input.breed || null;
        this.breedInfo = input.breedInfo || null;
        this.photo = input.pet_image;
   }

   

   toObject(){
       return {
           id: this.id,
           name: this.name,
           age: this.age,
           type: this.type,
           typeInfo: this.typeInfo,
           breed: this.breed,
           breedInfo: this.breedInfo,
           photo: this.photo


       }
   }

}