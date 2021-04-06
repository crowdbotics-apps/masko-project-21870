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
      <SignIn4
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        errorMsg={this.props.signInErrors}
        signInLoading={this.props.signInLoading}

      />
    );
  }
}

const mapStateToProps = state => ({
  signInLoading: state.EmailAuth.loaders.SignIn
});

const mapDispatchToProps = dispatch => ({
  actions: {
    login: ({email, password}) => {
      dispatch(emailAuthActions.login({email, password}));
    },
  },
});

export const SignIn4Container =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignIn4Container);
