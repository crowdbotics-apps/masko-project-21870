import React from 'react';

import { ServiceDetails } from './serviceDetails.component';

import { connect } from 'react-redux';
import * as ServiceActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';


export class _ServiceDetailsContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { category } = navigation.state.params;
    titleText = translate('ServiceDetailsNavTitle');
    if (category){
      titleText = category.getName();
    }
    return {
                title: titleText,
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<BackIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'ServiceDetailsContainer';

  constructor( props ){
    super(props);

  }

 
  
  
  render() {
    const { navigation } = this.props;
    return (
      <ServiceDetails
        errorMsg={this.props.signInErrors}
        navigation={navigation}
        services={this.props.services}
        getServiceLoading={this.props.getServiceLoading}
        
       />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  services: state.Service.services,
  getServiceLoading: state.Service.GetService
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getServices: (accessToken, category) => {
      dispatch(ServiceActions.getServices( accessToken, category ));
    },
  },
});

export const ServiceDetailsContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ServiceDetailsContainer);
