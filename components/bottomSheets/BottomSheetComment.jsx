import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import Comment from '../layouts/Comment';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Avatar from '../layouts/Avatar';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Divider from '../layouts/Divider';
import { useEffect } from 'react';
import { getPostComment } from '../../apis/auth.api';
import { calculateTime } from '../../utils/formatTime';

const LIMIT = 10

const BottomSheetComment = React.forwardRef(
  ({ data, likes, liked, onLike, onDislike, postId }, ref) => {
    const [reply, setReply] = useState('');
    const [page, setPage] = useState(0);
    const [postComment, setPostComment] = useState([]);

    const textInputRef = useRef(null);

    const handleReply = text => {
      setReply(text);
      textInputRef?.current.focus();
    };

    useEffect(()=>{
      if(!postId) return 
      const getPostComments =  async () => {
        const result = await getPostComment(page, LIMIT, postId);
        if(result){
          setPostComment(prev => ([...prev, ...(result)]))
        }
      }
      getPostComments()
    }, [page])

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={['95%']}
        containerStyle={{
          backgroundColor: '#343434cc',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            zIndex: 100,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <AntDesignIcon name="like1" size={18} color="#2374E1" />
              <Text style={{ fontWeight: 'bold', marginHorizontal: 8 }}>
                {likes}
              </Text>
            </View>

            <TouchableOpacity>
              {liked ? (
                <AntDesignIcon
                  name="like1"
                  size={20}
                  color="#3673cb"
                  onPress={onDislike}
                />
              ) : (
                <AntDesignIcon name="like2" size={20} onPress={onLike} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 1000,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
            paddingVertical: 10,
          }}
        >
          <Avatar size={40} />
          <TextInput
            style={{
              flex: 1,
              padding: 5,
              paddingHorizontal: 8,
              marginHorizontal: 12,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#E5E7EC',
            }}
            placeholder="Write a reply..."
            multiline
            maxLength={150}
            onChangeText={handleReply}
            value={reply}
            autoFocus
            ref={textInputRef}
          />
          <FontAwesomeIcon name="send-o" size={20} color="#3673CB" />
        </View>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              marginTop: 10,
              marginBottom: 50,
            }}
          >
            {postComment.map((_, index) => (
              <Comment 
                key={index} 
                onReply={handleReply} 
                avatarUrl={_.created_by.avatar_url} 
                author={_.created_by.full_name} 
                content={_.content}
                createdAt={calculateTime(_.created_at)}
              />
            ))}
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  },
);

export default BottomSheetComment;
