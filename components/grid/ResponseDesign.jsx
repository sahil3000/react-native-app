import React from 'react';
import {StyleSheet, View} from 'react-native';

const ResponseDesign = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
            <View style={styles.innerBox1}></View>
            <View style={styles.innerBox2}></View>
            <View style={styles.innerBox3}></View>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  box1: {
    flex: 2,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue'
  },
  box3: {
    flex: 1,
    backgroundColor: 'orange'
  },
  innerBox1: {
    flex: 1,
    backgroundColor: '#ccc',
    margin: 5
  },
  innerBox2: {
    flex: 1,
    backgroundColor: '#aaa',
    margin: 5
  },
  innerBox3: {
    flex: 1,
    backgroundColor: '$acacac',
    margin: 5
  }
});

export default ResponseDesign;