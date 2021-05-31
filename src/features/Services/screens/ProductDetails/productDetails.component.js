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


import {
  textStyle,
} from '../../components/common';

import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'


import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';


import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';

import { PetComponent } from 'src/components/common';
import { ServicePetComponent } from '../../components/common';
import * as utils from 'src/utils/general';

import * as _ from 'lodash';

const moment = require('moment');


const payUsing = [
  {
    value: 'Card', label: "Card"
  }
];

const orderEveryOptions = [
  {
    value: AppConfig.ORDER_EVERY_LIST.RECUR_DAILY , label: AppConfig.ORDER_EVERY_LIST.RECUR_DAILY,
  },
  {
    value: AppConfig.ORDER_EVERY_LIST.RECUR_WEEK, label: AppConfig.ORDER_EVERY_LIST.RECUR_WEEK,
  },
  {
    value: AppConfig.ORDER_EVERY_LIST.RECUR_BI_MONTH, label: AppConfig.ORDER_EVERY_LIST.RECUR_BI_MONTH,
  },
  {
    value: AppConfig.ORDER_EVERY_LIST.RECUR_MONTH, label: AppConfig.ORDER_EVERY_LIST.RECUR_MONTH
  }
  
];


class ProductDetailsComponent extends React.Component {

  state = {
    payUsingLabel: undefined,
    payUsingValue: undefined,
    orderEveryOptionsLabel: undefined,
    orderEveryOptionsValue: undefined,
    notes: undefined,
    bookingDate: {
      display: moment().format(AppConfig.dateFormat),
      value: new Date()
    },
    showDatePicker: false,
    pets: [],

  }

  constructor(props){
    super(props)
    this.state.pets = this.setPetInfo();

    if( this.props.userSelection ){
      
      const { userSelection, userSelectedPets } = this.props;
      this.state.notes =  userSelection.notes;
      this.state.bookingDate =  userSelection.bookingDate;
      this.state.payUsingLabel =  userSelection.payUsingLabel;
      this.state.payUsingValue =  userSelection.payUsingValue;
      this.state.orderEveryOptionsLabel = userSelection.orderEveryOptionsLabel;
      this.state.orderEveryOptionsValue = userSelection.orderEveryOptionsValue;
      this.state.showDatePicker =  userSelection.showDatePicker;
      this.state.pets = this.setPetData(userSelectedPets);
    }
  }

 

