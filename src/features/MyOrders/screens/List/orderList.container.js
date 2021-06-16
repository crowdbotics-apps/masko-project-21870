import React from 'react';

import { OrderList } from './orderList.component';
import { View } from 'react-native';
import {connect} from 'react-redux';
import * as MyOrderActions from '../../redux/actions';
import appConfig from 'src/config/app';
import * as utils from '../../utils/general';

import { HamBurgerIcon, RightIcon, LogoIcon } from 'src/components/HeaderBar';

import * as NavigationService from 'src/navigator/NavigationService';

import { translate }  from 'src/utils/translation';


export class _OrderListContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    titleText = translate('MyOrderListNavTitle');
  
    return {
                title: titleText,
                headerLeft: (<HamBurgerIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                headerRight: (<View />)
          }
  };
  navigationKey = 'RecurringOrderListContainer';

  constructor( props ){
    super(props);
    this.state = {
      searchKeyword: '',
    }

  }

 
  getMyOrders = ( from_date, to_date ) => {
    const { accessToken, actions, navigation } = this.props;
    actions.getMyOrders( accessToken, from_date, to_date );
  }

  

  onPressOrderItem = (item) => {
    const { navigation, userPets  } = this.props;

    let formattedProducts = utils.formatOrderDetailsProducts(item, userPets)
    let item2 = {
          ...item,
          formattedItem: formattedProducts
    }
    navigation.navigate("OrderDetails",{
      order: item2 
    })
    
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <OrderList
        navigation={navigation}
        orders={this.props.orders}
        getMyOrderLoading={this.props.getMyOrderLoading}
        onPressOrderItem={this.onPressOrderItem}
        getMyOrdersCb={this.getMyOrders}
        resetMyOrderState={this.props.resetMyOrderState}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  orders: state.MyOrder.orders,
  getMyOrderLoading: state.MyOrder.ListMyOrder,
  userPets: state.UserAccount.pets,
  resetMyOrderState: state.MyOrder.formReset.MyOrders
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getMyOrders: ( accessToken , from_date, to_date ) => {
      dispatch(MyOrderActions.getMyOrders( accessToken, from_date, to_date ));
    },
  },
});

export const OrderListContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_OrderListContainer);
