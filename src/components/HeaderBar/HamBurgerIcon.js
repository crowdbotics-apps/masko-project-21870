import React from "react";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HamBurgerIcon({ navigation }) {
    return (
    <TouchableOpacity onPress={()=> navigation.toggleDrawer() } >
           <Icon name="menu" size={25} color={'#FFF'} style={{marginLeft:15}} />
    </TouchableOpacity>       
    );
  }

{/* */}