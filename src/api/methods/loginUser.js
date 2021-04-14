import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(email, password) {
  return Api(
    ApiConstants.ACTIONS.LOGIN,
    {
      username: email,
      email: email,
      password: password,
    },
    'post',
    null,
  );
}
