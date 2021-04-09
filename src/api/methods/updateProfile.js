/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export function updateProfile(accessToken, firstName, lastName, dob) {
    let path = ApiConstants.UPDATE_PROFILE;
    return Api(
        path,
        {
            first_name: firstName,
            // last_name: lastName,
            // username: firstName + ' ' + lastName,
            date_of_birth: dob,
        },
        'put',
        accessToken,
    );
}
