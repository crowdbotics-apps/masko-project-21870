import {createStackNavigator} from 'react-navigation-stack';

import { ForgetPasswordContainer } from './screens/forgetpassword/forgetPassword.container';

import Home from './screens/';

export default ForgetPasswordNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    ForgetPassword: {screen: ForgetPasswordContainer},
  },
  {
    initialRouteName: 'ForgetPassword',
  },
);
