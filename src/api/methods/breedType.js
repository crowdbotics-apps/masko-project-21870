import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function getBreedType(
  accessToken,
  keyword
) {
  let path = ApiConstants.ACTIONS.BREED_TYPE;
  if(keyword && keyword!=''){
    path += '?keyword='+keyword
  }
  return Api(
    path,
    null,
    'get',
    accessToken,
  );
}