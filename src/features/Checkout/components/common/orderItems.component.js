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

import appConfig from 'src/config/app';



import TrashIcon from 'src/assets/icons/trash-icon.svg';

class _OrderItemsComponent extends React.Component {
  
  _onPress = (item) => {
    this.props.onPressServiceItem(item)
  }

  renderPets = ( pet, item ) =>{
    const price = parseFloat(item.price * pet.qty);
    const { themedStyle } = this.props;

    return (<View style={themedStyle.itemPetContainer}>
      <Avatar 
        source={{uri:pet.photo}}
         />
      
      <View style={themedStyle.itemQtyContainer}>
          <TrashIcon style={{marginHorizontal: 10}}  />
          <Text style={themedStyle.itemQtyLabel}>{pet.qty}</Text>
      </View>
      <View style={themedStyle.itemPriceContainer}>
           <Text style={themedStyle.itemPriceLabel}>${price}</Text>
      </View>

    </View>);
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
    const name = (item.source)?item.source.name_en:'';
    const brand = (item.source)?item.source.brand_en:'';
    const weight = (item.source)?item.source.weight:'';
    const { themedStyle } = this.props;
    return (
    <View style={themedStyle.itemContainer}>
      <View style={themedStyle.itemSubContainer}>
           <Text style={[ themedStyle.itemHeading, themedStyle.itemSubContainerHead]} >{name}</Text>
           <View style={themedStyle.itemSubContainerPrice}><Text style={themedStyle.itemHeading} >${item.getItemPrice()}</Text></View>
           
      </View>
      <View style={{flexDirection:"row"}} >
          {item.pets.map( (pet,i) => {
            return ( <Avatar 
                source={{uri:pet.photo}}
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
