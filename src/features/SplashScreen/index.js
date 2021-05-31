import React, { Component } from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LargeLogo from 'src/assets/images/masko-logo-large.svg';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text} from 'react-native-ui-kitten';
import { installed_blueprints } from "../../config/installed_blueprints";
import { styles } from './styles';
import { translate }  from 'src/utils/translation';



export default class App extends Component {

  static navigationOptions = {
    title: 'Installed blueprints',
    
  };
  

  onSignInButtonPress = () => {
    this.props.navigation.navigate("SignIn4");
  };

  onSignUpButtonPress = () => {
    this.props.navigation.navigate("SignUp2");
  };

  onForgetPasswordButtonPress = () => {
    this.props.navigation.navigate("ForgetPassword");
  };

  render() {
    // const {themedStyle} = this.props;
    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
          <LargeLogo width={width} style={styles.logoStyle}  />
          <Button
            style={styles.yellowButton}
            status='primary'
            size="giant"
            onPress={this.onSignInButtonPress}>
            {translate('LoginButton')}
          </Button>

          <Button
            style={styles.yellowButton}
            status='primary'
            size="giant"
            onPress={this.onSignUpButtonPress}>
            {translate('SignUpButton')}
          </Button>
         
           <Button
              appearance="ghost"
              activeOpacity={0.75}
              onPress={this.onForgetPasswordButtonPress}
              >
              
               <Text style={styles.whiteFont}>{translate('ForgetPasswordText')}</Text><Text style={styles.yellowFont}>{translate('ResetPasswordText')}</Text>
            </Button>
          
         
      </LinearGradient>
      
    );
  }
}