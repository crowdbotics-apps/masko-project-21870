/** @format */

import React, { PureComponent } from "react";
import { StyleSheet,  View, Text } from "react-native";

import Icon from 'react-native-vector-icons/Feather';


export default class EmptyRecordContainer extends PureComponent {


  render() {
    const { style } = this.props;
    return (
    
       <View style={[styles.emptyContainer, style]}>

          <Text style={styles.emptyText}>{this.props.emptyText}</Text>
          <Icon name="inbox" size={100} color="#FFF" ></Icon>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  EmptyBox: {
        marginBottom: 100,
        margin: 20,
  },
  emptyContainer: {
    flexDirection:'column',
    alignItems: "center",
    justifyContent: "center",
    alignSelf:'center'
  },
  emptyText: {
    fontSize: 18,
    color: "#FFF",
    // fontFamily: Constants.fontHeader,
  },
});
