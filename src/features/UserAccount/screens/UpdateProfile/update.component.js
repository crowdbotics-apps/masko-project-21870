import React from 'react';
import {
  Dimensions,
  View,
  Text,
  ScrollView
} from 'react-native';

import {
  withStyles,
  Button,
} from 'react-native-ui-kitten';


import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '../../components/common';

import AppConfig from 'src/config/app';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles'

import { UpdateProfileForm } from '../../components/forms/UpdateProfileForm';
import { Spinner } from 'src/components/Spinner';
import { translate }  from 'src/utils/translation';
import { PetComponent } from '../../components/common';
import * as _ from 'lodash';

class _UpdateProfileComponent extends React.Component {
 
  state = {
    name: undefined,
    email: undefined,
    address: undefined,
    cards: undefined,
    number: undefined,
    expiry: undefined,
    cvv: undefined,
    selectedCardIndex: undefined,
    
  };

  constructor(props){
    super(props)
    
    this.state.name = props.user.name || undefined;
    this.state.email = props.user.email || undefined;
    this.state.address = props.user.address || undefined;
    

  }

  componentDidMount(){
    this.setDefaultCardIndex(this.props);
  }

  getUnds = ( index ) => {
    return this.props.unds[index]
  }
  
  setDefaultCardIndex = (props) => {
    const { user, unds } = props;
    
    let selectedCardIndex = 0;
    if ( user.default_card && unds  ) {
      
      _.forEach(unds,(i, index) => {
         
          if( i.id == user.default_card ){
            selectedCardIndex = index
          }
      })
      
    }
    
    this.setState({selectedCardIndex})
  }


  onNameInputTextChange = name => {
    this.setState({ name });
  };

  onNumberInputTextChange = number => {
    this.setState({ number });
  };

  onExpiryInputTextChange = expiry => {
    this.setState({ expiry });
  };
  onCVVInputTextChange = cvv => {
    this.setState({ cvv });
  };

  onCheckedChange = (index) => {
      this.setState({selectedCardIndex: index})
  }

  onAddressInputTextChange = address => {
    this.setState({ address });
  };

  onUpdateButtonPress = () => {
    let item = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address
    };

    if(this.state.selectedCardIndex){
       item.default_card_id = this.getUnds(this.state.selectedCardIndex).id
    } 

    this.props.onUpdateButtonPress(item);
  };

  onCancelButtonPress = () => {
    this.props.onCancelButtonPress();
  };

  getExpiryObj = () => {
    const { expiry } = this.state;
    let newVal = expiry.split('/');
    return newVal;
  }

  onAddCardPress = () => {
    let expiry = this.getExpiryObj();
    this.props.onAddCardPress({
      number: this.state.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvv: this.state.cvv,
    });
  };

 

  validator() {

    const { name, address } = this.state;

    return (
      name !== undefined &&
      address !== undefined && address !== 0
    );
  }

  renderSpinner = () => {
    const { updateLoading, addCardLoading } = this.props;
    if (updateLoading || addCardLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };


  render() {
    
    const {
      themedStyle,
      navigation,
      userPets,
      selectedPet,
      onSelectPetPress
    } = this.props;

    const { selectedCardIndex } = this.state;

    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
        {this.renderSpinner()}
        <ScrollView>
           <ScrollableAvoidKeyboard style={themedStyle.container}>
            <View>
              <PetComponent navigation={navigation}
                              data={userPets}
                              selectedPet={selectedPet}
                              onSelectPetPress={onSelectPetPress}
                />
            </View>
            <UpdateProfileForm
                name={this.state.name}
                address={this.state.address}
                onNameInputTextChange={this.onNameInputTextChange}
                onAddressInputTextChange={this.onAddressInputTextChange}
                number={this.state.number}
                expiry={this.state.expiry}
                cvv={this.state.cvv}
                unds={this.props.unds}
                selectedCardIndex={selectedCardIndex}
                onNumberInputTextChange={this.onNumberInputTextChange}
                onExpiryInputTextChange={this.onExpiryInputTextChange}
                onCVVInputTextChange={this.onCVVInputTextChange}
                onAddCardPress={this.onAddCardPress}
                onCancelPress={this.onCancelButtonPress}
                onCheckedChange={this.onCheckedChange}
                addCardLoading={this.props.addCardLoading}
             
              />
            <Button
                style={styles.yellowButton}
                textStyle={styles.whiteFont}
                size="giant"
                status='primary'
                disabled={!this.validator()}
                onPress={this.onUpdateButtonPress}

              >
                {translate("NextButtonLabel")}
            </Button>
            <Button
            style={styles.yellowButton}
            textStyle={styles.whiteFont}
            size="giant"
            status='info'
            onPress={this.onCancelButtonPress}

          >
            {translate("CancelButtonLabel")}
        </Button>
       

        </ScrollableAvoidKeyboard>
        </ScrollView>          
      </LinearGradient>
    );
  }
}

export const UpdateProfile = withStyles(_UpdateProfileComponent, theme => ({
  container: {
    flex: 1,
    padding: 10,
    // flexDirection:"column"
  },
  
  scrollView:{
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
  }
}));
