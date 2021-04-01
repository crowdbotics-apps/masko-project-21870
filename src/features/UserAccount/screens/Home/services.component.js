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
  Text
} from 'react-native-ui-kitten';

import {
  textStyle,
} from '../../components/common';


class _ServicesComponent extends React.Component {
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
    console.log("Item Pressed")
  }


  renderItem = ({ item, index, separators }) => {
    const { themedStyle } = this.props;
    return (<TouchableOpacity
      key={item.key}
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={themedStyle.container} >
        <Image  source={item.image} style={themedStyle.imageStyle} />
        <View style={themedStyle.textContainer} >
            <Text style={themedStyle.textTitle}  >{item.title}</Text>
            <Text style={themedStyle.textDescription}  >{item.description}</Text>
        </View>
        
      </View>
    </TouchableOpacity>);
  }

  render() {
    
    const { items } = this.state;

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
      data={items}
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
    alignSelf:'center'
  },
  imageStyle:{
    borderTopRadius: 10,
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
