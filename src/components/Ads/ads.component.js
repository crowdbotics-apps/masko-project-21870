import React from 'react';
import {
  Image,
  Dimensions,
} from 'react-native';

import {
  withStyles,
} from 'react-native-ui-kitten';

const width = Dimensions.get('screen').width


class _AdComponent extends React.Component {

  render() {
      return (<Image
            style={{'width': width, height: 200}}
            source={require('src/assets/images/home-container/add-display.png')
                  }
      />);
  }
}

export const AdComponent = withStyles(_AdComponent, theme => ({
    container:{
      backgroundColor: "#FFCD3E",
      padding: 20,
      height: 140,
      position: "absolute",
      top: 15,
      zIndex: 2,
      width: width,
      marginLeft: 0,
      left: 0,
    },
    headLabel:{
      color: "#FFF",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 15,

    },
    imageContainer:{
     padding: 5,
     
     },
     addContainer:{
        marginTop: 5,
        marginRight: 2, 
        backgroundColor:"#A0B0DC",
        borderWidth: 2,
        borderColor: "#FFF",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center'
      } ,
      addContainerText:{
        fontFamily: "Montserrat",
        alignSelf: "center",
        color: "#FFF",
        fontWeight:"bold",
        fontSize: 10

      },
      imgContChild:{ 
        width:60,
        height:60,
        opacity: 0.4
      },
      imgContChildSel:{ 
        borderWidth: 2,
        borderColor: "#FFF",
        width:60,
        height:60,
      },
      
}));
