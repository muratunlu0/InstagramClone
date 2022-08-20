import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Stories from './components/Stories';
import TopBar from './components/TopBar';
import Posts from './components/Posts';

const App = () => {
  return (
    <View>
      <TopBar />
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Stories />
        <Posts />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  innerContainer: {
    backgroundColor: 'black',
    padding: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  plusIcon: {
    position: 'absolute',
    left: 37,
    top: 37,
    width: 23,
    height: 23,
    borderRadius: 50,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
});

export default App;
