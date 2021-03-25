import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion

import SignInNavigator from '../features/SignIn/navigator';
import BlankScreenNavigator from '../features/BlankScreen/navigator';
import SignUpNavigator from '../features/SignUp/navigator';
import UserProfileNavigator from '../features/UserProfile/navigator';
import SettingsNavigator from '../features/Settings/navigator';
import NotificationListNavigator from '../features/NotificationList/navigator';
import MapsNavigator from '../features/Maps/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
// Additem: { screen: AdditemNavigator },
// Tutorial: { screen: TutorialNavigator },
// Settings172630: { screen: Settings172630Navigator },
SignIn: { screen: SignInNavigator },
SignUp: { screen: SignUpNavigator },
UserProfile: { screen: UserProfileNavigator },
Settings: { screen: SettingsNavigator },
NotificationList: { screen: NotificationListNavigator },
Maps: { screen: MapsNavigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
