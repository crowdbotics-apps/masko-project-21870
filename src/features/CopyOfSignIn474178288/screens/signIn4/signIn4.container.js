import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignIn4} from './signIn4.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

export class _SignIn4Container extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'SignIn4Container';

  onSignInPress = data => {
    this.props.navigation.goBack();
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 4',
    });
  };

  onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  onGooglePress = () => {};

  onFacebookPress = () => {};

  onTwitterPress = () => {};

  render() {
    return (
      <SignIn4
        onSignInPress={this.props.login}
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
  signInErrors: state.SignIn04Blueprint.errors.SignIn,
});

const mapDispatchToProps = {
  login: emailAuthActions.login
}

export const SignIn4Container =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignIn4Container);
