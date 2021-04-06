import React from 'react';
import { ButtonProps, ImageProps, View, Dimensions } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
  Text
} from 'react-native-ui-kitten';
import { Button } from 'react-native-ui-kitten';
import { SignUpForm2 } from '../../components/auth';
import { ProfilePhoto } from '../../components/social';
import { ScrollableAvoidKeyboard, textStyle } from '../../components/common';
// import { PlusIconFill } from '@src/assets/icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { EmailValidator, PasswordValidator } from '../../core/validators';

import { Spinner } from 'src/components/Spinner';

import LargeLogo from 'src/assets/images/masko-logo-large.svg';
import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'

class SignUp2Component extends React.Component {


  state = {
    username: undefined,
    email: undefined,
    password: undefined,
    termsAccepted: false,
    termsModalStatus: false
  };

  onTermsValueChange = termsAccepted => {
    this.setState({ termsAccepted });
  };

  onUsernameInputTextChange = username => {
    this.setState({ username });
  };

  onEmailInputTextChange = email => {
    this.setState({ email });
  };

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

  onSignUpButtonPress = () => {
    // this.props.onSignUpPress(this.state.formData);
    this.props.onSignUpPress({
      email: this.state.email,
      password: this.state.password,
      name: this.state.username,
    });
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

    const { username, email, password, termsAccepted } = this.state;

    return (
      email !== undefined &&
      EmailValidator(this.state.email) &&
      password !== undefined &&
      termsAccepted && PasswordValidator(password) && username !== undefined
    );
  }


  onTermsModalPress = () => {
    this.setState({ termsModalStatus: !this.state.termsModalStatus })
  }
  
  onForgetPasswordButtonPress = () => {
    this.props.onForgetPasswordButtonPress();
  }

  renderSpinner = () => {
    const { signUpLoading } = this.props;
    if (signUpLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  render() {
    const { themedStyle } = this.props;

    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
        {this.renderSpinner()}
        <ScrollableAvoidKeyboard style={themedStyle.container}>
          <View  >
            <LargeLogo width={width} style={{ marginBottom: 30, marginTop: 50 }} />
            <Text style={themedStyle.signInLabel} category="s1" style={styles.loginHeading} >
              SIGNUP
              </Text>
          </View>
          {this.props.errorMsg && (
            <View style={themedStyle.msgContainer}>
              <Text style={{ color: 'red' }}>{this.props.errorMsg}</Text>
            </View>
          )}

          <SignUpForm2
            style={themedStyle.formContainer}
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            termsAccepted={this.state.termsAccepted}
            termsModalStatus={this.state.termsModalStatus}
            onUsernameInputTextChange={this.onUsernameInputTextChange}
            onEmailInputTextChange={this.onEmailInputTextChange}
            onForgetPasswordButtonPress={this.onForgetPasswordButtonPress}
            onPasswordInputValidationResult={this.onPasswordInputValidationResult}
            onTermsValueChange={this.onTermsValueChange}
            onTermsModalPress={this.onTermsModalPress}
          />
          <Button
            style={styles.yellowButton}
            textStyle={styles.whiteFont}
            size="giant"
            status='warning'
            disabled={!this.validator()}
            onPress={this.onSignUpButtonPress}

          >
            Sign Up
        </Button>
          <Button
            // style={themedStyle.signInButton}
            // textStyle={themedStyle.signInText}
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onSignInButtonPress}>
            <Text style={styles.whiteFont}>Already have an account?</Text> <Text style={styles.yellowFont}>Login</Text>

          </Button>
          <Button
            // style={themedStyle.signInButton}
            // textStyle={themedStyle.signInText}
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onForgetPasswordButtonPress}>
            <Text style={styles.whiteFont}>Forgot your password?</Text> <Text style={styles.yellowFont}>Reset Password</Text>

          </Button>
        </ScrollableAvoidKeyboard>
      </LinearGradient>
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
    transform: [{ translateY: 80 }],
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
