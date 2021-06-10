import React from 'react';
import {View, Dimensions, FlatList, TouchableOpacity} from 'react-native';
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
import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';



const initState = {
  search: '',
  selectedBreeds: null
};

class ChooseBreedComponent extends React.Component {
  

  constructor(props){
    super(props)
    this.state = {
      ...initState
    }
    if(props.navigation.state && props.navigation.state.params && props.navigation.state.params.breed){
     this.state.selectedBreeds = props.navigation.state.params.breed
    }else{
      this.state.selectedBreeds = props.selectedBreedType
    }
    
  }


  renderSpinner = () => {
    const { getBreedTypeLoading } = this.props;
    if (getBreedTypeLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  onSearchInputTextChange = (search) => {
    this.setState({search: search})
    this.props.getProductsCb(search)
  }


  addBreed = (breed) =>{
    this.setState({selectedBreeds: breed})
    
  }

  removeBreed = (breed) =>{
    this.setState({selectedBreeds: null})
    
  }

  onSaveSelection = () => {
    this.props.onSaveSelection(this.state.selectedBreeds)
  }


  renderItem = ({ item , index, separators }) => {
      return (<TouchableOpacity
        key={item.id}
        onPress={()=>this.addBreed(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
        style={{padding: 10, backgroundColor:"#FFF", borderRadius: 10, margin: 5, }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
      );
    }

    renderSelection = ({ item , index, separators }) => {
      return (<TouchableOpacity
        key={item.id}
        onPress={()=>this.removeBreed(item)}
        style={{padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "#A0B0DC", margin: 2, }}
      
      >
        <Text style={styles.whiteFont} >x {item.name_en}</Text>
      </TouchableOpacity>
      );
  }
  
  renderList = () =>{
    const { breedTypes } = this.props;
    
    if(breedTypes && breedTypes.length==0){
      return (<View>
        <EmptyRecordContainer emptyText={translate('NoBreedAvailableMsg')} />
      </View>);
    }
      
    return ( <View >
        <FlatList
          data={breedTypes}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>);
  }


  render() {
    const {themedStyle, breedTypes } = this.props;
    const { search, selectedBreeds } = this.state;
    let that = this

    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
        <ScrollableAvoidKeyboard >
            
            <View >
                <SearchBox 
                  extraTitle={'Breed'}
                  onSearchInputTextChange={this.onSearchInputTextChange} 
                      search={search}
                />
            </View> 
            <View style={{flexDirection: "row", flexWrap:'wrap'}}>
                {selectedBreeds && (<TouchableOpacity
                      key={selectedBreeds.id}
                      onPress={()=>this.removeBreed(selectedBreeds)}
                      style={{padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "#A0B0DC", margin: 2, }}
                    
                    >
                      <Text style={styles.whiteFont} >x {selectedBreeds.name}</Text>
                    </TouchableOpacity>
                )}

            </View>
           {this.renderList()}
                  
            
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

export const ChooseBreed = withStyles(ChooseBreedComponent, theme => ({
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
