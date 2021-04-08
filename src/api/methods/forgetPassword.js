import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export function forgetPassword(email) {
  return Api(
    ApiConstants.ACTIONS.FORGET_PASSWORD,
    {
      email: email,
    },
    'post',
    null,
  );
}

export function changePassword(accessToken, oldPassword, newPassword) {
  return Api(
    ApiConstants.ACTIONS.CHANGE_PASSWORD,
    {
      old_password: oldPassword,
      new_password1: newPassword,
      new_password2: newPassword,
    },
    'post',
    accessToken,
  );
}
