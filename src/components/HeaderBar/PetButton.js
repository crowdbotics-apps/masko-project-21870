import React from 'react';

import {connect} from 'react-redux';
import { View } from 'react-native';
import { Avatar } from 'react-native-ui-kitten'; 

import * as userAccountActions from 'src/features/UserAccount/redux/actions';

import SmallLogo from 'src/assets/images/masko-logo-small.svg';
import { TouchableOpacity } from 'react-native';

export class _PetButton extends React.Component {

  state = {
    showPets: false
  }

  onSelectPetPress = ( item ) => {
    const { actions } = this.props;
    // actions.SelectPet(item);
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
    this.setState({showPets = true})
  }
 
  render() {
    const { navigation, selectedPet } = this.props;
    const { showPets } = this.state;
    if(selectedPet){
      return (
        <View>
           <TouchableOpacity onPress={()=> this.onPress() } style={{marginRight: 10}}>
                <Avatar source={{uri:selectedPet.photo}} />
          
            </TouchableOpacity>
        
</View>
     );
    }else{
      return (<View />);
    }
    
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  selectedPet: state.UserAccount.selectedPet,
  userPets: state.UserAccount.pets,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    SelectPet: (pet) => {
      dispatch(userAccountActions.setPet(pet));
    },
  },
});

export default PetButton =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_PetButton);
