import {createStackNavigator} from 'react-navigation-stack';

import { HomeContainer } from './screens/Home/home.container';


import Home from './screens';

export default UserAccountNavigator = createStackNavigator(
  {
    Home: {screen: HomeContainer},
  },
  {
    initialRouteName: 'Home',
  },
);
