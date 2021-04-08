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
import {  setHeaderToken } from '../../../utils/http';

import appConfig from "src/config/app";

import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtil";
import compileErrorMessage  from '../../../utils/errorMessageCompile';

import { translate }  from 'src/utils/translation';
import ApiConstants from 'src/api/ApiConstants';
import getBreedType from 'src/api/methods/breedType';
import getPetType from 'src/api/methods/petType';
import * as PetMethods from 'src/api/methods/pet';



function* handleAddPet(action) {
  const {
    accessToken,
    pet,
  } = action;
  try {
    const {status, data, error} = yield call( PetMethods.addPet, accessToken, pet );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_CREATED ) {
        yield put({
          type: USER_PET_ADD_SUCCESS,
          pet: data,
        });
        setTimeout(()=>{
            showSuccessAlert( translate('PetCreateSuccess') )
        },500);
        NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.Home );

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
      error: translate('AddPetsError'),
    });
  }
}

function* handleUpdatePet(action) {
  const {
    accessToken,
    pet,
  } = action;
  try {
    const {status, data, error} = yield call( PetMethods.addPet, accessToken, pet );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
        yield put({
          type: USER_PET_UPDATE_SUCCESS,
          pet: data,
        });
        setTimeout(()=>{
            showSuccessAlert(translate("PetUpdateSuccess"))
        },500);
        NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.Home );

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
      error: translate('UpdatePetsError'),
    });
  }
}

function* handleDeletePet(action) {
  const {
    accessToken,
    pet,
  } = action;
  try {
    const {status, data, error} = yield call( PetMethods.deletePet, accessToken, pet );

      if ( status === ApiConstants.STATUS_CODES.NO_CONTENT ) {
        yield put({
          type: USER_PET_DELETE_SUCCESS,
          pet: pet,
        });
        setTimeout(()=>{
            showSuccessAlert( translate('PetDeleteSuccess') )
        },500);
        NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.Home );

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
    
    yield put({
      type: USER_PET_DELETE_ERROR,
      error: translate('DeletePetsError'),
    });
  }
}

function* handleGetPet(action) {
  const {
    accessToken
  } = action;
  try {
    const {status, data, error} = yield call( PetMethods.getPets, accessToken );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
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
      error: translate('GetPetsError'),
    });
  }
}

function* handleGetPetType(action) {
  const {
    accessToken
  } = action;
  try {
    const {status, data, error} = yield call( getPetType, accessToken );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
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
      error: translate('GetPetTypeError'),
    });
  }
}

function* handleGetBreedType(action) {
  const {
    accessToken
  } = action;
  try {
    const {status, data, error} = yield call( getBreedType, accessToken );

      if ( status === ApiConstants.STATUS_CODES.SUCCESS_OK ) {
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
    
    yield put({
      type: USER_PET_BREED_GET_ERROR,
      error: translate('GetBreedTypeError'),
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
