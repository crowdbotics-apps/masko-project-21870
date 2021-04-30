import React from 'react';

import { ConfirmOrder } from './confirmOrder.component';

import { connect } from 'react-redux';
import * as CheckoutActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';

import { NavigationActions } from "react-navigation";


export class _ConfirmOrderContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    // const { category } = navigation.state.params;
    titleText = translate('ConfirmOrderNavTitle');
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
  navigationKey = 'ConfirmOrderContainer';

  constructor( props ){
    super(props);
        const didFocusSubscription = props.navigation.addListener(
            'didFocus',
            payload => {
              this.setState({...this.state})
            }
          );

  }

 

  onConfirmOrder = (data) => {
      const { actions, accessToken, cart } = this.props;
      actions.addOrder( accessToken, cart, data.paymentMethod )


  }
  
  render() {
    const { navigation } = this.props;
    return (
      <ConfirmOrder
          errorMsg={this.props.signInErrors}
          navigation={navigation}
          services={this.props.services}
          cart={this.props.cart}
          addOrderLoading={this.props.addOrderLoading}
          onConfirmOrder={this.onConfirmOrder}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  services: state.Service.services,
  getServiceLoading: state.Service.GetService,
  cart: state.Checkout.cart,
  addOrderLoading: state.Checkout.loaders.AddOrder
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addOrder: (  accessToken, cart, paymentMethod ) => {
      dispatch( CheckoutActions.submitOrder( accessToken, cart, paymentMethod ) );
    },
  },
});

export const ConfirmOrderContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ConfirmOrderContainer);
