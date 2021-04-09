import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {ForgetPassword} from './forgetPassword.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';
import  appConfig from 'src/config/app';

export class _ForgetPasswordContainer extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'ForgetPasswordContainer';

  onSignInPress = data => {
    //  this.props.navigation.goBack();
    this.props.navigation.navigation( appConfig.NAVIGATOR_ROUTE.SignIn )
    // const { actions } = this.props;
    // actions.resetPassword(data)
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: appConfig.NAVIGATOR_ROUTE.SignUp,
    });
  };

  onSignInButtonPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: appConfig.NAVIGATOR_ROUTE.SignIn,
    });
  };

  onForgotPasswordPress = data => {
    const { actions } = this.props;
    actions.resetPassword(data.email)
  };

  onGooglePress = () => {};

  onFacebookPress = () => {};

  onTwitterPress = () => {};

  render() {
    return (
      <ForgetPassword
        onSignInPress={this.onSignInButtonPress}
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
    resetPassword: (email) => {
      dispatch(emailAuthActions.resetPassword(email));
    },
  },
});

export const ForgetPasswordContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ForgetPasswordContainer);
