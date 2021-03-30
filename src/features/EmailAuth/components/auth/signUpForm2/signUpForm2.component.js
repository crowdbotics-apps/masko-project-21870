import React from 'react';
import {View, ViewProps, TextInput as Input, Text, TouchableOpacity} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
  Modal
} from 'react-native-ui-kitten';
import {CheckBox} from 'react-native-ui-kitten';
import {textStyle, ValidationInput} from '../../common';
// import {
//   EmailIconFill,
//   EyeOffIconFill,
//   PersonIconFill,
// } from '@src/assets/icons';
import {
  EmailValidator,
  NameValidator,
  PasswordValidator,
} from '../../../core/validators';



import formStyles from 'src/features/EmailAuth/screens/styles';


class SignUpForm2Component extends React.Component {


  getStatus = valid => {
    return valid ? 'success' : 'danger';
  };

  renderEyeOffIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="eye-off" />;
  };

  renderPersonIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="person" />;
  };

  renderEmailIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="email" />;
  };

  

  render() {
    const {
      style,
      themedStyle,
      username,
      email,
      password,
      termsAccepted,
      termsModalStatus,
      onUsernameInputTextChange,
      onEmailInputTextChange,
      onPasswordInputValidationResult,
      onTermsValueChange,
      onTermsModalPress,
      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          <Input
            style={formStyles.inputBox}
            textStyle={formStyles.inputBoxText} textStyle={textStyle.paragraph}
            autoCapitalize="none"
            placeholder="Full Name *"
            placeholderTextColor={"#fff"}
            // icon={this.renderPersonIconFill}
            // status={username && this.getStatus(NameValidator(username))}
            value={username}
            onChangeText={onUsernameInputTextChange}
          />
          <Input
          style={formStyles.inputBox}
          textStyle={formStyles.inputBoxText} 
          autoCapitalize="none"
            placeholder="Email *"
            placeholderTextColor={"#fff"}
            // icon={this.renderEmailIconFill}
            // status={email && this.getStatus(EmailValidator(email))}
            value={email}
            onChangeText={onEmailInputTextChange}
            autoCapitalize="none"
          />
          <Input
           style={formStyles.inputBox}
           textStyle={formStyles.inputBoxText}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Create Password"
            placeholderTextColor={"#fff"}
            // icon={this.renderEyeOffIconFill}
            // status={password && this.getStatus(PasswordValidator(password))}
            value={password}
            onChangeText={onPasswordInputValidationResult}
          />
      
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <CheckBox
            style={themedStyle.termsCheckBox}
            textStyle={themedStyle.termsCheckBoxText}
            checked={termsAccepted}
            onChange={onTermsValueChange}
            text=" "
          />

          <TouchableOpacity style={themedStyle.termsText} onPress={onTermsModalPress} >
              <Text style={[formStyles.whiteFont ]}>By using Masko you agree with our <Text style={[formStyles.yellowFont]}>terms and condition</Text></Text>
          </TouchableOpacity>
          </View>
          <Modal
            backdropStyle={themedStyle.backdrop}
            onBackdropPress={onTermsModalPress}
            visible={termsModalStatus}>
            <View style={formStyles.termsModalContainer}>
             <View style={{flexDirection:'row'}} >
             <TouchableOpacity   onPress={onTermsModalPress} >
                  <Icon width={25} height={25} fill='#FFF' name="arrow-ios-back-outline" />
             </TouchableOpacity>
             <Text style={[formStyles.termsHeading,{marginTop:0} ]}> Terms and Conditions</Text>
          
             </View>

            <Text style={[formStyles.termsConditionText]}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec gravida massa, quis eleifend odio. Nulla eget sem vitae lorem auctor luctus vel sed ipsum. Nam metus sem, blandit sed feugiat mattis, accumsan a libero. Aliquam blandit eu ex a mattis. Vestibulum in nunc commodo, posuere felis id, tempus magna. Etiam pharetra tempus enim quis scelerisque. Donec ullamcorper lectus quis eros cursus congue.  Aenean pulvinar mauris aliquam, consequat ligula in, placerat turpis. In non felis lobortis, pharetra leo eget, hendrerit felis. Curabitur lobortis, ipsum id aliquet tincidunt, augue sapien aliquam dui, a volutpat nisl justo sed neque. Duis in diam posuere, tempor velit in, luctus augue. In mauris mauris, viverra eu posuere vel, accumsan quis velit. Curabitur rutrum mi dolor. In posuere
                
              </Text>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

export const SignUpForm2 = withStyles(SignUpForm2Component, theme => ({
  container: {},
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
    flex:4,
    marginTop: 20
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));
