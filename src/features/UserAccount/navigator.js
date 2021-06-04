import {createStackNavigator} from 'react-navigation-stack';

import { HomeContainer } from './screens/Home/home.container';
import { AddPetContainer } from './screens/AddPet/addpet.container';
import { UpdatePetContainer } from './screens/UpdatePet/updatepet.container';
import { UpdateProfileContainer } from './screens/UpdateProfile/update.container';
import { ChooseBreedContainer } from './screens/ChooseBreed/chooseBreed.container';


import Home from './screens';

export default UserAccountNavigator = createStackNavigator(
  {
    Home: {screen: HomeContainer},
    AddPet: {screen: AddPetContainer},
    UpdatePet: {screen: UpdatePetContainer},
    UpdateProfile: {screen: UpdateProfileContainer},
    ChooseBreed: {screen: ChooseBreedContainer},
  },
  {
    initialRouteName: 'Home',
  },
);
