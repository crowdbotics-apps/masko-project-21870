import {createStackNavigator} from 'react-navigation-stack';

import { ServiceListContainer } from './screens/List/serviceList.container';
import { ServiceDetailsContainer } from './screens/Details/serviceDetails.container';



export default ServiceNavigator = createStackNavigator(
  {
    ServiceList: {screen: ServiceListContainer},
    ServiceDetails: {screen: ServiceDetailsContainer},
  },
  {
    initialRouteName: 'ServiceList',
  },
);
