import React from 'react';
import { ScrollView, View } from 'react-native';
import Divider from '../../layouts/Divider';
import Post from '../../layouts/Post';
import Input from '../../layouts/Input';
import { getPost } from '../../../apis/auth.api';
import { useState, useEffect } from 'react';

const LIMIT = 10
const Feed = () => {
  const [page, setPage] = useState(0)
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const getPosts =  async () => {
      const result = await getPost(page, LIMIT);
      console.log(result)
      if(result){
        setPosts(prev => ([...prev, ...(result)]))
      }
    }
    getPosts()
  }, [page])
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View>
        <Input />
        <Divider />
        {posts.map((_, i) => (
          <Post key={i} item={_} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Feed;
