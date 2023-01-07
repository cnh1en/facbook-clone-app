import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Alert } from 'react-native-web';
import { useTailwind } from 'tailwind-rn/dist';
import { changePassword } from '../../apis/auth.api';

const ChangePassword = () =>{
    const tw = useTailwind();
    var checkValue = false;
    var messageRepost;

    const handleSave = async () =>{
        try{
            const result = await changePassword({oldPassword, newPassword});
            messageRepost = result.message;
            console.log(result)
        } catch (error){
            console.log(error);
        }
    }
    
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confimPassword, setConfimPassword] = useState('')

    const checkConfim = () => {
        (newPassword === confimPassword) ? checkValue = true : checkValue = false;
    }

    return(
        <ScrollView
            style={tw('bg-white h-full')}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#30477C"
                translucent={true}
            />
            <View style={tw('mx-5 flex-1 ')}>
                <View style={tw('mx-5')}>
                    <Text style={tw('mt-5 center')}>Mật khẩu cũ</Text>
                    <TextInput
                         style={tw('h-10 border-b-[1px] mb-3 border-b-[#ECEAEC]')}
                         secureTextEntry
                         onChangeText = {oldPassword => setOldPassword(oldPassword)}
                    /> 
                </View>
                <View style={tw('mx-5')}>
                    <Text style={tw('mt-5 center')}>Mật khẩu mới</Text>
                    <TextInput
                        style={tw('h-10 border-b-[1px] mb-3 border-b-[#ECEAEC]')}
                        secureTextEntry
                        onChangeText = {newPassword => setNewPassword(newPassword)}
                    /> 
                </View>
                <View style={tw('mx-5')}>
                    <Text style={tw('mt-5 center')}>Nhập lại mật khẩu</Text>
                    <TextInput
                        style={tw('h-10 border-b-[1px] mb-3 border-b-[#ECEAEC]')}
                        onChangeText = {confimPassword => setConfimPassword(confimPassword)} 
                        onChange = {checkConfim()}
                        secureTextEntry
                        /> 
                </View>
            </View>
            <View style={tw('mt-5 mx-6 px-15')}>
                {!checkValue ? (
                    <Text style={{
                        color: "red",
                        fontSize: 20,
                        textAlign: "center",
                        alignItems: "center"
                    }} >Mật khẩu không trùng khớp</Text>
                ) : (
                    <Button
                        title="Lưu"
                        color="#4E68A2"
                        onPress={handleSave}
                    />
                )}
            </View>
            <View style={tw('mt-5 mx-6 px-15')}>
                {(messageRepost === "Success") ? (<Text>Thay đổi mật khẩu thành công</Text>) : (<Text>Thay đổi mật khẩu thất bại</Text>)}
            </View>
        </ScrollView>
        
    );
};

export default ChangePassword