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
      breed: pet.breed,
      age: pet.age,
      image: {
        content: null,
        path: pet.photo
      },
    };
    // this.setPetData();
  }

  // setPetData(){
  //   const { navigation } = this.props;
  //   const { pet } = navigation.state.params;
  //   console.log("Set Pet Data");
  //   console.log(pet) 
  //   this.setState({
  //     name: pet.name,
  //     pet: pet.type,
  //     breed: pet.breed,
  //     age: pet.age,
  //     image: {
  //       content: null,
  //       path: pet.photo
  //     },
  //   });
  // }

  onTermsValueChange = termsAccepted => {
    this.setState({ termsAccepted });
  };

  onNameInputTextChange = name => {
    this.setState({ name });
  };

  onPetInputTextChange = pet => {
    this.setState({ pet });
  };

  onBreedInputTextChange = breed => {
    this.setState({ breed });
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
      breed: this.state.breed,
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

    const { name, pet, breed, age, image } = this.state;

    return (
      name !== undefined &&
      pet !== undefined && pet !== 0 &&
      breed !== undefined && breed !== 0 &&
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

  render() {
    const { themedStyle } = this.props;
    const { name, pet, breed, age, image } = this.state;

    
       return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
        {this.renderSpinner()}
        <ScrollableAvoidKeyboard style={themedStyle.container}>

        <AddPetForm
            // style={themedStyle.formContainer}
            name={name}
            pet={pet}
            breed={breed}
            age={age.toString()}
            petImage={image}
            breedTypes={this.props.breedTypes}
            petTypes={this.props.petTypes}
            onNameInputTextChange={this.onNameInputTextChange}
            onPetInputTextChange={this.onPetInputTextChange}
            onBreedInputTextChange={this.onBreedInputTextChange}
            onAgeInputTextChange={this.onAgeInputTextChange}
            onPetImageChange={this.onPetImageChange}
            changePhotoLabel={'Change Photo'}
          />
         <Button
            style={styles.yellowButton}
            textStyle={styles.whiteFont}
            size="giant"
            status='warning'
            disabled={!this.validator()}
            onPress={this.onNextButtonPress}

          >
            Next
        </Button>
        <Button
            style={styles.yellowButton}
            textStyle={styles.whiteFont}
            size="giant"
            status='info'
            // disabled={!this.validator()}
            onPress={this.onCancelButtonPress}

          >
            Cancel
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
