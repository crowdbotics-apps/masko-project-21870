import React from 'react';
import {
  View,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  withStyles,
  Avatar,
} from 'react-native-ui-kitten';

import {
  textStyle,
} from '../../components/common';


class _PetComponent extends React.Component {
  state = {
    username: '',
    password: '',
    items: [
      { title: 'Pet 1', key: 'pet1', image: require('src/assets/images/pets/pet1.png') },
      { title: 'Pet 2', key: 'pet2', image: require('src/assets/images/pets/pet2.png') },
      { title: 'Pet 3', key: 'pet3', image: require('src/assets/images/pets/pet1.png') },
      { title: 'Pet 4', key: 'pet4', image: require('src/assets/images/pets/pet2.png') }



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
      onHideUnderlay={separators.unhighlight} 
      >
      <View style={themedStyle.imageContainer} >
        <Avatar size='giant' source={item.image} />
      </View>
    </TouchableOpacity>);
  }

  render() {
    const { themedStyle } = this.props;
    const { items } = this.state;

    return (<FlatList
  
      horizontal={true}
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

export const PetComponent = withStyles(_PetComponent, theme => ({
  imageContainer:{
     padding: 5
     }
}));
