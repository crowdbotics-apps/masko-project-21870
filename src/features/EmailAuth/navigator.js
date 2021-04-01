import {createStackNavigator} from 'react-navigation-stack';

import {SignUp2Container} from './screens/signUp2/signUp2.container';
import {SignIn4Container} from './screens/signIn4/signIn4.container';
import { ForgetPasswordContainer } from './screens/forgetpassword/forgetPassword.container';


import Home from './screens';

export default EmailAuthNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignUp2: {screen: SignUp2Container},
    SignIn4: {screen: SignIn4Container},
    ForgetPassword: {screen: ForgetPasswordContainer},
  },
  {
    initialRouteName: 'SignUp2',
  },
);
