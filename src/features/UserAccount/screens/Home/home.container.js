import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { Home } from './home.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { LogoIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';

export class _HomeContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    console.log("Navigation Option")
    console.log(navigation)
    return {
                headerTitle: (<LogoIcon navigation={navigation} />),
                headerBackTitle: null,
                headerLeft: (<HamBurgerIcon navigation={navigation} />),
                headerTitleStyle: { 
                    textAlign:"center", 
                    flex:1 ,
                    border: null,
                },
                
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'HomeContainer';

  onSignInPress = data => {
    const { actions } = this.props;
    actions.login(data)
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'SignUp2',
    });
  };

  onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'ForgetPassword',
    });
  };

  onGooglePress = () => {};

  onFacebookPress = () => {};

  onTwitterPress = () => {};

  render() {
    return (
      <Home
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        errorMsg={this.props.signInErrors}

      />
    );
  }
}

const mapStateToProps = state => ({
  // signInErrors: state.SignIn04Blueprint.errors.SignIn,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    login: ({email, password}) => {
      dispatch(emailAuthActions.login({email, password}));
    },
  },
});

export const HomeContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_HomeContainer);
