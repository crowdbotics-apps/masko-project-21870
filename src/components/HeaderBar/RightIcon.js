import { View } from 'react-native';

import CartIcon from 'src/assets/icons/cart-icon.svg';
import React from "react";
import { PetButton } from 'src/components/HeaderBar';

export default function RightIcon({ iconText, navigation }) {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', marginRight: 10}}>
                  <CartIcon width={25} style={{marginTop: 5, marginRight: 5}}   />
                  <PetButton navigation={navigation} />
                
                  
         </View> 
    );
  }

{/* */}