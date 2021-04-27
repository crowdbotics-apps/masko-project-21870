import BaseModel from "../../../models/base.model";
import * as _ from 'lodash';

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

    getItemPrice(){
        totalCost = 0;
        _.forEach(this.pets, (i)=>{
            if(i.qty>0)
                totalCost += parseFloat(i.qty)*parseFloat(this.source.price)
        })
        return totalCost
    }

}
