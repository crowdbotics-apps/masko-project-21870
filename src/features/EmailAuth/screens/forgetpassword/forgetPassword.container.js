import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {ForgetPassword} from './forgetPassword.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

export class _ForgetPasswordContainer extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'SignIn4Container';

  onSignInPress = data => {
     this.props.navigation.goBack();
    // const { actions } = this.props;
    // actions.resetPassword(data)
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'SignUp2',
    });
  };

  onSignInButtonPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'SignIn4',
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
