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


  renderItem = ({ item, index, separators }) => {
    const name = (item.source)?item.source.getName():'';
    const timeOption = item.userSelection.timeOptionLabel
    const bookingDate = item.userSelection.bookingDate.display
    const { themedStyle } = this.props;
    return (<View style={themedStyle.itemContainer}>
      <View style={themedStyle.itemSubContainer}>
        <Avatar 
            size="giant"
          style={{width: 100,height: 100}}
          source={{uri: item.source.photo}} />
         <View style={themedStyle.itemDetailContainer}>
           <Text style={themedStyle.itemHeading} >{name}</Text>
           <Text style={themedStyle.itemLabel}>{timeOption}</Text>
           <Text style={themedStyle.itemLabel}>{bookingDate}</Text>
          </View> 
      </View>
      {item.pets.map( (pet,i) => {
        // this.renderPets( pet, item.source )

        const price = parseFloat(item.source.price * pet.qty);
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
      })}
    
     
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
    margin: 10
  },
  itemHeading:{
    fontWeight: "bold",
    fontFamily: "Montserrat",
    fontSize: 13,

  },
  itemLabel:{
    fontFamily: "Montserrat",
    fontSize: 12,

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
  summary:{
    rowContainer:{
      flexDirection: "row",
      // paddingHorizontal: 10,
      marginHorizontal: 10,
       
    },
    headRowContainer:{
      flexDirection: "row",
      // paddingHorizontal: 10,
      marginHorizontal: 10,
      marginBottom: 20,
      paddingBottom:10,
      borderBottomWidth: 1,
      borderBottomColor: "#FFF"
       
    },
    heading:{
      flex: 3,
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 14,
      color: "#FFF",
    },
    label:{
      flex: 3,
      fontFamily: "Montserrat",
      fontSize: 14,
      color: "#FFF",
    }
  }
}));
