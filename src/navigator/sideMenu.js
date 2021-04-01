import React from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
import {installed_blueprints} from '../config/installed_blueprints';
import Icon from 'react-native-vector-icons/Feather';

import LargeLogo from 'src/assets/images/masko-logo-large.svg';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class SideMenu extends React.Component {
  onMenuItemPressed = item => {
    this.props.navigation.navigate(item.access_route);
  };

  renderIcon = () => (
    <Icon name="menu" size={20} color={'#FFF'} />
  );

  renderMenu = () => installed_blueprints.map(this.renderMenuItem);

  renderMenuItem = item => (
    <TouchableOpacity
      style={styles.container}
      key={`${item.name}--blueprint-button`}
      activeOpacity={1}
      onPress={() => this.onMenuItemPressed(item)}>
      <View style={styles.content}>
        <View style={styles.content}>
          <Text category="s1" style={styles.text}>
            {item.human_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render = () => (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.menuContainer,
            styles.content,
          ]}>
          {this.renderIcon()}
          <Text category="h6" style={styles.text}>
            MENU
          </Text>
        </View>
        {this.renderMenu()}
        <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
          // onPress={() => this.onMenuItemPressed(item)}
      >
      <View style={styles.content}>
        <View style={styles.content}>
          <Text category="s1" style={styles.text}>
            Signout
          </Text>
        </View>
      </View>
    </TouchableOpacity>
        <View style={styles.logoContainer}>
           <LargeLogo width={width} style={{alignItems:'center'}}   />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#e4e9f2',
  },
  menuContainer: {
    height: 80,
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems:'center',
    padding: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#e4e9f2'
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#6D84C1',
    height: height
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 13,
  },
  text: {
    color: '#fff',
    fontFamily: "Montserrat",
    fontWeight: 'bold',
    marginLeft: 10
  },
});
