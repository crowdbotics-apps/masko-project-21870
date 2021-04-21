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


const timeOptions = [
  {
    value: 'ASAP', label: "ASAP"
  },
  {
    value: 'Schedule', label: "Schedule"
  }
];

const dayTimeOption = [
  {
    value: 'Morning', label: "Morning"
  },
  {
    value: 'Mid-Day', label: "Mid-Day"
  },
  {
    value: 'Afternoon', label: "Afternoon"
  },
  {
    value: 'Evening', label: "Evening"
  }
];

class ServiceDetailsComponent extends React.Component {

  state = {
    timeOptionValue: undefined,
    timeOptionLabel: undefined,
    dayTimeOptionValue: undefined,
    dayTimeOptionLabel: undefined,
    notes: undefined,
    bookingDate: {
      display: moment().format(AppConfig.dateFormat),
      value: new Date()
    },
    showDatePicker: false,
    showTimePicker: false,
    pets: [],

  }

  constructor(props){
    super(props)
    this.state.pets = this.setPetInfo();

    if(this.props.userSelection){
      
      const { userSelection, userSelectedPets } = this.props;
      this.state.notes =  userSelection.notes;
      this.state.bookingDate =  userSelection.bookingDate;
      this.state.timeOptionLabel =  userSelection.timeOptionLabel;
      this.state.timeOptionValue =  userSelection.timeOptionValue;
      this.state.dayTimeOptionValue =  userSelection.dayTimeOptionValue;
      this.state.dayTimeOptionLabel =  userSelection.dayTimeOptionLabel;
      this.state.showDatePicker =  userSelection.showDatePicker;
      this.state.showTimePicker =  userSelection.showTimePicker;
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

  onTimeInputTextChange = (value, index) => {

    let newState = { ...this.state }

    if (value === timeOptions[1].value) {
      newState.showTimePicker = true
    }
    newState.timeOptionValue = index;
    newState.timeOptionLabel = value;


    this.setState(newState);
  }


  onDayTimeInputTextChange = (value, index) => {
    this.setState({ dayTimeOptionValue: index, dayTimeOptionLabel: value });
  }

  onNotesInputTextChange = (value) => {
    this.setState({ notes: value });
  }

  onAddButtonPress = () => {
      const {
        navigation,
      } = this.props;

      const { service } = navigation.state.params;

      this.props.onAddButtonPress({
        type: AppConfig.ITEM_TYPES.SERVICES,
        item: service,
        pets: this.getPetsForCart(),
        userSelection: {
          notes: this.state.notes,
          bookingDate: this.state.bookingDate, 
          timeOptionLabel: this.state.timeOptionLabel,
          timeOptionValue: this.state.timeOptionValue,
          dayTimeOptionValue: this.state.dayTimeOptionValue,
          dayTimeOptionLabel: this.state.dayTimeOptionLabel,
          showDatePicker: this.state.showDatePicker,
          showTimePicker: this.state.showTimePicker,


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

  toggleTimePicker = () => {
    this.setState({ showTimePicker: !this.state.showTimePicker })
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
    let petQty = this.getPetTotalQty();
    const { timeOptionLabel, dayTimeOptionLabel } = this.state;

    return (
            (petQty>0) &&
            (    timeOptionLabel == 'ASAP' || 
                (timeOptionLabel == "Schedule" && dayTimeOptionLabel != null) 
            )
    ) 
    
  }

  render() {

    const {
      themedStyle,
      navigation,
      selectedPet,
      userSelection
    } = this.props;

    const { service } = navigation.state.params;

    const {
      showDatePicker,
      showTimePicker,
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
        <ScrollView style={styles.scrollView} >
          <View style={themedStyle.serviceItem.container} >
            <Image
              source={{
                uri: service.photo,
              }}
              style={themedStyle.serviceItem.imageStyle}
            />
            <View style={themedStyle.serviceItem.textContainer} >
              <Text style={themedStyle.serviceItem.textTitle}  >{service.name_en}</Text>
              <Text style={themedStyle.serviceItem.textDescription}  >{service.description_es}</Text>
            </View>


          </View>

          <View style={themedStyle.detailContainer.container}>
            <Text style={themedStyle.detailContainer.placeHolderText} >{translate('ServiceDetailPriceLabel')}</Text>
            <Text style={themedStyle.detailContainer.valueText}>${service.price}</Text>
            <View style={themedStyle.detailContainer.pickerContainer} >
              <RNPickerSelect
                style={pickerSelectStyles}

                onValueChange={(value, index) => {
                  if (value != '0') {
                    this.onTimeInputTextChange(value, index)

                  }

                }
                }
                placeholder={{ label: translate('ChooseTimeLabel'), value: '0' }}
                items={timeOptions}
                value={this.state.timeOptionLabel}
              >
                <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ServiceDetailTimeLabel')}</Text>
                <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{this.state.timeOptionLabel}</Text>
              </RNPickerSelect>
            </View>

            {showTimePicker && (
              <View style={themedStyle.detailContainer.inputContainerHalf}>
                <TouchableOpacity style={themedStyle.detailContainer.pickerContainer2}
                  onPress={this.toggleDateModal}
                >
                  <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ServiceDetailDateLabel')}</Text>
                  <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{bookingDate.display}</Text>


                </TouchableOpacity>
                <View style={{ width: 20 }} ></View>
                <View style={themedStyle.detailContainer.pickerContainer2} >

                  <RNPickerSelect
                    style={pickerSelectStyles}

                    onValueChange={(value, index) => {
                      if (value != '0')
                        this.onDayTimeInputTextChange(value, index)
                    }
                    }
                    placeholder={{ label: translate('ChooseDayTimeLabel'), value: '0' }}
                    items={dayTimeOption}
                    value={this.state.timeOptionLabel}
                  >
                    <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ServiceDetailDayTimeLabel')}</Text>
                    <Text style={themedStyle.detailContainer.valueTextWithOutMargin}>{this.state.dayTimeOptionLabel}</Text>
                  </RNPickerSelect>
                </View>
              </View>
            )}
            {showTimePicker && showDatePicker && (
              <DateTimePicker
                value={bookingDate.value}
                mode={'date'}
                style={{ color: "#FFF" }}
                textColor={'#FFF'}
                onChange={this.handleBookingDateChange}
                onConfirm={this.handleBookingDateChange}
                onCancel={this.toggleDateModal}
              />
            )}




            <Text style={themedStyle.detailContainer.placeHolderText} >{translate('ServiceDetailAddLabel')}</Text>
            <Text style={themedStyle.detailContainer.valueText}>4505  Melody Lane, Reston, Virginia</Text>

            <Text style={themedStyle.detailContainer.placeHolderText} >{translate('ServiceDetailNoteLabel')}</Text>
            <Input
              textStyle={themedStyle.detailContainer.noteTextAreaText}
              style={themedStyle.detailContainer.noteTextArea}
              multiline={true}
              // textStyle={{ minHeight: 80, color:"#FFF" }}
              placeholder='Add Notes'
              value={this.state.notes}
              onChangeText={(value) => this.onNotesInputTextChange(value)}
            />
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



export const ServiceDetails = withStyles(ServiceDetailsComponent, theme => ({
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
      resizeMode: 'cover',
    },
    textContainer: {
      padding: 20
    },
    textTitle: {
      fontFamily: "Montserrat",
      fontWeight: 'bold',
      fontSize: 14,
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
