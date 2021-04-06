import * as actions from "./constants";

export const getPets = accessToken => ({
  type: actions.USER_PET_GET_REQUEST,
  accessToken
});

export const getPetType = accessToken => ({
  type: actions.USER_PET_TYPE_GET_REQUEST,
  accessToken
});

export const getBreedType = accessToken => ({
  type: actions.USER_PET_BREED_GET_REQUEST,
  accessToken
});

export const addPet = (accessToken , pet ) => ({
  type: actions.USER_PET_ADD_REQUEST,
  accessToken,
  pet
});

export const updatePet = (accessToken , pet )  => ({
  type: actions.USER_PET_UPDATE_REQUEST,
  accessToken,
  pet
});

export const setPet = ( pet )  => ({
  type: actions.USER_PET_SELECT_REQUEST,
  pet
});

export const deletePet = (accessToken , pet )  => ({
  type: actions.USER_PET_DELETE_REQUEST,
  accessToken,
  pet
});