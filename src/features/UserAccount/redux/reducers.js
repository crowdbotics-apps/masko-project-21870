import * as actions from "./constants";
import * as AuthActions from 'src/features/EmailAuth/redux/constants';
import * as utils from 'src/features/UserAccount/utils/general';

const initialState = {
  showPetSelector: false,
  pets: [],
  unds: [], // For cDs
  petTypes: [],
  breedTypes: [],
  selectedPet: null,
  selectedBreedType: null,
  errors: {   
          SetPet: null,
          GetPet: null,
          AddPet: null,
          UpdatePet: null,
          DeletePet: null,
          PetTypeGet: null,
          BreedTypeGet: null,
          UserProfileUpdate: null,
          CardGet: null,
          CardCreate: null,
          CardUpdate: null,
          CardDelete: null,
        },
  loaders: { 
            SetPet: null,
            GetPet: null,
            AddPet: null,
            UpdatePet: null,
            DeletePet: null,
            PetTypeGet: null,
            BreedTypeGet: null,
            UserProfileUpdate: null,
            CardGet: null,
            CardCreate: null,
            CardUpdate: null,
            CardDelete: null,
          }
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
        selectedPet: utils.formatPet(action.pet),
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

    /// User Profile
    ///
    case actions.USER_PROFILE_UPDATE_REQUEST:
          return {
            ...state,
            errors: {
              ...state.errors,
              UserProfileUpdate: null
            },
            loaders: {
              ...state.loaders,
              UserProfileUpdate: true

            }
          }; 
    case actions.USER_PROFILE_UPDATE_SUCCESS:
          return {
            ...state,
            errors: {
              ...state.errors,
              UserProfileUpdate: null
            },
            loaders: {
              ...state.loaders,
              UserProfileUpdate: null

            }
          };    
    case actions.USER_PROFILE_UPDATE_ERROR:
            return {
              ...state,
              errors: {
                ...state.errors,
                UserProfileUpdate: action.error
              },
              loaders: {
                ...state.loaders,
                UserProfileUpdate: null
  
              }
            };      
    ///

    /// User Card
    ///
    case actions.USER_CARD_GET_REQUEST:
          return {
            ...state,
            errors: {
              ...state.errors,
              CardGet: null
            },
            loaders: {
              ...state.loaders,
              CardGet: true

            }
          }; 
    case actions.USER_CARD_GET_SUCCESS:
          return {
            ...state,
            unds: action.unds,
            errors: {
              ...state.errors,
              CardGet: null
            },
            loaders: {
              ...state.loaders,
              CardGet: null

            }
          };    
    case actions.USER_CARD_GET_ERROR:
            return {
              ...state,
              errors: {
                ...state.errors,
                CardGet: action.error
              },
              loaders: {
                ...state.loaders,
                CardGet: null
  
              }
            };      
    

    case actions.USER_CARD_CREATE_REQUEST:
              return {
                ...state,
                errors: {
                  ...state.errors,
                  CardCreate: null
                },
                loaders: {
                  ...state.loaders,
                  CardCreate: true
    
                }
              }; 
    case actions.USER_CARD_CREATE_SUCCESS:
              return {
                ...state,
                unds: utils.appendCd(state.unds, action.unds),
                errors: {
                  ...state.errors,
                  CardCreate: null
                },
                loaders: {
                  ...state.loaders,
                  CardCreate: null
    
                }
              };    
    case actions.USER_CARD_CREATE_ERROR:
                return {
                  ...state,
                  errors: {
                    ...state.errors,
                    CardCreate: action.error
                  },
                  loaders: {
                    ...state.loaders,
                    CardCreate: null
      
                  }
                };      
    
                
    case actions.USER_CARD_UPDATE_REQUEST:
                  return {
                    ...state,
                    errors: {
                      ...state.errors,
                      CardUpdate: null
                    },
                    loaders: {
                      ...state.loaders,
                      CardUpdate: true
        
                    }
                  }; 
    case actions.USER_CARD_UPDATE_SUCCESS:
                  return {
                    ...state,
                    unds: utils.updateCd(state.unds, action.unds),
                    errors: {
                      ...state.errors,
                      CardUpdate: null
                    },
                    loaders: {
                      ...state.loaders,
                      CardUpdate: null
        
                    }
                  };    
    case actions.USER_CARD_UPDATE_ERROR:
                    return {
                      ...state,
                      errors: {
                        ...state.errors,
                        CardUpdate: action.error
                      },
                      loaders: {
                        ...state.loaders,
                        CardUpdate: null
          
                      }
                    };      
                      
    
    case actions.USER_CARD_DELETE_REQUEST:
                      return {
                        ...state,
                        errors: {
                          ...state.errors,
                          CardDelete: null
                        },
                        loaders: {
                          ...state.loaders,
                          CardDelete: true
            
                        }
                      }; 
    case actions.USER_CARD_DELETE_SUCCESS:
                      return {
                        ...state,
                        unds: utils.deleteCd(state.unds, action.unds),
                        errors: {
                          ...state.errors,
                          CardDelete: null
                        },
                        loaders: {
                          ...state.loaders,
                          CardDelete: null
            
                        }
                      };    
    case actions.USER_CARD_DELETE_ERROR:
                        return {
                          ...state,
                          errors: {
                            ...state.errors,
                            CardDelete: action.error
                          },
                          loaders: {
                            ...state.loaders,
                            CardDelete: null
              
                          }
                        };      
                          
                            


    ///

    case actions.USER_SHOW_PET_SELECTOR_SUCCESS:
      return {
        ...state,
        showPetSelector: true
        
      };      
        

      case actions.USER_HIDE_PET_SELECTOR_SUCCESS:
        return {
          ...state,
          showPetSelector: false
          
        }; 
        
        case actions.USER_PET_BREED_SET_SUCCESS:
          return {
            ...state,
            selectedBreedType: action.breed,
            
          }; 
            
          

    
    
  case AuthActions.EMAIL_AUTH_REINIT_STORE:
      return {
        ...state,
        
      };

    case AuthActions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};