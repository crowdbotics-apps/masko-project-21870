import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';
import * as utils from 'src/features/UserAccount/utils/general';

const initialState = {
  pets: [],
  petTypes: [],
  breedTypes: [],
  selectedPet: null,
  errors: { SetPet: null, GetPet: null, AddPet: null, UpdatePet: null, DeletePet: null, PetTypeGet: null, BreedTypeGet: null },
  loaders: { SetPet: null, GetPet: null, AddPet: null, UpdatePet: null, DeletePet: null, PetTypeGet: null, BreedTypeGet: null }
};

export default UserAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_PET_ADD_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          AddPet: null
        },
        loaders: {
          ...state.loaders,
          AddPet: true

        }

      };
    case actions.USER_PET_ADD_SUCCESS:
      return {
        ...state,
        pets: utils.appendPet(state.pets, action.pet),
        errors: {
          ...state.errors,
          AddPet: null
        },
        loaders: {
          ...state.loaders,
          AddPet: null

        }
      };
    case actions.USER_PET_ADD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          AddPet: action.error
        },
        loaders: {
          ...state.loaders,
          AddPet: null

        }
      };


    case actions.USER_PET_UPDATE_REQUEST:
        return {
          ...state,
          errors: {
            ...state.errors,
            UpdatePet: null
          },
          loaders: {
            ...state.loaders,
            UpdatePet: true
  
          }
  
        };
    case actions.USER_PET_UPDATE_SUCCESS:
        return {
          ...state,
          pets: utils.updatePet(state.pets, action.pet),
          errors: {
            ...state.errors,
            UpdatePet: null
          },
          loaders: {
            ...state.loaders,
            UpdatePet: null
  
          }
        };
    case actions.USER_PET_UPDATE_ERROR:
        return {
          ...state,
          errors: {
            ...state.errors,
            UpdatePet: action.error
          },
          loaders: {
            ...state.loaders,
            UpdatePet: null
  
          }
        };
    
    
    case actions.USER_PET_DELETE_REQUEST:
          return {
            ...state,
            errors: {
              ...state.errors,
              DeletePet: null
            },
            loaders: {
              ...state.loaders,
              DeletePet: true
    
            }
    
          };
      case actions.USER_PET_DELETE_SUCCESS:
          return {
            ...state,
            pets: utils.deletePet(state.pets, action.pet),
            errors: {
              ...state.errors,
              DeletePet: null
            },
            loaders: {
              ...state.loaders,
              DeletePet: null
    
            }
          };
      case actions.USER_PET_DELETE_ERROR:
          return {
            ...state,
            errors: {
              ...state.errors,
              DeletePet: action.error
            },
            loaders: {
              ...state.loaders,
              DeletePet: null
    
            }
          };
          

    case actions.USER_PET_GET_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          GetPet: null
        },
        loaders: {
          ...state.loaders,
          GetPet: true

        }

      };
    case actions.USER_PET_GET_SUCCESS:
      return {
        ...state,
        pets: action.pets,
        errors: {
          ...state.errors,
          GetPet: null
        },
        loaders: {
          ...state.loaders,
          GetPet: null

        }
      };
    case actions.USER_PET_GET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          GetPet: action.error
        },
        loaders: {
          ...state.loaders,
          GetPet: null

        }
      };


    case actions.USER_PET_SELECT_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          SetPet: null
        },
        loaders: {
          ...state.loaders,
          SetPet: true

        }

      };
    case actions.USER_PET_SELECT_SUCCESS:
      return {
        ...state,
        selectedPet: action.pet,
        errors: {
          ...state.errors,
          SetPet: null
        },
        loaders: {
          ...state.loaders,
          SetPet: null

        }
      };
    case actions.USER_PET_SELECT_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          SetPet: action.error
        },
        loaders: {
          ...state.loaders,
          SetPet: null

        }
      };

    case actions.USER_PET_TYPE_GET_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          PetTypeGet: null
        },
        loaders: {
          ...state.loaders,
          PetTypeGet: true

        }

      };
    case actions.USER_PET_TYPE_GET_SUCCESS:
      return {
        ...state,
        petTypes: action.petTypes,
        errors: {
          ...state.errors,
          PetTypeGet: null
        },
        loaders: {
          ...state.loaders,
          PetTypeGet: null

        }
      };
    case actions.USER_PET_TYPE_GET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          PetTypeGet: action.error
        },
        loaders: {
          ...state.loaders,
          PetTypeGet: null

        }
      };
    
    case actions.USER_PET_BREED_GET_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          BreedTypeGet: null
        },
        loaders: {
          ...state.loaders,
          BreedTypeGet: true

        }

      };
    case actions.USER_PET_BREED_GET_SUCCESS:
      return {
        ...state,
        breedTypes: action.breedTypes,
        errors: {
          ...state.errors,
          BreedTypeGet: null
        },
        loaders: {
          ...state.loaders,
          BreedTypeGet: null

        }
      };
    case actions.USER_PET_BREED_GET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          BreedTypeGet: action.error
        },
        loaders: {
          ...state.loaders,
          BreedTypeGet: null

        }
      };



    case AuthActions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};