import {createStackNavigator} from 'react-navigation-stack';

import { ServiceListContainer } from './screens/List/serviceList.container';
import { ProductListContainer } from './screens/ProductList/productList.container';
import { ProductDetailsContainer } from './screens/ProductDetails/productDetails.container';

import { ServiceDetailsContainer } from './screens/Details/serviceDetails.container';



export default ServiceNavigator = createStackNavigator(
  {
    ServiceList: {screen: ServiceListContainer},
    ProductList: {screen: ProductListContainer},
    ProductDetails: {screen: ProductDetailsContainer},
    ServiceDetails: {screen: ServiceDetailsContainer},
  },
  {
    initialRouteName: 'ServiceList',
  },
);
