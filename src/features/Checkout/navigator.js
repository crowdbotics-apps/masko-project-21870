import {createStackNavigator} from 'react-navigation-stack';

import { UserCartContainer } from './screens/Cart/userCart.container';
import { ServiceDetailsContainer } from 'src/features/Services/screens/Details/serviceDetails.container'



export default CheckoutNavigator = createStackNavigator(
  {
    MyCart: {screen: UserCartContainer},
    ServiceDetails: {screen: ServiceDetailsContainer}
  },
  {
    initialRouteName: 'MyCart',
  },
);
