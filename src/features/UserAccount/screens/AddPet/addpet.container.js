import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { AddPet } from './addpet.component';
import {connect} from 'react-redux';
import * as userAccountActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { RightIcon } from 'src/components/HeaderBar';

export class _AddPetContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    console.log("Navigation Option")
    console.log(navigation)
    return {
                title: "Add Pet",
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
                headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'AddPetContainer';

  onAddButtonPress = data => {
    const { actions, accessToken } = this.props;
    actions.AddPet(accessToken, data)
  };

  onCancelButtonPress = data => {
    const { actions } = this.props;
    this.props.navigation.navigate("Home")
  };

  render() {
    return (
      <AddPet
        onAddButtonPress={this.onAddButtonPress}
        onCancelButtonPress={this.onCancelButtonPress}
        errorMsg={this.props.signInErrors}
        addLoading={this.props.addLoading}
        petTypes={this.props.petTypes}
        breedTypes={this.props.breedTypes}

      />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  user: state.EmailAuth.user,
  addLoading: state.UserAccount.loaders.AddPet,
  petTypes: state.UserAccount.petTypes,
  breedTypes: state.UserAccount.breedTypes
});

const mapDispatchToProps = dispatch => ({
  actions: {
    AddPet: (accessToken, pet) => {
      dispatch(userAccountActions.addPet(accessToken, pet));
    },
  },
});

export const AddPetContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_AddPetContainer);
