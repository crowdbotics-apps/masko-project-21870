import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';
import React from "react";

import ActionSheet from 'react-native-actionsheet';
import { fromPairs } from 'lodash';
import * as userAccountActions from '../../redux/actions';
import * as utils from 'src/utils/alertUtil';
import * as NavigationService from 'src/navigator/NavigationService';
import { translate }  from 'src/utils/translation';
import appConfig from 'src/config/app';

export class _MoreActionPetComponent extends React.Component {

    constructor(props){
        super(props);
    }

    selectPet = () => {
        const { pet, actions } = this.props;
        actions.selectPet(pet);
        utils.showSuccessAlert( translate("PetSelectSuccess") )
        NavigationService.navigate( appConfig.NAVIGATOR_ROUTE.Home );
     

    }

    deletePet = () => {
        utils.showConfirmDialog( translate("PetDeleteConfirmation") ,this.confirmDeletePet, ()=>{
            console.log("Cancel Pressed");
        } )
    }

    confirmDeletePet = () => {
        const { pet, selectedPet, accessToken, actions } = this.props;

        if(pet.id == selectedPet.id){
            actions.selectPet(null);
        }
        actions.deletePet(accessToken, pet);
        
    }

    showActionSheet = () => {
        this.ActionSheet.show();
    }

    render(){
        return (
        
            <TouchableOpacity style={{flex:1, flexDirection:'row'}}
                    onPress={()=>this.showActionSheet()}
            >
                  <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={ translate("PetMoreActionSheetDescription") }
                        options={[ translate("PetMoreActionChoosePet"), translate("PetMoreActionDeletePet"), translate("CancelButtonLabel") ]}
                        cancelButtonIndex={2}
                        destructiveButtonIndex={1}
                        onPress={(index) => {
                            switch (index) {
                            case 0: this.selectPet(); break;
                            case 1: this.deletePet(); break;

                            }
                        }}
                        />
                   <Icon name="more-horizontal" size={20} color={'#FFF'} style={{marginLeft:15, marginRight:15}} />
             </TouchableOpacity> 
        );
    }
}


const mapStateToProps = state => ({
    accessToken: state.EmailAuth.accessToken,
    user: state.EmailAuth.user,
    updateLoading: state.UserAccount.loaders.UpdatePet,
    selectedPet: state.UserAccount.selectedPet,
  });
  
  const mapDispatchToProps = dispatch => ({
    actions: {
     selectPet: ( pet) => {
            dispatch(userAccountActions.setPet(pet));
        },
      deletePet: (accessToken, pet) => {
        dispatch(userAccountActions.deletePet(accessToken, pet));
        
      },
    },
  });

export const MoreActionPetComponent =  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(_MoreActionPetComponent);
  