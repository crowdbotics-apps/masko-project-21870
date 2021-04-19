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
  Avatar
} from 'react-native-ui-kitten';

import {
  textStyle,
} from '../../components/common';

const width = Dimensions.get('screen').width

class _ServicesCatComponent extends React.Component {
  state = {
    username: '',
    password: '',
    items: [
      { title: 'Dog Bathing',  key: 'dogbathing', description: 'Any breed, we love them all',  image: require('src/assets/images/home-container/dog_bathing.png') },
      { title: 'Walking', key: 'walking', description: 'Any breed, we love them all', image: require('src/assets/images/home-container/walking.png') },
      { title: 'Food Products', key: 'foodproducts', description: 'Any breed, we love them all', image: require('src/assets/images/home-container/food_products.png') },
    ]
  };

  _onPress = (item) => {
    this.props.onPressCategory(item);
  }


  renderItem = ({ item, index, separators }) => {
    const { themedStyle } = this.props;
    return (<TouchableOpacity
      key={item.key}
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={themedStyle.container} >
   
        <Image  
         source={{
          uri: item.photo,
        }}
        style={themedStyle.imageStyle}
         />
        <View style={themedStyle.textContainer} >
            <Text style={themedStyle.textTitle}  >{item.name_en}</Text>
            <Text style={themedStyle.textDescription}  >{item.description_en}</Text>
        </View>
        
      </View>
    </TouchableOpacity>);
  }

  render() {
    
    const { items } = this.state;
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

export const ServicesCatComponent = withStyles(_ServicesCatComponent, theme => ({
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
    resizeMode: 'cover',
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
  }
}));
