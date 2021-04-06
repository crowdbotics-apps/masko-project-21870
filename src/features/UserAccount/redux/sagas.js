import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';
import * as utils from '../utils/general';

import {
  USER_PET_ADD_REQUEST,
  USER_PET_ADD_SUCCESS,
  USER_PET_ADD_ERROR,
  USER_PET_GET_REQUEST,
  USER_PET_GET_SUCCESS,
  USER_PET_GET_ERROR,
  USER_PET_TYPE_GET_REQUEST,
  USER_PET_BREED_GET_REQUEST,
  USER_PET_TYPE_GET_SUCCESS,
  USER_PET_TYPE_GET_ERROR,
  USER_PET_BREED_GET_SUCCESS,
  USER_PET_BREED_GET_ERROR,
  USER_PET_SELECT_SUCCESS,
  USER_PET_SELECT_REQUEST,
  USER_PET_UPDATE_REQUEST,
  USER_PET_UPDATE_SUCCESS,
  USER_PET_UPDATE_ERROR,
  USER_PET_DELETE_REQUEST,
  USER_PET_DELETE_SUCCESS,
  USER_PET_DELETE_ERROR
} from './constants';
import { request, setHeaderToken } from '../../../utils/http';

import appConfig from "../../../config/app";

import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';


function sendAddPet( accessToken, pet ) {

  let url = appConfig.emailAuthAPIEndPoint+'/api/v1/pet/';
  
  let body = {
      name: pet.name,
      age: pet.age,
      pet_type: pet.pet_type,
      breed: pet.breed,
    };

  if(pet.image && pet.image.content!=null){
      body.file = pet.image.content.data
      body.file_mime = pet.image.content.mime
  }    
  let header = {
                'Content-Type': appConfig.contentType.json
               };

  if(accessToken){
    header = Object.assign(setHeaderToken(accessToken), header);
  }

  return fetch(url, { 
    method: 'post', 
    body: JSON.stringify(body),
    headers: header
    }, ).then((response) => {

    const statusCode = response.status;
    const data =
      statusCode != 204
        ? response.json()
        : {};
    return Promise.all([statusCode, data]);

  })
  .then((response) => {
    return { status: response[0], data: response[1], error: response[1] };
    
  })
  .catch(error => {
    return {status: 400, data: error, error: error};
  });
}

function sendUpdatePet( accessToken, pet ) {

  let url = appConfig.emailAuthAPIEndPoint+'/api/v1/pet/'+pet.id+'/';
  
  let body = {
      name: pet.name,
      age: pet.age,
      pet_type: pet.pet_type,
      breed: pet.breed,
    };

  if(pet.image && pet.image.content!=null){
      body.file = pet.image.content.data
      body.file_mime = pet.image.content.mime
  }    
  let header = {
                'Content-Type': appConfig.contentType.json
               };

  if(accessToken){
    header = Object.assign(setHeaderToken(accessToken), header);
  }

  return fetch(url, { 
    method: 'put', 
    body: JSON.stringify(body),
    headers: header
    }, ).then((response) => {

    const statusCode = response.status;
    const data =
      statusCode != 204
        ? response.json()
        : {};
    return Promise.all([statusCode, data]);

  })
  .then((response) => {
    return { status: response[0], data: response[1], error: response[1] };
    
  })
  .catch(error => {
    return {status: 400, data: error, error: error};
  });
}

function sendDeletePet( accessToken, pet ) {

  let url = appConfig.emailAuthAPIEndPoint+'/api/v1/pet/'+pet.id+'/';
  
      
  let header = {
                'Content-Type': appConfig.contentType.json
               };

  if(accessToken){
    header = Object.assign(setHeaderToken(accessToken), header);
  }

  return fetch(url, { 
    method: 'delete', 
    body: null,
    headers: header
    }, ).then((response) => {

    const statusCode = response.status;
    const data =
      statusCode != 204
        ? response.json()
        : {};
    return Promise.all([statusCode, data]);

  })
  .then((response) => {
    return { status: response[0], data: response[1], error: response[1] };
    
  })
  .catch(error => {
    return {status: 400, data: error, error: error};
  });
}

function sendGetPet( accessToken ) {

  let url = appConfig.emailAuthAPIEndPoint+'/api/v1/pet/';
   
  let header = {
                'Content-Type': appConfig.contentType.json
               };

  if(accessToken){
    header = Object.assign(setHeaderToken(accessToken), header);
  }

  return fetch(url, { 
    method: 'get', 
    body: null,
    headers: header
    }, ).then((response) => {

    const statusCode = response.status;
    const data =
      statusCode != 204
        ? response.json()
        : {};
    return Promise.all([statusCode, data]);

  })
  .then((response) => {
    return { status: response[0], data: response[1], error: response[1] };
    
  })
  .catch(error => {
    return {status: 400, data: error, error: error};
  });
}

function sendGetPetType( accessToken ) {

  let url = appConfig.emailAuthAPIEndPoint+'/api/v1/pet-type/';
   
  let header = {
                'Content-Type': appConfig.contentType.json
               };

  if(accessToken){
    header = Object.assign(setHeaderToken(accessToken), header);
  }

  return fetch(url, { 
    method: 'get', 
    body: null,
    headers: header
    }, ).then((response) => {

    const statusCode = response.status;
    const data =
      statusCode != 204
        ? response.json()
        : {};
    return Promise.all([statusCode, data]);

  })
  .then((response) => {
    return { status: response[0], data: response[1], error: response[1] };
    
  })
  .catch(error => {
    return {status: 400, data: error, error: error};
  });
}

