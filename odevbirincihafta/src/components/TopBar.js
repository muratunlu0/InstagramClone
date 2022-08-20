import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {View, Text, StyleSheet} from 'react-native';

const topBar = () => {
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <Text style={styles.text}>{'Instagram'}</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.margin}>
          <AntDesign name="pluscircleo" size={25} color="white" />
        </View>
        <View style={styles.margin}>
          <AntDesign name="hearto" size={25} color="white" />
        </View>
        <View style={styles.margin}>
          <AntDesign name="message1" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  view2: {display: 'flex', flexDirection: 'row'},
  text: {
    fontWeight: '600',
    fontSize: 19,
    color: 'white',
  },
  margin: {marginLeft: 17},
});

export default topBar;
