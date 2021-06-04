import * as actions from "./constants";

export const getPets = accessToken => ({
  type: actions.USER_PET_GET_REQUEST,
  accessToken
});

export const getPetType = accessToken => ({
  type: actions.USER_PET_TYPE_GET_REQUEST,
  accessToken
});

export const getBreedType = (accessToken,keyword) => ({
  type: actions.USER_PET_BREED_GET_REQUEST,
  accessToken,
  keyword
});

export const setBreedType = (breed) => ({
  type: actions.USER_PET_BREED_SET_SUCCESS,
  breed
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


export const getCd =  accessToken => ({
  type: actions.USER_CARD_GET_REQUEST,
  accessToken
});


export const addCd = (accessToken , cd ) => ({
  type: actions.USER_CARD_CREATE_REQUEST,
  accessToken,
  cd
});

export const updateCd = (accessToken , cd )  => ({
  type: actions.USER_CARD_UPDATE_REQUEST,
  accessToken,
  cd
});


export const deleteCd = (accessToken , cd )  => ({
  type: actions.USER_CARD_DELETE_REQUEST,
  accessToken,
  cd
});

export const updateProfile = (accessToken , user )  => ({
  type: actions.USER_PROFILE_UPDATE_REQUEST,
  accessToken,
  user
});

export const showPetSelector = ()  => ({
  type: actions.USER_SHOW_PET_SELECTOR_SUCCESS
});

export const hidePetSelector = ()  => ({
  type: actions.USER_HIDE_PET_SELECTOR_SUCCESS
});