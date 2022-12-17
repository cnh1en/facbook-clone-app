import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { getProfile } from '../../../apis/auth.api';
import backgroundImage from '../../../assets/banner.png';
import BottomSheetEditProfile from '../../bottomSheets/BottomSheetEditProfile';
import Avatar from '../../layouts/Avatar';
import Title from '../../layouts/Title';
import Spinner from '../Spinner';
import DataRow from './DataRow';
import DetailItem from './DetailItem';

const EditProfile = () => {
  const navigation = useNavigation();
  const editProfileRef = useRef(null);

  //   const { data: profile, isLoading: isLoadingEditProfile } = useQuery({
  //     queryKey: ['my-profile'],
  //     queryFn: () => getProfile(),
  //   });

  //   if (isLoadingEditProfile) {
  //     return <Spinner />;
  //   }

  const profile = {
    data: {
      firstname: 'Hien',
      created_at: '15-1-2001',
      address: 'Hanoi',
      company: 'Viettel',
    },
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Pressable onPress={() => navigation.goBack()}>
        <Title name="Edit profile" />
      </Pressable>

      <ScrollView
        style={{
          padding: 10,
          top: 70,
          marginBottom: 50,
        }}
        showsVerticalScrollIndicator={false}
      >
        <DataRow
          name="Name"
          onPress={() => {
            editProfileRef.current.present();
          }}
        >
          <Text style={{ fontSize: 20 }}>{profile.data.firstname}</Text>
        </DataRow>

        <DataRow name="Profile">
          <Avatar size={150} />
        </DataRow>

        <DataRow name="Cover photo">
          <Image
            source={backgroundImage}
            style={{
              borderRadius: 15,
              height: 200,
              width: '100%',
              marginVertical: 10,
            }}
          />
        </DataRow>

        <DataRow
          name="Details"
          onPress={() => {
            editProfileRef.current.present();
          }}
        >
          <View
            style={{
              marginVertical: 10,
              width: '100%',
              overflow: 'scroll',
            }}
          >
            <DetailItem icon="clockcircle" content={profile.data.created_at} />
            <DetailItem icon="home" content="Lives in Hanoi" />
            <DetailItem icon="folderopen" content="Work at HUST" />
          </View>
        </DataRow>

        <DataRow name="Links" onPress={() => editProfileRef.current.present()}>
          <View
            style={{
              marginVertical: 10,
              width: '100%',
              overflow: 'scroll',
            }}
          >
            <DetailItem icon="twitter" content="me.twitter" />
            <DetailItem icon="github" content="github.com" />
          </View>
        </DataRow>
      </ScrollView>

      <BottomSheetEditProfile
        ref={editProfileRef}
        snapPoints={['95%']}
        title="Edit profile"
        data={[
          {
            icon: 'home',
            field: 'name',
            value: profile.data.firstname,
          },
          {
            icon: 'home',
            field: 'address',
            value: profile.data.address, /// them address
          },
          {
            icon: 'laptop',
            field: 'company',
            value: profile.data.company, // them company
          },
          {
            icon: 'twitter',
            field: 'twitter',
            value: 'my-link', /// them link
          },
          {
            icon: 'github',
            field: 'github',
            value: 'my-link', // them link
          },
        ]}
      ></BottomSheetEditProfile>
    </View>
  );
};

export default EditProfile;