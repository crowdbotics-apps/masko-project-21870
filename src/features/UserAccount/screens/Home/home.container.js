import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { Home } from './home.component';
import {connect} from 'react-redux';
import * as userAccountActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { LogoIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';

export class _HomeContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
   
    return {
                headerTitle: (<LogoIcon navigation={navigation} />),
                headerBackTitle: null,
                headerLeft: (<HamBurgerIcon navigation={navigation} />),
                headerTitleStyle: { 
                    textAlign:"center", 
                    flex:1 ,
                    border: null,
                },
                
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'HomeContainer';

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
      <Home
       
        errorMsg={this.props.signInErrors}
        navigation={navigation}
        userPets={this.props.userPets}
        selectedPet={this.props.selectedPet}
        onSelectPetPress={this.onSelectPetPress}

      />
    );
  }
}

const mapStateToProps = state => ({
  // signInErrors: state.SignIn04Blueprint.errors.SignIn,
  userPets: state.UserAccount.pets,
  selectedPet: state.UserAccount.selectedPet
});

const mapDispatchToProps = dispatch => ({
  actions: {
    SelectPet: (pet) => {
      dispatch(userAccountActions.setPet(pet));
    },
  },
});

export const HomeContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_HomeContainer);
