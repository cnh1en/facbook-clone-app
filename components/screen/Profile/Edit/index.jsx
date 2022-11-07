import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import backgroundImage from '../../../../assets/banner.png';
import Avatar from '../../../common/Avatar';
import StyledButton from '../../../common/Button';
import Title from '../../../common/Title';
import DataRow from './DataRow';
import DetailItem from './DetailItem';

const EditProfile = () => {
  const navigation = useNavigation();

  const editDetailSheetRef = useRef(null);
  const editLinkSheetRef = useRef(null);
  const snapPoints = ['50%'];

  return (
    <>
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
              editDetailSheetRef.current.present();
            }}
          >
            <View
              style={{
                marginVertical: 10,
                width: '100%',
                overflow: 'scroll',
              }}
            >
              <DetailItem icon="clockcircle" content="Joined on January 2017" />
              <DetailItem icon="home" content="Lives in Hanoi" />
              <DetailItem icon="folderopen" content="Work at HUST" />
            </View>
          </DataRow>

          <DataRow
            name="Links"
            onPress={() => editLinkSheetRef.current.present()}
          >
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

        <BottomSheetModal
          ref={editDetailSheetRef}
          snapPoints={snapPoints}
          containerStyle={{
            backgroundColor: '#343434cc',
          }}
        >
          <Text
            style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
          >
            Details
          </Text>
          <View
            style={{
              padding: 10,
              justifyContent: 'space-between',
              height: '90%',
            }}
          >
            <View>
              <View style={{ marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesignIcon name="home" size={20} />
                  <Text style={{ margin: 5 }}>Address</Text>
                </View>
                <TextInput
                  value="Hanoi"
                  style={{
                    borderWidth: 1,
                    paddingLeft: 10,
                    padding: 5,
                    borderRadius: 10,
                    borderColor: 'gray',
                  }}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesignIcon name="laptop" size={20} />
                  <Text style={{ margin: 5 }}>Company</Text>
                </View>
                <TextInput
                  value="HUST"
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    paddingLeft: 10,
                    borderRadius: 10,
                    borderColor: 'gray',
                  }}
                />
              </View>
            </View>
            <StyledButton title="SUBMIT" styles={{ padding: 10 }} />
          </View>
        </BottomSheetModal>

        <BottomSheetModal
          ref={editLinkSheetRef}
          snapPoints={snapPoints}
          containerStyle={{
            backgroundColor: '#343434cc',
          }}
        >
          <Text
            style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
          >
            Links
          </Text>
          <View
            style={{
              padding: 10,
              justifyContent: 'space-between',
              height: '90%',
            }}
          >
            <View>
              <View style={{ marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesignIcon name="home" size={20} />
                  <Text style={{ margin: 5 }}>Twitter</Text>
                </View>
                <TextInput
                  value="me.twitter"
                  style={{
                    borderWidth: 1,
                    paddingLeft: 10,
                    padding: 5,
                    borderRadius: 10,
                    borderColor: 'gray',
                  }}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesignIcon name="laptop" size={20} />
                  <Text style={{ margin: 5 }}>Github</Text>
                </View>
                <TextInput
                  value="github.com"
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    paddingLeft: 10,
                    borderRadius: 10,
                    borderColor: 'gray',
                  }}
                />
              </View>
            </View>
            <StyledButton title="SUBMIT" styles={{ padding: 10 }} />
          </View>
        </BottomSheetModal>
      </View>
    </>
  );
};

export default EditProfile;