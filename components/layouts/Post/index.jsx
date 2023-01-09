import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import Divider from '../Divider';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Post = ({ item }) => {
  return (
    <Fragment>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
        }}
      >
        <Header 
          created_by={item.created_by} 
          created_at={item.created_at} 
          is_edit={item.is_edit}
        />
        <Body 
          content={item.content}
          media_file={item.media_file}
        />
        <Footer 
          emotions={item.emotions} 
          likes={1} 
          comments={item.number_comment} 
          shares={item.number_share} 
          number_emotions={item.number_emotions}
          commentsData={item.comments}
        />
      </View>
      <Divider />
    </Fragment>
  );
};

export default Post;
