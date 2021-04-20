import React from 'react';
import {
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import {
  withStyles,
  Avatar,
} from 'react-native-ui-kitten';



import ScrollableAvoidKeyboard from 'src/components/common';
import SmallPawIcon from 'src/assets/icons/paw-icon.svg';
import * as commonUtils from 'src/utils/general';
import * as _ from 'lodash';

const addPetConst = "addpet"

class _ServicePetComponent extends React.Component {
  state = {
    username: '',
    password: '',
    qty: 0,
    selectedItem: null,
    items: [
      { title: 'Add Pet', key: addPetConst},
     ]
  };




  _onPress = (item) => {

    this.setState({qty:item.qty})
    this.props.onSelectPetPress(item);
  }

  _onPressQtyAdd = () => {
    let sItem = this.getSelectedItem()
    
    if(sItem){
      this.props.onUpdatePetQtyPress(sItem,(sItem.qty+1)) 
    } 
    
  }

  _onPressQtySubtract = () => {
    let sItem = this.getSelectedItem()

    if(sItem && sItem.qty!=0){
      this.props.onUpdatePetQtyPress(sItem,(sItem.qty-1)) 
    } 
  }


 
  renderItem = ({ item, index, separators }) => {
    const { themedStyle, selectedPet } = this.props;
    const childContainerStyle = (item.selected)?
                                  themedStyle.imgContChildSel:
                                  themedStyle.imgContChild;
                                  
    const parentContainerStyle =  (item.selected)?
                                    themedStyle.selectedContainer:
                                    themedStyle.imageContainer;     

      return [
        <TouchableOpacity
          key={item.id}
          onPress={() => this._onPress(item)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight} 
          >
          <View style={parentContainerStyle} >
             {(item.photo && (
               <Avatar 
               size='giant' 
               style={childContainerStyle} 
               source={{
                         uri:  item.photo
                       }}
            />
             ))}
             
          </View>
        </TouchableOpacity>];
      
  }

  getSelectedItem = () => {
    const { data, themedStyle } = this.props;
    let item = 0;
    _.forEach(data,(i)=>{
       if(i.selected){
        item = i
       }
    })

      return item;
  }

  getSelectedItemQty = () => {
    const { data, themedStyle } = this.props;
    let qty = 0;
    _.forEach(data,(i)=>{
       if(i.selected){
        qty = i.qty
       }
    })

      return qty;
  }


  render() {
    const { data, themedStyle } = this.props;
    

    
    return (
    <View>
      
    <FlatList
      style={themedStyle.listContainer}
      horizontal={true}
      ItemSeparatorComponent={
        Platform.OS !== 'android' &&
        (({ highlighted }) => (
          <View
            style={[
              // style.separator,
              highlighted && { marginLeft: 0 }
            ]}
          />
        ))
      }
      data={data}
      renderItem={this.renderItem}
    />
     <View style={themedStyle.petQuantityCont}>
        <View style={themedStyle.petQuantitySbContainer}>
              {/* <Text style={themedStyle.petQtyLabel}>{this.state.qty}</Text> */}
              <TouchableOpacity style={themedStyle.petQtyBtn} 
                  onPress={this._onPressQtySubtract}
              >
                      <Text style={themedStyle.petQtyLabel}>-</Text>

              </TouchableOpacity>
              <Text style={themedStyle.petQtyLabel}>{this.getSelectedItem().qty}</Text>
              <TouchableOpacity style={themedStyle.petQtyBtn} 
                  onPress={this._onPressQtyAdd}
              >
                      <Text style={themedStyle.petQtyLabel}>+</Text>

              </TouchableOpacity>
        </View>
      </View> 
    
    </View>);
  }
}

export const ServicePetComponent = withStyles(_ServicePetComponent, theme => ({
  imageContainer:{
     padding: 5,
      },
     selectedContainer: {
      padding: 5,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
      backgroundColor: "#455272",
     },
     addContainer:{
        marginTop: 5,
        marginRight: 2, 
        backgroundColor:"#A0B0DC",
        borderWidth: 2,
        borderColor: "#FFF",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center'
      } ,
      addContainerText:{
        fontFamily: "Montserrat",
        alignSelf: "center",
        color: "#FFF",
        fontWeight:"bold",
        fontSize: 10

      },
      imgContChild:{ 
        width:60,
        height:60,
        opacity: 0.4
      },
      imgContChildSel:{ 
        borderWidth: 2,
        borderColor: "#FFF",
        width:60,
        height:60,
      }, 
      listContainer:{
        height:70,
        paddingHorizontal: 20
      },
      petQuantityCont: {
        backgroundColor:"#455272",
        paddingHorizontal: 20,
        paddingVertical:10,
      },
      petQuantitySbContainer:{
        flexDirection:"row",
        padding:5,
        backgroundColor: "#6C84C1",
        borderRadius: 15,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
      },
      petQtyLabel:{
        color:"#FFF"
      },
      petQtyBtn:{
        color:"#FFF",
        paddingHorizontal: 20
      }
}));
