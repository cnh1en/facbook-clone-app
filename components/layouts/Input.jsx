import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Conan from '../../assets/conan.jpeg';
import { useAuth } from '../../context/AuthContext';
import Avatar from './Avatar';

const Input = ({ styles }) => {
  const navigation = useNavigation();
  const {
    authStateContext: { currentUser = {} },
  } = useAuth();
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        ...styles,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Avatar source={currentUser.avatar_url} />

        <TouchableOpacity
          style={{
            flexGrow: 1,
            paddingVertical: 5,
            paddingHorizontal: 7,
          }}
          onPress={() => navigation.navigate('createPost')}
        >
          <TextInput
            style={{
              flexGrow: 1,
              paddingHorizontal: 10,
              paddingVertical: 2,
              fontSize: 14,
              borderWidth: 1,
              borderRadius: 25,
              borderColor: '#E5E7EC',
            }}
            editable={false}
            placeholder="What's on your mind?"
          />
        </TouchableOpacity>
      </View>

      {/* <View
        style={{
          marginVertical: 10,
          width: '100%',
          height: 0.5,
          backgroundColor: '#ddd',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <TouchableOpacity>
          <MaterialIcon name="photo-camera-front" color="#F44337" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="insert-photo" color="#4CAF50" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="meeting-room" color="#E141FC" size={30} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Input;
