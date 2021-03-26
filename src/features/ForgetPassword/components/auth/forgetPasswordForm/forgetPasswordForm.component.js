import React from 'react';
import {View, ViewProps, TextInput as Input} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon
  
} from 'react-native-ui-kitten';
import {Button} from 'react-native-ui-kitten';
import {textStyle, ValidationInput} from '../../common';
// import {
//   EyeOffIconFill,
//   PersonIconFill,
// } from '@src/assets/icons';
import {NameValidator, PasswordValidator} from '../../../core/validators';
import formStyles from 'src/features/SignIn/screens/styles';

class ForgetPasswordFormComponent extends React.Component {
  state = {
    username: undefined,
    password: undefined,
  };

  onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  isValid = value => {
    const {username, password} = value;

    return username !== undefined && password !== undefined;
  };

  renderEyeOffIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="eye-off" />;
  };

  renderPersonIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="person" />;
  };


  render() {
    // const {style, themedStyle, ...restProps} = this.props;
   
    const {
      style,
      themedStyle,
      theme,
      onPasswordInputTextChange,
      onUsernameInputTextChange,
      username,
      password,
      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          {/* <ValidationInput
            textStyle={textStyle.paragraph}
            placeholder="User Name"
            //icon={this.renderPersonIconFill()}
            validator={NameValidator}
            onChangeText={this.onUsernameInputTextChange}
          /> */}
          <Input
           style={formStyles.inputBox}
           textStyle={formStyles.inputBoxText}
           placeholderTextColor={"#fff"}
            placeholder="Email"
            // autoCapitalize="none"
            // status={username && this.getStatus(NameValidator(username))}
            // icon={this.renderPersonIconFill}
            value={username}
            onChangeText={onUsernameInputTextChange}
          />

        </View>
      </View>
    );
  }
}

export const ForgetPasswordForm = withStyles(ForgetPasswordFormComponent, theme => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
}));
