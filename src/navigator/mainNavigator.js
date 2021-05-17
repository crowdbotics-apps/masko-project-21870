import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SideMenu from './sideMenu';
//@BlueprintImportInsertion

import BlankScreenNavigator from '../features/BlankScreen/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

import UserAccountNavigator from '../features/UserAccount/navigator';
import UserProfileNavigator from '../features/UserProfile/navigator';
import SettingsNavigator from '../features/Settings/navigator';
import NotificationListNavigator from '../features/NotificationList/navigator';
import MapsNavigator from '../features/Maps/navigator';
import AddItemNavigator from '../features/Additem/navigator';
import ServiceNavigator from '../features/Services/navigator';
import CheckoutNavigator from '../features/Checkout/navigator';


import { useSelector } from 'react-redux';
import * as storeSettings from '../store';
/**
 * new navigators can be imported here
 */
// alert(storeSettings.persistor.getState().EmailAuth)

console.log("Check Store Object ")
console.log(storeSettings)
//  const user = storeSettings().store.getState().EmailAuth.user;
 
 let initialRoute = 'EmailAuth'
// if(user){
//   initialRoute = UserAccount
// }


const AppNavigator = {

    //@BlueprintNavigationInsertion
// Additem: { screen: AdditemNavigator },
// Tutorial: { screen: TutorialNavigator },
// Settings172630: { screen: Settings172630Navigator },
// SignIn: { screen: SignInNavigator },
EmailAuth:  { screen: EmailAuthNavigator ,  navigationOptions: ({ navigation }) => ({
  swipeEnabled: true,
  gesturesEnabled: true,
  drawerLockMode: 'locked-closed',
})},
UserProfile: { screen: UserProfileNavigator },
Settings: { screen: SettingsNavigator },
NotificationList: { screen: NotificationListNavigator },
AddItem: {screen: AddItemNavigator},
Maps: { screen: MapsNavigator },
UserAccount: { screen: UserAccountNavigator},
Service: { screen: ServiceNavigator },
Checkout: { screen: CheckoutNavigator},

    /** new navigators can be added here */
    // SplashScreen:  { screen: SplashScreen ,  navigationOptions: ({ navigation }) => ({
    //   swipeEnabled: true,
    //   gesturesEnabled: true,
    //   drawerLockMode: 'locked-closed',
    // })},
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    initialRouteName: initialRoute,
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
