/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';
import * as _ from 'lodash';



export function addOrder( accessToken, cart, payMethod ) {
 
    let path = ApiConstants.ACTIONS.ORDER;
    let body = {
        payment_method: payMethod,
    };

    let items = [];
    if(cart.items.length > 0){
        _.forEach(cart.items, (i)=>{
                items = items.concat(i.getItemForOrder())
        })
    }    
    body.items = items;

    return Api(path, body, 'post', accessToken);
}