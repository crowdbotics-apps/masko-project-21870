/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function getServices( accessToken, category ) {
 
    let path = ApiConstants.ACTIONS.SERVICE;
    if (category){
        path += "?category="+category.id
    }
    return Api(path, null, 'get', accessToken);
}
