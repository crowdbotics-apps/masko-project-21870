import React from 'react';

import { UserCart } from './userCart.component';

import { connect } from 'react-redux';
import * as ServiceActions from '../../redux/actions';
import appConfig from 'src/config/app';

import { BackIcon, RightIcon, HamBurgerIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';


export class _UserCartContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    // const { category } = navigation.state.params;
    titleText = translate('MyCartNavTitle');
    // if (category){
    //   titleText = category.getName();
    // }
    return {
                title: titleText,
                // headerBack: (<BackHomeIcon navigation={navigation}),
                headerLeft: (<HamBurgerIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                // headerRight: (<RightIcon />)
          }
  };
  navigationKey = 'UserCartContainer';

  constructor( props ){
    super(props);

  }

 
  
  
  render() {
    const { navigation } = this.props;
    return (
      <UserCart
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

export const UserCartContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_UserCartContainer);
