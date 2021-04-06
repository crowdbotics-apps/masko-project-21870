import {createStackNavigator} from 'react-navigation-stack';

import { HomeContainer } from './screens/Home/home.container';
import { AddPetContainer } from './screens/AddPet/addpet.container';


import Home from './screens';

export default UserAccountNavigator = createStackNavigator(
  {
    Home: {screen: HomeContainer},
    AddPet: {screen: AddPetContainer},
  },
  {
    initialRouteName: 'Home',
  },
);
