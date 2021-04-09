import React from 'react';

import { ServiceList } from './serviceList.component';
import {connect} from 'react-redux';
import * as ServiceActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackHomeIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';


export class _ServiceListContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { category } = navigation.state.params;
    titleText = translate('ServiceListtNavTitle');
    if (category){
      titleText = category.name_en;
    }
    return {
                title: titleText,
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<BackHomeIcon navigation={navigation} />),
                headerTitleStyle: { 
                    textAlign:"center", 
                    color: "#FFF",
                    fontFamily:"Montserrat",
                    border: null,
                },
                
                headerStyle: appConfig.headerStyle,
                headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'ServiceListContainer';

  constructor( props ){
    super(props);

    const didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        this.getServices();
      }
    );
  }

  componentDidMount(){
      this.getServices();
  }

  getServices = () => {
    const { accessToken, actions, navigation } = this.props;
    actions.getServices( accessToken, navigation.state.params.category );
  }

  
  render() {
    const { navigation } = this.props;
    return (
      <ServiceList
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

export const ServiceListContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ServiceListContainer);
