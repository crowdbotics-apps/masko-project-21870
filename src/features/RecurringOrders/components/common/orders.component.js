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


const width = Dimensions.get('screen').width
import { translate } from 'src/utils/translation';

import SmallPawLogo from 'src/assets/icons/small-paw.svg';

import AppConfig from 'src/config/app';

import * as genUtils from 'src/utils/general';

const moment = require('moment');

class _OrderComponent extends React.Component {
  
  _onPress = (item) => {
    this.props.onPressOrderItem(item)
  }

  _onPressBuyNow = (item) => {
    this.props.onPressBuyNow(item)
  }


  renderItem = ({ item, index, separators }) => {
    const { themedStyle } = this.props;

    let recurrEvery = null;
    return (
      <TouchableOpacity style={themedStyle.container}
            onPress={()=>this._onPress(item)}
      >

        <View style={themedStyle.headerContainer}>
          <View style={themedStyle.headerLogo}>
                  <SmallPawLogo size={10} />
          </View>
          <View>
            <Text style={themedStyle.textTitle}  >{translate('OrderItemsNumberLabel')}{item.id}</Text>
            <Text style={themedStyle.textDescription}  >{moment( item.created_at ).format( AppConfig.dateFormat )}</Text>
            {item.subscription && item.subscription.is_cancelled && (
              <Text style={themedStyle.textCancelled}  >{translate('OrderItemsCancelledLabel')}</Text>
            )}
            
          </View>
        </View>
        <View style={themedStyle.textContainer} >
          {item.products.map( (i)=> {
              let product = i.refrence_item
              recurrEvery = i.order_every
              return (<View style={themedStyle.itemContainer}>
                      <Avatar
                        source={{uri: product.photo}}
                      />
                      <View style={{flex:1, flexDirection: 'column'}}>
                        <Text style={themedStyle.itemHead}>{product.name_en}</Text>
                        <Text style={themedStyle.itemDetail}>{translate('OrderItemBrandLabel')}: {product.brand_en}</Text>
                        <Text style={themedStyle.itemDetail}>{translate('OrderItemWeightLabel')}: {product.weight}</Text>
                      </View>
                      
                      <Text style={themedStyle.itemHead}>x{i.quantity}</Text>
              </View>)

          })}
          <View style={{flexDirection:'row'}}>
            <Image source={require('src/assets/icons/checkbox-icon.png')} style={{width:20,height: 20, marginRight: 5}} />
            <Text style={themedStyle.textTitleBold}>{translate('OrderItemRecurrEveryLabel')}{recurrEvery}</Text> 
          </View>
          <Button
              textStyle={themedStyle.yellowBtnText}
              status='primary'
              style={themedStyle.yellowBtn}
              onPress={() => this._onPressBuyNow(item)}
              >{translate('OrderItemBuyNowBtn')}
              
          </Button>
            <View style={{alignSelf: 'center',borderWidth: 1, borderRadius: 25, borderColor:"#E9EBED", width: width*0.75, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={themedStyle.textTitleBold}>{ genUtils.formatCurrency(item.total_price) } (purchased {item.total_purchases} times)</Text>
            </View>
         
        </View>
       
        
      </TouchableOpacity>
    );
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

export const OrderComponent = withStyles(_OrderComponent, theme => ({
  headerLogo:{ 
    alignSelf:'center',
    alignItems:'center',
    justifyContent:"center",
    width:45,
    height:45,
    borderRadius: 22,
    backgroundColor:"#38A7E5",
    marginRight: 10,
  },
  headerContainer: {
    flexDirection: 'row'
  },
  container:{ 
    flexDirection:'column',
    margin: 15,
    padding: 10,
    borderTopRadius: 15,
    borderRadius: 15,
    backgroundColor:'#FFF',
    alignSelf:'center',
    overflow: 'hidden',
    width: width*0.9,

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
    // fontWeight: 'bold',
    fontSize: 14,
    color: "#5D5A53"
  },
  textTitleBold:{
    fontFamily: "Montserrat",
    fontWeight: 'bold',
    fontSize: 14,
    color: "#5D5A53"
  },
  textDescription:{
    fontFamily: "Montserrat",
    fontSize: 12,

    color: "#5D5A53"
  },
  textCancelled:{
    fontFamily: "Montserrat",
    fontSize: 12,

    color: "red"
  },
  yellowBtn:{
        fontFamily: "Montserrat",
        borderRadius: 30,
        margin: 10,
        borderWidth: 0,
        width: width*0.75,
        alignSelf: 'flex-start'
  },
  yellowBtnText:{
    fontSize: 14
  },
  itemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemHead:{
    fontFamily: "Montserrat",
    fontWeight: 'bold',
    fontSize: 13,
    color: "#000000"
  },
  itemDetail:{
    fontFamily: "Montserrat",
    fontSize: 12,
    color: "#6C84C1"
  },
}));
