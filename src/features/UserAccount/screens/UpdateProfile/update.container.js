import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { View } from 'react-native';
import { UpdateProfile } from './update.component';
import {connect} from 'react-redux';
import * as userAccountActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { RightIcon } from 'src/components/HeaderBar';

import { translate }  from 'src/utils/translation';


export class _UpdateProfileContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
                title: translate('UpdateProfileNavTitle'),
                headerBackTitle: null,
                headerTintColor: '#fff',
                headerTitleStyle: { 
                    textAlign:"center", 
                    color: "#FFF",
                    fontFamily:"Montserrat",
                    flex:1 ,
                    border: null,
                },
                
                headerStyle: appConfig.headerStyle,
                headerRight: (<View />)
          }
  };
  navigationKey = 'UpdateProfileContainer';

  onUpdateButtonPress = data => {
    const { actions, accessToken } = this.props;
    actions.UpdateProfile(accessToken, data)
  };

  onCancelButtonPress = data => {
    const { actions } = this.props;
    this.props.navigation.navigate( appConfig.NAVIGATOR_ROUTE.Home )
  };

  onAddCardPress = data => {
    const { actions, accessToken } = this.props;
    actions.AddUnds(accessToken, data)
  };

  onSelectPetPress = ( item ) => {
    const { actions } = this.props;
    this.props.navigation.navigate("UpdatePet",{
      pet: item,
    })
    // actions.SelectPet(item);
  }

  render() {
    const { navigation } = this.props;
    return (
      <UpdateProfile
        navigation={navigation}
        onUpdateButtonPress={this.onUpdateButtonPress}
        onCancelButtonPress={this.onCancelButtonPress}
        onAddCardPress={this.onAddCardPress}
        onSelectPetPress={this.onSelectPetPress}
        errorMsg={this.props.signInErrors}
        updateLoading={this.props.updateLoading}
        addCardLoading={this.props.addCardLoading}
        addCardError={this.props.addCardError}
        
        petTypes={this.props.petTypes}
        breedTypes={this.props.breedTypes}
        user={this.props.user}
        unds={this.props.unds}
        userPets={this.props.userPets}
        selectedPet={this.props.selectedPet}
        

      />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  user: state.EmailAuth.user,
  unds: state.UserAccount.unds,
  updateLoading: state.UserAccount.loaders.UserProfileUpdate,
  addCardLoading: state.UserAccount.loaders.CardCreate,
  addCardError: state.UserAccount.errors.CardCreate,
  deleteCardLoading: state.UserAccount.loaders.CardDelete,
  updateCardLoading: state.UserAccount.loaders.CardUpdate,
  userPets: state.UserAccount.pets,
  selectedPet: state.UserAccount.selectedPet
});

const mapDispatchToProps = dispatch => ({
  actions: {
    UpdateProfile: (accessToken, user) => {
      dispatch( userAccountActions.updateProfile( accessToken, user ) );
    },
    AddUnds: (accessToken, cd) => {
      dispatch( userAccountActions.addCd( accessToken, cd ) );
    },
  },
});

export const UpdateProfileContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_UpdateProfileContainer);
