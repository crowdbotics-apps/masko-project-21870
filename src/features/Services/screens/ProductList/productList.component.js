import React from 'react';
import {
  View,
  TextInput as Input,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity
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

import CatIcon from 'src/assets/icons/cat-filter.svg';
import CatSelectedIcon from 'src/assets/icons/cat-filter-selected.svg';
import DogIcon from 'src/assets/icons/dog-filter.svg';
import DogSelectedIcon from 'src/assets/icons/dog-filter-selected.svg';

import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';
import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';
import { SearchBox } from '../../components/common/searchBox.component';
import * as _ from 'lodash';

import { PetComponent } from 'src/components/common';


let PET_TYPES = [
  {
    type: 'icon',
    key: 1, 
    itemKey: 'dog',
    icon: <DogIcon width={'75'}  />, 
    selectedIcon: <DogSelectedIcon width={'75'}  />, 
  },
  {
    type: 'icon',
    key: 2, 
    itemKey: 'cat',
    icon: <CatIcon width={'75'}  />, 
    selectedIcon: <CatSelectedIcon width={'75'}  />, 
  },
  {
    type: 'text',
    key: -1, 
    itemKey: 'other',
    value: 'ProductListSearchFilterTypeOther'
  }

]

const PRICE_RANGES = [
  {
    key: 1, 
    value: '$'
  },
  {
    key: 2, 
    value: '$$'
  },
  {
    key: 3, 
    value: '$$$'
  }

]

const SORT_RESULTS = [
  {
    key: 'price', 
    value: 'ProductListSearchSortResultPrice'
  },
  {
    key: 'size', 
    value: 'ProductListSearchSortResultSize'
  }
]


class ProductListComponent extends React.Component {
  state = {
    search: '',
    products: [],
    petType: null,
    priceRange: null,
    sortResult: null
  }
  
  constructor(props){
    super(props);
    this.onChangeSearchTextDelayed = _.debounce(this.callGetProducts, 1000);
    this.state.products = this.setProducts();
    this.initPetTypes();
  }

  initPetTypes = () => {
    const { petTypes } = this.props
    let newArray = []
    _.forEach(PET_TYPES, (i)=>{
          item = _.find(petTypes, (j) => { 
                        return j.name.toLowerCase().includes(i.itemKey)

                        }
                      )
          if (item != null ){
              newArray.push({
                ...i,
                key: item.id
              })
          }else{
              newArray.push({
                ...i
              })
          }

    })

    PET_TYPES = newArray

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

  setPriceIndex = (index) => {
    const { search, petType, sortResult } = this.state;
    this.setState({
      priceRange: index
    })
    this.callGetProducts(search, petType, index, sortResult)
  }

  setPetType = (type) => {
    const { search, priceRange, sortResult } = this.state;
    this.setState({
      petType: type
    })
    this.callGetProducts(search, type, priceRange, sortResult)
  }

  setSortResult = (value) => {
    const { search, priceRange, petType } = this.state;
    this.setState({
      sortResult: value
    })
    this.callGetProducts(search, petType, priceRange, value)
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
    const { petType, priceRange ,  sortResult } = this.state;
    this.onChangeSearchTextDelayed(text, petType, priceRange, sortResult)
    
  }

  callGetProducts = (text, type, price, sort)=>{
    this.props.getProductsCb(text, type, price, sort);
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
    }else if ( item.is_recurring ){
      this.props.onPressProductItem(item)
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

renderPetTypeFilter = (item)  => {
    const { petType } = this.state
    const { themedStyle } = this.props
    if(item.type=="icon"){
        if(item.key == petType){
          return (item.selectedIcon)
        }else{
          return (item.icon)
        }
      
    }else{
      if(item.key == petType){
        return (<Text style={themedStyle.searchFilterLabelSel}>{translate(item.value)}</Text>)
      }else{
        return (<Text style={themedStyle.searchFilterLabel}>{translate(item.value)}</Text>)
      }
      
    }

}
 
  render() {

    const { navigation, themedStyle } = this.props;
    const { search, products, priceRange, petType, sortResult } = this.state;
    let category = navigation.state.params.category;



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
      
        <View style={themedStyle.searchFilterSortContainer}>
         <TouchableOpacity onPress={()=>this.setPetType(null)} > 
           <Text style={[themedStyle.searchFilterHead]}>{translate('ProductListSearchFilterType')}</Text>
        </TouchableOpacity>
          <View style={themedStyle.searchFilterSubContainer}>
          {PET_TYPES.map( (i) => {

                return (
                  <TouchableOpacity onPress={()=>this.setPetType(i.key)} >  
                      {this.renderPetTypeFilter(i)}
                  </TouchableOpacity>
                )


            }


          )}
        
          {/* <DogIcon width={'75'}  />
          <Text style={themedStyle.searchFilterLabel}>{translate('ProductListSearchFilterTypeOther')}</Text> */}
          </View>
        </View>
       
        <View style={themedStyle.searchFilterSortContainer}>
        <TouchableOpacity onPress={()=>this.setPriceIndex(null)} >
          <Text style={[themedStyle.searchFilterHead]}>{translate('ProductListSearchFilterPriceRange')}</Text>
        </TouchableOpacity>
          <View style={themedStyle.searchFilterSubContainer}>
            {PRICE_RANGES.map( (i) => {
                    return (
                      <TouchableOpacity onPress={()=>this.setPriceIndex(i.key)} >
                      {( priceRange == i.key ) &&
                      (<Text style={[themedStyle.searchFilterLabel3Sel]}>{i.value}</Text>)}
      
                    {( priceRange != i.key ) &&
                      (<Text style={[themedStyle.searchFilterLabel3]}>{i.value}</Text>)}
                      
                  </TouchableOpacity>
                    ) 
                   }
             )}
           
            
          </View>
        </View>
        <View style={themedStyle.searchFilterSortContainer}>
          <TouchableOpacity onPress={()=>this.setSortResult(null)} >
            <Text style={[themedStyle.searchFilterHead]}>{translate('ProductListSearchSortResultBy')}</Text>
          </TouchableOpacity> 
          <View style={themedStyle.searchFilterSubContainer}>
          {SORT_RESULTS.map( (i) =>{

                return (
                  <TouchableOpacity onPress={()=>this.setSortResult(i.key)} >
                    {( sortResult == i.key ) && (<Text style={themedStyle.searchFilterLabel2Sel}>{translate(i.value)}</Text>)}
                    {( sortResult != i.key ) && (<Text style={themedStyle.searchFilterLabel2}>{translate(i.value)}</Text>)}
                </TouchableOpacity> 
                )
             }


          )}
          </View>
        </View>

        {/* <Text style={themedStyle.categoryHead}>{category.getName()}</Text> */}
        <ScrollView style={styles.scrollView} 
        contentContainerStyle={{ paddingBottom: 150 }} >
          
        { products.length == 0 && (
          <EmptyRecordContainer emptyText={translate("NoRecordFoundLabel")} />
        )} 

        { products.length > 0 && (
          <ProductsComponent
          data={ products }
          onPressQtyAdd={this.onPressQtyAdd}
          onPressQtySubtract={this.onPressQtySubtract}
          onAddButtonPress={this.onAddButtonPress}
          onPressProductItem={this.onPressProductItem}
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
  searchFilterLabel: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    alignSelf: 'flex-start',
    padding: 15,
  },
  searchFilterLabelSel: {
    color: "#FFCD3E",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    alignSelf: 'flex-start',
    padding: 15,
  },
  searchFilterContainer:{
    flexDirection:'row',
    padding: 10,
    height: 50
  },
  searchFilterSortContainer:{
    flexDirection:'row',
    padding: 10,
    height: 60
  },
  searchFilterLabel2: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    padding: 15,
  },
  searchFilterLabel2Sel: {
    color: "#FFCD3E",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    padding: 15,
  },
  
  searchFilterLabel3: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    padding: 10,
    width: 65
  },
  searchFilterLabel3Sel: {
    color: "#FFCD3E",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    padding: 10,
    width: 65
  },
  searchFilterHead:{
    flex:3,
    color: "#FFF",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    alignSelf: 'flex-start',
    padding: 10,
  },
  searchFilterSubContainer:{
    flex:3,
    flexDirection:'row',
    justifyContent:'flex-end'
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
