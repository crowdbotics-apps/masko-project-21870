import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { Home } from './home.component';
import {connect} from 'react-redux';
import * as userAccountActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { LogoIcon, RightIcon, HamBurgerIcon, PetButton } from 'src/components/HeaderBar';

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

  onPressCategory = ( item ) => {
    this.props.navigation.navigate("ServiceList",{
      category: item,
    })

  }
 
  render() {
    const { navigation } = this.props;
    return (
      <Home
       
        errorMsg={this.props.signInErrors}
        navigation={navigation}
        serviceCat={this.props.serviceCat}
        userPets={this.props.userPets}
        selectedPet={this.props.selectedPet}
        onSelectPetPress={this.onSelectPetPress}
        onPressCategory={this.onPressCategory}

      />
    );
  }
}

const mapStateToProps = state => ({
  // signInErrors: state.SignIn04Blueprint.errors.SignIn,
  userPets: state.UserAccount.pets,
  serviceCat: state.Service.categories,
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
