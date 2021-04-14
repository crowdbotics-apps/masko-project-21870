/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function getPetType( accessToken ) {
  let path = ApiConstants.ACTIONS.PET_TYPE ;

  return Api(path, null, 'get', accessToken);
}
