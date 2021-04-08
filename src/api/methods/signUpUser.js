import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export default function signUpUser(user) {
  return Api(
    ApiConstants.ACTIONS.SIGNUP,
    {
      name: user.name,
      email: user.email,
      username: user.email,
      password: user.password,
    },
    'post',
    null,
  );
}
