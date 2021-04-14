/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export function getCds( accessToken ) {
 
    let path = ApiConstants.ACTIONS.UNDS;
    return Api(path, null, 'get', accessToken);
}

export function addCds( accessToken, cd ) {
 
    let path = ApiConstants.ACTIONS.UNDS;
    let body = {
        number: cd.number,
        exp_month: cd.exp_month,
        exp_year: cd.exp_year,
        cvc: cd.cvc,
        name: cd.name,
        
      };
      
     
 
    
    return Api(path, body, 'post', accessToken);
}

export function updateCds( accessToken, cd ) {
 
    let path = ApiConstants.ACTIONS.UNDS+cd.id+'/';
    let body = {
        exp_month: cd.exp_month,
        exp_year: cd.exp_year,
        name: cd.name
      };

   
    return Api(path, body, 'put', accessToken);
}

export function deleteCds( accessToken, cd ) {
 
    let path = ApiConstants.ACTIONS.UNDS+cd.id+'/';
    return Api(path, null, 'DELETE', accessToken);
}