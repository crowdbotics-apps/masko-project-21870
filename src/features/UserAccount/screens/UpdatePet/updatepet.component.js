import React from 'react';
import {
  Dimensions,
} from 'react-native';

import {
  withStyles,
  Button,
} from 'react-native-ui-kitten';


import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '../../components/common';

import AppConfig from 'src/config/app';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'

import { AddPetForm } from '../../components/forms/AddPetForm';
import { Spinner } from 'src/components/Spinner';
import * as _ from 'lodash';

import { translate }  from 'src/utils/translation';

const initialState = {
  name: undefined,
  pet: undefined,
  breed: undefined,
  age: undefined,
  image: {
    content: null,
    path: ''
  },
};

class _UpdatePetComponent extends React.Component {
 
  constructor(props){
    super(props)
    const { pet } = props.navigation.state.params;
    this.state = {
      id: pet.id,
      name: pet.name,
      pet: pet.typeInfo.id,
      petTypeName: this.getPetType(-1, pet.typeInfo.id ).name,
      breed: pet.breed,
      breedTypeName: this.getBreedType(-1, pet.breed ).name,
      breedType: this.getBreedType(-1, pet.breed ),
      age: pet.age,
      image: {
        content: null,
        path: pet.photo
      },
    };
  }


  getBreedType = ( index = -1 , value = -1 ) => {
    if (index>-1){
      return this.props.breedTypes[(index-1)];
    }else{
      let item = null;
      _.forEach(this.props.breedTypes, (i) => {
        if( i.id == value ){
          item = i;
        }
      });
      return item;
    } 
   
  }

  getPetType = ( index = -1 , value = -1 ) => {
    if (index>-1){
      return this.props.petTypes[(index-1)];
    }else{
      let item = null;
      _.forEach(this.props.petTypes, (i) => {
        if( i.id == value ){
          item = i;
        }
      });
      return item;
    } 
  }

  onTermsValueChange = termsAccepted => {
    this.setState({ termsAccepted });
  };

  onNameInputTextChange = name => {
    this.setState({ name });
  };

  componentDidUpdate(prevProps,prevStates){
    if( ( this.props.selectedBreedType && prevProps.selectedBreedType) 
         && this.props.selectedBreedType.id != prevProps.selectedBreedType.id){
     this.setState({
      breedType: this.props.selectedBreedType
     })       
    }
  }

  onPetInputTextChange = ( pet, index ) => {
    this.setState({ pet, petTypeName: this.getPetType(index,-1).name });
  };

  onBreedInputTextChange = ( breed , index ) => {
    this.setState({ breed, breedTypeName: this.getBreedType(index,-1).name });
  };

  onAgeInputTextChange = age => {
    this.setState({ age });
  };

  onPetImageChange = image => {
    this.setState({ image });
  }

  onPasswordInputValidationResult = password => {
    this.setState({ password });
  };

  onPhotoButtonPress = () => {
    this.props.onPhotoPress();
  };

  onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  onForgetPasswordButtonPress = () => {
    this.props.onForgetPasswordButtonPress();
  };

  onNextButtonPress = () => {
    this.props.onNextButtonPress({
      id: this.state.id,
      name: this.state.name,
      pet_type: this.state.pet,
      breed: this.state.breedType.id,
      age: this.state.age,
      image: this.state.image
    });
  };

  onCancelButtonPress = () => {
    this.props.onCancelButtonPress();
  };

  renderPhotoButtonIcon = style => {
    const { themedStyle } = this.props;

    return <Icon {...style} name="plus" />;
  };

  renderPhotoButton = () => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.photoButton}
        activeOpacity={0.95}
        icon={this.renderPhotoButtonIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  validator() {

    const { name, pet, breedType, age, image } = this.state;

    return (
      name !== undefined &&
      pet !== undefined && pet !== 0 &&
      breedType !== undefined && breedType !== null &&
      age !== undefined && 
      ( image.content !== null || image.path !== '' )
    );
  }

  renderSpinner = () => {
    const { updateLoading } = this.props;
    if (updateLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };



  onTermsModalPress = () => {
    this.setState({ termsModalStatus: !this.state.termsModalStatus })
  }
  
  onForgetPasswordButtonPress = () => {
    this.props.onForgetPasswordButtonPress();
  }

  onPressChooseBreed = () => {
    const { breedType } = this.state;
    this.props.onPressChooseBreed(breedType);
  }

  render() {
    const { themedStyle } = this.props;
    const { name, pet, breed, age, image } = this.state;

    
       return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
        {this.renderSpinner()}
        <ScrollableAvoidKeyboard style={themedStyle.container}>

        <AddPetForm
            name={name}
            pet={pet}
            breed={breed}
            breedTypeName={this.state.breedTypeName}
            breedType={this.state.breedType}
            petTypeName={this.state.petTypeName}

            selectedBreedType={this.props.selectedBreedType}
            age={age.toString()}
            petImage={image}
            breedTypes={this.props.breedTypes}

            petTypes={this.props.petTypes}
            onNameInputTextChange={this.onNameInputTextChange}
            onPetInputTextChange={this.onPetInputTextChange}
            onBreedInputTextChange={this.onBreedInputTextChange}
            onAgeInputTextChange={this.onAgeInputTextChange}
            onPetImageChange={this.onPetImageChange}
            changePhotoLabel={translate('ChangePhotoLabel')}

            onPressChooseBreed={this.onPressChooseBreed}
          />
         <Button
            style={styles.yellowButton}
            textStyle={styles.whiteFont}
            size="giant"
            status='primary'
            disabled={!this.validator()}
            onPress={this.onNextButtonPress}

          >
            {translate("NextButtonLabel")}
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

        </ScrollableAvoidKeyboard>
                   
      </LinearGradient>
    );
  }
}

export const UpdatePet = withStyles(_UpdatePetComponent, theme => ({
  container: {
    flex: 1,
    padding: 10,
    // flexDirection:"column"
  },
  scrollView:{
    padding: 10,
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
  }
}));
