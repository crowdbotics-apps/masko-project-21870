import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';
import React from "react";

import ActionSheet from 'react-native-actionsheet';
import { fromPairs } from 'lodash';
import * as userAccountActions from '../../redux/actions';
import * as utils from 'src/utils/alertUtil';
import * as NavigationService from 'src/navigator/NavigationService';

export class _MoreActionPetComponent extends React.Component {

    constructor(props){
        super(props);
    }

    selectPet = () => {
        const { pet, actions } = this.props;
        actions.selectPet(pet);
        utils.showSuccessAlert("Pet Selected Successfully.")
        NavigationService.navigate('Home');
        // navigation.navigate("Home");

    }

    deletePet = () => {
        utils.showConfirmDialog("Are you sure you want to delete this pet?",this.confirmDeletePet, ()=>{
            console.log("Cancel Pressed");
        } )
    }

    confirmDeletePet = () => {
        const { pet, accessToken, actions } = this.props;
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
                        title={'Please select from following options'}
                        options={['Choose pet', 'Delete pet', 'Cancel']}
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
  