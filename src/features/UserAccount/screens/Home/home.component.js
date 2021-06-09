import React from 'react';
import {
  View,
  Dimensions,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Avatar,
  Button,
  Text
} from 'react-native-ui-kitten';

import { EmailValidator, PasswordValidator } from '../../core/validators';

import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '../../components/common';

import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

import { AdComponent } from 'src/components/Ads/ads.component';

import { ServicesCatComponent } from '../../components/common';
import { PetComponent } from 'src/components/common';

class HomeComponent extends React.Component {
  state = {
    username: '',
    password: '',
  };

  componentDidUpdate(prevProps,prevStates){

    if(this.props.showPetSelector !== prevProps.showPetSelector  && this.props.showPetSelector){
      this.scrollRef.scrollTo({x: 0, y: 0, animated: true});
    }

  }

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
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

  goToTop = () => {
    this.scrollRef.scrollTo({x: 0, y: 0, animated: true});
 }


  render() {
    const {
            navigation,
          } = this.props;

    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainerWithOutPad}>
           <ScrollView 
           ref={ref => (this.scrollRef = ref)}
           style={styles.scrollView} contentContainerStyle={{ paddingBottom: 150 }} >
             <PetComponent 
                  navigation={navigation}
              />
              <AdComponent />
             
              <ServicesCatComponent 
                  data={this.props.serviceCat}
                  onPressCategory={this.props.onPressCategory}
                  />
              {/* <Button onPress={this.goToTop}>Go To Top</Button> */}
            </ScrollView>          
      </LinearGradient>
    );
  }
}

export const Home = withStyles(HomeComponent, theme => ({
  container: {
    flex: 1,
  },
  scrollView:{
    // padding: 10,
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
