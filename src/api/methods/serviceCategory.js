/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function getServiceCategories( accessToken ) {
 
    let path = ApiConstants.ACTIONS.SERVICE_CATEGORY;
    return Api(path, null, 'get', accessToken);
}
