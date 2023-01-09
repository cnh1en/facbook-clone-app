import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Test from '../../../assets/banner.png';

const Body = ({content, media_file}) => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <Text
        style={{
          marginBottom: 10,
          textAlign: 'justify',
        }}
      >
        {content}
      </Text>

      {
        media_file && media_file.length ?
        <Image source={media_file[0].url} resizeMode="cover" style={styles.image} />
        : <></>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 'auto',
    marginHorizontal: -10,
  },
});

export default Body;
