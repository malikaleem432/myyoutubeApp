import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
