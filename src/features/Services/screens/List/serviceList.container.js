import React from 'react';

import { ServiceList } from './serviceList.component';
import {connect} from 'react-redux';
import * as ServiceActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackHomeIcon, RightIcon, LogoIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';

export class _ServiceListContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    let category = null;

    if(navigation.state.params && navigation.state.params.category){
      category = navigation.state.params.category
    }
    
    titleText = translate('ServiceListNavTitle');
    if (category){
      titleText = category.name_en;
    }
    return {
                // title: titleText,
                headerTitle: (<LogoIcon navigation={navigation} />),
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<BackHomeIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon navigation={navigation} />)
          }
  };
  navigationKey = 'ServiceListContainer';

  constructor( props ){
    super(props);
    this.state = {
      searchKeyword: '',
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot){
      if ( !(prevProps.navigation.state) || !(prevProps.navigation.state.params) ){
        this.getServices();
      }else if( this.props.navigation.state.params.category != prevProps.navigation.state.params.category ){
        this.getServices();
          
      }
  }


  componentDidMount(){
      this.getServices();
  }

  getServices = (keyword) => {
    const { accessToken, actions, navigation } = this.props;
    if( navigation && navigation.state && navigation.state.params && navigation.state.params.category ){
      actions.getServices( accessToken, navigation.state.params.category, keyword );
    }
    
  }

  

  onPressServiceItem = (item) => {
    const { navigation  } = this.props;
    this.props.navigation.navigate( appConfig.NAVIGATOR_ROUTE.ServiceDetails ,{
      category: navigation.state.params.category,
      service: item 
    })
  }
  
  render() {
    const { navigation } = this.props;
   

    return (
      <ServiceList
        errorMsg={this.props.signInErrors}
        navigation={navigation}
        services={this.props.services}
        getServiceLoading={this.props.getServiceLoading}
        onPressServiceItem={this.onPressServiceItem}
        getServicesCb={this.getServices}
        
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
    getServices: (accessToken, category, keyword) => {
      dispatch(ServiceActions.getServices( accessToken, category, keyword ));
    },
  },
});

export const ServiceListContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ServiceListContainer);
