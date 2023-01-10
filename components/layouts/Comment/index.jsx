import { View, Text, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Avatar from '../Avatar';

const Comment = ({
  author = 'Conan',
  avatarUrl,
  createdAt = '12m',
  content = 'reply comment',
  onReply,
}) => {
  const [liked, setLiked] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
      }}
    >
      <Avatar source={avatarUrl} size={40} />

      <View
        style={{
          marginHorizontal: 8,
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            backgroundColor: '#EEEDEE',
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            {author}
          </Text>

          <Text>
            {content}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '40%',
            justifyContent: 'space-between',
          }}
        >
          <Text>{createdAt}</Text>
          {liked ? (
            <Text
              style={{
                fontWeight: 'bold',
                color: '#3673cb',
              }}
              onPress={() => setLiked(false)}
            >
              Like
            </Text>
          ) : (
            <Text
              style={{
                fontWeight: 'bold',
              }}
              onPress={() => setLiked(true)}
            >
              Like
            </Text>
          )}
          <Text
            style={{
              fontWeight: 'bold',
            }}
            onPress={() => {
              console.log('1');
              onReply('@ChuHien ');
            }}
          >
            Reply
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Comment;
