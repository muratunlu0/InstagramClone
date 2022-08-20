import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StoryButton = ({resimKaynagi, username, my}) => {
  return (
    <View style={styles.view}>
      <View style={styles.imageContainer}>
        {my === false ? (
          <View style={styles.circle}>
            <View style={styles.InCircle}>
              <Image
                style={styles.image}
                source={{
                  uri: resimKaynagi,
                }}
              />
            </View>
          </View>
        ) : (
          <View style={styles.InCircle}>
            <Image
              style={styles.image}
              source={{
                uri: resimKaynagi,
              }}
            />
          </View>
        )}
      </View>

      {my === true ? (
        <View>
          <Text style={styles.username2}>{username}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.username1}>{username}</Text>
        </View>
      )}

      {my === true ? (
        <View style={styles.plusBck}>
          <AntDesign name="plus" size={16} color="white" />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  plusBck: {
    padding: 1.5,
    justifyContent: 'center',
    position: 'absolute',
    left: 37,
    top: 37,
    width: 23,
    height: 23,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: '#09A1D7',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.3)',
    overflow: 'hidden',
  },
  circle: {
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 2.2,
    borderColor: '#b01ba3',
    overflow: 'hidden',
  },
  InCircle: {
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    borderWidth: 2.2,
    borderColor: 'black',
    overflow: 'hidden',
  },
  view: {display: 'flex', flexDirection: 'row', justifyContent: 'center'},
  image: {
    width: '100%',
    height: '100%',
  },
  username1: {
    color: 'white',
    marginTop: 67,
    fontSize: 13,
  },
  username2: {
    color: 'gray',
    marginTop: 67,
    fontSize: 13,
  },
});

export default StoryButton;
