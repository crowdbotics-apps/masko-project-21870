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


import TrashIcon from 'src/assets/icons/trash-icon.svg';

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
    const { getServiceLoading } = this.props;
    if (getServiceLoading) {
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



 

  render() {

    const { themedStyle, navigation } = this.props;
    // const { service } = navigation.state.params; 
    const { showDatePicker, showTimePicker,  bookingDate } = this.state

    


    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={[styles.itemsContainerWithoutPad]}>
        {this.renderSpinner()}
        <ScrollView style={themedStyle.scrollView} >
          <View style={themedStyle.itemContainer}>
              <View style={themedStyle.itemSubContainer}>
                <Image 
                    size="giant"
                  source={require('src/assets/images/services-1.png')} />
                 <View style={themedStyle.itemDetailContainer}>
                   <Text style={themedStyle.itemHeading} >Service Name</Text>
                   <Text style={themedStyle.itemLabel}>Scheduled</Text>
                   <Text style={themedStyle.itemLabel}>01/26/21</Text>
                  </View> 
              </View>
              <View style={themedStyle.itemPetContainer}>
                <Avatar 
                  source={require('src/assets/images/services-1.png')}
                   />
                
                <View style={themedStyle.itemQtyContainer}>
                    <TrashIcon style={{marginHorizontal: 10}}  />
                    <Text style={themedStyle.itemQtyLabel}>1</Text>
                </View>
                <View style={themedStyle.itemPriceContainer}>
                     <Text style={themedStyle.itemPriceLabel}>$45.00</Text>
                </View>

              </View>
              <View style={themedStyle.itemPetContainer}>
                <Avatar 
                  source={require('src/assets/images/services-1.png')}
                   />
                
                <View style={themedStyle.itemQtyContainer}>
                    <TrashIcon style={{marginHorizontal: 10}}  />
                    <Text style={themedStyle.itemQtyLabel}>1</Text>
                </View>
                <View style={themedStyle.itemPriceContainer}>
                     <Text style={themedStyle.itemPriceLabel}>$45.00</Text>
                </View>

              </View>
           
         
          </View>




          <View style={themedStyle.itemContainer}>
              <View style={themedStyle.itemSubContainer}>
                <Image 
                    size="giant"
                  source={require('src/assets/images/services-1.png')} />
                 <View style={themedStyle.itemDetailContainer}>
                   <Text style={themedStyle.itemHeading} >Product Name</Text>
                   <Text style={themedStyle.itemLabel}>Weight</Text>
                   <Text style={themedStyle.itemLabel}>Brand</Text>
                  </View> 
              </View>
              <View style={themedStyle.itemPetContainer}>
                <Avatar 
                  source={require('src/assets/images/services-1.png')}
                   />
                
                <View style={themedStyle.itemQtyContainer}>
                    <TrashIcon style={{marginHorizontal: 10}}  />
                    <Text style={themedStyle.itemQtyLabel}>1</Text>
                </View>
                <View style={themedStyle.itemPriceContainer}>
                     <Text style={themedStyle.itemPriceLabel}>$45.00</Text>
                </View>

              </View>
          </View>


          <View style={[themedStyle.summary.headRowContainer]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderSummaryLabel')}</Text>
            <Text style={themedStyle.summary.heading}  >#123323</Text>
          </View>
          <View style={[themedStyle.summary.rowContainer]}   >
            <Text style={themedStyle.summary.label} >{translate('OrderSubTotalLabel')}</Text>
            <Text style={themedStyle.summary.label} >$135.00</Text>
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('OrderShippingLabel')}</Text>
            <Text style={themedStyle.summary.label} >$10.00</Text>
          </View>
          <View style={themedStyle.summary.rowContainer}  >
            <Text style={themedStyle.summary.label} >{translate('OrderTaxLabel')}</Text>
            <Text style={themedStyle.summary.label}  >0</Text>
          </View>

          <View style={[themedStyle.summary.rowContainer,{marginTop: 20, marginBottom: 20}]}  >
            <Text style={themedStyle.summary.heading} >{translate('OrderTotalLabel')}</Text>
            <Text style={themedStyle.summary.heading}  >$145.00</Text>
          </View>

          <Button
                            style={styles.yellowButton}
                            textStyle={styles.whiteFont}
                            size="giant"
                            status='primary'
                            // disabled={!this.validator()}
                            // onPress={this.onAddButtonPress}

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
