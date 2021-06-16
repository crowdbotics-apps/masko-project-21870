import React from 'react';
import {
  View,
  TextInput as Input,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback, 
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Avatar,
  Button,
  Text
} from 'react-native-ui-kitten';


import {
  textStyle,
} from '../../components/common';

import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'

import { NormalOrderComponent } from '../../components/common';

import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';
import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';
import * as _ from 'lodash';

const moment = require('moment');

const initialState = {

  bookingFromDate: {
    display: moment().subtract(1, 'months').format(AppConfig.dateFormat),
    value: new Date()
  },
  bookingToDate: {
    display: moment().format(AppConfig.dateFormat),
    value: new Date()
  },

  showDatePickerFrom: false,
  showDatePickerTo: false,
};

class OrderListComponent extends React.Component {
  state = {...initialState}
  
  constructor(props){
    super(props);
    this.onChangeSearchTextDelayed = _.debounce(this.callGetService, 1000);
  }

  componentDidUpdate(prevProps, prevStates){
    
    if( this.props.resetMyOrderState != prevProps.resetMyOrderState
      && this.props.resetMyOrderState == true ){
        this.setState({...initialState});
      }
    // myOrderFormReset 
  }

  

  componentDidMount(){
    const { bookingFromDate, bookingToDate } = this.state
    this.getMyOrders(bookingFromDate, bookingToDate)
  }

  getMyOrders(bookingFromDate, bookingToDate) {
    this.props.getMyOrdersCb(bookingFromDate.display, bookingToDate.display)
  }


  renderSpinner = () => {
    const { getMyOrderLoading } = this.props;
    if (getMyOrderLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  handleBookingDateFromChange = (event, date) => {
    const { bookingToDate } = this.state
    let { bookingFromDate } = this.state;
    if (date != null) {

      
      bookingFromDate = {
        display: moment(date).format(AppConfig.dateFormat),
        value: new Date(date)
      }

      if (Platform.OS !== 'ios') {
        this.setState({ bookingFromDate, showDatePickerFrom: false });
      } else {
        this.setState({ bookingFromDate });
      }
      this.getMyOrders(bookingFromDate, bookingToDate)

    } else {
      this.setState({ showDatePickerFrom: false });
    }
    
  }

  handleBookingDateToChange = (event, date) => {
    const { bookingFromDate } = this.state
    let { bookingToDate } = this.state;

    if (date != null) {

      
      bookingToDate = {
        display: moment(date).format(AppConfig.dateFormat),
        value: new Date(date)
      }

      if (Platform.OS !== 'ios') {
        this.setState({ bookingToDate, showDatePickerTo: false });
      } else {
        this.setState({ bookingToDate });
      }
      this.getMyOrders(bookingFromDate, bookingToDate)

    } else {
      this.setState({ showDatePickerTo: false });
    }
    
  }

  onPressOrderItem = (item) => {
    this.props.onPressOrderItem(item)
  }

  onSearchInputTextChange = (text) => {
    this.setState({ search: text });
    this.onChangeSearchTextDelayed(text)
    
  }

  callGetService = (text)=>{
    this.props.getServicesCb(text);
  }

  toggleDateFromModal = () => {

    const { showDatePickerFrom } = this.state;

    let status = false;
    if (showDatePickerFrom) {
      status = false;
    } else {
      status = true;
    }
    this.setState({ showDatePickerFrom: status, showDatePickerTo: false })

  }

  toggleDateToModal = () => {

    const { showDatePickerTo } = this.state;

    let status = false;
    if (showDatePickerTo) {
      status = false;
    } else {
      status = true;
    }
    this.setState({ showDatePickerTo: status, showDatePickerFrom: false })

  }

  render() {

    const { themedStyle } = this.props;
    const { bookingFromDate, bookingToDate, showDatePickerFrom, showDatePickerTo } = this.state;

   
    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainerWithoutPad}>
        {this.renderSpinner()}
       
        <ScrollView contentContainerStyle={themedStyle.scrollView} >
          
       

              <View style={themedStyle.detailContainer.inputContainerHalf}>
                <TouchableOpacity style={themedStyle.detailContainer.pickerContainer2}
                  onPress={this.toggleDateFromModal}
                >
                  <Text style={themedStyle.detailContainer.placeHolderText}>{translate('RecurringOrderFromDateLabel')}</Text>
                  <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{bookingFromDate.display}</Text>


                </TouchableOpacity>
                
                <View style={{ width: 20 }} ></View>
                <TouchableOpacity style={themedStyle.detailContainer.pickerContainer2}
                    onPress={this.toggleDateToModal}
                  >
                    <Text style={themedStyle.detailContainer.placeHolderText}>{translate('RecurringOrderToDateLabel')}</Text>
                    <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{bookingToDate.display}</Text>


                </TouchableOpacity>

                   
                   

              </View>   
              {showDatePickerFrom && (
                      <DateTimePicker
                        display="spinner"
                        value={bookingFromDate.value}
                        mode={'date'}
                        style={{ color: "#FFF" }}
                        textColor={'#FFF'}
                        onChange={this.handleBookingDateFromChange}
                        onConfirm={this.handleBookingDateFromChange}
                        onCancel={this.toggleDateFromModal}
                      />
                  )} 

                 {showDatePickerTo && (
                      <DateTimePicker
                        display="spinner"
                        value={bookingToDate.value}
                        mode={'date'}
                        style={{ color: "#FFF" }}
                        textColor={'#FFF'}
                        onChange={this.handleBookingDateToChange}
                        onConfirm={this.handleBookingDateToChange}
                        onCancel={this.toggleDateToModal}
                      />
                  )} 
         { this.props.orders.length == 0 && (
          
          <EmptyRecordContainer emptyText={translate("NoRecordFoundLabel")} />
      
        )} 
        { this.props.orders.length > 0 && (
          <NormalOrderComponent
          data={this.props.orders}
          onPressOrderItem={this.onPressOrderItem}

        />
        )}   
          

        </ScrollView>
      </LinearGradient>
    );
  }
}


export const OrderList = withStyles(OrderListComponent, theme => ({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
    width: width,
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
  categoryHead: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    padding: 15
  },

  inputLabelContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomColor: '#A0B0DC',
    borderBottomWidth: 1,
    padding: 0,
    margin: 10,
    marginTop: 30,
    paddingBottom: 10,
    backgroundColor: null,
    fontFamily: "Montserrat",
    color: '#FFF',

  },

  inputLabelContainerMid: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomColor: '#A0B0DC',
    borderBottomWidth: 1,
    padding: 0,
    margin: 15,
    paddingBottom: 10,
    backgroundColor: null,
    fontFamily: "Montserrat",
    color: '#FFF',

  },
  inputBoxLabelTxt: {
    fontFamily: "Montserrat",
    color: '#9BB2EF',
    fontSize: 12,
    padding: 0,
    margin: 0,
  },
  inputBoxValueTxt: {
    fontFamily: "Montserrat",
    color: '#FFF',
    fontSize: 13,
    padding: 0,
    margin: 0,
    marginBottom: 10,
  },
  inputBoxText: {
    fontFamily: "Montserrat",
    color: '#FFF',
    fontSize: 13
  },
  inputBoxLabel: {
    // borderBottomColor:'#7384B2',
    // borderBottomWidth:1,
    // padding:10,
    // margin:10,
    // marginBottom: 10,

    width: width * 0.75,
    padding: 0,
    margin: 0,
    backgroundColor: null,
    fontFamily: "Montserrat",
    color: '#FFF',
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
      flexDirection: 'row',
      marginHorizontal: 15
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
