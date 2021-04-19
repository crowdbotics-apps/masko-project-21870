import React from 'react';
import {
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  // TouchableNativeFeedback,
  Text
} from 'react-native';

import {
  withStyles,
  Avatar,
} from 'react-native-ui-kitten';

import { connect } from 'react-redux';

import SmallPawIcon from 'src/assets/icons/paw-icon.svg';
import { translate } from 'src/utils/translation'; 
const width = Dimensions.get('screen').width
// import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import * as userAccountActions from 'src/features/UserAccount/redux/actions';

const addPetConst = "addpet"

class __PetComponent extends React.Component {
  state = {
    username: '',
    password: '',
    items: [
      { title: 'Add Pet', key: addPetConst},
   
    ]
  };

  _onPress = (item) => {
    const { actions } = this.props;
    actions.SelectPet(item)
  }

  _onPressAdd = () => {
    
    const { navigation } = this.props;
    navigation.navigate("AddPet");
  }

  renderAddPetBtn = (separators) => {

    const { themedStyle } = this.props;
    return (<TouchableOpacity
      // style={{zIndex:4,elevation: 4}}
      key={'ADDBUTTON'}
      onPress={() => this._onPressAdd()}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} 
      >
      <View style={themedStyle.addContainer} >
        <SmallPawIcon width={20} style={{alignSelf: "center"}} />
        <Text style={themedStyle.addContainerText} >{translate("AddPetBtn")}</Text>
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
          // style={{zIndex:4,elevation: 4}}
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
    const { data,userPets, themedStyle } = this.props;
    

    // let mainContainer = [themedStyle.container, (visible)?themedStyle.visibleContainer: themedStyle.hideContainer];
    let mainContainer = themedStyle.container;
    
    if(!this.props.showPetSelector){
      return (<View/>);
    }

    return (
    <View style={mainContainer}  >
        
        <Text style={themedStyle.headLabel} >{translate('SelectPetLabel')}</Text>
        <FlatList
          style={{margin:5}}
          horizontal={true}
          // ItemSeparatorComponent={
          //   Platform.OS !== 'android' &&
          //   (({ highlighted }) => (
          //     <View
          //       style={[
          //         // style.separator,
          //         highlighted && { marginLeft: 0 }
          //       ]}
          //     />
          //   ))
          // }
          data={userPets}
          renderItem={this.renderItem}
        />
    </View>);
  }
}


const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  selectedPet: state.UserAccount.selectedPet,
  showPetSelector: state.UserAccount.showPetSelector,
  userPets: state.UserAccount.pets,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    SelectPet: (pet) => {
      dispatch(userAccountActions.setPet(pet));
    },
    ShowPetSelector: () => {
      dispatch(userAccountActions.showPetSelector());
    },
    HidePetSelector: () => {
      dispatch(userAccountActions.hidePetSelector());
    },
  },
});
const _PetComponent =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(__PetComponent);

export const PetComponent = withStyles(_PetComponent, theme => ({
    visibleContainer:{
      display: 'flex',
    },
    hideContainer:{
      display: 'none',
    },
    container:{
      
      backgroundColor: "#FFCD3E",
      padding: 20,
      height: 140,
      width: width,
      // position: "absolute",
      // top: 50,
      zIndex: 9999,
      elevation: 9999,
      // zIndex: 2,
      // left: -(width-60),
      // left: -(width-60),
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
