import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput as Input,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import {
  withStyles,
  Button,
} from 'react-native-ui-kitten';


import RNPickerSelect from 'react-native-picker-select';


import { textStyle } from '../../common';

import * as ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet';


import formStyles from 'src/features/UserAccount/screens/styles';

import PhotoIcon from 'src/assets/icons/photo-icon.svg';

const width = Dimensions.get('screen').width

import { translate } from 'src/utils/translation';
import * as _ from 'lodash';

class AddCardFormComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  onAddCardButtonPress = () => {
    this.props.onAddCardPress();
    this.props.onCloseModal();
  }

  checkExpiry = () => {
    const { expiry } = this.props;
    return expiry.split('/');
  }

  validator() {

    const { number, expiry, cvv } = this.props;

    return (
      number !== undefined &&
      expiry !== undefined && this.checkExpiry().length==2 &&
      cvv !== undefined 
    );
  }

  render() {
    const {
      style,
      themedStyle,
      number,
      expiry,
      cvv,
      onNumberInputTextChange,
      onExpiryInputTextChange,
      onCVVInputTextChange,
      onAddCardPress,
      onCancelPress,

      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
       
        <View style={themedStyle.container}>
          <Text style={themedStyle.mainHeading} >{translate('AddCardButtonLabel')}</Text>
          
          <TouchableWithoutFeedback

            onPress={() => {
              this.numberTextBox.focus()
            }}
          >
            <View
              style={formStyles.inputLabelContainer}
            >

              <Text style={formStyles.inputBoxLabelTxt}>{translate('CdLabel')}</Text>
              <Input
                ref={(i) => this.numberTextBox = i}
                style={formStyles.inputBoxLabel}
                textStyle={formStyles.inputBoxText}
                autoCapitalize="none"
                placeholderTextColor={"#fff"}
                value={number}
                onChangeText={onNumberInputTextChange}
              />

            </View>
          </TouchableWithoutFeedback>
            
          <View style={{ flexDirection: "row" }}>
            <TouchableWithoutFeedback

              onPress={() => {
                this.expiryTextBox.focus()
              }}
            >
              <View
                style={formStyles.inputLabelContainerMid}
              >

                <Text style={formStyles.inputBoxLabelTxt}>{translate('EMLabel')}</Text>
                <Input
                  ref={(i) => this.expiryTextBox = i}
                  style={formStyles.inputBoxLabel}
                  textStyle={formStyles.inputBoxText}
                  autoCapitalize="none"
                  placeholderTextColor={"#fff"}
                  value={expiry}
                  onChangeText={onExpiryInputTextChange}
                />

              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback

              onPress={() => {
                this.cvvTextBox.focus()
              }}
            >
              <View
                style={formStyles.inputLabelContainerMid}
              >
                <Text style={formStyles.inputBoxLabelTxt}>{translate('CVLabel')}</Text>
                <Input
                  ref={(i) => this.cvvTextBox = i}
                  style={formStyles.inputBoxLabel}
                  textStyle={formStyles.inputBoxText}
                  autoCapitalize="none"
                  placeholderTextColor={"#fff"}
                  value={cvv}
                  onChangeText={onCVVInputTextChange}
                />

              </View>
            </TouchableWithoutFeedback>
          </View>
          <Button
                    style={formStyles.yellowButton2}
                    textStyle={formStyles.whiteFont}
                    size="giant"
                    status='primary'
                    disabled={!this.validator()}
                    onPress={this.onAddCardButtonPress}

                  >
                    {this.props.addCardLoading && (<ActivityIndicator />)}{translate("AddCardButtonLabel")}
                </Button>
                <Button
            style={formStyles.yellowButton2}
            textStyle={formStyles.whiteFont}
            size="giant"
            status='info'
            onPress={this.props.onCancelPress}

          >
            {translate("CancelButtonLabel")}
        </Button>
      
        </View>
      </View>
    );
  }
}


export const AddCardForm = withStyles(AddCardFormComponent, theme => ({
  container: { 
    width: 300,
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#455272"
  },
  mainHeading:{ 
    margin: 15,
    color: "#FFF",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    marginBottom: 15
  },
  radio: {
    marginVertical: 8,
    color: "#000",

  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    width: width * 0.9,
    padding: 10,
  },
  addContainer: {
    padding: 5,
    backgroundColor: "#A0B0DC",
    borderWidth: 2,
    borderColor: "#FFF",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    margin: 10,
  },
  addContainerText: {
    fontFamily: "Montserrat",
    alignSelf: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14

  },
  imgContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  imgNode: {
    width: 150
  },
  txtNode: {
    marginTop: 50,
    fontSize: 15,
    color: '#FFCD3E',
    fontWeight: 'bold'
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  usernameInput: {},
  emailInput: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
    // flex: 1, 
    width: 30,
  },
  termsCheckBoxText: {
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
  termsText: {
    flex: 4,
    marginTop: 20
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  petImage: {
    width: 100,
    height: 100,
    borderColor: '#E5E5E5',
    borderRadius: 50,
    borderWidth: 1,
  },
}));
