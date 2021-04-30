import React from 'react';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput as Input
} from 'react-native';

import {
  withStyles,
  Text,
  
} from 'react-native-ui-kitten';


const width = Dimensions.get('screen').width
import { translate } from 'src/utils/translation';

import SearchGlassIcon from 'src/assets/icons/search-glass.svg';

class _SearchComponent extends React.Component {
  

  render() {
    
    const { themedStyle, data, search } = this.props;

    return (<TouchableWithoutFeedback

        onPress={() => {
          this.searchTexBox.focus()
        }}
      >
        <View
          style={themedStyle.inputLabelContainer}
        >

          <Text style={themedStyle.inputBoxLabelTxt}>{translate('SearchBoxLabel')} {this.props.extraTitle}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Input
              ref={(i) => this.searchTexBox = i}
              style={[themedStyle.inputBoxLabel]}
              textStyle={themedStyle.inputBoxText}
              autoCapitalize="none"
              placeholderTextColor={"#fff"}
              value={search}
              onChangeText={(text) => this.props.onSearchInputTextChange(text)}
            />

            <SearchGlassIcon width={50} />
          </View>

        </View>
      </TouchableWithoutFeedback>
     );
  }
}

export const SearchBox = withStyles(_SearchComponent, theme => ({
  container:{ 
    margin: 15,
    borderTopRadius: 15,
    borderRadius: 15,
    backgroundColor:'#FFF',
    alignSelf:'center',
    overflow: 'hidden'
  },
  imageStyle:{
    borderTopRadius: 10,
    width: width*0.9,
    height: 120,
  },
  textContainer:{
    padding: 10
  },
  textTitle:{
    fontFamily: "Montserrat",
    fontWeight: 'bold',
    fontSize: 14,
  },
  textDescription:{
    fontFamily: "Montserrat",
    fontSize: 12,
  },
  yellowBtn:{
        fontFamily: "Montserrat",
        borderRadius: 30,
        margin: 10,
        borderWidth: 0,
        width: 200,
        alignSelf: 'flex-start'
  },
  yellowBtnText:{
    fontSize: 14
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
}));
