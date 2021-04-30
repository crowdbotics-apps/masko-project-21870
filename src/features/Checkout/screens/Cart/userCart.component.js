import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';

import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Avatar,
  Button,
  Text,
  Input,
  Datepicker,
} from 'react-native-ui-kitten';


import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'




import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';


import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';

import { CartItems } from '../../components/common';



const moment = require('moment');

class UserCartComponent extends React.Component {

  state = {
    timeOptionValue: undefined,
    timeOptionLabel: undefined,
    dateOptionValue: undefined,
    dateOptionLabel: undefined,
    dayTimeOptionValue: undefined,
    dayTimeOptionLabel: undefined,
    notes: undefined,
    bookingDate: {
      display: moment().format(AppConfig.dateFormat),
      value: new Date()
    },
    showDatePicker: false,
    showTimePicker: false,

  }

  renderSpinner = () => {
    const { updateCartLoading } = this.props;
    if (updateCartLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  

  onAddButtonPress = () => {
   
  }

  onCancelButtonPress = () => {
    this.props.navigation.pop();
  }

   onPressContinue = () => {
     this.props.navigation.navigate( AppConfig.NAVIGATOR_ROUTE.UserHome )
   } 

   onPressQtyAdd = (item, pet) => {
      this.props.onPressQtyAdd(item, pet, (pet.qty+1) );
   }

   onPressQtySubtract = (item, pet) => {
    this.props.onPressQtySubtract(item, pet, (pet.qty-1));
     
  }

 
  onItemPress = (item) => {
    this.props.onItemPress(item);
  }

  onCheckoutPress = () =>{
    this.props.onCheckoutPress();
  }

  render() {

    const { themedStyle, cart, navigation } = this.props;

    if(cart.items.length==0){
      return (
        <LinearGradient colors={AppConfig.backgroundColor} style={[styles.itemsContainerWithoutPadWrap,{justifyContent:'center', alignItems:'center'}]}>
             <EmptyRecordContainer emptyText={translate('EmptyCartMessage')} />
             <Button
                            style={styles.yellowButton}
                            textStyle={styles.whiteFont}
                            size="giant"
                            status='primary'
                            onPress={this.onPressContinue}

                          >
                            {translate("ContinueShoppingBtn")}
                        </Button>
        </LinearGradient>)
    }


    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={[styles.itemsContainerWithoutPad]}>
        {this.renderSpinner()}
        <ScrollView style={themedStyle.scrollView}
        contentContainerStyle={{ paddingBottom: 100 }}
        >
          <CartItems
              data={cart.items}
              onPressQtyAdd={this.onPressQtyAdd}
              onPressQtySubtract={this.onPressQtySubtract}
              onItemPress={this.onItemPress}
          />

          <View style={[themedStyle.summary.headRowContainer]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderSummaryLabel')}</Text>
           
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelTextHead} ></Text>

            </View>
            
          </View>
          <View style={[themedStyle.summary.rowContainer]}   >
            <Text style={themedStyle.summary.label} >{translate('OrderSubTotalLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >${cart.subTotalPrice}</Text>

            </View>
            
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('OrderShippingLabel')}</Text>
            {/* <Text style={themedStyle.summary.label} >${cart.shipping}</Text> */}
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >${cart.shipping}</Text>

            </View>
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('OrderTaxLabel')}</Text>
            {/* <Text style={themedStyle.summary.label}  >${cart.taxes}</Text> */}
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >${cart.taxes}</Text>

            </View>
          </View>

          <View style={[themedStyle.summary.rowContainer,{marginTop: 20, marginBottom: 20}]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderTotalLabel')}</Text>
            {/* <Text style={themedStyle.summary.heading}  >${cart.totalPrice}</Text> */}
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelTextHead} >${cart.totalPrice}</Text>

            </View>
          </View>

          <Button
                            style={styles.yellowButton}
                            textStyle={styles.whiteFont}
                            size="giant"
                            status='primary'
                            onPress={this.onCheckoutPress}

                          >
                            {translate("CheckoutBtn")}
                        </Button>

        </ScrollView>
      </LinearGradient>
    );
  }
}




export const UserCart = withStyles(UserCartComponent, theme => ({
  scrollView:{
    padding: 10,
  },
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
      marginHorizontal: 10,
      marginBottom: 20,
      paddingBottom:10,
      borderBottomWidth: 1,
      borderBottomColor: "#A0B0DC"
       
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
    },
    labelContainer:{
      flex: 3,
      fontFamily: "Montserrat",
      fontSize: 14,
      color: "#FFF",
      justifyContent: 'flex-end'
    },
    labelText:{
      fontFamily: "Montserrat",
      fontSize: 14,
      color: "#FFF",
    },
    labelTextHead:{
      fontFamily: "Montserrat",
      fontSize: 14,
      color: "#FFF",
      fontWeight: "bold"
    }

  }

}));
