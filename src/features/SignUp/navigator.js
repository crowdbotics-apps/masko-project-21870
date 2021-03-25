import {createStackNavigator} from 'react-navigation-stack';

import {SignUp2Container} from './screens/signUp2/signUp2.container';

import Home from './screens';

export default SignUp02BlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignUp2: {screen: SignUp2Container},
  },
  {
    initialRouteName: 'Home',
  },
);
