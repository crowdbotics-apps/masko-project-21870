import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignUp2} from './signUp2.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

export class _SignUp2Container extends React.Component {
  static navigationOptions = {
    header: null,
  };

  navigationKey = 'SignIn2';

  onSignUpPress = data => {
    this.props.navigation.goBack();
  };

  onSignInPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign In 2',
    });
  };

  onPhotoPress = () => {};

  render() {
    return (
      <SignUp2
        onSignUpPress={this.props.signUp}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
        errorMsg={this.props.signUpErrors}
      />
    );
  }
}

const mapStateToProps = state => ({
  signUpErrors: state.SignUp02Blueprint.errors.SignUp,
});

const mapDispatchToProps = {
  signUp: emailAuthActions.signUp,
};

export const SignUp2Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignUp2Container);
