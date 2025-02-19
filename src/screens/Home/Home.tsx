import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import { getPopularMovies } from '../../utils/service/TMDBService';

import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
} from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const Home = () => {
  const [topImages, setTopImages] = useState<any>([]);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    getPopularMovies()
      .then((response: any) => {
        const movies = response.map((item: any) => ({
          posterPath: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }));
        setTopImages(movies);
        console.log(movies);
    });
  }, []);

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={ref}
        width={width}
        height={width * 1.5}
        data={topImages}
        onProgressChange={progress}
        autoPlay={true}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Image
              source={{
                uri: topImages[index].posterPath,
              }}
              style={styles.tinyLogo}
            />
          </View>
        )}
      />
      <View style={styles.overlayContainer}>
        <View style={styles.titleSection}>
          <Text style={styles.textDesc}>My List</Text>
          <Text style={styles.textDesc}>Discover</Text>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.buttonWishList}>
            <Text style={styles.textWishList}>+ WishList</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDetail}>
            <Text style={styles.textDetails}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },
  overlayContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 5,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  textDesc: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: 'white',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  buttonDetail: {
    backgroundColor: '#F2C94C',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 13,
    alignItems: 'center',
  },
  textWishList: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  plusSymbol: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonWishList: {
    backgroundColor: '#333333',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 13,
    alignItems: 'center',
  },
  textDetails: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  tinyLogo: {
      width: '100%',
      height: '100%',
  },
});

export default Home;
