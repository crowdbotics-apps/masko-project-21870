import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {mapping, dark} from '@eva-design/eva';
import {ApplicationProvider, Layout,  IconRegistry} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Provider as ReduxProvider} from 'react-redux';
import {crowdboticsTheme} from './src/config/crowdboticsTheme';

// import SplashScreen from './src/features/SplashScreen';
import {store} from './src/store';
import NavigatorProvider from './src/navigator/mainNavigator';
import {setupHttpConfig} from './src/utils/http';
import * as NavigationService from './src/navigator/NavigationService';
import SplashScreen from 'react-native-splash-screen';


import i18n from "i18n-js";
import memoize from "lodash.memoize";
import * as RNLocalize from "react-native-localize";
import { translate, setI18nConfig }  from 'src/utils/translation';

console.disableYellowBox = true;







export default class App extends React.Component {
  state = {
    isLoaded: false,
  };
  constructor(props) {
    super(props);
    setI18nConfig(); // set initial config
  }


  async componentWillMount() {
    /**
     * add any aditional app config here,
     * don't use blocking requests here like HTTP requests since they block UI feedback
     * create HTTP requests and other blocking requests using redux saga
     */
    await this.loadAssets();
    setupHttpConfig();
    // setI18nConfig(); // set initial config
  }

  componentDidMount() {
    /**
     * Read above commments above adding async requests here
     */
    NavigationService.setNavigator(this.navigator);
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
    SplashScreen.hide();
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  componentWillUnmount() {
    RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  }

  loadAssets = async () => {
    // add any loading assets here
    this.setState({isLoaded: true});
  };

  renderLoading = () => (
    <View style={[styles.flex]}>
      <Text>Loading</Text>
    </View>
  );

  renderApp = () => (
    <ReduxProvider store={store}>
       <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider 
        mapping={mapping}
        theme={crowdboticsTheme}
        >
              <NavigatorProvider
                style={styles.flex}
                ref={(nav) => {
                  this.navigator = nav;
                }}>
                {/* <View style={[styles.flex]}>
                  <SplashScreen />
                </View> */}
              </NavigatorProvider>
        </ApplicationProvider>
    </ReduxProvider>
  );

  render = () =>
    this.state.isLoaded ? this.renderApp() : this.renderLoading();
}

const styles = StyleSheet.create({
  flex: {flex: 1},
});
