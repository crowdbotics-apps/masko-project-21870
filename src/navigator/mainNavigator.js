import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps159037Navigator from '../features/Maps159037/navigator';
import Settings159015Navigator from '../features/Settings159015/navigator';
import Settings159000Navigator from '../features/Settings159000/navigator';
import NotificationList158999Navigator from '../features/NotificationList158999/navigator';
import Maps158998Navigator from '../features/Maps158998/navigator';
import UserProfile158963Navigator from '../features/UserProfile158963/navigator';
import Maps158944Navigator from '../features/Maps158944/navigator';
import Settings158922Navigator from '../features/Settings158922/navigator';
import Settings158907Navigator from '../features/Settings158907/navigator';
import NotificationList158906Navigator from '../features/NotificationList158906/navigator';
import Maps158905Navigator from '../features/Maps158905/navigator';
import UserProfile158854Navigator from '../features/UserProfile158854/navigator';
import Maps158835Navigator from '../features/Maps158835/navigator';
import Settings158813Navigator from '../features/Settings158813/navigator';
import Settings158798Navigator from '../features/Settings158798/navigator';
import NotificationList158797Navigator from '../features/NotificationList158797/navigator';
import Maps158796Navigator from '../features/Maps158796/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps159037: { screen: Maps159037Navigator },
Settings159015: { screen: Settings159015Navigator },
Settings159000: { screen: Settings159000Navigator },
NotificationList158999: { screen: NotificationList158999Navigator },
Maps158998: { screen: Maps158998Navigator },
UserProfile158963: { screen: UserProfile158963Navigator },
Maps158944: { screen: Maps158944Navigator },
Settings158922: { screen: Settings158922Navigator },
Settings158907: { screen: Settings158907Navigator },
NotificationList158906: { screen: NotificationList158906Navigator },
Maps158905: { screen: Maps158905Navigator },
UserProfile158854: { screen: UserProfile158854Navigator },
Maps158835: { screen: Maps158835Navigator },
Settings158813: { screen: Settings158813Navigator },
Settings158798: { screen: Settings158798Navigator },
NotificationList158797: { screen: NotificationList158797Navigator },
Maps158796: { screen: Maps158796Navigator },

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
