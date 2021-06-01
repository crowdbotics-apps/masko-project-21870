import React from 'react';

import { OrderDetails } from './orderDetails.component';

import { connect } from 'react-redux';
import * as CheckoutActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';



export class _OrderDetailsContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    titleText = translate('RecurringOrderDetailsNavTitle');
 
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

 

  onCancelSubscription = () => {
      const { actions, accessToken, navigation  } = this.props;
      actions.cancelSubscription( accessToken, navigation.state.params.order  )


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
          cancelOrderLoading={this.props.cancelOrderLoading}
          onCancelSubscription={this.onCancelSubscription}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  services: state.Service.services,
  getServiceLoading: state.Service.GetService,
  cart: state.Checkout.cart,
  addOrderLoading: state.Checkout.loaders.AddOrder,
  cancelOrderLoading: state.RecurringOrder.loaders.CancelRecurOrder,

});

const mapDispatchToProps = dispatch => ({
  actions: {
   
    cancelSubscription: (  accessToken, order ) => {
      dispatch( CheckoutActions.cancelSubscription( accessToken, order ) );
    },
  },
});

export const OrderDetailsContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_OrderDetailsContainer);
