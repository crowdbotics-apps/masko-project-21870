import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
