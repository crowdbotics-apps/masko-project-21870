import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  Platform,
  Alert
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
import { OrderItems } from '../../components/common';
import MicroLogo from 'src/assets/images/masko-logo-micro.svg';
import * as utils from '../../utils/general';


const moment = require('moment');


class OrderDetailsComponent extends React.Component {

  state = {
    payMethodValue: undefined,
    payMethodLabel: undefined,
   
  }

  renderSpinner = () => {
    const { addOrderLoading, cancelOrderLoading } = this.props;
    if (addOrderLoading || cancelOrderLoading) {
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


  
  onPaymentMethod = (value, index) => {

    let newState = { ...this.state }

    newState.payMethodValue = index;
    newState.payMethodLabel = value;


    this.setState(newState);
  }

  validator = () => {
    const { order } = this.props

    return ( order.subscription.is_cancelled  )
  }

  onPressCancel = () => {
    let that = this;
    Alert.alert(
      translate('ConfirmPopUpHead'),
      translate('SubscriptionCancelConfirmation'),
      [
        {
          text: translate('PopUpCancelButton'),
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: translate('PopUpOkButton'), onPress: () => {
            console.log("OK Pressed")
            that.props.onCancelSubscription()
          }
         }
      ]
    );
    
  }


  render() {

    const { themedStyle, cart, navigation, order } = this.props;

    let date = moment(order.products[0].date).format(AppConfig.dateFormat);
    let recurringTotal = order.total_price * ( (order.total_purchases>0)?order.total_purchases:1 )
    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={[styles.itemsContainerWithoutPad]}>
        {this.renderSpinner()}
        <ScrollView style={themedStyle.scrollView}
        contentContainerStyle={{ paddingBottom: 100 }}
        >
           
            <View style={themedStyle.headerLogo}>
                <MicroLogo size={20} />
            </View>
           <Text style={themedStyle.orderDetailText}>{translate('RecurringOrderDetailsIntro')}</Text>
          <View style={[themedStyle.summary.headRowContainer]}  >
              <Text style={themedStyle.summary.heading} >{translate('OrderSummaryLabel')}</Text>
            
              <View style={themedStyle.labelContainer} >
                  <Text style={themedStyle.summary.labelTextHead} >#{order.id}</Text>

              </View>
            
          </View>
          <OrderItems
              data={order.formattedItem}
              onPressQtyAdd={this.onPressQtyAdd}
              onPressQtySubtract={this.onPressQtySubtract}
              onItemPress={this.onItemPress}
          />

          <View style={[themedStyle.summary.headRowContainer]}  >
              <Text style={themedStyle.summary.heading} >{translate('RecurrOrderDetailsRecurrentInfo')}</Text>
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('RecurrOrderDetailsOrderEveryLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >{order.products[0].order_every}</Text>

            </View>
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('RecurrOrderDetailsStart')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >{date}</Text>

            </View>
          </View>


       
          <View style={[themedStyle.summary.rowContainer,{marginTop: 20, marginBottom: 20}]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderTotalLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelTextHead} >${order.total_price}</Text>

            </View>
          </View>

          <View style={[themedStyle.summary.headRowContainer]}  >
              <Text style={themedStyle.summary.heading} >{translate('RecurrOrderDetailsPurchasesInfo')} ({order.total_purchases})</Text>
          </View>

          {order.purchases.map( (i) => {
                
                let date = null
                if (i.stripe_date){
                  date = moment(i.stripe_date).format(AppConfig.dateFormat)
                }else{
                  date = moment(i.created_at).format(AppConfig.dateFormat)
                }
                


                return (<View style={themedStyle.summary.rowContainer}  >
                  <Text style={themedStyle.summary.label} >{date}</Text>
                  <View style={themedStyle.labelContainer} >
                      <Text style={themedStyle.summary.labelText} >${order.total_price}</Text>
      
                  </View>
                </View>);
          })}
          
          <View style={[themedStyle.summary.rowContainer,{marginTop: 20, marginBottom: 20}]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderTotalLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelTextHead} >${recurringTotal}</Text>

            </View>
          </View>
      
          <Button
                            style={styles.yellowButton}
                            textStyle={styles.whiteFont}
                            size="giant"
                            status='primary'
                            onPress={this.onPressCancel}
                            disabled={this.validator()}

                          >
                            {translate("CancelRecurringBtn")}
                        </Button>

        </ScrollView>
      </LinearGradient>
    );
  }
}


export const OrderDetails = withStyles( OrderDetailsComponent, theme => ({
  scrollView:{
    padding: 10,
  },
  headerLogo:{ 
    alignSelf:'center',
    alignItems:'center',
    justifyContent:"center",
    width:90,
    height:90,
    borderRadius: 45,
    backgroundColor:"#38A7E5"
  },
  orderDetailText:{
    alignSelf:'center',
    color:"#FFF",

    fontFamily: "Montserrat",
    fontSize: 14,
    margin: 15,
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
      // paddingHorizontal: 10,
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
    },
    topBorder:{
      borderTopColor: '#A0B0DC',
      borderTopWidth: 1,
      paddingTop: 10,
    },
    bottomBorder:{
      borderBottomColor: '#A0B0DC',
      borderBottomWidth: 1,
      paddingBottom: 10,
    }

  },
  detailContainer: {
    container: {
      flexDirection: "column",
      padding: 20,

    },

    placeHolderText: {
      color: "#9BB2EF",
      fontSize: 12,
    },
    valueText: {
      color: "#FFFF",
      fontSize: 15,
      marginBottom: 20,
    },
    pickerContainer: {
      borderBottomColor: "#A0B0DC",
      borderBottomWidth: 1,
      margin: 10,
      // paddingHorizontal: 10,
    },
    inputContainerHalf: {
      flexDirection: 'row'
    },
    pickerContainer2: {
      borderBottomColor: "#A0B0DC",
      borderBottomWidth: 1,
      marginBottom: 10,
      flex: 3,
    },
    valueTextWithOutMargin: {
      color: "#FFFF",
      fontSize: 15,
      marginBottom: 10,
    },
    noteTextArea: {
      color: "white",
      borderColor: "#FFF",
      backgroundColor: null,

      marginBottom: 20,
    },
    noteTextAreaText: {
      color: "white",
      fontSize: 15,
      minHeight: 80
    }
  }

}));
