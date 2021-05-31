import {createStackNavigator} from 'react-navigation-stack';

import { OrderListContainer } from './screens/List/orderList.container';
import { OrderDetailsContainer } from './screens/Details/orderDetails.container';


export default MyOrderNavigator = createStackNavigator(
  {
    OrderList: { screen: OrderListContainer },
    OrderDetails: { screen: OrderDetailsContainer }
  },
  {
    initialRouteName: 'OrderList',
  },
);
