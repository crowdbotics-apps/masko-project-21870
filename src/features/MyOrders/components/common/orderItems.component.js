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


import * as genUtils from 'src/utils/general';

class _OrderItemsComponent extends React.Component {
  
  _onPress = (item) => {
    this.props.onPressServiceItem(item)
  }



  _onPressQtyAdd = (item, pet) => {
    this.props.onPressQtyAdd(item,pet)
  }

  _onPressQtySubtract = (item, pet) => {
    this.props.onPressQtySubtract(item,pet)

  }
    
  onItemPress = (item) => {
      this.props.onItemPress(item)
  }


  renderProductItem = ({ item, index, separators }) => {
    const name = (item.product)?item.product.name_en:'';
    const { themedStyle } = this.props;
    const price = item.totalQty * item.source.unit_price;
    return (
    <View style={themedStyle.itemContainer}>
      <View style={themedStyle.itemSubContainer}>
           <Text style={[ themedStyle.itemHeading, themedStyle.itemSubContainerHead]} >{item.totalQty}x{name}</Text>
           <View style={themedStyle.itemSubContainerPrice}><Text style={themedStyle.itemHeading} >{ genUtils.formatCurrency( price ) }</Text></View>
           
      </View>
      <View style={{flexDirection:"row"}} >
          {item.pets.map( (pet,i) => {
            return ( <Avatar 
                source={{uri:pet.item.photo}}
                style={themedStyle.itemAvatarStyle}
                />);
          })}
      </View>
    
     
  </View>
 );
  }

  renderItem = ({ item, index, separators }) => {
      return this.renderProductItem({ item, index, separators })  
          

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

export const OrderItems = withStyles(_OrderItemsComponent, theme => ({
  itemContainer:{
    flexDirection: "column",
    width:width*0.95,
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  itemSubContainer:{
    flexDirection:"row",
    margin: 5
  },
  itemSubContainerHead:{
   flex: 3,
  },
  itemSubContainerPrice:{
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
   },
 
  itemHeading:{
    
    fontFamily: "Montserrat",
    fontSize: 13,
    color: "#FFF"

  },
  itemLabel:{
    fontFamily: "Montserrat",
    fontSize: 11,
    color: "#6C84C1"

  },
  itemPetContainer:{
    flexDirection:"row",
    justifyContent: 'center',
    margin: 10,
  },
  itemAvatarStyle:{
    marginHorizontal: 5,
  },
  itemPriceContainer:{ 
    padding: 0,
    height: 40,
    borderWidth:2,
    borderColor:"#E9EBED",
    flexDirection:"row",
    borderRadius: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  itemPriceLabel:{
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
    marginHorizontal: 10,
  },
  petQuantityCont: {
    backgroundColor:"#455272",
    paddingHorizontal: 20,
    paddingVertical:10,
  },
  petQuantitySbContainer:{
    flexDirection:"row",
    padding:5,
    backgroundColor: "#6C84C1",
    borderRadius: 15,
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  petQtyLabel:{
    color:"#FFF"
  },
  petQtyBtn:{
    color:"#FFF",
    paddingHorizontal: 20
  }
}));