function sendGetBreedType( accessToken ) {

  let url = appConfig.emailAuthAPIEndPoint+'/api/v1/breed-type/';
   
  let header = {
                'Content-Type': appConfig.contentType.json
               };

  if(accessToken){
    header = Object.assign(setHeaderToken(accessToken), header);
  }

  return fetch(url, { 
    method: 'get', 
    body: null,
    headers: header
    }, ).then((response) => {

    const statusCode = response.status;
    const data =
      statusCode != 204
        ? response.json()
        : {};
    return Promise.all([statusCode, data]);

  })
  .then((response) => {
    return { status: response[0], data: response[1], error: response[1] };
    
  })
  .catch(error => {
    return {status: 400, data: error, error: error};
  });
}

function* handleAddPet(action) {
  const {
    accessToken,
    pet,
  } = action;
  try {
    const {status, data, error} = yield call(sendAddPet, accessToken, pet );

      if (status === 201) {
        yield put({
          type: USER_PET_ADD_SUCCESS,
          pet: data,
        });
        setTimeout(()=>{
            showSuccessAlert("Pet has been successfully created!")
        },500);
        NavigationService.navigate('Home');

      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: USER_PET_ADD_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: USER_PET_ADD_ERROR,
      error: "Can't sign up with provided credentials",
    });
  }
}

function* handleUpdatePet(action) {
  const {
    accessToken,
    pet,
  } = action;
  try {
    const {status, data, error} = yield call(sendUpdatePet, accessToken, pet );

      if (status === 200) {
        yield put({
          type: USER_PET_UPDATE_SUCCESS,
          pet: data,
        });
        setTimeout(()=>{
            showSuccessAlert("Pet has been successfully updated!")
        },500);
        NavigationService.navigate('Home');

      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: USER_PET_UPDATE_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: USER_PET_UPDATE_ERROR,
      error: "Can't Update Pet",
    });
  }
}

function* handleDeletePet(action) {
  const {
    accessToken,
    pet,
  } = action;
  try {
    const {status, data, error} = yield call(sendDeletePet, accessToken, pet );

      if (status === 204) {
        yield put({
          type: USER_PET_DELETE_SUCCESS,
          pet: pet,
        });
        setTimeout(()=>{
            showSuccessAlert("Pet has been successfully delete!")
        },500);
        NavigationService.navigate('Home');

      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: USER_PET_DELETE_ERROR,
          error: msg,
        });
        setTimeout(()=>{
          showErrorAlert(msg)
      },500);
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: USER_PET_DELETE_ERROR,
      error: "Can't Delete Pet",
    });
  }
}

function* handleGetPet(action) {
  const {
    accessToken
  } = action;
  try {
    const {status, data, error} = yield call(sendGetPet, accessToken );

      if (status === 200) {
        yield put({
          type: USER_PET_GET_SUCCESS,
          pets: utils.formatPets(data.results),
        });
       
      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: USER_PET_GET_ERROR,
          error: msg,
        });
      
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: USER_PET_GET_ERROR,
      error: "Can't get pets list.",
    });
  }
}

function* handleGetPetType(action) {
  const {
    accessToken
  } = action;
  try {
    const {status, data, error} = yield call(sendGetPetType, accessToken );

      if (status === 200) {
        yield put({
          type: USER_PET_TYPE_GET_SUCCESS,
          petTypes: data.results,
        });
       
      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: USER_PET_TYPE_GET_ERROR,
          error: msg,
        });
      
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: USER_PET_TYPE_GET_ERROR,
      error: "Cannot extract Pet Types",
    });
  }
}

function* handleGetBreedType(action) {
  const {
    accessToken
  } = action;
  try {
    const {status, data, error} = yield call(sendGetBreedType, accessToken );

      if (status === 200) {
        yield put({
          type: USER_PET_BREED_GET_SUCCESS,
          breedTypes: data.results,
        });
       
      } else {
        let msg = compileErrorMessage(error,data)
        yield put({
          type: USER_PET_BREED_GET_ERROR,
          error: msg,
        });
      
      }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: USER_PET_BREED_GET_ERROR,
      error: "Cannot extract breed type.",
    });
  }
}

function* handlePetSelect(action) {
  
    yield put({
          type: USER_PET_SELECT_SUCCESS,
          pet: action.pet,
        });
  
}


export default all([

  takeLatest(USER_PET_GET_REQUEST, handleGetPet),
  takeLatest(USER_PET_ADD_REQUEST, handleAddPet),
  takeLatest(USER_PET_UPDATE_REQUEST, handleUpdatePet),
  takeLatest(USER_PET_DELETE_REQUEST, handleDeletePet),

  takeLatest(USER_PET_TYPE_GET_REQUEST, handleGetPetType),
  takeLatest(USER_PET_BREED_GET_REQUEST, handleGetBreedType),
  takeLatest(USER_PET_SELECT_REQUEST, handlePetSelect),
  
  
  
]);
