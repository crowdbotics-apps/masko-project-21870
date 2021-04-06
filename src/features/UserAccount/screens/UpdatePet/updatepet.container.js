import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { View } from 'react-native';
import { UpdatePet } from './updatepet.component';
import {connect} from 'react-redux';
import * as userAccountActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { MoreActionPetComponent } from '../../components/common/moreAction.component';

import { RightIcon } from 'src/components/HeaderBar';

export class _UpdatePetContainer extends React.Component {

  constructor(props){
    super(props);
    // this.state.pet = navigation.state.params.pet;
  }


  static navigationOptions = ({ navigation }) => {
  
    const { pet } = navigation.state.params;
    titleText = "Update Pet";
    if (pet){
      titleText = pet.name;
    }
    return {
                title: titleText,
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
                headerRight: (<MoreActionPetComponent
                                pet={pet}
                                navigation={navigation}
                            />)
          }
  };
  navigationKey = 'UpdatePetContainer';

  onNextButtonPress = data => {
    const { actions, accessToken } = this.props;
    actions.UpdatePet(accessToken, data)
  };

 

  onCancelButtonPress = data => {
    const { actions } = this.props;
    this.props.navigation.navigate("Home")
  };

  render() {
    const { navigation } = this.props;
    return (
      <UpdatePet
        onNextButtonPress={this.onNextButtonPress}
        onCancelButtonPress={this.onCancelButtonPress}
        errorMsg={this.props.signInErrors}
        updateLoading={this.props.updateLoading}
        petTypes={this.props.petTypes}
        breedTypes={this.props.breedTypes}
        navigation={navigation}

      />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  user: state.EmailAuth.user,
  updateLoading: state.UserAccount.loaders.UpdatePet,
  petTypes: state.UserAccount.petTypes,
  breedTypes: state.UserAccount.breedTypes
});

const mapDispatchToProps = dispatch => ({
  actions: {
    UpdatePet: (accessToken, pet) => {
      dispatch(userAccountActions.updatePet(accessToken, pet));
    },
  },
});

export const UpdatePetContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_UpdatePetContainer);
