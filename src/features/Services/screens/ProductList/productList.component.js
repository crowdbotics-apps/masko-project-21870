import React from 'react';
import {
  View,
  TextInput as Input,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Avatar,
  Button,
  Text
} from 'react-native-ui-kitten';


import {
  textStyle,
} from '../../components/common';

import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'

import { ProductsComponent } from '../../components/common';

import { AdComponent } from 'src/components/Ads/ads.component';

import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';
import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';
import { SearchBox } from '../../components/common/searchBox.component';
import * as _ from 'lodash';

import { PetComponent } from 'src/components/common';

class ProductListComponent extends React.Component {
  state = {
    search: '',
    products: [],
  }
  
  constructor(props){
    super(props);
    this.onChangeSearchTextDelayed = _.debounce(this.callGetProducts, 1000);
    this.state.products = this.setProducts();
  }

  setProducts = () => {
    const { products } = this.props;
    let list = [];
    _.forEach(products, (i) => {
        list.push({
          ...i,
          qty: 0,
        })  
    });
    return list;    

  }

  renderSpinner = () => {
    const { getProductsLoading } = this.props;
    if ( getProductsLoading ) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  componentDidUpdate(prevProps, prevStates, snapshot){

    if(prevProps.products !== this.props.products){
        this.setState({products: this.setProducts() });
    }
  }

  onPressServiceItem = (item) => {
    this.props.onPressServiceItem(item)
  }

  onSearchInputTextChange = (text) => {
    this.setState({ search: text });
    this.onChangeSearchTextDelayed(text)
    
  }

  callGetProducts = (text)=>{
    this.props.getProductsCb(text);
  }

  onPressQtyAdd = (sItem) => {
    
    if(sItem){
      this.onUpdatePetQtyPress(sItem,(sItem.qty+1)) 
    } 
    
  }

  onPressQtySubtract = (sItem) => {
   
    if(sItem && sItem.qty!=0){
      this.onUpdatePetQtyPress(sItem,(sItem.qty-1)) 
    } 
  }


  onUpdatePetQtyPress = ( item , qty ) => {
    const { products } = this.state;
   
    let list = [];
    _.forEach(products, (i) => {
       list.push({
          ...i,
          qty: ( item && i.id == item.id )? qty : i.qty
        })  
    });
    
    this.setState({products: list})   
  }

  onAddButtonPress = ( item ) => {
  
    let pet = this.getPetsForCart();

    if(!pet){
      alert("Please Select Pet First")
    }else if (item.qty==0){
      alert("Please Select Item Quantity")
    }else{
      pet.qty = item.qty
      this.props.onAddButtonPress({
        type: AppConfig.ITEM_TYPES.PRODUCT,
        item: item,
        pets: [pet],
        userSelection: {
          notes: ''
  
        }
  
      })

    }
   
}

getPetsForCart = (item) => {

  const { userPets, selectedPet } = this.props;
  let pet = selectedPet;
  
  if( !pet ) {

    _.forEach( userPets , (i, index) => {
            if(index==0)
             pet = i;
            
    });

  }
  return pet;
}

onPressProductItem = (item) => {
   this.props.onPressProductItem(item);
}

  render() {

    const { navigation, themedStyle } = this.props;
    const { search, products } = this.state;
    let category = navigation.state.params.category



    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainerWithoutPad}>
        {this.renderSpinner()}
        <PetComponent 
                  navigation={navigation}
              />
        <SearchBox 
              extraTitle={category.getName()}
              onSearchInputTextChange={this.onSearchInputTextChange} 
              search={search}
        />
        <Text style={themedStyle.categoryHead}>{category.getName()}</Text>
        <ScrollView style={styles.scrollView} 
        contentContainerStyle={{ paddingBottom: 150 }} >
          
        { products.length == 0 && (
          <EmptyRecordContainer emptyText={translate("NoRecordFoundLabel")} />
        )} 

        { products.length > 0 && (
          <ProductsComponent
          data={ products }
          onPressProductItem={this.onPressProductItem}
          onPressQtyAdd={this.onPressQtyAdd}
          onPressQtySubtract={this.onPressQtySubtract}
          onAddButtonPress={this.onAddButtonPress}
          // userPets={this.props.userPets}

        />
        )}   
          

        </ScrollView>
      </LinearGradient>
    );
  }
}

export const ProductList = withStyles(ProductListComponent, theme => ({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  helloLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  signInLabel: {
    marginTop: 16,
    color: 'white',
    ...textStyle.subtitle,
  },
  socialAuthIcon: {
    tintColor: 'white',
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: 'white',
    ...textStyle.subtitle,
  },
  msgContainer: {
    borderWidth: 2,
    borderColor: "#e3e3e3",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryHead: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    padding: 15
  },

  inputLabelContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomColor: '#A0B0DC',
    borderBottomWidth: 1,
    padding: 0,
    margin: 10,
    marginTop: 30,
    paddingBottom: 10,
    backgroundColor: null,
    fontFamily: "Montserrat",
    color: '#FFF',

  },

  inputLabelContainerMid: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomColor: '#A0B0DC',
    borderBottomWidth: 1,
    padding: 0,
    margin: 15,
    paddingBottom: 10,
    backgroundColor: null,
    fontFamily: "Montserrat",
    color: '#FFF',

  },
  inputBoxLabelTxt: {
    fontFamily: "Montserrat",
    color: '#9BB2EF',
    fontSize: 12,
    padding: 0,
    margin: 0,
  },
  inputBoxValueTxt: {
    fontFamily: "Montserrat",
    color: '#FFF',
    fontSize: 13,
    padding: 0,
    margin: 0,
    marginBottom: 10,
  },
  inputBoxText: {
    fontFamily: "Montserrat",
    color: '#FFF',
    fontSize: 13
  },
  inputBoxLabel: {
    // borderBottomColor:'#7384B2',
    // borderBottomWidth:1,
    // padding:10,
    // margin:10,
    // marginBottom: 10,

    width: width * 0.75,
    padding: 0,
    margin: 0,
    backgroundColor: null,
    fontFamily: "Montserrat",
    color: '#FFF',
  },

}));
