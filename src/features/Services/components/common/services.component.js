import React from 'react';
import {
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  withStyles,
  Text,
  Button,
  Avatar
} from 'react-native-ui-kitten';

import {
  textStyle,
} from '../../components/common';

const width = Dimensions.get('screen').width
import { translate } from 'src/utils/translation';

class _ServicesComponent extends React.Component {
  
  _onPress = (item) => {
    this.props.onPressServiceItem(item)
  }


  renderItem = ({ item, index, separators }) => {
    const { themedStyle } = this.props;
    return (
      <View style={themedStyle.container} >
   
        <Image  
         source={{
          uri: item.photo,
        }}
        style={themedStyle.imageStyle}
         />
        <View style={themedStyle.textContainer} >
            <Text style={themedStyle.textTitle}  >{item.getName()}</Text>
            <Text style={themedStyle.textDescription}  >{item.getDescription()}</Text>
            <Button
              textStyle={themedStyle.yellowBtnText}
              status='primary'
              style={themedStyle.yellowBtn}
              onPress={() => this._onPress(item)}
              >{translate('AddToCartBtn')} - ${item.price}
              
            </Button>
        </View>
       
        
      </View>);
  }

  render() {
    
    const { data } = this.props;

    return (<FlatList
      ItemSeparatorComponent={
        Platform.OS !== 'android' &&
        (({ highlighted }) => (
          <View
            style={[
              // style.separator,
              highlighted && { marginLeft: 0 }
            ]}
          />
        ))
      }
      data={data}
      renderItem={this.renderItem}
    />);
  }
}

export const ServicesComponent = withStyles(_ServicesComponent, theme => ({
  container:{ 
    margin: 15,
    borderTopRadius: 15,
    borderRadius: 15,
    backgroundColor:'#FFF',
    alignSelf:'center',
    overflow: 'hidden'
  },
  imageStyle:{
    borderTopRadius: 10,
    width: width*0.9,
    height: 120,
  },
  textContainer:{
    padding: 10
  },
  textTitle:{
    fontFamily: "Montserrat",
    fontWeight: 'bold',
    fontSize: 14,
  },
  textDescription:{
    fontFamily: "Montserrat",
    fontSize: 12,
  },
  yellowBtn:{
        fontFamily: "Montserrat",
        borderRadius: 30,
        margin: 10,
        borderWidth: 0,
        width: 200,
        alignSelf: 'flex-start'
  },
  yellowBtnText:{
    fontSize: 14
  }
}));
