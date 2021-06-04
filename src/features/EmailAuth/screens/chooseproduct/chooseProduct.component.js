import React from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import {
  withStyles,
} from 'react-native-ui-kitten';
import {Button, Text} from 'react-native-ui-kitten';

import { EmailValidator } from '../../core/validators';

import { Spinner } from 'src/components/Spinner';
import * as _ from 'lodash';

import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '../../components/common';

import LargeLogo from 'src/assets/images/masko-logo-large.svg';
import { SearchBox } from 'src/features/Services/components/common/searchBox.component';
import AppConfig from 'src/config/app';
const width = Dimensions.get('screen').width
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

import { translate }  from 'src/utils/translation';
import { TouchableOpacity } from 'react-native-gesture-handler';


const initState = {
  search: '',
  selectedProducts: []
};

class ChooseProductComponent extends React.Component {
  

  constructor(props){
    super(props)
    this.state = {
      ...initState
    }
    this.state.selectedProducts = props.selectedProducts
  }


  renderSpinner = () => {
    const { getProductsLoading } = this.props;
    if (getProductsLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  onSearchInputTextChange = (search) => {
    this.setState({search: search})
    this.props.getProductsCb(search)
  }


  addProduct = (product) =>{
    const { selectedProducts } = this.state;
    obj = _.find(selectedProducts, (j) => j.id == product.id );
    if(!obj){
      let newList = selectedProducts;
      newList.push(product)
      this.setState({selectedProducts: newList})
    }
  }

  removeProduct = (product) =>{
    const { selectedProducts } = this.state;
    let newList = [];
    _.forEach(selectedProducts,(j)=>{
        if(j.id != product.id){
          newList.push(j)
        }
    })
    this.setState({selectedProducts: newList})
    
  }

  onSaveSelection = () => {
    this.props.onSaveSelection(this.state.selectedProducts)
  }


  renderItem = ({ item , index, separators }) => {
      return (<TouchableOpacity
        key={item.id}
        onPress={()=>this.addProduct(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
        style={{padding: 10, backgroundColor:"#FFF", borderRadius: 10, margin: 5, }}
      >
        <Text>{item.name_en}</Text>
      </TouchableOpacity>
      );
    }

    renderSelection = ({ item , index, separators }) => {
      return (<TouchableOpacity
        key={item.id}
        onPress={()=>this.removeProduct(item)}
        style={{padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "#A0B0DC", margin: 2, }}
      
      >
        <Text style={styles.whiteFont} >x {item.name_en}</Text>
      </TouchableOpacity>
      );
    }  


  render() {
    const {themedStyle, products } = this.props;
    const { search, selectedProducts } = this.state;
    let that = this

    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
        <ScrollableAvoidKeyboard >
            {this.renderSpinner()}
            <View style={{marginTop: 40}}>
                <SearchBox 
                  extraTitle={'Product'}
                  onSearchInputTextChange={this.onSearchInputTextChange} 
                      search={search}
                />
            </View> 
            <View style={{flexDirection: "row", flexWrap:'wrap'}}>
                {selectedProducts.map((item)=>
                  {
                    return (<TouchableOpacity
                      key={item.id}
                      onPress={()=>this.removeProduct(item)}
                      style={{padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "#A0B0DC", margin: 2, }}
                    
                    >
                      <Text style={styles.whiteFont} >x {item.name_en}</Text>
                    </TouchableOpacity>
                    ); 
                  }
                )}

            </View>
            
            <FlatList
              data={products}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
                  
            
            <Button
              style={styles.yellowButton}
              textStyle={styles.whiteFont}
              status='primary'
              size="giant"
              // disabled={!this.validator()}
              onPress={this.onSaveSelection}>
              {translate('ChooseSelectedButton')}
            </Button>
            
           
         
        </ScrollableAvoidKeyboard>
      </LinearGradient>
    );
  }
}

export const ChooseProduct = withStyles(ChooseProductComponent, theme => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    // flex: 1,
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
  }
}));
