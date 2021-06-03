import React from 'react';

import { OrderDetails } from './orderDetails.component';

import { connect } from 'react-redux';
import * as CheckoutActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';



export class _OrderDetailsContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    titleText = translate('MyOrderDetailsNavTitle');
 
    return {
                title: titleText,
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<BackIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                // headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'OrderDetailsContainer';

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
      <OrderDetails
          errorMsg={this.props.signInErrors}
          navigation={navigation}
          order={navigation.state.params.order}
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

export const OrderDetailsContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_OrderDetailsContainer);
