import React from 'react';

import {ScrollView, View, StyleSheet} from 'react-native';
import StoryButton from './StoryButton';
import SizedBox from './SizedBox';
const Stories = () => {
  return (
    <View style={styles.view}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <StoryButton
          my={true}
          usernameColor={'gray'}
          username={'Your story'}
          resimKaynagi={
            'https://pbs.twimg.com/profile_images/1407682940881059844/xy_-4i_0_400x400.jpg'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'esraxln_'}
          resimKaynagi={
            'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'berkfalan'}
          resimKaynagi={
            'https://foto.haberler.com/galeri/2017/11/01/instagram-in-siradisi-fenomenleri-710426_4267_70_b.jpg'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'poncikbyn'}
          resimKaynagi={
            'https://galeri13.uludagsozluk.com/726/sozluk-yazarlarinin-asik-oldugu-kiz-tipi_1873752.jpg'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'zeynpkar'}
          resimKaynagi={
            'https://i.pinimg.com/736x/bf/f1/1d/bff11de83086515bdf280818ec8c3458.jpg'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'canylmzc'}
          resimKaynagi={
            'https://cdn1.ntv.com.tr/gorsel/uMpPdC6mtUCHkXgRrBY7jA.jpg?width=1000&mode=crop&scale=both'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'esraxln_'}
          resimKaynagi={
            'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'berkfalan'}
          resimKaynagi={
            'https://foto.haberler.com/galeri/2017/11/01/instagram-in-siradisi-fenomenleri-710426_4267_70_b.jpg'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'poncikbyn'}
          resimKaynagi={
            'https://galeri13.uludagsozluk.com/726/sozluk-yazarlarinin-asik-oldugu-kiz-tipi_1873752.jpg'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'zeynpkar'}
          resimKaynagi={
            'https://i.pinimg.com/736x/bf/f1/1d/bff11de83086515bdf280818ec8c3458.jpg'
          }
        />
        <SizedBox />
        <StoryButton
          my={false}
          usernameColor={'white'}
          username={'canylmzc'}
          resimKaynagi={
            'https://cdn1.ntv.com.tr/gorsel/uMpPdC6mtUCHkXgRrBY7jA.jpg?width=1000&mode=crop&scale=both'
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 120,
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Stories;
