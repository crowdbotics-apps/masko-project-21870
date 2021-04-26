import BaseModel from "../../../models/base.model";

export default class CartItemModel extends BaseModel {

    id = null;
    type = null;
    source = null;
    pets=[];
    userSelection=null;

    constructor(input){
          super();
          this.type = input.type;
          this.source = input.source;
          this.pets = input.pets;
          this.userSelection = input.userSelection;
    }

}
