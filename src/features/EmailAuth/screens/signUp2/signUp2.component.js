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
import styles from '../styles';
import { translate }  from 'src/utils/translation';
import { ScrollView } from 'react-native-gesture-handler';


const initialState = {
  username: undefined,
  email: undefined,
  password: undefined,
  termsAccepted: false,
  termsModalStatus: false,
  privacyModalStatus: false,
  frequentPurchases: 0,
  signupProducts: []
};

class SignUp2Component extends React.Component {


  state = {...initialState};

  componentDidUpdate(prevProps,prevStats){
    if( this.props.resetSignUpState != prevProps.resetSignUpState
      && this.props.resetSignUpState == true ){
        this.setState({...initialState});
      }
  }

  onTermsValueChange = termsAccepted => {
    this.setState({ termsAccepted });
  };

  onUsernameInputTextChange = username => {
    this.setState({ username });
  };

  onFrequentInputTextChange = frequentPurchases => {
    this.setState({ frequentPurchases });
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

  onChooseProductPress = () =>{
    this.props.onChooseProductPress();
  }

  onForgetPasswordButtonPress = () => {
    this.props.onForgetPasswordButtonPress();
  };

  onSignUpButtonPress = () => {
    // this.props.onSignUpPress(this.state.formData);
    this.props.onSignUpPress({
      email: this.state.email,
      password: this.state.password,
      name: this.state.username,
      frequentPurchases: this.state.frequentPurchases,
      signupProducts: this.props.selectedProducts
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
      (username !== undefined && username != '') && 
      email !== undefined &&
      EmailValidator(email) &&
      ( password !== undefined && password != '' ) &&
      termsAccepted && PasswordValidator(password) 
    );
  }


  onTermsModalPress = () => {
    this.setState({ termsModalStatus: !this.state.termsModalStatus })
  }

  onPrivacyModalPress = () => {
    this.setState({ privacyModalStatus: !this.state.privacyModalStatus })
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
        <ScrollableAvoidKeyboard style={themedStyle.container}
     
        >
          <View  >
            <LargeLogo width={width} style={{ marginBottom: 10, marginTop: 40 }} />
            <Text style={themedStyle.signInLabel} category="s1" style={styles.signUpHeading} >
              {translate('SignUpText')}
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
            privacyModalStatus={this.state.privacyModalStatus}
            termsModalStatus={this.state.termsModalStatus}
            
            frequentPurchases={this.state.frequentPurchases}
            signupProducts={this.state.signupProducts}
            selectedProducts={this.props.selectedProducts}

            onFrequentInputTextChange={this.onFrequentInputTextChange}

            onUsernameInputTextChange={this.onUsernameInputTextChange}
            onEmailInputTextChange={this.onEmailInputTextChange}
            onForgetPasswordButtonPress={this.onForgetPasswordButtonPress}
            onChooseProductPress={this.onChooseProductPress}
            onPasswordInputValidationResult={this.onPasswordInputValidationResult}
            onTermsValueChange={this.onTermsValueChange}
            onTermsModalPress={this.onTermsModalPress}
            onPrivacyModalPress={this.onPrivacyModalPress}
          />
          <Button
            style={styles.yellowButton}
            textStyle={styles.whiteFont}
            size="giant"
            status='primary'
            disabled={!this.validator()}
            onPress={this.onSignUpButtonPress}

          >
            {translate('SignUp2Button')}
        </Button>
        <Button
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onSignInButtonPress}>
            <Text style={styles.whiteFont}>{translate('Already have an account?')}</Text> <Text style={styles.yellowFont}>{translate('LoginText')}</Text>

          </Button>
          <Button
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onForgetPasswordButtonPress}>
            <Text style={styles.whiteFont}>{translate('ForgetPasswordText')}</Text> <Text style={styles.yellowFont}>{translate('ResetPasswordText')}</Text>

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
    marginTop: 0,
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
