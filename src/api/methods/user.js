/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export function updateProfile(accessToken, user) {
    let path = ApiConstants.ACTIONS.USER;
    let body = {
        email: user.email,
        name: user.name,
        address: user.address,
      };

 
    if (user.default_card_id){
        body.default_card = user.default_card_id;
    }


    return Api(
        path,
        body,
        'put',
        accessToken,
    );
}
