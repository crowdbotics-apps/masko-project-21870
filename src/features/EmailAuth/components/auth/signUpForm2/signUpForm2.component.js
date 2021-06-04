import React from 'react';
import {View, TextInput as Input, Text, TouchableOpacity} from 'react-native';
import {
  withStyles,
  Icon,
  Modal
} from 'react-native-ui-kitten';
import {CheckBox} from 'react-native-ui-kitten';
import {textStyle } from '../../common';



import formStyles from 'src/features/EmailAuth/screens/styles';
import { translate }  from 'src/utils/translation';


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
      privacyModalStatus,
      frequentPurchases,
      onFrequentInputTextChange,
      onUsernameInputTextChange,
      onEmailInputTextChange,
      onPasswordInputValidationResult,
      onTermsValueChange,
      onTermsModalPress,
      onPrivacyModalPress,
      selectedProducts,
      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          <Input
            style={formStyles.inputBox}
            textStyle={formStyles.inputBoxText} textStyle={textStyle.paragraph}
            autoCapitalize="none"
            placeholder={translate('placeholdersFullName')}
            placeholderTextColor={"#fff"}
            value={username}
            onChangeText={onUsernameInputTextChange}
          />
          <Input
          style={formStyles.inputBox}
          textStyle={formStyles.inputBoxText} 
          autoCapitalize="none"
            placeholder={translate('placeholdersEmail')}
            placeholderTextColor={"#fff"}
            value={email}
            onChangeText={onEmailInputTextChange}
            autoCapitalize="none"
          />
          <Input
           style={formStyles.inputBox}
           textStyle={formStyles.inputBoxText}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder={translate('placeholdersCreatePassword')}
            placeholderTextColor={"#fff"}
            value={password}
            onChangeText={onPasswordInputValidationResult}
          />
          <TouchableOpacity style={formStyles.inputBox} onPress={()=>this.props.onChooseProductPress()}>
            <Text style={formStyles.inputBoxText}>{translate('SignupChoosePreferredProduct')}</Text>
            {selectedProducts.map((k)=>{
              return (<Text style={formStyles.inputBoxText} >{k.name_en}</Text>)
            })}
          </TouchableOpacity>
          <Input
           style={formStyles.inputBox}
           textStyle={formStyles.inputBoxText}
            autoCapitalize="none"
            placeholder={translate('placeholdersFrequentPurchases')}
            keyboardType={'number-pad'}
            placeholderTextColor={"#fff"}
            value={frequentPurchases}
            onChangeText={onFrequentInputTextChange}
          />
      
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <CheckBox
              style={themedStyle.termsCheckBox}
              textStyle={themedStyle.termsCheckBoxText}
              checked={termsAccepted}
              onChange={onTermsValueChange}
              text=" "
            />

            <View style={themedStyle.termsText}  >
                <Text style={[formStyles.whiteFont ]}>{translate('TermsConditionLabel1')} </Text>
                <TouchableOpacity onPress={onTermsModalPress} ><Text style={[formStyles.yellowFontBold]}>{translate('TermsConditionLabel2')}</Text></TouchableOpacity>
                <Text style={[formStyles.whiteFont ]}> and </Text> 
                <TouchableOpacity onPress={onPrivacyModalPress} ><Text style={[formStyles.yellowFontBold]}>{translate('TermsConditionLabel3')}</Text></TouchableOpacity>
            </View>
          </View>
          <Modal
            backdropStyle={themedStyle.backdrop}
            onBackdropPress={onPrivacyModalPress}
            visible={privacyModalStatus}>
            <View style={formStyles.termsModalContainer}>
             <View style={{flexDirection:'row'}} >
             <TouchableOpacity   onPress={onPrivacyModalPress} >
                  <Icon width={25} height={25} fill='#FFF' name="arrow-ios-back-outline" />
             </TouchableOpacity>
             <Text style={[formStyles.termsHeading,{marginTop:0} ]}> {translate('SignUpPrivacyStatementHead')} </Text>
          
             </View>
             <Text style={[formStyles.termsConditionText]}>{translate('SignUpPrivacyPolicyText')}</Text>
            </View>
          </Modal>


          <Modal
            backdropStyle={themedStyle.backdrop}
            onBackdropPress={onTermsModalPress}
            visible={termsModalStatus}>
            <View style={formStyles.termsModalContainer}>
             <View style={{flexDirection:'row'}} >
             <TouchableOpacity   onPress={onTermsModalPress} >
                  <Icon width={25} height={25} fill='#FFF' name="arrow-ios-back-outline" />
             </TouchableOpacity>
             <Text style={[formStyles.termsHeading,{marginTop:0} ]}> {translate('TermsConditionHead')} </Text>
          
             </View>
             <Text style={[formStyles.termsConditionText]}>{translate('TermsConditionText')}</Text>
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
    marginTop: 20,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));
