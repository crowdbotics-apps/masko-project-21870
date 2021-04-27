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
} from '.';

const width = Dimensions.get('screen').width
import { translate } from 'src/utils/translation';

class _ProductsComponent extends React.Component {
  
  _onPress = (item) => {
    this.props.onPressProductItem(item)
  }

  _onAddButtonPress = (item) => {
    this.props.onAddButtonPress(item)
  }

  _onPressQtyAdd = (sItem) => {
      this.props.onPressQtyAdd(sItem,(sItem.qty+1)) 
  }

  _onPressQtySubtract = (sItem) => {
      this.props.onPressQtySubtract(sItem,(sItem.qty-1)) 
  }


  renderItem = ({ item, index, separators }) => {

    const name = (item)? item.name_en: '';
    const brand = (item)?item.brand_en: '';
    const weight = (item)?item.weight: '';
    const qty = (item)?item.qty: 0;

    const { themedStyle } = this.props;
    return (
      <TouchableOpacity style={themedStyle.container}
        onPress={()=>{
          this.props.onPressProductItem(item)
        }}
      >
   
        <Image  
         source={{
          uri: item.photo,
        }}
        style={themedStyle.imageStyle}
         />
        <View style={themedStyle.textContainer} >
            <Text style={themedStyle.textTitle}  >{name}</Text>
            <Text style={themedStyle.productSpecLabels}  >Brand: {brand}</Text>
            <Text style={themedStyle.productSpecLabels}  >Weight: {weight}</Text>
            
            <View style={themedStyle.actionRowContainer} >
            
                  <View style={themedStyle.itemQtyContainer}>
                  <TouchableOpacity style={themedStyle.petQtyBtn} 
                        onPress={ () => {
                          this._onPressQtySubtract(item)
                        }
                        }
                    >
                    <Text style={themedStyle.petQtyLabel}>-</Text>


                    </TouchableOpacity>
                    <Text style={themedStyle.petQtyLabel}>{qty}</Text>
                    <TouchableOpacity style={themedStyle.petQtyBtn} 
                        onPress={() => 
                          {
                            this._onPressQtyAdd(item)
                          }
                        }
                    >
                            <Text style={themedStyle.petQtyLabel}>+</Text>

                    </TouchableOpacity>
                   
                </View>
              
                  <Button
              textStyle={themedStyle.yellowBtnText}
              status='primary'
              style={themedStyle.yellowBtn}
              onPress={() => this._onAddButtonPress(item)}
              >{translate('AddToCartBtn')} - ${item.price}
              
            </Button>
            </View>        
        </View>
       
        
      </TouchableOpacity>);
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

export const ProductsComponent = withStyles(_ProductsComponent, theme => ({
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
        // margin: 10,
        borderWidth: 0,
        width: 200,
        alignSelf: 'flex-start'
  },
  yellowBtnText:{
    fontSize: 14
  },
  productSpecLabels:{
    fontFamily: "Montserrat",
    color: "#6C84C1",
    fontSize: 11,
    fontWeight: "bold"
  },
  actionRowContainer:{
    flexDirection: "row",
    marginVertical: 10
  },
  itemQtyContainer:{ 
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 40,
    backgroundColor:"#6C84C1",
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
  petQtyBtn:{
    color:"#FFF",
    paddingHorizontal: 20
  },
  petQtyLabel:{
    color:"#FFF"
  },
}));
