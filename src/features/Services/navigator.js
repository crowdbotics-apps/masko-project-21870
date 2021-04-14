import {createStackNavigator} from 'react-navigation-stack';

import { ServiceListContainer } from './screens/List/serviceList.container';



export default ServiceNavigator = createStackNavigator(
  {
    ServiceList: {screen: ServiceListContainer},
  },
  {
    initialRouteName: 'ServiceList',
  },
);
