import {createStackNavigator} from 'react-navigation-stack';

import {SignIn4Container} from './screens/signIn4/signIn4.container';

import Home from './screens/';

export default SignIn04BlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignIn4: {screen: SignIn4Container},
  },
  {
    initialRouteName: 'Home',
  },
);
