import React from "react";
import { View } from 'react-native';
import SmallLogo from 'src/assets/images/masko-logo-small.svg';

const style = {
  alignItems: 'center',
  justifyContent: 'center',
  flex:1
}

export default function LogoIcon({ navigation }) {
    return (<View style={style} >
    <SmallLogo   navigation={navigation} />
    </View>);
  }

{/* */}