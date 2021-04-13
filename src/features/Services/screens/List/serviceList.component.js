import React from 'react';
import {
  ScrollView,
  Dimensions
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

import { Spinner } from 'src/components/Spinner';
import { translate } from 'src/utils/translation';
import EmptyRecordContainer from 'src/components/EmptyContainer/EmptyRecordContainer';

class ServiceListComponent extends React.Component {
 
  renderSpinner = () => {
    const { getServiceLoading } = this.props;
    if (getServiceLoading) {
      return <Spinner />;
    } else {
      return null;
    }
  };
  render() {
    
    if(this.props.services.length==0){
      return (
        <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainerEmpty}>
            <EmptyRecordContainer emptyText={translate("NoRecordFoundLabel")} />
      </LinearGradient>);
    }
    

    return (
      <LinearGradient colors={AppConfig.backgroundColor} style={styles.itemsContainer}>
            {this.renderSpinner()}
           <ScrollView style={styles.scrollView} >
              <ServicesComponent data={this.props.services} />
             
            </ScrollView>          
      </LinearGradient>
    );
  }
}

export const ServiceList = withStyles(ServiceListComponent, theme => ({
  container: {
    flex: 1,
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
