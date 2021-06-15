import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput as Input,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import {
  withStyles,
  Modal,
  Radio,
  RadioGroup,
  Button
} from 'react-native-ui-kitten';


import RNPickerSelect from 'react-native-picker-select';


import { textStyle } from '../../common';

import * as ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet';


import formStyles from 'src/features/UserAccount/screens/styles';

import PhotoIcon from 'src/assets/icons/photo-icon.svg';

const width = Dimensions.get('screen').width

import { translate } from 'src/utils/translation';
import { AddCardForm } from '../AddCardForm';
import * as _ from 'lodash';

class UpdateProfileFormComponent extends React.Component {

  state = {
    addUndsModal: false
  }

  constructor(props) {
    super(props);



  }

  componentDidUpdate(prevProps,prevStates, snapshot){
     if(this.props.addCardError != null && prevProps.addCardError != this.props.addCardError){
        this.toggleModel();
     }
  }


  showActionSheet = () => {
    this.ActionSheet.show()
  }

  
  toggleModel =  () => {
    this.props.onCancelCardPress()
    this.setState({
      addUndsModal: !this.state.addUndsModal
    });
  }

  onAddCardPress = () => {
    this.props.onAddCardPress();
  }

  onCheckedChange = (index) => {
    this.props.onCheckedChange(index);
  }

  

  renderUnds() {
    const { unds, themedStyle } = this.props;
    return unds.map((item) => {
        let title = '************'+item.last4+' ( '+item.brand+' )'
        return (
          <Radio style={themedStyle.radio} textStyle={{ color: "#FFF", fontFamily: "Montserrat" }} text={title} />
         );
    });
  }

  render() {
    const {
      style,
      themedStyle,
      name,
      address,
      number,
      expiry,
      cvv,
      selectedCardIndex,
      onNameInputTextChange,
      onAddressInputTextChange,
      onNumberInputTextChange,
      onExpiryInputTextChange,
      onCVVInputTextChange,
      onAddCardPress,
      onCancelPress,
      ...restProps
    } = this.props;

    const { addUndsModal } = this.state;



    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={translate('PhotoActionSheetDesc')}
          options={[translate('OpenCameraButton'), translate('SelectAlbumButton'), translate('CancelButtonLabel')]}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => {
            switch (index) {
              case 0: this.selectCamera(); break;
              case 1: this.selectAlbum(); break;

            }
          }}
        />
        <View style={themedStyle.formContainer}>
          <TouchableWithoutFeedback

            onPress={() => {
              this.nameTextBox.focus()
            }}
          >
            <View
              style={formStyles.inputLabelContainer}
            >

              <Text style={formStyles.inputBoxLabelTxt}>{translate('FullNameLabel')}</Text>
              <Input
                ref={(i) => this.nameTextBox = i}
                style={formStyles.inputBoxLabel}
                textStyle={formStyles.inputBoxText}
                autoCapitalize="none"
                placeholder={translate('placeholdersFullName')}
                placeholderTextColor={"#fff"}
                value={name}
                onChangeText={onNameInputTextChange}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback

            onPress={() => {
              this.addressTextBox.focus()
            }}
          >
            <View
              style={formStyles.inputLabelContainer}
            >

              <Text style={formStyles.inputBoxLabelTxt}>{translate('AddressLabel')}</Text>
              <Input
                ref={(i) => this.addressTextBox = i}
                style={formStyles.inputBoxLabel}
                textStyle={formStyles.inputBoxText}
                autoCapitalize="none"
                placeholder={translate('AddressPlaceHolder')}
                placeholderTextColor={"#fff"}
                value={address}
                onChangeText={onAddressInputTextChange}
              />

            </View>
          </TouchableWithoutFeedback>

          <View style={themedStyle.cardListContainer}>
            <Text style={themedStyle.cardListHeading} >{translate('CardListHeading')}</Text>
            <RadioGroup
            selectedIndex={selectedCardIndex}
            onChange={(index) => this.onCheckedChange(index)} 
            >
              {this.renderUnds()}
           </RadioGroup>
            <TouchableOpacity onPress={()=> this.toggleModel() } >
                    <Text style={themedStyle.addCardLabel} >{translate('AddAnotherCardLabel')}</Text>
            </TouchableOpacity>
          </View>

          <Modal
            backdropStyle={themedStyle.backdrop}
            onBackdropPress={() => {this.toggleModel()}}
            visible={addUndsModal}>
             <AddCardForm
                    number={number}
                    expiry={expiry}
                    cvv={cvv}
                    onNumberInputTextChange={onNumberInputTextChange}
                    onExpiryInputTextChange={onExpiryInputTextChange}
                    onCVVInputTextChange={onCVVInputTextChange}
                    onAddCardPress={()=>this.onAddCardPress()}
                    onCancelPress={() => {this.toggleModel()}}
                    onCloseModal={()=>{this.toggleModel()}}
                    addCardLoading={this.props.addCardLoading}
                    
             />
          </Modal>
         




        </View>
      </View>
    );
  }
}
export const UpdateProfileForm = withStyles(UpdateProfileFormComponent, theme => ({
  container: {},
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
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardListContainer:{ 
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#455272"
  },
  cardListHeading:{ 
    color: "#FFF",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    marginBottom: 15
  },
  addCardLabel:{ 
    color: "#FFF",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    marginTop: 15
  }
}));
