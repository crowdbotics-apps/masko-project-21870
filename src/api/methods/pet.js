/* eslint-disable prettier/prettier */
import Api from 'src/api';
import ApiConstants from '../ApiConstants';

export function getPets( accessToken ) {
 
    let path = ApiConstants.ACTIONS.PET;
    return Api(path, null, 'get', accessToken);
}

export function addPet( accessToken, pet ) {
 
    let path = ApiConstants.ACTIONS.PET;
    let age = pet.age
    
    if(age!=null){
        age = age.toString().replace(',','.')
    }



    let body = {
        name: pet.name,
        age: age,
        pet_type: pet.pet_type,
        breed: pet.breed,
    };

    if( pet.image && pet.image.content!=null ) {
        body.file = pet.image.content.data
        body.file_mime = pet.image.content.mime
    }    
    
    return Api(path, body, 'post', accessToken);
}

export function updatePet( accessToken, pet ) {
 
    let path = ApiConstants.ACTIONS.PET+pet.id+'/';

    let age = pet.age

    if(age!=null){
        age = age.toString().replace(',','.')
    }

    let body = {
        name: pet.name,
        age: age,
        pet_type: pet.pet_type,
        breed: pet.breed,
      };

    if( pet.image && pet.image.content!=null ) {
        body.file = pet.image.content.data
        body.file_mime = pet.image.content.mime
    }    
    return Api(path, body, 'put', accessToken);
}

export function deletePet( accessToken, pet ) {
 
    let path = ApiConstants.ACTIONS.PET+pet.id+'/';
    return Api(path, null, 'DELETE', accessToken);
}