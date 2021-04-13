/** @format */

import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';


export default class EmptyUserImage extends PureComponent {
  static TYPES = {
      FULL_SIZE: 1, 
      MEDIUM_SIZE: 2, 
      SMALL_SIZE: 3,
  }

  static getTypes(){
      return this.TYPES;
  }

  getConfig = () =>{

      const { type } = this.props;
      switch(type){
        case EmptyUserImage.TYPES.FULL_SIZE: 
            return {
                size: 50,
                class: styles.containerSize1,
            }
        
        case EmptyUserImage.TYPES.MEDIUM_SIZE: 
            return {
                size: 30,
                class: styles.containerSize2,
            }
        
        case EmptyUserImage.TYPES.SMALL_SIZE: 
            return {
                size: 20,
                class: styles.containerSize3,
            }
          
        

      }
    
  }  

  getIconName = () => {
    const { user } = this.props;  
    let defaultAvatar = "user";
    if( user.gender  && user.gender != "M"){
      defaultAvatar = "user-female";
    }
    return defaultAvatar;
  }

  render() {
    const { color, containerStyle } = this.props;

   

    config = this.getConfig()
    let defaultAvatar = this.getIconName();
    

    return (<SimpleLineIcon 
                name={defaultAvatar} 
                size={config.size}
                color={color} // "#4095EF"
                style={[config.class,containerStyle]} />);
  }
}

const styles = StyleSheet.create({
  containerSize1:{
    borderColor: '#E5E5E5',
    borderRadius: 35,
    borderWidth: 1,
    padding: 8
  },
  containerSize2:{
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10
  },
  containerSize3:{
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    padding: 8,
  }
});
