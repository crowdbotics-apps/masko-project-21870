import React from 'react';

import { UserCart } from './userCart.component';

import { connect } from 'react-redux';
import * as CheckoutActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';


export class _UserCartContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    // const { category } = navigation.state.params;
    titleText = translate('MyCartNavTitle');
    // if (category){
    //   titleText = category.getName();
    // }
    return {
                title: titleText,
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<HamBurgerIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                // headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'UserCartContainer';

  constructor( props ){
    super(props);
        const didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        this.setState({...this.state})
      }
    );

  }

  onPressQtyAdd = (item, pet, quantity) => {
    const { actions } = this.props;
    actions.updateQuantity(item, pet, quantity)
  }

  onPressQtySubtract = (item, pet, quantity) => {
    const { actions } = this.props;
    actions.updateQuantity(item, pet, quantity)
    
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <UserCart
          errorMsg={this.props.signInErrors}
          navigation={navigation}
          services={this.props.services}
          cart={this.props.cart}
          getServiceLoading={this.props.getServiceLoading}
          updateCartLoading={this.props.updateCartLoading}
          onPressQtyAdd={this.onPressQtyAdd}
          onPressQtySubtract={this.onPressQtySubtract}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  services: state.Service.services,
  getServiceLoading: state.Service.GetService,
  cart: state.Checkout.cart,
  updateCartLoading: state.Checkout.loaders.UpdateItemToCart
});

const mapDispatchToProps = dispatch => ({
  actions: {
    updateQuantity: ( item, pet, quantity ) => {
      dispatch(CheckoutActions.updateItemToCart( item, pet, quantity ));
    },
  },
});

export const UserCartContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_UserCartContainer);
