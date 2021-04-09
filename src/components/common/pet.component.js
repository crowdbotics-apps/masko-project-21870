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

import SmallPawIcon from 'src/assets/icons/paw-icon.svg';
import { translate } from 'src/utils/translation'; 
const width = Dimensions.get('screen').width

const addPetConst = "addpet"

class _PetComponent extends React.Component {
  state = {
    username: '',
    password: '',
    items: [
      { title: 'Add Pet', key: addPetConst},
   
    ]
  };

  _onPress = (item) => {
    this.props.onSelectPetPress(item);
  }

  _onPressAdd = () => {
    const { navigation } = this.props;
    navigation.navigate("AddPet");
  }

  renderAddPetBtn = (separators) => {

    const { themedStyle } = this.props;
    return (<TouchableOpacity
      key={'ADDBUTTON'}
      onPress={() => this._onPressAdd()}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} 
      >
      <View style={themedStyle.addContainer} >
        <SmallPawIcon width={20} style={{alignSelf: "center"}} />
        <Text style={themedStyle.addContainerText} >Add Pet</Text>
      </View>
    </TouchableOpacity>);
  }

  renderItem = ({ item, index, separators }) => {
    const { themedStyle, selectedPet } = this.props;
    const childContainerStyle = (selectedPet && selectedPet.id == item.id)?
                                  themedStyle.imgContChildSel:
                                  themedStyle.imgContChild;
      return [
         (index == 0 && this.renderAddPetBtn(separators)) ,
        <TouchableOpacity
          key={item.id}
          onPress={() => this._onPress(item)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight} 
          >
          <View style={themedStyle.imageContainer} >
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

  render() {
    const { data, themedStyle} = this.props;
    

    // if(data.length==0){
    //   return ((this.renderAddPetBtn({})));
    // }
    
    return (
    <View style={themedStyle.container} >
    <Text style={themedStyle.headLabel} >{translate('SelectPetLabel')}</Text>
    <FlatList
      style={{margin:5}}
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
    </View>);
  }
}

export const PetComponent = withStyles(_PetComponent, theme => ({
    container:{
      backgroundColor: "#FFCD3E",
      padding: 20,
      height: 140,
      position: "absolute",
      top: 15,
      zIndex: 2,
      width: width,
      marginLeft: 0,
      left: 0,
    },
    headLabel:{
      color: "#FFF",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 15,

    },
    imageContainer:{
     padding: 5,
     
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
      
}));
