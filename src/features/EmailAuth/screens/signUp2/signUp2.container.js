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
    const { actions } = this.props;
    actions.signUp(data);
    // this.props.navigation.goBack();
  };

  onSignInPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'SignIn4',
    });
  };

  onForgetPasswordButtonPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'ForgetPassword',
    });
  }

  onPhotoPress = () => {};

  

  render() {
    return (
      <SignUp2
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
        onForgetPasswordButtonPress={this.onForgetPasswordButtonPress}
        errorMsg={this.props.signUpErrors}
        signUpLoading={this.props.signUpLoading}
        
      />
    );
  }
}

const mapStateToProps = state => ({
  // signUpErrors: state.SignUp02Blueprint.errors.SignUp,
  signUpLoading: state.EmailAuth.loaders.SignUp
});


const mapDispatchToProps = dispatch => ({
  actions: {
    signUp: ({email, password, name}) => {
      dispatch(emailAuthActions.signUp({email, password, name}));
    },
  },
});

export const SignUp2Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignUp2Container);
