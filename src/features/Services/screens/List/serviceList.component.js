import React from 'react';
import {
  View,
  TextInput as Input,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
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

import { ServicesComponent } from '../../components/common';

import { AdComponent } from 'src/components/Ads/ads.component';

import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';
import SearchGlassIcon from 'src/assets/icons/search-glass.svg';
import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';

class ServiceListComponent extends React.Component {
  state = {
    search: '',
  }
  renderSpinner = () => {
    const { getServiceLoading } = this.props;
    if (getServiceLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  onPressServiceItem = (item) => {
    this.props.onPressServiceItem(item)
  }

  onSearchInputTextChange = (text) => {
    this.setState({ search: text });
  }

  render() {

    const { navigation, themedStyle } = this.props;
    const { search } = this.state;
    let category = navigation.state.params.category

    if (this.props.services.length == 0) {
      return (
        <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainerEmpty}>
          <EmptyRecordContainer emptyText={translate("NoRecordFoundLabel")} />
        </LinearGradient>);
    }


    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainerWithoutPad}>
        {this.renderSpinner()}
        <TouchableWithoutFeedback

          onPress={() => {
            this.searchTexBox.focus()
          }}
        >
          <View
            style={themedStyle.inputLabelContainer}
          >

            <Text style={themedStyle.inputBoxLabelTxt}>{translate('SearchBoxLabel')} {category.getName()}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Input
                ref={(i) => this.searchTexBox = i}
                style={[themedStyle.inputBoxLabel]}
                textStyle={themedStyle.inputBoxText}
                autoCapitalize="none"
                placeholderTextColor={"#fff"}
                value={search}
                onChangeText={(text) => this.onSearchInputTextChange(text)}
              />

              <SearchGlassIcon width={50} />
            </View>

          </View>
        </TouchableWithoutFeedback>
        <Text style={themedStyle.categoryHead}>{category.getName()}</Text>
        <AdComponent />
        <ScrollView style={styles.scrollView} >

          <ServicesComponent
            data={this.props.services}
            onPressServiceItem={this.onPressServiceItem}

          />

        </ScrollView>
      </LinearGradient>
    );
  }
}

export const ServiceList = withStyles(ServiceListComponent, theme => ({
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
