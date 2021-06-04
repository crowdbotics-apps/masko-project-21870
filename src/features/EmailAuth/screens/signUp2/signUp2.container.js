import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignUp2} from './signUp2.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

import appConfig from 'src/config/app';


export class _SignUp2Container extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    const didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        this.setState({...this.state})
      }
    );
  }

  navigationKey = 'SignIn2';

  onSignUpPress = data => {
    const { actions } = this.props;
    actions.signUp(data);
    // this.props.navigation.goBack();
  };

  onSignInPress = () => {
    this.props.navigation.navigate( appConfig.NAVIGATOR_ROUTE.SignIn );
  };

  onForgetPasswordButtonPress = () => {
    this.props.navigation.navigate( appConfig.NAVIGATOR_ROUTE.ForgetPassword );
  }

  onChooseProductPress = () =>{
    this.props.navigation.navigate( 'ChooseProduct' );
  }

  onPhotoPress = () => {};

  

  render() {
    return (
      <SignUp2
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
        onForgetPasswordButtonPress={this.onForgetPasswordButtonPress}
        onChooseProductPress={this.onChooseProductPress}
        errorMsg={this.props.signUpErrors}
        signUpLoading={this.props.signUpLoading}
        selectedProducts={this.props.selectedProducts}
        resetSignUpState={this.props.resetSignUpState}
        
      />
    );
  }
}

const mapStateToProps = state => ({
  // signUpErrors: state.SignUp02Blueprint.errors.SignUp,
  signUpLoading: state.EmailAuth.loaders.SignUp,
  resetSignUpState: state.EmailAuth.formReset.SignUp,

  selectedProducts: state.EmailAuth.selectedProducts
});


const mapDispatchToProps = dispatch => ({
  actions: {
    signUp: ({email, password, name, frequentPurchases, signupProducts}) => {
      dispatch(emailAuthActions.signUp({email, password, name, frequentPurchases, signupProducts}));
    },
  },
});

export const SignUp2Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignUp2Container);
