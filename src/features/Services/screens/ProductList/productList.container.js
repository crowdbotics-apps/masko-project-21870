import React from 'react';

import { ProductList } from './productList.component';
import {connect} from 'react-redux';
import * as ServiceActions from '../../redux/actions';
import * as CheckoutActions from 'src/features/Checkout/redux/actions';

import appConfig from 'src/config/app';

import { BackHomeIcon, RightIcon, LogoIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';

export class _ProductListContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { category } = navigation.state.params;
    titleText = translate('ProductListtNavTitle');
    if (category){
      titleText = category.name_en;
    }
    return {
                // title: titleText,
                headerTitle: (<LogoIcon navigation={navigation} />),
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<BackHomeIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon navigation={navigation} />)
          }
  };
  navigationKey = 'ProductListContainer';

  constructor( props ){
    super(props);
    this.state = {
      searchKeyword: '',
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot){
      if(this.props.navigation.state.params.category != prevProps.navigation.state.params.category ){
        this.getProducts();
      }
  }


  componentDidMount(){
      this.getProducts();
  }

  getProducts = (keyword) => {
    const { accessToken, actions, navigation } = this.props;
    actions.getProducts( accessToken, navigation.state.params.category, keyword );
  }

  onAddButtonPress = (data) => {
    const { actions } = this.props;
    actions.addItemToCart(data)
  }

  onPressProductItem = (item) => {
    const { navigation  } = this.props;

    this.props.navigation.navigate( appConfig.NAVIGATOR_ROUTE.ProductDetails ,{
      category: navigation.state.params.category,
      product: item 
    })
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <ProductList
        
        errorMsg={this.props.signInErrors}
        navigation={navigation}
        products={this.props.products}
        getProductsLoading={this.props.getProductsLoading}
        onPressServiceItem={this.onPressServiceItem}
        getProductsCb={this.getProducts}
        selectedPet={this.props.selectedPet}
        userPets={this.props.userPets}
        onAddButtonPress={this.onAddButtonPress}
        onPressProductItem={this.onPressProductItem}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  products: state.Service.products,
  userPets: state.UserAccount.pets,
  selectedPet: state.UserAccount.selectedPet,
  getProductsLoading: state.Service.GetProducts
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProducts: (accessToken, category, keyword, type, price, sort ) => {
      dispatch( ServiceActions.getProducts( accessToken, category, keyword, type, price, sort ) );
    },
    addItemToCart: ({type, item, pets, userSelection}) => {
      dispatch( CheckoutActions.addItemToCart( type, item, pets, userSelection ));
    },
  },
});

export const ProductListContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ProductListContainer);
