import React from 'react';

import { OrderList } from './orderList.component';
import { View } from 'react-native';
import {connect} from 'react-redux';
import * as RecurrOrderActions from '../../redux/actions';
import appConfig from 'src/config/app';
import * as utils from '../../utils/general';

import { HamBurgerIcon, RightIcon, LogoIcon } from 'src/components/HeaderBar';

import * as NavigationService from 'src/navigator/NavigationService';

import { translate }  from 'src/utils/translation';


export class _OrderListContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    titleText = translate('RecurrOrderListNavTitle');
  
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

  componentDidUpdate(prevProps, prevState, snapshot){
   
  }


  getRecurringOrders = ( from_date, to_date ) => {
    const { accessToken, actions, navigation } = this.props;
    actions.getRecurringOrder( accessToken, from_date, to_date );
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
        getRecurrOrderLoading={this.props.getRecurrOrderLoading}
        onPressOrderItem={this.onPressOrderItem}
        getRecurringOrderCb={this.getRecurringOrders}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  orders: state.RecurringOrder.orders,
  getRecurrOrderLoading: state.RecurringOrder.ListRecurOrder,
  userPets: state.UserAccount.pets,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getRecurringOrder: ( accessToken , from_date, to_date ) => {
      dispatch(RecurrOrderActions.getRecuringOrders( accessToken, from_date, to_date ));
    },
  },
});

export const OrderListContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_OrderListContainer);
