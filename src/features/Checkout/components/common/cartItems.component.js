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
import * as genUtils from 'src/utils/general';



import TrashIcon from 'src/assets/icons/trash-icon.svg';

class _CartItemsComponent extends React.Component {
  
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


  renderServiceItem = ({ item, index, separators }) => {
    const name = (item.source)?item.source.name_en:'';
    const timeOption = item.userSelection.timeOptionLabel
    const bookingDate = item.userSelection.bookingDate.display
    const { themedStyle } = this.props;
    return (
      <TouchableOpacity
      onPress={() => this.onItemPress(item) }
  >
    <View style={themedStyle.itemContainer}>
      <View style={themedStyle.itemSubContainer}>
        <Avatar 
            size="giant"
          style={{width: width*0.2 ,height: 100}}
          source={{uri: item.source.photo}} />
         <View style={themedStyle.itemDetailContainer}>
          <View style={{flexDirection:'row',flexWrap: 'wrap', width:width*0.7}}>
                <Text style={themedStyle.itemHeading} >{name}</Text>
          </View>
           <Text style={themedStyle.itemLabel}>{timeOption}</Text>
           <Text style={themedStyle.itemLabel}>{bookingDate}</Text>
          </View> 
      </View>
      {item.pets.map( (pet,i) => {
        // this.renderPets( pet, item.source )

        const price = item.getItemPetPrice(pet.qty);
        return (<View style={themedStyle.itemPetContainer}>
          <Avatar 
            source={{uri:pet.photo}}
             />
          
          <View style={themedStyle.itemQtyContainer}>
             <TouchableOpacity style={themedStyle.petQtyBtn} 
                  onPress={ () => this._onPressQtySubtract(item,pet) }
              >
                {pet.qty>1 && (
                  <Text style={themedStyle.petQtyLabel}>-</Text>
                )}

                {pet.qty==1 && (
                  <TrashIcon  />
                )}
                      

              </TouchableOpacity>
              <Text style={themedStyle.petQtyLabel}>{pet.qty}</Text>
              <TouchableOpacity style={themedStyle.petQtyBtn} 
                  onPress={() => this._onPressQtyAdd(item,pet) }
              >
                      <Text style={themedStyle.petQtyLabel}>+</Text>

              </TouchableOpacity>
              {/* <TrashIcon style={{marginHorizontal: 10}}  />
              <Text style={themedStyle.itemQtyLabel}>{pet.qty}</Text> */}
          </View>
          <View style={themedStyle.itemPriceContainer}>
               <Text style={themedStyle.itemPriceLabel}>{genUtils.formatCurrency(price)}</Text>
          </View>
    
        </View>);
      })}
    
     
  </View>
  </TouchableOpacity>);
  

  }

  renderProductItem = ({ item, index, separators }) => {
    const name = (item.source)?item.source.name_en:'';
    const brand = (item.source)?item.source.brand_en:'';
    const weight = (item.source)?item.source.weight:'';
    const bookingDate = ( item.source && item.source.is_recurring )?item.userSelection.bookingDate.display:'';
    const orderEveryOptionsLabel = (item.source && item.source.is_recurring )?item.userSelection.orderEveryOptionsLabel:'';
    const { themedStyle } = this.props;
    return (
      <TouchableOpacity
      onPress={() => this.onItemPress(item) }
  >
    <View style={themedStyle.itemContainer}>
      <View style={themedStyle.itemSubContainer}>
        <Avatar 
            size="small"
          style={{width: width*0.2,height: 70}}
          source={{uri: item.source.photo}} />
         <View style={themedStyle.itemDetailContainer}>
          <View style={{flexDirection:'row',flexWrap: 'wrap', width:width*0.7}}>
              <Text style={themedStyle.itemHeading} >{name}</Text>
          </View>
           
           <Text style={themedStyle.itemLabel}>{translate('CartItemBrandLabel')}: {brand}</Text>
           <Text style={themedStyle.itemLabel}>{translate('CartItemWeightLabel')}: {weight}</Text>
           {item.source.is_recurring && (
             <Text style={themedStyle.itemLabel}>{translate('CartItemOrderEvertLabel')}: {orderEveryOptionsLabel}</Text>
           )}
           {item.source.is_recurring && (
             <Text style={themedStyle.itemLabel}>{translate('CartItemStartingDate')}: {bookingDate}</Text>
           )}
          </View> 
      </View>
      {item.pets.map( (pet,i) => {
        // this.renderPets( pet, item.source )

        const price = item.getItemPetPrice(pet.qty);
        return (<View style={themedStyle.itemPetContainer}>
          <Avatar 
            source={{uri:pet.photo}}
             />
          
          <View style={themedStyle.itemQtyContainer}>
             <TouchableOpacity style={themedStyle.petQtyBtn} 
                  onPress={ () => this._onPressQtySubtract(item,pet) }
              >
                {pet.qty>1 && (
                  <Text style={themedStyle.petQtyLabel}>-</Text>
                )}

                {pet.qty==1 && (
                  <TrashIcon  />
                )}
                      

              </TouchableOpacity>
              <Text style={themedStyle.petQtyLabel}>{pet.qty}</Text>
              <TouchableOpacity style={themedStyle.petQtyBtn} 
                  onPress={() => this._onPressQtyAdd(item,pet) }
              >
                      <Text style={themedStyle.petQtyLabel}>+</Text>

              </TouchableOpacity>
              {/* <TrashIcon style={{marginHorizontal: 10}}  />
              <Text style={themedStyle.itemQtyLabel}>{pet.qty}</Text> */}
          </View>
          <View style={themedStyle.itemPriceContainer}>
               <Text style={themedStyle.itemPriceLabel}>{genUtils.formatCurrency(price)}</Text>
          </View>
    
        </View>);
      })}
    
     
  </View>
  </TouchableOpacity>);
  }

  renderItem = ({ item, index, separators }) => {
          if(item.type == appConfig.ITEM_TYPES.SERVICES)
            return this.renderServiceItem({ item, index, separators })  
          else
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

export const CartItems = withStyles(_CartItemsComponent, theme => ({
  itemContainer:{
    flexDirection: "column",
    width:width*0.95,
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 20,
  },
  itemSubContainer:{
    flexDirection:"row",
    margin: 5
  },
  itemDetailContainer:{
    flexDirection:"column",
    margin: 10,
    
    
  },
  itemHeading:{
    fontWeight: "bold",
    fontFamily: "Montserrat",
    fontSize: 13
    
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
  itemQtyContainer:{ 
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 40,
    backgroundColor:"#646F8B",
    flexDirection:"row",
    borderRadius: 20,
    width: 100
  },
  itemQtyLabel:{
    fontFamily: "Montserrat",
    fontSize: 12,
    color: "#FFF",
    marginHorizontal: 20,
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
