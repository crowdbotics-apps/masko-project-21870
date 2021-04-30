import {createStackNavigator} from 'react-navigation-stack';

import { UserCartContainer } from './screens/Cart/userCart.container';
import { ServiceDetailsContainer } from 'src/features/Services/screens/Details/serviceDetails.container'
import { ProductDetailsContainer } from 'src/features/Services/screens/ProductDetails/productDetails.container'
import { ConfirmOrderContainer } from './screens/ConfirmOrder/confirmOrder.container'



export default CheckoutNavigator = createStackNavigator(
  {
    MyCart: { screen: UserCartContainer },
    ConfirmOrder: { screen: ConfirmOrderContainer },
    ServiceDetails: { screen: ServiceDetailsContainer },
    ProductDetails: { screen: ProductDetailsContainer }
  },
  {
    initialRouteName: 'MyCart',
  },
);
