import { translate } from "src/utils/translation";

export const installed_blueprints = [
  //@BlueprintInsertion
{ name: 'Home', human_name: translate('SideMenuHome'), access_route: 'UserAccount'},
{ name: 'MyAccount', human_name: translate('SideMenuMyAccount'),  access_route: 'UpdateProfile'},
{ name: 'MyOrders', human_name: translate('SideMenuMyOrders'),  access_route: 'SignUp222'},
{ name: 'RecurringOrders', human_name:  translate('SideMenuRecurringOrders'), access_route: 'EmailAuth73163855', icon: 'envelope-o'},
// { name: 'AddItem', human_name: 'Sign out', access_route: 'AddItem222'}, 

  // you can add more installed blueprints here
  // access route is the route nate given to navigator
];