  renderSpinner = () => {
    const { addItemToCartLoading } = this.props;
    if (addItemToCartLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

 
  onPayUsingPickerChange = (value, index) => {

    let newState = { ...this.state }

    newState.payUsingValue = index;
    newState.payUsingLabel = value;


    this.setState(newState);
  }

  onOrderEveryPickerChange = (value, index) => {

    let newState = { ...this.state }

    newState.orderEveryOptionsValue = index;
    newState.orderEveryOptionsLabel = value;


    this.setState(newState);
  }

  

  onAddButtonPress = () => {
      const {
        navigation,
      } = this.props;

      const { product } = navigation.state.params;

      this.props.onAddButtonPress({
        type: AppConfig.ITEM_TYPES.PRODUCT,
        item: product,
        pets: this.getPetsForCart(),
        is_recurring: product.is_recurring,
        userSelection: {
          notes: this.state.notes,
          bookingDate: this.state.bookingDate, 
          payUsingLabel: this.state.payUsingLabel,
          payUsingValue: this.state.payUsingValue,
          orderEveryOptionsValue: this.state.orderEveryOptionsValue,
          orderEveryOptionsLabel: this.state.orderEveryOptionsLabel,
          showDatePicker: this.state.showDatePicker,
        }

      })
  }

  onContinueButtonPress = () => {
    this.props.navigation.navigate( AppConfig.NAVIGATOR_ROUTE.UserHome );
  }

  handleBookingDateChange = (event, date) => {

    if (date != null) {

      let { bookingDate } = this.state;
      bookingDate = {
        display: moment(date).format(AppConfig.dateFormat),
        value: new Date(date)
      }

      if (Platform.OS !== 'ios') {
        this.setState({ bookingDate, showDatePicker: false });
      } else {
        this.setState({ bookingDate });
      }
    } else {
      this.setState({ showDatePicker: false });
    }
  }

  toggleDateModal = () => {

    const { showDatePicker } = this.state;

    let status = false;
    if (showDatePicker) {
      status = false;
    } else {
      status = true;
    }
    this.setState({ showDatePicker: status })

  }


  setPetData = (pets) => {
    const { userPets } = this.props;
    let list = []
    _.forEach(userPets, (i) => {
      var userIn = _.find(pets, { id: i.id });
      if (userIn){
        list.push({
          ...i,
          qty: userIn.qty
        })
      }else{
        list.push({
          ...i,
          qty: 0
        })
      }
         
    });
    return list;
  }

  setPetInfo = () => {
    const { userPets, selectedPet } = this.props;
    let list = [];
    _.forEach(userPets, (i) => {
        list.push({
          ...i,
          qty: 0,
          selected: ( selectedPet && i.id == selectedPet.id )? true: false
        })  
    });
    return list;    

  }

  onSelectPetPress = ( item ) => {
    const { pets } = this.state;
    let list = [];
    _.forEach(pets, (i) => {
        list.push({
          ...i,
          selected: (item && i.id == item.id)?true:false
        })  
    });
   
    this.setState({pets: list})   
  }

  onUpdatePetQtyPress = ( item , qty ) => {
    const { pets } = this.state;
   
    let list = [];
    _.forEach(pets, (i) => {
       list.push({
          ...i,
          qty: ( item && i.id == item.id )? qty : i.qty
        })  
    });
    this.setState({pets: list})   
  }

  getPetsForCart = () => {
    const { pets } = this.state;
    let list = [];
    _.forEach(pets, (i) => {
        if (i.qty>0){
          list.push({
            ...i
          })  
        }
        
    });

    return list;
   
  }
  getPetTotalQty = () => {
    let pets = this.getPetsForCart();
    let count = 0;
    _.forEach(pets, (i)=>{
        count += i.qty
    })
    return count;
  }

  validator = () => {
    const { product } = this.props.navigation.state.params;
    let petQty = this.getPetTotalQty();
    const { orderEveryOptionsLabel, payUsingLabel, bookingDate } = this.state;

    if( product.is_recurring ){
      return (
        orderEveryOptionsLabel  &&
        payUsingLabel &&
        bookingDate  && 
        (petQty>0)
      ) 
    }else{
      return (
        (petQty>0)
      ) 
    }    
    
    
  }

  render() {

    const {
      themedStyle,
      navigation,
      selectedPet,
      userSelection
    } = this.props;

    const { product } = navigation.state.params;

    const {
      showDatePicker,
      bookingDate
    } = this.state

    let nexBtnLabel = translate("AddToCartBtn");
    if(userSelection){
      nexBtnLabel = translate("SaveChangesBtn"); 
    }



    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={[styles.itemsContainerWithoutPad]}>
        {this.renderSpinner()}
        <PetComponent
          navigation={navigation}
        />
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <View style={themedStyle.serviceItem.container} >
            <Image
              source={{
                uri: product.photo,
              }}
              style={themedStyle.serviceItem.imageStyle}
            />
            <View style={themedStyle.serviceItem.textContainer} >
              <Text style={themedStyle.serviceItem.textTitle}  >{product.name_en}</Text>
              <Text style={themedStyle.serviceItem.textDesc2}  >Brand: {product.brand_en}</Text>
              <Text style={themedStyle.serviceItem.textDesc2}  >Weight: {product.weight}</Text>
            </View>

              

          </View>

          <View style={themedStyle.detailContainer.container}>
            <Text style={themedStyle.detailContainer.placeHolderText} >{translate('ServiceDetailDescLabel')}</Text>
            <Text style={themedStyle.detailContainer.valueText}>{product.description_en}</Text>
           
            <Text style={themedStyle.detailContainer.placeHolderText} >{translate('ServiceDetailPriceLabel')}</Text>
            <Text style={themedStyle.detailContainer.valueText}>${product.price}</Text>
            {product.is_recurring && (
                <View style={themedStyle.detailContainer.pickerContainer} >
                <RNPickerSelect
                  style={pickerSelectStyles}
  
                  onValueChange={(value, index) => {
                    if (value != '0') {
                      this.onPayUsingPickerChange(value, index)
  
                    }
  
                  }
                  }
                  items={payUsing}
                  value={this.state.payUsingLabel}
                >
                  <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ProductDetailPayUsingLabel')}</Text>
                  {this.state.payUsingLabel && (
                  <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{this.state.payUsingLabel}</Text>)}
                   {!this.state.payUsingLabel && (
                  <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{translate('ProductDetailPayUsingPlaceHolder')}</Text>)}
              
                </RNPickerSelect>
              </View>
  
            )} 

            {product.is_recurring && (
                <View style={themedStyle.detailContainer.pickerContainer} >
                <RNPickerSelect
                  style={pickerSelectStyles}
  
                  onValueChange={(value, index) => {
                    if (value != '0') {
                      this.onOrderEveryPickerChange(value, index)
  
                    }
  
                  }
                  }
                  items={orderEveryOptions}
                  value={this.state.orderEveryOptionsLabel}
                >
                  <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ProductDetailOrderEveryLabel')}</Text>
                  {this.state.orderEveryOptionsLabel && (
                  <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{this.state.orderEveryOptionsLabel}</Text>)}
                   {!this.state.orderEveryOptionsLabel && (
                  <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{translate('ProductDetailOrderEveryPlaceHolder')}</Text>)}
                </RNPickerSelect>
              </View>
  
            )} 

            {product.is_recurring && (
              <TouchableOpacity style={themedStyle.detailContainer.pickerContainer2}
                  onPress={this.toggleDateModal}
                >
                  <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ProductDetailStartDateLabel')}</Text>
                  <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{bookingDate.display}</Text>


                </TouchableOpacity>
               
            )}
            {product.is_recurring && showDatePicker && (
              <DateTimePicker
                display="spinner"
                value={bookingDate.value}
                mode={'date'}
                style={{ color: "#FFF" }}
                textColor={'#FFF'}
                onChange={this.handleBookingDateChange}
                onConfirm={this.handleBookingDateChange}
                onCancel={this.toggleDateModal}
              />
            )}
 
         
          </View>
          <ServicePetComponent
            navigation={navigation}
            data={this.state.pets}
            selectedPet={selectedPet}
            onSelectPetPress={this.onSelectPetPress}
            onUpdatePetQtyPress={this.onUpdatePetQtyPress}
          />

          <View style={themedStyle.detailContainer.container}>

            <Button
              style={styles.yellowButton}
              textStyle={styles.whiteFont}
              size="giant"
              status='primary'
              disabled={!this.validator()}
              onPress={this.onAddButtonPress}

            >
              {nexBtnLabel}
            </Button>
            <Button
              style={styles.yellowButton}
              textStyle={styles.whiteFont}
              size="giant"
              status='info'
              onPress={this.onContinueButtonPress}

            >
              {translate("ContinueShoppingBtn")}
            </Button>



          </View>

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



export const ProductDetails = withStyles(ProductDetailsComponent, theme => ({
  container: {
    flex: 1,
  },
  scrollView: {
    // padding: 10,
    // marginTop: 20,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  helloLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  signInLabel: {
    marginTop: 16,
    color: 'white',
    ...textStyle.subtitle,
  },
  socialAuthIcon: {
    tintColor: 'white',
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: 'white',
    ...textStyle.subtitle,
  },
  msgContainer: {
    borderWidth: 2,
    borderColor: "#e3e3e3",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  serviceItem: {
    container: {
      width: width,
      backgroundColor: '#FFF',
      alignSelf: 'center',
      overflow: 'hidden',
      marginTop: 5,
    },
    imageStyle: {
      borderTopRadius: 10,
      width: width,
      height: 180,
    },
    textContainer: {
      padding: 20
    },
    textTitle: {
      fontFamily: "Montserrat",
      fontWeight: 'bold',
      fontSize: 14,
    },
    textDesc2: {
      fontFamily: "Montserrat",
      fontSize: 11,
      fontWeight: "bold",
      color: "#6C84C1"
    },
    textDescription: {
      fontFamily: "Montserrat",
      fontSize: 12,
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
      marginBottom: 10
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
