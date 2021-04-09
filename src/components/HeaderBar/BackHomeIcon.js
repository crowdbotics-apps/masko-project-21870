import React from "react";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationActions, StackActions } from "react-navigation";

export default function BackHomeIcon({ navigation }) {
    return (
    <TouchableOpacity onPress={()=> navigation.navigate(
      'UserAccount', 
      {}, 
      NavigationActions.navigate({ 
          routeName: 'Home' 
      })
  ) } >
           <Icon name="back" size={20} color={'#FFF'} style={{marginLeft:15}} />
    </TouchableOpacity>       
    );
  }

{/* */}