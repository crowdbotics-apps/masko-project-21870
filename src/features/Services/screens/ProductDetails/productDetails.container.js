import React from 'react';

import { ProductDetails } from './productDetails.component';

import { connect } from 'react-redux';
import * as CheckoutActions from 'src/features/Checkout/redux/actions';
import appConfig from 'src/config/app';

import { BackIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';



export class _ProductDetailsContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    let category = null;
    // if (navigation.state.params && navigation.state.params.category){
    //   category = navigation.state.params.category
    // }

    titleText = translate('ProductDetailsNavTitle');
    if (category){
      titleText = category.getName();
    }
    
    return {
                title: titleText,
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<BackIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon navigation={navigation} />)
          }
  };
  navigationKey = 'ProductDetailsContainer';

  constructor(props){
    super(props);
  }

  onAddButtonPress = (data) => {
    const { actions } = this.props;
    actions.addItemToCart(data)
  }

  onSelectPetPress = ( item ) => {
    const { actions } = this.props;
   
    // actions.SelectPet(item);
  }
  
  
  render() {
    const { navigation } = this.props;

    let userSelection = null;
    let userSelectedPets = null;

    if (navigation.state.params && navigation.state.params.item){
      userSelection = navigation.state.params.item.userSelection
      userSelectedPets =navigation.state.params.item.pets
    }
    return (
      <ProductDetails
        errorMsg={this.props.signInErrors}
        navigation={navigation}
        product={this.props.product}
        getServiceLoading={this.props.getServiceLoading}
        userPets={this.props.userPets}
        selectedPet={this.props.selectedPet}
        onAddButtonPress={this.onAddButtonPress}
        onSelectPetPress={this.onSelectPetPress}
        addItemToCartLoading={this.props.addItemToCartLoading}
        userSelection={userSelection}
        userSelectedPets={userSelectedPets}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  services: state.Service.services,
  getServiceLoading: state.Service.GetService,
  userPets: state.UserAccount.pets,
  selectedPet: state.UserAccount.selectedPet,
  addItemToCartLoading: state.Checkout.loaders.AddItemToCart
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addItemToCart: ({type, item, pets, userSelection}) => {
      dispatch( CheckoutActions.addItemToCart( type, item, pets, userSelection ));
    },
  },
});

export const ProductDetailsContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ProductDetailsContainer);
