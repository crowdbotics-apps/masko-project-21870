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
import { OrderItems } from '../../components/common';


import RNPickerSelect from 'react-native-picker-select';
import MicroLogo from 'src/assets/images/masko-logo-micro.svg';


const moment = require('moment');

const paymentMethods = [
  {
    value: 'card', label: "Card"
  },
  {
    value: 'cash', label: "Cash"
  }
];

class ConfirmOrderComponent extends React.Component {

  state = {
    payMethodValue: undefined,
    payMethodLabel: undefined,
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

  
  onPaymentMethod = (value, index) => {

    let newState = { ...this.state }

    newState.payMethodValue = index;
    newState.payMethodLabel = value;


    this.setState(newState);
  }


  render() {

    const { themedStyle, cart, navigation } = this.props;

    if(cart.items.length==0){
      return (
        <LinearGradient colors={AppConfig.backgroundColor} style={[styles.itemsContainerWithoutPadWrap,{justifyContent:'center', alignItems:'center'}]}>
             <EmptyRecordContainer emptyText={ translate('EmptyCartMessage') } />
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
           
            <View style={themedStyle.headerLogo}>
                <MicroLogo size={20} />
            </View>

            <View style={[themedStyle.summary.headRowContainer]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderSummaryLabel')}</Text>
           
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelTextHead} ></Text>

            </View>
            
          </View>
          <OrderItems
              data={cart.items}
              onPressQtyAdd={this.onPressQtyAdd}
              onPressQtySubtract={this.onPressQtySubtract}
              onItemPress={this.onItemPress}
          />

          <View style={[themedStyle.summary.rowContainer, themedStyle.summary.topBorder ]}   >
            <Text style={themedStyle.summary.label} >{translate('OrderOneTimeLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >${cart.subTotalPrice}</Text>
            </View>
            
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('OrderShippingLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >${cart.shipping}</Text>

            </View>
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('OrderTaxLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelText} >${cart.taxes}</Text>

            </View>
          </View>

          <View style={[themedStyle.summary.rowContainer,{marginTop: 20, marginBottom: 20}]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderTotalLabel')}</Text>
            <View style={themedStyle.labelContainer} >
                <Text style={themedStyle.summary.labelTextHead} >${cart.totalPrice}</Text>

            </View>
          </View>

          <View style={themedStyle.detailContainer.pickerContainer} >
              <RNPickerSelect
                style={pickerSelectStyles}

                onValueChange={(value, index) => {
                  if (value != '0') {
                    this.onPaymentMethod(value, index)

                  }

                }
                }
                placeholder={{ label: translate('ChooseCardLabel'), value: '0' }}
                items={paymentMethods}
                value={this.state.payMethodLabel}
              >
                <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ConfirmOrderPayUsingLabel')}</Text>
                <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{this.state.payMethodLabel}</Text>
              </RNPickerSelect>
            </View>


          <Button
                            style={styles.yellowButton}
                            textStyle={styles.whiteFont}
                            size="giant"
                            status='primary'

                          >
                            {translate("ConfirmOrderBtn")}
                        </Button>

        </ScrollView>
      </LinearGradient>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    marginBottom: 12,
    color: '#FFF',
    fontFamily: "Montserrat",

  },
  inputAndroid: {
    fontSize: 10,
    padding: 0,
    margin: 0,
    color: '#FFF',
    fontFamily: "Montserrat",

  },
});


export const ConfirmOrder = withStyles( ConfirmOrderComponent, theme => ({
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
