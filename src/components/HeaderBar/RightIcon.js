import { View } from 'react-native';

import CartIcon from 'src/assets/icons/cart-icon.svg';
import React from "react";

export default function RightIcon({ iconText }) {
    return (
        <View style={{flex:1, flexDirection:'row'}}>
                  <CartIcon width={50}   />
            {/* <Avatar source={require('src/assets/images/pets/pet1.png') } /> */}
         </View> 
    );
  }

{/* */}