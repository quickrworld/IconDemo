import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text><Ionicons name='ios-pizza' size={100} color='red'/></Text>
        <Text><FontAwesome name='thumbs-o-up' size={100} color='green'/></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
