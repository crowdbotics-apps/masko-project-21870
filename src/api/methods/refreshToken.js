import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function refreshToken(refreshToken, cachedObject) {
  return Api(
    ApiConstants.REFRESH_TOKEN,
    {
      refresh: refreshToken,
      cachedObject,
    },
    'post',
    null,
    true,
  );
}
