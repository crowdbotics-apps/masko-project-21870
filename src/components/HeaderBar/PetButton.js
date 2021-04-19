import React from 'react';

import {connect} from 'react-redux';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-ui-kitten'; 

import * as userAccountActions from 'src/features/UserAccount/redux/actions';

import { TouchableOpacity } from 'react-native';
import { PetComponent } from 'src/components/common';
// import { PetComponent } from 'src/features/UserAccount/components/common';

import SmallPawIcon from 'src/assets/icons/paw-icon.svg';

export class _PetButton extends React.Component {

  state = {
    showPets: false
  }

  onSelectPetPress = ( item ) => {
    const { actions } = this.props;
    actions.SelectPet(item);
  }

  onPressCategory = ( item ) => {
    this.props.navigation.navigate("ServiceList",{
      category: item,
    })

  }

  componentDidMount(){
    // alert(this.props.selectedPet.id)
  }

  onPress = () => {
    const { actions } = this.props;
    if(this.props.showPetSelector){
      actions.HidePetSelector();
    }else{
      actions.ShowPetSelector();
    }
    // this.setState({showPets: !this.state.showPets})
  }

  renderBtn = () => {
    const { navigation, selectedPet, userPets, showPetSelector } = this.props;
    const { showPets } = this.state;
    let btnStyle = styles.normalBtn
    if(showPetSelector){
      btnStyle = styles.selectedBtn
    }
    if(selectedPet){
      return (
        <View  >
           <TouchableOpacity style={btnStyle} onPress={()=> this.onPress() } >
                <Avatar source={{uri:selectedPet.photo}} />
              </TouchableOpacity>
        </View>
     );
    }else{
      return (
      <TouchableOpacity style={styles.choosePetContainer} onPress={()=> this.onPress() } >
        <SmallPawIcon width={15} style={{alignSelf: "center"}} />
      </TouchableOpacity>);
    }
  }
 
  render() {
    const { navigation, selectedPet,userPets } = this.props;
    const { showPets } = this.state;
   

      return (
        <View  >
            {this.renderBtn()}
            {/* {showPets && (<PetComponent 
                
                data={userPets}
                navigation={navigation}
                selectedPet={selectedPet}
                onSelectPetPress={this.onSelectPetPress} 
            />)} */}
        
          </View>
     );
   
    
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  selectedPet: state.UserAccount.selectedPet,
  showPetSelector: state.UserAccount.showPetSelector,
  userPets: state.UserAccount.pets,
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
}

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

export default PetButton =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_PetButton);

