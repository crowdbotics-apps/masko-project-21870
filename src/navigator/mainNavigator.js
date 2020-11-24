import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen5178297Navigator from '../features/CopyOfBlankScreen5178297/navigator';
import CopyOfCopyOfBlankScreen5178289Navigator from '../features/CopyOfCopyOfBlankScreen5178289/navigator';
import CopyOfSignIn474178288Navigator from '../features/CopyOfSignIn474178288/navigator';
import CopyOfBlankScreen5178286Navigator from '../features/CopyOfBlankScreen5178286/navigator';
import UserProfile172668Navigator from '../features/UserProfile172668/navigator';
import Tutorial172667Navigator from '../features/Tutorial172667/navigator';
import NotificationList172639Navigator from '../features/NotificationList172639/navigator';
import Settings172630Navigator from '../features/Settings172630/navigator';
import UserProfile172628Navigator from '../features/UserProfile172628/navigator';
import CopyOfCopyOfBlankScreen5164365Navigator from '../features/CopyOfCopyOfBlankScreen5164365/navigator';
import CopyOfCopyOfBlankScreen5164364Navigator from '../features/CopyOfCopyOfBlankScreen5164364/navigator';
import CopyOfCopyOfBlankScreen5164362Navigator from '../features/CopyOfCopyOfBlankScreen5164362/navigator';
import CopyOfCopyOfBlankScreen5164361Navigator from '../features/CopyOfCopyOfBlankScreen5164361/navigator';
import CopyOfCopyOfBlankScreen5164355Navigator from '../features/CopyOfCopyOfBlankScreen5164355/navigator';
import CopyOfBlankScreen5164353Navigator from '../features/CopyOfBlankScreen5164353/navigator';
import CopyOfBlankScreen5164352Navigator from '../features/CopyOfBlankScreen5164352/navigator';
import CopyOfBlankScreen5164351Navigator from '../features/CopyOfBlankScreen5164351/navigator';
import CopyOfBlankScreen5164350Navigator from '../features/CopyOfBlankScreen5164350/navigator';
import CopyOfBlankScreen5164349Navigator from '../features/CopyOfBlankScreen5164349/navigator';
import CopyOfBlankScreen5164348Navigator from '../features/CopyOfBlankScreen5164348/navigator';
import CopyOfBlankScreen5164347Navigator from '../features/CopyOfBlankScreen5164347/navigator';
import CopyOfBlankScreen5164276Navigator from '../features/CopyOfBlankScreen5164276/navigator';
import CopyOfBlankScreen5164275Navigator from '../features/CopyOfBlankScreen5164275/navigator';
import CopyOfBlankScreen5164274Navigator from '../features/CopyOfBlankScreen5164274/navigator';
import CopyOfCopyOfBlankScreen5164273Navigator from '../features/CopyOfCopyOfBlankScreen5164273/navigator';
import CopyOfBlankScreen5164253Navigator from '../features/CopyOfBlankScreen5164253/navigator';
import CopyOfCopyOfBlankScreen5164057Navigator from '../features/CopyOfCopyOfBlankScreen5164057/navigator';
import CopyOfCopyOfBlankScreen5164055Navigator from '../features/CopyOfCopyOfBlankScreen5164055/navigator';
import CopyOfCopyOfBlankScreen5164032Navigator from '../features/CopyOfCopyOfBlankScreen5164032/navigator';
import CopyOfBlankScreen5164031Navigator from '../features/CopyOfBlankScreen5164031/navigator';
import CopyOfCopyOfBlankScreen5164030Navigator from '../features/CopyOfCopyOfBlankScreen5164030/navigator';
import CopyOfCopyOfBlankScreen5164029Navigator from '../features/CopyOfCopyOfBlankScreen5164029/navigator';
import CopyOfCopyOfBlankScreen5164028Navigator from '../features/CopyOfCopyOfBlankScreen5164028/navigator';
import CopyOfCopyOfBlankScreen5164027Navigator from '../features/CopyOfCopyOfBlankScreen5164027/navigator';
import CopyOfCopyOfBlankScreen5164026Navigator from '../features/CopyOfCopyOfBlankScreen5164026/navigator';
import CopyOfBlankScreen5164025Navigator from '../features/CopyOfBlankScreen5164025/navigator';
import CopyOfBlankScreen5164024Navigator from '../features/CopyOfBlankScreen5164024/navigator';
import CopyOfBlankScreen5164023Navigator from '../features/CopyOfBlankScreen5164023/navigator';
import CopyOfBlankScreen5164022Navigator from '../features/CopyOfBlankScreen5164022/navigator';
import CopyOfBlankScreen5163931Navigator from '../features/CopyOfBlankScreen5163931/navigator';
import CopyOfBlankScreen5163928Navigator from '../features/CopyOfBlankScreen5163928/navigator';
import CopyOfBlankScreen5163927Navigator from '../features/CopyOfBlankScreen5163927/navigator';
import CopyOfCopyOfBlankScreen5163883Navigator from '../features/CopyOfCopyOfBlankScreen5163883/navigator';
import CopyOfCopyOfBlankScreen5163881Navigator from '../features/CopyOfCopyOfBlankScreen5163881/navigator';
import CopyOfBlankScreen5163879Navigator from '../features/CopyOfBlankScreen5163879/navigator';
import BlankScreen5163878Navigator from '../features/BlankScreen5163878/navigator';
import BlankScreen4163877Navigator from '../features/BlankScreen4163877/navigator';
import BlankScreen85163876Navigator from '../features/BlankScreen85163876/navigator';
import Settings48163861Navigator from '../features/Settings48163861/navigator';
import SignIn474163859Navigator from '../features/SignIn474163859/navigator';
import SignUp271163857Navigator from '../features/SignUp271163857/navigator';
import Maps161560Navigator from '../features/Maps161560/navigator';
import Add-Item161559Navigator from '../features/Add-Item161559/navigator';
import Maps161555Navigator from '../features/Maps161555/navigator';
import UserProfile161551Navigator from '../features/UserProfile161551/navigator';
import UserProfile159056Navigator from '../features/UserProfile159056/navigator';
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
CopyOfBlankScreen5178297: { screen: CopyOfBlankScreen5178297Navigator },
CopyOfCopyOfBlankScreen5178289: { screen: CopyOfCopyOfBlankScreen5178289Navigator },
CopyOfSignIn474178288: { screen: CopyOfSignIn474178288Navigator },
CopyOfBlankScreen5178286: { screen: CopyOfBlankScreen5178286Navigator },
UserProfile172668: { screen: UserProfile172668Navigator },
Tutorial172667: { screen: Tutorial172667Navigator },
NotificationList172639: { screen: NotificationList172639Navigator },
Settings172630: { screen: Settings172630Navigator },
UserProfile172628: { screen: UserProfile172628Navigator },
CopyOfCopyOfBlankScreen5164365: { screen: CopyOfCopyOfBlankScreen5164365Navigator },
CopyOfCopyOfBlankScreen5164364: { screen: CopyOfCopyOfBlankScreen5164364Navigator },
CopyOfCopyOfBlankScreen5164362: { screen: CopyOfCopyOfBlankScreen5164362Navigator },
CopyOfCopyOfBlankScreen5164361: { screen: CopyOfCopyOfBlankScreen5164361Navigator },
CopyOfCopyOfBlankScreen5164355: { screen: CopyOfCopyOfBlankScreen5164355Navigator },
CopyOfBlankScreen5164353: { screen: CopyOfBlankScreen5164353Navigator },
CopyOfBlankScreen5164352: { screen: CopyOfBlankScreen5164352Navigator },
CopyOfBlankScreen5164351: { screen: CopyOfBlankScreen5164351Navigator },
CopyOfBlankScreen5164350: { screen: CopyOfBlankScreen5164350Navigator },
CopyOfBlankScreen5164349: { screen: CopyOfBlankScreen5164349Navigator },
CopyOfBlankScreen5164348: { screen: CopyOfBlankScreen5164348Navigator },
CopyOfBlankScreen5164347: { screen: CopyOfBlankScreen5164347Navigator },
CopyOfBlankScreen5164276: { screen: CopyOfBlankScreen5164276Navigator },
CopyOfBlankScreen5164275: { screen: CopyOfBlankScreen5164275Navigator },
CopyOfBlankScreen5164274: { screen: CopyOfBlankScreen5164274Navigator },
CopyOfCopyOfBlankScreen5164273: { screen: CopyOfCopyOfBlankScreen5164273Navigator },
CopyOfBlankScreen5164253: { screen: CopyOfBlankScreen5164253Navigator },
CopyOfCopyOfBlankScreen5164057: { screen: CopyOfCopyOfBlankScreen5164057Navigator },
CopyOfCopyOfBlankScreen5164055: { screen: CopyOfCopyOfBlankScreen5164055Navigator },
CopyOfCopyOfBlankScreen5164032: { screen: CopyOfCopyOfBlankScreen5164032Navigator },
CopyOfBlankScreen5164031: { screen: CopyOfBlankScreen5164031Navigator },
CopyOfCopyOfBlankScreen5164030: { screen: CopyOfCopyOfBlankScreen5164030Navigator },
CopyOfCopyOfBlankScreen5164029: { screen: CopyOfCopyOfBlankScreen5164029Navigator },
CopyOfCopyOfBlankScreen5164028: { screen: CopyOfCopyOfBlankScreen5164028Navigator },
CopyOfCopyOfBlankScreen5164027: { screen: CopyOfCopyOfBlankScreen5164027Navigator },
CopyOfCopyOfBlankScreen5164026: { screen: CopyOfCopyOfBlankScreen5164026Navigator },
CopyOfBlankScreen5164025: { screen: CopyOfBlankScreen5164025Navigator },
CopyOfBlankScreen5164024: { screen: CopyOfBlankScreen5164024Navigator },
CopyOfBlankScreen5164023: { screen: CopyOfBlankScreen5164023Navigator },
CopyOfBlankScreen5164022: { screen: CopyOfBlankScreen5164022Navigator },
CopyOfBlankScreen5163931: { screen: CopyOfBlankScreen5163931Navigator },
CopyOfBlankScreen5163928: { screen: CopyOfBlankScreen5163928Navigator },
CopyOfBlankScreen5163927: { screen: CopyOfBlankScreen5163927Navigator },
CopyOfCopyOfBlankScreen5163883: { screen: CopyOfCopyOfBlankScreen5163883Navigator },
CopyOfCopyOfBlankScreen5163881: { screen: CopyOfCopyOfBlankScreen5163881Navigator },
CopyOfBlankScreen5163879: { screen: CopyOfBlankScreen5163879Navigator },
BlankScreen5163878: { screen: BlankScreen5163878Navigator },
BlankScreen4163877: { screen: BlankScreen4163877Navigator },
BlankScreen85163876: { screen: BlankScreen85163876Navigator },
Settings48163861: { screen: Settings48163861Navigator },
SignIn474163859: { screen: SignIn474163859Navigator },
SignUp271163857: { screen: SignUp271163857Navigator },
Maps161560: { screen: Maps161560Navigator },
Add-Item161559: { screen: Add-Item161559Navigator },
Maps161555: { screen: Maps161555Navigator },
UserProfile161551: { screen: UserProfile161551Navigator },
UserProfile159056: { screen: UserProfile159056Navigator },
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
