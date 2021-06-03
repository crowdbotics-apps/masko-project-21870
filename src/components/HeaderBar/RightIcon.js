import { View, TouchableOpacity, Text } from 'react-native';

import CartIcon from 'src/assets/icons/cart-icon.svg';
import React from "react";
import { PetButton } from 'src/components/HeaderBar';


import {connect} from 'react-redux';


import appConfig from "src/config/app";

export class _RightIcon extends React.Component {

  constructor(props){
    super(props)
    const didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        this.setState({...this.state})
      }
    );
  }
  onPress = () => {
    this.props.navigation.navigate( appConfig.NAVIGATOR_ROUTE.MyCart )
  }

  render() {
    const { navigation, cart } = this.props;

    const quantity = (cart!=null)?cart.getTotalItemCount():0

      return (<View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', marginRight: 10}}>
                        <TouchableOpacity onPress={this.onPress}>
                           <CartIcon width={25} style={{marginTop: 5, marginRight: 5}}   />
                           <Text style={styles.cartQtyLabel}>{quantity}</Text>
                         </TouchableOpacity>
                         <PetButton navigation={navigation} />
                      
                        
                </View> 
     );
   
    
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  cart: state.Checkout.cart
});

const styles = {
  normalBtn:{
      padding: 5,
      // marginRight: 10
  },
  selectedBtn:{
      backgroundColor: "#FFCD3E",
      borderTopStartRadius: 5,
      borderTopEndRadius: 5, 
      padding: 5,
      // marginRight: 10
  },
  choosePetContainer:{
    marginTop: 2,
    backgroundColor:"#FFCD3E",
    borderWidth: 2,
    borderColor: "#FFF",
    width: 50,
    height: 45,
    borderRadius: 18,
    // marginRight: 12,
    justifyContent: 'center'
  } ,
  choosePetContainerText:{
    fontFamily: "Montserrat",
    alignSelf: "center",
    color: "#FFF",
    fontWeight:"bold",
    fontSize: 8

  },
  cartQtyLabel:{
    fontSize: 12,
    fontFamily: "Montserrat",
    position:'absolute',
    left:8,
    top: 20,
    fontWeight:'bold',
    color:"white"
  }
  
}

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
});

export default RightIcon =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_RightIcon);

