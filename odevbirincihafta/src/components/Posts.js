import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

const Post = ({user, text, Date, postImage}) => {
  return (
    <Pressable style={styles.Pressable}>
      <View style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <View style={styles.view5}>
                <Image
                  style={styles.image}
                  source={{
                    uri: user.imageUrl,
                  }}
                />
              </View>
            </View>
            <Text style={styles.text}>{`${user.username}`}</Text>
          </View>
          <View
            style={{
              transform: [{rotate: '90deg'}],
            }}>
            <AntDesign name="ellipsis1" size={20} color="white" />
          </View>
        </View>
        <Image
          style={styles.image2}
          source={{
            uri: postImage,
          }}
        />
        <View style={styles.view6}>
          <View style={styles.view7}>
            <View style={styles.view3}>
              <View style={styles.margin}>
                <AntDesign name="hearto" size={20} color="white" />
              </View>
              <View style={styles.margin}>
                <AntDesign name="message1" size={20} color="white" />
              </View>
              <View style={styles.margin}>
                <AntDesign name="man" size={20} color="white" />
              </View>
            </View>
            <View style={styles.margin}>
              <AntDesign name="minussquareo" size={20} color="white" />
            </View>
          </View>
          <View style={styles.view8}>
            <View style={styles.view9}>
              <Image
                style={styles.image3}
                source={{
                  uri: 'https://foto.haberler.com/galeri/2017/11/01/instagram-in-siradisi-fenomenleri-710426_4267_70_b.jpg',
                }}
              />
              <Image
                style={styles.image3}
                source={{
                  uri: 'https://cdn1.ntv.com.tr/gorsel/uMpPdC6mtUCHkXgRrBY7jA.jpg?width=1000&mode=crop&scale=both',
                }}
              />
              <Image
                style={styles.image3}
                source={{
                  uri: 'https://i.pinimg.com/736x/bf/f1/1d/bff11de83086515bdf280818ec8c3458.jpg',
                }}
              />
            </View>
            <Text style={styles.text2}>
              {'Liked by muratunlu0 and 244 others'}
            </Text>
          </View>
          <View style={styles.view10}>
            <Text style={styles.white}>{user.username}</Text>
            <Text style={styles.text3}>{text}</Text>
            <Text style={styles.white}>{'... more'}</Text>
          </View>
          <View style={styles.view10}>
            <Text style={styles.text4}>{'View all 5 comments'}</Text>
          </View>
          <View style={styles.view11}>
            <View style={styles.view9}>
              <Image
                style={styles.image4}
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1407682940881059844/xy_-4i_0_400x400.jpg',
                }}
              />
            </View>
            <Text style={styles.text5}>{'Add a comment...'}</Text>
          </View>
          <View style={styles.view12}>
            <Text style={styles.text6}>{Date}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const Posts = () => {
  return (
    <View style={styles.view13}>
      <Post
        user={{
          username: 'esraxln_',
          imageUrl:
            'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720',
        }}
        postImage="https://i.pinimg.com/736x/b1/06/52/b10652d224930567ede14200b9c7a3d7.jpg"
        Date="1 hour ago"
        text="Manzaraya dalar gideriz bir gün 😎☕"
      />
      <Post
        user={{
          username: 'esraxln_',
          imageUrl:
            'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720',
        }}
        postImage="https://i.pinimg.com/originals/39/09/05/39090559bdd941de4feacf2e8849ec61.jpg"
        Date="1 hour ago"
        text="Çok düşünmek de bir hastalıktır ✌"
      />
      <Post
        user={{
          username: 'esraxln_',
          imageUrl:
            'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720',
        }}
        postImage="https://cdn.pixabay.com/photo/2019/09/24/12/50/sea-4501231_960_720.jpg"
        Date="1 hour ago"
        text="Yeni insanları tanımak bana zor geliyor 🥂"
      />
      <Post
        user={{
          username: 'esraxln_',
          imageUrl:
            'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720',
        }}
        postImage="https://eiland-meisje.nl/wp-content/uploads/2016/07/sunset-trip-curacao.jpg"
        Date="1 hour ago"
        text="Kızgın değilim. Alışkınım.. 😤"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Pressable: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  view: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  view2: {
    display: 'flex',
    flexDirection: 'row',
    padding: 14,
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
  view3: {display: 'flex', flexDirection: 'row'},
  view4: {
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    borderWidth: 1.5,
    borderColor: '#b01ba3',
    overflow: 'hidden',
  },
  view5: {
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 1.5,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    alignSelf: 'center',
    width: 31,
    height: 31,
    borderRadius: 32,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: 8,
    // borderWidth: 2,
    // borderColor:'#b01ba3'
  },
  text: {
    marginLeft: 12,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
  image2: {
    width: '100%',
    height: 300,
    marginRight: 8,
  },
  view6: {display: 'flex', flexDirection: 'column'},
  view7: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
  margin: {marginRight: 17},
  view8: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 2,
  },
  view9: {display: 'flex', flexDirection: 'row-reverse'},
  image3: {
    alignSelf: 'center',
    width: 25,
    height: 25,
    borderRadius: 32,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: -10,
    borderWidth: 2,
    borderColor: 'black',
  },
  text2: {
    marginLeft: 18,
    fontSize: 11,
    alignSelf: 'center',
    color: 'white',
  },
  view10: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 4,
  },
  white: {color: 'white'},
  text3: {marginLeft: 6, color: '#ADADAD'},
  text4: {fontSize: 12, color: 'gray'},
  view11: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 2,
  },
  image4: {
    alignSelf: 'center',
    width: 25,
    height: 25,
    borderRadius: 32,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: -10,
    borderWidth: 2,
    borderColor: 'black',
  },
  text5: {
    marginLeft: 18,
    fontSize: 13,
    paddingVertical: 6,
    alignSelf: 'center',
    color: '#ADADAD',
  },
  view12: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 4,
  },
  view13: {
    fontWeight: '600',
    fontSize: 19,
    backgroundColor: 'black',
  },
  text6: {fontSize: 11, marginRight: 16, color: 'gray'},
  Height: {height: 100},
});

export default Posts;
