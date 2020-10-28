import React from 'react';
import {View, ViewProps} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Input,
  Icon
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
      onUsernameInputTextChange,
      onEmailInputTextChange,
      onPasswordInputValidationResult,
      onTermsValueChange,
      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          <Input
            style={themedStyle.usernameInput}
            textStyle={textStyle.paragraph}
            autoCapitalize="none"
            placeholder="User Name"
            icon={this.renderPersonIconFill}
            status={username && this.getStatus(NameValidator(username))}
            value={username}
            onChangeText={onUsernameInputTextChange}
          />
          <Input
          style={themedStyle.emailInput}
            textStyle={textStyle.paragraph}
            autoCapitalize="none"
            placeholder="Email"
            icon={this.renderEmailIconFill}
            status={email && this.getStatus(EmailValidator(email))}
            value={email}
            onChangeText={onEmailInputTextChange}
            autoCapitalize="none"
          />
          <Input
          style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password"
            icon={this.renderEyeOffIconFill}
            status={password && this.getStatus(PasswordValidator(password))}
            value={password}
            onChangeText={onPasswordInputValidationResult}
          />
      
          <CheckBox
            style={themedStyle.termsCheckBox}
            textStyle={themedStyle.termsCheckBoxText}
            checked={termsAccepted}
            onChange={onTermsValueChange}
            text="I read and agree to Terms & Conditions"
          />
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
  },
  termsCheckBoxText: {
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
}));
