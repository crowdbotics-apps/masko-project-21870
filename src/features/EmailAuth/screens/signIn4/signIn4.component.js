import React from 'react';
import {View, Dimensions} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {Button, Text} from 'react-native-ui-kitten';
import {SignInForm2, SocialAuth} from '../../components/auth';
import { EmailValidator, PasswordValidator } from '../../core/validators';

import { Spinner } from 'src/components/Spinner';

import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '../../components/common';

import LargeLogo from 'src/assets/images/masko-logo-large.svg';
import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'


class SignIn4Component extends React.Component {
  state = {
    username: 'usama149+b4@gmail.com',
    password: 'test123456',
  };

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  onSignInButtonPress = () => {
    this.props.onSignInPress({
      email: this.state.username,
      password: this.state.password,
    });
  };

  onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

  onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

  onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

  onFormDataChange = formData => {
    this.setState({formData});
  };

  validator() {

    const {  username, password } = this.state;

    return (
      username !== undefined &&
      EmailValidator(this.state.username) &&
      password !== undefined &&
      PasswordValidator(password)
    );
  }

  renderSpinner = () => {
    const { signInLoading } = this.props;
    if (signInLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };


  render() {
    const {themedStyle} = this.props;

    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
        <ScrollableAvoidKeyboard >
            {this.renderSpinner()}
            <View style={themedStyle.headerContainer}>
              <LargeLogo width={width} style={{marginBottom:50,marginTop:50}} />
              <Text style={themedStyle.signInLabel} category="s1" style={styles.loginHeading} >
                LOGIN
              </Text>
            </View>
            {this.props.errorMsg && (
              <View style={themedStyle.msgContainer}>
                <Text style={{color: 'red'}}>{this.props.errorMsg}</Text>
              </View>
            )}
            <SignInForm2
              style={[themedStyle.formContainer]}
              onForgotPasswordPress={this.onForgotPasswordButtonPress}
              //onDataChange={this.onFormDataChange}
              onUsernameInputTextChange={this.onUsernameInputTextChange}
              onPasswordInputTextChange={this.onPasswordInputTextChange}
              username={this.state.username}
              password={this.state.password}
            />
            <Button
              style={styles.yellowButton}
              textStyle={styles.whiteFont}
              status='warning'
              size="giant"
              disabled={!this.validator()}
              //disabled={!this.state.formData}
              onPress={this.onSignInButtonPress}>
              Login
            </Button>
           
            <Button
              style={themedStyle.signUpButton}
              textStyle={themedStyle.signUpText}
              appearance="ghost"
              activeOpacity={0.75}
              onPress={this.onSignUpButtonPress}>
               <Text style={styles.whiteFont}>Don't have an account?</Text> <Text style={styles.yellowFont}>Sign Up</Text>
            </Button>
         
        </ScrollableAvoidKeyboard>
      </LinearGradient>
    );
  }
}

export const SignIn4 = withStyles(SignIn4Component, theme => ({
  container: {
    flex: 1,
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
