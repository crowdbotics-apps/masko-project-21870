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
  Icon,
  Modal
} from 'react-native-ui-kitten';


import RNPickerSelect from 'react-native-picker-select';


import { textStyle } from '../../common';

import * as ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet';


import formStyles from 'src/features/UserAccount/screens/styles';

import PhotoIcon from 'src/assets/icons/photo-icon.svg';

const width = Dimensions.get('screen').width

import { translate }  from 'src/utils/translation';
import * as _ from 'lodash';

class AddPetFormComponent extends React.Component {

  

  constructor(props){
    super(props);

    if(props.petImage){
      this.state = {
        petImage: props.petImage,
      };
    }else{
      this.state = {
        petImage: {
          content: null,
          path: ''
        },
      };

    }
    

  }

  selectImage = () => {
    this.showActionSheet();

  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  updateFormImage = (image) => {
    this.props.onPetImageChange(image)
    // this.setState({petImage: {...petImage,content:content}})
    this.setState({ petImage: image })
  }

  selectAlbum = () => {
    let { petImage } = this.state

    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: translate('SelectAlbumLabel'),
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
      mediaType: 'photo',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Open Image Library:
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        if (response != null && response.base64 != null) {
          let content = { data: response.base64, path: response.uri, mime: response.type };
          this.updateFormImage({ ...petImage, content: content })
        }
      }
    });

  }

  selectCamera = () => {
    let { petImage } = this.state
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: translate('SelectCameraLabel'),
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
      mediaType: 'photo',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        if (response != null && response.base64 != null) {
          let content = { data: response.base64, path: response.uri, mime: response.type };
          this.updateFormImage({ ...petImage, content: content })
        }
      }
    });

  }

  getStatus = valid => {
    return valid ? 'success' : 'danger';
  };

  formatTypeDd = () => {
    const { petTypes } = this.props;
    let list = [];
    _.forEach(petTypes, (i) => {
      list.push({ value: i.id, label: i.name });
    });

    return list;

  }

  formatBreedTypeDd = () => {
    const { breedTypes } = this.props;
    let list = [];
    _.forEach(breedTypes, (i) => {
      list.push({ value: i.id, label: i.name });
    });

    return list;

  }

  renderImage = () =>{

    const { petImage } = this.state;
    const { themedStyle } = this.props;
    if(petImage.content == null && petImage.path == ''){
      return (
        <View style={themedStyle.addContainer} >
              <PhotoIcon width={40} style={{ alignSelf: "center" }} />
        </View>);
    }else{
      return (<Image
                style={themedStyle.addContainer}
                source={{
                  uri: (petImage.content != null) ? petImage.content.path : petImage.path
                }
                } />
              );

    }

  }


  render() {
    const {
      style,
      themedStyle,
      name,
      pet,
      petTypeName, 
      breed,
      breedTypeName,
      age,
      image,
      onNameInputTextChange,
      onPetInputTextChange,
      onBreedInputTextChange,
      onAgeInputTextChange,
      changePhotoLabel,

      ...restProps
    } = this.props;

    const {
      petImage
    } = this.state

    const petTypes = this.formatTypeDd();
    const breedTypes = this.formatBreedTypeDd();

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={translate('PhotoActionSheetDesc')}
          options={[ translate('OpenCameraButton'), translate('SelectAlbumButton'), translate('CancelButtonLabel') ]}
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
          <View style={themedStyle.imgContainer}>
            <TouchableOpacity
              onPress={this.selectImage}
              style={themedStyle.imgNode}
            >
              {this.renderImage()}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.selectImage}
            >
              <Text style={themedStyle.txtNode}

              >{changePhotoLabel}</Text>
            </TouchableOpacity>

          </View>
          <TouchableWithoutFeedback

            onPress={() => {
              this.petTextBox.focus()
            }}
          >
            <View
              style={formStyles.inputLabelContainer}
            >

              <Text style={formStyles.inputBoxLabelTxt}>{translate('PetNameLabel')}</Text>
              <Input
                ref={(i) => this.petTextBox = i}
                style={formStyles.inputBoxLabel}
                textStyle={formStyles.inputBoxText}
                autoCapitalize="none"
                placeholder={translate('PetNamePlaceHolder')}
                placeholderTextColor={"#fff"}
                value={name}
                onChangeText={onNameInputTextChange}
              />
            </View>
          </TouchableWithoutFeedback>


          <View
            style={formStyles.pickerContainer}
          >

            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={{ label: translate('PetTypePlaceHolder') , value: '0' }}

              onValueChange={(value, index) => {
                if(value!='0')
                  onPetInputTextChange(value, index)
              }
              }
              items={petTypes}
              value={pet}
            >
              <Text style={formStyles.inputBoxLabelTxt}>{translate('PetTypeLabel')}</Text>
              {petTypeName && (<Text style={formStyles.inputBoxValueTxt}>{petTypeName}</Text>)}
              {!petTypeName && (<Text style={formStyles.inputBoxValueTxt}>{translate('PetTypePlaceHolder')}</Text>)}
              
            </RNPickerSelect>

          </View>




          <View
            style={formStyles.pickerContainer}
          >

            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(value, index) => {
                if(value!='0')
                  onBreedInputTextChange(value, index)
              }}
              placeholder={{ label: translate('BreedTypePlaceHolder'), value: '0' }}
              items={breedTypes}
              value={breed}
            >
            <Text style={formStyles.inputBoxLabelTxt}>{translate('BreedLabel')}</Text>
            {breedTypeName && (<Text style={formStyles.inputBoxValueTxt}>{breedTypeName}</Text>)}
            {!breedTypeName && (<Text style={formStyles.inputBoxValueTxt}>{translate('BreedTypePlaceHolder')}</Text>)}
        
            </RNPickerSelect>

          </View>







          <TouchableWithoutFeedback

            onPress={() => {
              this.ageTextBox.focus()
            }}
          >
            <View
              style={formStyles.inputLabelContainer}
            >

              <Text style={formStyles.inputBoxLabelTxt}>{translate('AgeLabel')}</Text>
              <Input
                ref={(i) => this.ageTextBox = i}
                style={formStyles.inputBoxLabel}
                textStyle={formStyles.inputBoxText}
                autoCapitalize="none"
                placeholder={translate('AgePlaceHolder')}
                placeholderTextColor={"#fff"}
                keyboardType={'decimal-pad'}
                value={age}
                onChangeText={onAgeInputTextChange}
              />

            </View>
          </TouchableWithoutFeedback>

        </View>
      </View>
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

export const AddPetForm = withStyles(AddPetFormComponent, theme => ({
  container: {},
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
