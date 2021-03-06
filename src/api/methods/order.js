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

export function getRecurringOrders( accessToken, from_date, to_date ) {
 
    let path = ApiConstants.ACTIONS.RECURRING_ORDER+'?';
    
    if( from_date != null ){
        path += 'fromDate='+encodeURIComponent(from_date)
    }


    if( to_date != null ){
        path += '&toDate='+encodeURIComponent(to_date)
    }
    tzone = Intl.DateTimeFormat().resolvedOptions().timeZone

    if(tzone!= null){
        path += "&tzone="+encodeURIComponent(tzone)
    }
    

    return Api(path, null, 'get', accessToken);
}

export function getMyOrders( accessToken, from_date, to_date ) {
 
    let path = ApiConstants.ACTIONS.MY_ORDER+'?';
    
    if( from_date != null ){
        path += 'fromDate='+encodeURIComponent(from_date)
    }


    if( to_date != null ){
        path += '&toDate='+encodeURIComponent(to_date)
    }

    tzone = Intl.DateTimeFormat().resolvedOptions().timeZone

    if(tzone!= null){
        path += "&tzone="+encodeURIComponent(tzone)
    }
    
    

    return Api(path, null, 'get', accessToken);
}

export function cancelSubscription( accessToken, order ) {
 
    let path = ApiConstants.ACTIONS.RECURRING_SUBSCRIPTION_CANCEL;
    
    let body = {
        id : order.id
    }
    

    return Api(path, body, 'post', accessToken);
}
