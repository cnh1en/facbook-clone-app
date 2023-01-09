import React, { Fragment, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import BottomSheetComment from '../../bottomSheets/BottomSheetComment';
import Avatar from '../Avatar';
import Divider from '../Divider';

const Footer = ({ comments, likes, shares, emotions, number_emotions, commentsData }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const commentSheetModalRef = useRef(null);
  const [likesState, setLikesState] = useState(emotions.length);
  const [sharesState, setSharesState] = useState(shares);
  // likes -> check id -> boolean
  const [liked, setLiked] = useState(emotions.find(item => item.user_id == currentUser.id));
  const [shared, setShared] = useState(false);

  const onLike = () => {
    setLikesState(value => value + 1);
    setLiked(true);
  };

  const onDislike = () => {
    setLikesState(value => value - 1);
    setLiked(false);
  };

  const onShare = () => {
    setSharesState(value => value + 1);
    setShared(true);
  };

  const onUnshare = () => {
    setSharesState(value => value - 1);
    setShared(false);
  };

  return (
    <Fragment>
      <TouchableOpacity onPress={() => commentSheetModalRef.current.present()}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            { liked ? (
              <AntDesignIcon name="like1" size={15} color="#3673cb" />
              ) : (
              <AntDesignIcon name="like2" size={15} />
            )}
            {
              liked && likesState > 1 ? (
                <Text style={{marginLeft: '2px'}}>Bạn và {likesState - 1} người khác đã thích</Text>
              ) : (
                <Text style={{marginLeft: '2px'}}>{likesState}</Text>
              )
            }
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text>{comments} comments</Text>
            <Text> - </Text>
            <Text>{sharesState} shares</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Divider
        height={1}
        styles={{
          marginHorizontal: -10,
          marginBottom: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 5,
        }}
      >
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
        <AntDesignIcon
          name="message1"
          size={20}
          onPress={() => commentSheetModalRef.current.present()}
        />
        {shared ? (
          <AntDesignIcon
            name="sync"
            size={20}
            color="green"
            onPress={onUnshare}
          />
        ) : (
          <AntDesignIcon name="sync" size={20} onPress={onShare} />
        )}
      </View>

      {/* {
        commentsData && commentsData.length ? 
        <Divider
              height={1}
              styles={{
                marginHorizontal: -10,
                marginBottom: 5,
              }}
            /> : <></>
      }
      {
        commentsData && commentsData.length ? 
        commentsData.map((comment) => (
          <View 
            key={comment._id} 
            style={{marginVertical: '5px'}}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Avatar
                source={comment.created_by.avatar_url}
                styles={{
                  marginRight: 5,
                }}
              />

              <View>
                <Text style={{ fontWeight: 'bold' }}>{comment.created_by.full_name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      marginRight: 10,
                    }}
                  >
                    {comment.content}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              Thích Phản hồi
            </View>
          </View>
        )) 
        : <></>
      } */}
      
      <BottomSheetComment
        ref={commentSheetModalRef}
        data={[...Array(20).keys()]}
        likes={likesState}
        liked={liked}
        onLike={onLike}
        onDislike={onDislike}
      />
    </Fragment>
  );
};

export default Footer;
