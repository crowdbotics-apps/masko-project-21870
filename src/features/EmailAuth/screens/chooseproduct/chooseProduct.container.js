import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { ChooseProduct } from './chooseProduct.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';
import  appConfig from 'src/config/app';
import * as ServiceActions from 'src/features/Services/redux/actions';

import * as NavigationService from 'src/navigator/NavigationService';


export class _ChooseProductContainer extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'ChooseProductContainer';

  componentDidMount(){
    this.getProducts();
  }

  getProducts = (keyword, type, price, sort) => {
    const { accessToken, actions, navigation } = this.props;
    actions.getProducts( accessToken, {id:3}, keyword, type, price, sort );
  }

  onSaveSelection = (selected) => {
    const { actions } = this.props;
    actions.setProducts(selected)
    NavigationService.goBack()
    
  }

  render() {
    return (
      <ChooseProduct
        getProductsLoading={this.props.getProductsLoading}
        products={this.props.products}
        getProductsCb={this.getProducts}
        onSaveSelection={this.onSaveSelection}
        selectedProducts={this.props.selectedProducts}

      />
    );
  }
}

const mapStateToProps = state => ({
  forgetPwdLoading: state.EmailAuth.loaders.PasswordRecover,
  products: state.Service.products,
  getProductsLoading: state.Service.GetProducts,

  selectedProducts: state.EmailAuth.selectedProducts
  // signInErrors: state.SignIn04Blueprint.errors.SignIn,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProducts: (accessToken, category, keyword, type, price, sort ) => {
      dispatch( ServiceActions.getProducts( accessToken, category, keyword, type, price, sort ) );
    },
    setProducts: (products) => {
      dispatch(emailAuthActions.setProducts(products));
    },
  },
});

export const ChooseProductContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ChooseProductContainer);
