/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function getServices( accessToken, category, keyword ) {
 
    let path = ApiConstants.ACTIONS.SERVICE+'?';

    if (category){
        path += "category="+category.id
    }

    if (keyword){
        path += "&keyword="+keyword
    }
    
    return Api(path, null, 'get', accessToken);
}
