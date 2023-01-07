import axios from 'axios';
import { Alert } from 'react-native';
import http from '../utils/http';

const login = async ({ username, password }) => {
  try {
    const response = await axios.post('https://devapi.bkwatch.me/api/login', {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const register = async () => {
  try {
    /**
     * code
     */
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const logout = async () => {
  try {
    await axios.post('https://devapi.bkwatch.me/api/logout', {
      old_password,
      new_password
    });
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const changePassword = async ({old_password, new_password}) => {
  try {
    const response = await axios.post('https://devapi.bkwatch.me/api/profile/change-password', {
      old_password,
      new_password
    })
    // console.log(response.data)
    return response.data;
  } catch (error){
    Alert.alert(JSON.stringify(error));
  }
}

const getProfile = async () => {
  try {
    const response = await http.get('profile');
    return response.data;
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const editProfile = async body => {
  try {
    await http.post('profile', body);
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

export { login, register, logout, getProfile, editProfile, changePassword };
