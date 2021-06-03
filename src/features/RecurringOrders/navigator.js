import {createStackNavigator} from 'react-navigation-stack';

import { OrderListContainer } from './screens/List/orderList.container';
import { OrderDetailsContainer } from './screens/Details/orderDetails.container';
import { ProductDetailsContainer } from 'src/features/Services/screens/ProductDetails/productDetails.container';


export default RecurrOrderNavigator = createStackNavigator(
  {
    OrderList: { screen: OrderListContainer },
    OrderDetails: { screen: OrderDetailsContainer },
    ProductDetails: { screen : ProductDetailsContainer }
  },
  {
    initialRouteName: 'OrderList',
  },
);
