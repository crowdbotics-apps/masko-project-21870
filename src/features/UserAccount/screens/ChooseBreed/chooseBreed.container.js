import React from 'react';
import {
  View
} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import { ChooseBreed } from './chooseBreed.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';
import  appConfig from 'src/config/app';
import * as userAccountActions from '../../redux/actions';
import * as NavigationService from 'src/navigator/NavigationService';

import { BackIcon, RightIcon, LogoIcon } from 'src/components/HeaderBar';
import { translate }  from 'src/utils/translation';


export class _ChooseBreedContainer extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
  
    return {
                title: translate('ChooseBreedNavTitle'),
                headerLeft: (<BackIcon navigation={navigation} />),
                headerTitleStyle:appConfig.headerTitleStyle,
                headerStyle: appConfig.headerStyle,
                headerRight: (<View />)
          }
  };

  navigationKey = 'ChooseBreedContainer';

  getBreedTypes = ( keyword ) => {
    const { accessToken, actions  } = this.props;
    actions.getBreedType( accessToken, keyword );
  }

  onSaveSelection = (selected) => {
    const { actions, accessToken } = this.props;
    actions.setBreed(selected)
    NavigationService.goBack()
    
  }

  render() {
    const { navigation } = this.props;
    return (
      <ChooseBreed
        getBreedTypeLoading={this.props.getBreedTypeLoading}
        breedTypes={this.props.breedTypes}
        getProductsCb={this.getBreedTypes}
        onSaveSelection={this.onSaveSelection}
        selectedProducts={this.props.selectedProducts}
        selectedBreedType={this.props.selectedBreedType}
        navigation = {navigation}

      />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.EmailAuth.accessToken,
  getBreedTypeLoading: state.UserAccount.loaders.BreedTypeGet,
  breedTypes: state.UserAccount.breedTypes,
  selectedBreedType: state.UserAccount.selectedBreedType,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getBreedType: (accessToken,  keyword) => {
      dispatch( userAccountActions.getBreedType( accessToken, keyword  ) );
    },
    setBreed: (breed) => {
      dispatch(userAccountActions.setBreedType(breed));
    },
  },
});

export const ChooseBreedContainer =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ChooseBreedContainer);
