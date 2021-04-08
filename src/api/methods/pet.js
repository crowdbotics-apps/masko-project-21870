/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export function getPets( accessToken ) {
 
    let path = ApiConstants.ACTIONS.PET;
    return Api(path, null, 'get', accessToken);
}

export function addPet( accessToken, pet ) {
 
    let path = ApiConstants.ACTIONS.PET;
    let body = {
        name: pet.name,
        age: pet.age,
        pet_type: pet.pet_type,
        breed: pet.breed,
      };
    return Api(path, body, 'post', accessToken);
}

export function updatePet( accessToken, pet ) {
 
    let path = ApiConstants.ACTIONS.PET+pet.id+'/';
    let body = {
        name: pet.name,
        age: pet.age,
        pet_type: pet.pet_type,
        breed: pet.breed,
      };
    return Api(path, body, 'put', accessToken);
}

export function deletePet( accessToken, pet ) {
 
    let path = ApiConstants.ACTIONS.PET+pet.id+'/';
    return Api(path, null, 'DELETE', accessToken);
}