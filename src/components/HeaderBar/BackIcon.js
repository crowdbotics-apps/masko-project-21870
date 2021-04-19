import React from "react";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions, StackActions } from "react-navigation";

export default function BackIcon({ navigation }) {
    return (
    <TouchableOpacity onPress={()=> navigation.pop() } >
           <Icon name="arrow-back" size={25} color={'#FFF'} style={{marginLeft:15}} />
    </TouchableOpacity>       
    );
  }

{/* */}