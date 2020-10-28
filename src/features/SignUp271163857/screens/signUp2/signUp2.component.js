import React from 'react';
import {ButtonProps, ImageProps, View} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
  Text
} from 'react-native-ui-kitten';
import {Button} from 'react-native-ui-kitten';
import {SignUpForm2} from '../../components/auth';
import {ProfilePhoto} from '../../components/social';
import {ScrollableAvoidKeyboard, textStyle} from '../../components/common';
// import { PlusIconFill } from '@src/assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {EmailValidator, PasswordValidator} from '../../core/validators';

class SignUp2Component extends React.Component {


  state = {
    username: undefined,
    email: undefined,
    password: undefined,
    termsAccepted: false,
  };

  onTermsValueChange = termsAccepted => {
    this.setState({termsAccepted});
  };

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onEmailInputTextChange = email => {
    this.setState({email});
  };

  onPasswordInputValidationResult = password => {
    this.setState({password});
  };

  onPhotoButtonPress = () => {
    this.props.onPhotoPress();
  };

  onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  onSignUpButtonPress = () => {
    // this.props.onSignUpPress(this.state.formData);
    this.props.onSignUpPress({
      email: this.state.email,
      password: this.state.password,
    });
  };

  renderPhotoButtonIcon = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="plus" />;
  };

  renderPhotoButton = () => {
    const {themedStyle} = this.props;

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
 
     const {username, email, password, termsAccepted} = this.state;
 
     return (
       email !== undefined &&
       EmailValidator(this.state.email) &&
       password !== undefined &&
       termsAccepted && PasswordValidator(password) && username !== undefined
     );
   }

  render() {
    const {themedStyle} = this.props;

    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <View style={themedStyle.headerContainer}>
          <ProfilePhoto
            style={themedStyle.photo}
            resizeMode="center"
            source={require('../../assets/icons/icon-person.png')}
            button={this.renderPhotoButton}
          />
        </View>
        {this.props.errorMsg && (
          <View style={themedStyle.msgContainer}>
            <Text style={{color: 'red'}}>{this.props.errorMsg}</Text>
          </View>
        )}

        <SignUpForm2
          style={themedStyle.formContainer}
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          termsAccepted={this.state.termsAccepted}
          onUsernameInputTextChange={this.onUsernameInputTextChange}
          onEmailInputTextChange={this.onEmailInputTextChange}
          onPasswordInputValidationResult={this.onPasswordInputValidationResult}
          onTermsValueChange={this.onTermsValueChange}
        />
        <Button
          style={themedStyle.signUpButton}
          //textStyle={textStyle.button}
          size="giant"
          disabled={!this.validator()}
          onPress={this.onSignUpButtonPress}
          
          >
          SIGN UP
        </Button>
        <Button
          style={themedStyle.signInButton}
          textStyle={themedStyle.signInText}
          appearance="ghost"
          activeOpacity={0.75}
          onPress={this.onSignInButtonPress}>
          Already have an account? Sign In
        </Button>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignUp2 = withStyles(SignUp2Component, theme => ({
  container: {
    flex: 1,
    backgroundColor: ['background-basic-color-1'],
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: theme['color-primary-default'],
  },
  formContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 16,
  },
  photo: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
    backgroundColor: theme['background-basic-color-1'],
    tintColor: theme['color-primary-default'],
  },
  photoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    transform: [{translateY: 80}],
    borderColor: theme['border-basic-color-2'],
    backgroundColor: theme['background-basic-color-2'],
  },
  photoButtonIcon: {
    width: 24,
    height: 24,
    tintColor: theme['color-primary-default'],
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
  },
  signInText: {
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
  msgContainer: {
    borderWidth: 2,
    borderColor: '#e3e3e3',
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
