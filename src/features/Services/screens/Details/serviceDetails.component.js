import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View
} from 'react-native';

import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Avatar,
  Button,
  Text,
  Input
} from 'react-native-ui-kitten';


import {
  textStyle,
} from '../../components/common';

import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'


import RNPickerSelect from 'react-native-picker-select';

import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';
import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';

class ServiceDetailsComponent extends React.Component {

  state = {
    timeOptionValue: undefined,
    timeOptionLabel: undefined,
    notes: undefined

  }

  renderSpinner = () => {
    const { getServiceLoading } = this.props;
    if (getServiceLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  onTimeInputTextChange = (value, index) => {
    this.setState({timeOptionValue: index,timeOptionLabel: value});
  }

  onNotesInputTextChange = (value) => {
    this.setState({notes:value});
  }

  onAddButtonPress = () => {
   
  }

  onCancelButtonPress = () => {
    this.props.navigation.pop();
  }


  render() {

    const { themedStyle, navigation } = this.props;
    const { service } = navigation.state.params; 

    const timeOptions = [
      {
        value: 'ASAP', label: "ASAP"
      },
      {
        value: 'Schedule', label: "Schedule"
      }
    ]


    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={[styles.itemsContainerWithoutPad]}>
        {this.renderSpinner()}
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

             <RNPickerSelect
              style={pickerSelectStyles}
              // placeholder={{ label: translate('PetTypePlaceHolder') , value: '0' }}

              onValueChange={(value, index) => {
                if(value!='0')
                  this.onTimeInputTextChange(value, index)
              }
              }
              items={timeOptions}
              value={this.state.timeOptionLabel}
            >
            <Text style={themedStyle.detailContainer.placeHolderText}>{translate('ServiceDetailTimeLabel')}</Text>
            <Text style={themedStyle.detailContainer.valueText}>{this.state.timeOptionLabel}</Text>
            </RNPickerSelect> 


             <Text style={themedStyle.detailContainer.placeHolderText} >{translate('ServiceDetailAddLabel')}</Text>
             <Text style={themedStyle.detailContainer.valueText}>4505  Melody Lane, Reston, Virginia</Text>   

             <Text style={themedStyle.detailContainer.placeHolderText} >{translate('ServiceDetailNoteLabel')}</Text>
             <Input
             textStyle={themedStyle.detailContainer.noteTextAreaText}
             style={themedStyle.detailContainer.noteTextArea}
              multiline={true}
              textStyle={{ minHeight: 80 }}
              placeholder='Add Notes'
              value={this.state.notes}
              onChangeText={(value)=>this.onNotesInputTextChange(value)}
            /> 

                     <Button
                            style={styles.yellowButton}
                            textStyle={styles.whiteFont}
                            size="giant"
                            status='primary'
                            // disabled={!this.validator()}
                            onPress={this.onAddButtonPress}

                          >
                            {translate("AddToCartBtn")}
                        </Button>
                        <Button
                        style={styles.yellowButton}
                        textStyle={styles.whiteFont}
                        size="giant"
                        status='info'
                        // disabled={!this.validator()}
                        onPress={this.onCancelButtonPress}

                      >
                        {translate("CancelButtonLabel")}
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
  serviceItem:{
            container:{ 
                width: width,
                backgroundColor:'#FFF',
                alignSelf:'center',
                overflow: 'hidden'
            },
            imageStyle:{
              borderTopRadius: 10,
              width: width,
              height: 180,
              resizeMode: 'cover',
            },
            textContainer:{
              padding: 20
            },
            textTitle:{
              fontFamily: "Montserrat",
              fontWeight: 'bold',
              fontSize: 14,
            },
            textDescription:{
              fontFamily: "Montserrat",
              fontSize: 12,
            }
  },
  detailContainer:{
    container: {
      flexDirection: "column",
      padding: 20,

    },
    placeHolderText:{
      color: "#9BB2EF",
      fontSize: 12,
    },
    valueText:{
      color: "#FFFF",
      fontSize: 15,
      marginBottom: 20,
    },
    noteTextArea:{
      color: "white",
      borderColor: "#FFF",
      backgroundColor: null,
      
      marginBottom: 20,
    },
    noteTextAreaText:{
      color: "white",
      fontSize: 10,
    }
  }
}));
