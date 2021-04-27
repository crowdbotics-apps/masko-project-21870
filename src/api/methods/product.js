/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function getProducts( accessToken, category, keyword, type, price, sort ) {
 
    let path = ApiConstants.ACTIONS.PRODUCT+'?';

    if (category){
        path += "category="+category.id
    }

    if (keyword){
        path += "&keyword="+keyword
    }

    if (type){
        path += "&petType="+type
    }

    if (price){
        path += "&price="+price
    }

    if (sort){
        path += "&sort="+sort
    }

   
    
    return Api(path, null, 'get', accessToken);
}
