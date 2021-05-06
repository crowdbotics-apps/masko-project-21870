import BaseModel from "../../../models/base.model";
import AppConfig from 'src/config/app';
import * as _ from 'lodash';

const moment = require('moment');

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

    getItemForOrder(){
        let response = [];
        _.forEach(this.pets, (i) => {
            if ( this.type == AppConfig.ITEM_TYPES.SERVICES ){
                response.push( this.getServiceItemForOrder( i ) )
            }else{
                response.push( this.getProductItemForOrder( i ) )
            }
        });

        return response
    }



    getServiceItemForOrder( pet ){
        return {
            type: 'service', 
            id: this.source.id,
            quantity: pet.qty,
            pet: pet.id,
            timeOption: this.userSelection.timeOptionLabel,
            scheduleDate: moment( this.userSelection.bookingDate.value ).format( AppConfig.dateFormatDb ),
            time: this.userSelection.dayTimeOptionLabel ,
            notes: this.userSelection.notes


        }
    }

    getProductItemForOrder( pet ){
        if( this.source.is_recurring ){
            return {
                type: 'product', 
                id: this.source.id,
                quantity: pet.qty,
                pet: pet.id,
                scheduleDate: moment( this.userSelection.bookingDate.value ).format( AppConfig.dateFormatDb ),
                orderEvery: this.userSelection.orderEveryOptionsLabel
               
            }

        }
        return {
            type: 'product', 
            id: this.source.id,
            quantity: pet.qty,
            pet: pet.id,
           
        }
    }




}
