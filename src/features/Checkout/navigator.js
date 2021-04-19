import {createStackNavigator} from 'react-navigation-stack';

import { UserCartContainer } from './screens/Cart/userCart.container';



export default CheckoutNavigator = createStackNavigator(
  {
    MyCart: {screen: UserCartContainer},
  },
  {
    initialRouteName: 'MyCart',
  },
);
