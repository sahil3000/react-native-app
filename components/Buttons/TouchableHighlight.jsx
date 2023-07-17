import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const TouchableHighlightComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  button : {
    backgroundColor: "#ccc",
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    margin: 10,
    fontWeight: 700,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10
  },
  primary: {
    backgroundColor: 'blue'
  },
  success: {
    backgroundColor: 'green'
  },
  warning: {
    backgroundColor: 'gold'
  },
  error: {
    backgroundColor: 'red'
  },
});


export default TouchableHighlightComponent;