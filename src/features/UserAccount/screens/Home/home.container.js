import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import { NavigationActions } from "react-navigation";
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
                headerTitleAlign: 'center',

                headerTitleStyle: { 
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    flexGrow: 1,
                    flex:1 ,
                    border: null,
                },
                
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon navigation={navigation} />)
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
    if(item.id == 3){

        this.props.navigation.navigate('Service', 
        {}, 
        NavigationActions.navigate({ 
            routeName: 'ProductList' ,
            params: {category: item}
        }));

        // this.props.navigation.navigate("ProductList",{
        //   category: item,
        // })
       
    }else{
      this.props.navigation.navigate("ServiceList",{
        category: item,
      })
    }

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
        showPetSelector={this.props.showPetSelector}

      />
    );
  }
}

const mapStateToProps = state => ({
  // signInErrors: state.SignIn04Blueprint.errors.SignIn,
  userPets: state.UserAccount.pets,
  serviceCat: state.Service.categories,
  selectedPet: state.UserAccount.selectedPet,
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
