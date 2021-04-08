import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function getBreedType(
  accessToken
) {
  return Api(
    ApiConstants.ACTIONS.BREED_TYPE,
    null,
    'get',
    accessToken,
  );
}