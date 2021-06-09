import React from 'react';
import {View, Dimensions} from 'react-native';
import {
  withStyles,
} from 'react-native-ui-kitten';
import {Button, Text} from 'react-native-ui-kitten';
import {ForgetPasswordForm } from '../../components/auth';

import { EmailValidator } from '../../core/validators';

import { Spinner } from 'src/components/Spinner';

import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '../../components/common';

import LargeLogo from 'src/assets/images/masko-logo-large.svg';
import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'

import { translate }  from 'src/utils/translation';

const initialState = {
  username: '',
  password: '',
};

class ForgetPasswordComponent extends React.Component {
  state = {...initialState};

  componentDidUpdate(prevProps,prevStats){
    if( this.props.resetForgetPwdState != prevProps.resetForgetPwdState
      && this.props.resetForgetPwdState == true ){
        this.setState({...initialState});
      }
  }

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress({
      email: this.state.username
    });
  };

  onSignInButtonPress = () => {
    this.props.onSignInPress();
   
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

  validator = () => {

    const {  username } = this.state;

    return (
      username !== undefined &&
      EmailValidator(this.state.username) 
    );
  }

  renderSpinner = () => {
    const { forgetPwdLoading } = this.props;
    if (forgetPwdLoading) {
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
                {translate('ForgetPasswordHead')}
              </Text>
            </View>
            {this.props.errorMsg && (
              <View style={themedStyle.msgContainer}>
                <Text style={{color: 'red'}}>{this.props.errorMsg}</Text>
              </View>
            )}
            <ForgetPasswordForm
              style={[themedStyle.formContainer]}
              onForgotPasswordPress={this.onForgotPasswordButtonPress}
              onUsernameInputTextChange={this.onUsernameInputTextChange}
              username={this.state.username}
            />
            <Button
              style={styles.yellowButton}
              textStyle={styles.whiteFont}
              status='primary'
              size="giant"
              disabled={!this.validator()}
              onPress={this.onForgotPasswordButtonPress}>
              {translate('ResetPasswordButton')}
            </Button>
            <Button
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onSignUpButtonPress}>
            <Text style={styles.whiteFont}>{translate('Donot have account?')}</Text> <Text style={styles.yellowFont}>{translate('Sign up now')}</Text>

          </Button>
          <Button
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onSignInButtonPress}>
            <Text style={styles.whiteFont}>Have an account?</Text> <Text style={styles.yellowFont}> Log in</Text>

          </Button>
           
         
        </ScrollableAvoidKeyboard>
      </LinearGradient>
    );
  }
}

export const ForgetPassword = withStyles(ForgetPasswordComponent, theme => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    // flex: 1,
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
