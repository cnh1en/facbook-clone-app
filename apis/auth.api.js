import axios from 'axios';
import { app } from '../utils/env';
import http from '../utils/http';

const login = async ({ username, password }) => {
  try {
    const response = await axios.post(`${app.api_url}login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const register = async body => {
  try {
    const { lastname, ..._data } = body;
    const response = await http.post('register', {
      ...body,
      birthday: '2001-01-01',
      username: lastname,
      address: 'Vietnam',
      link_github: 'https://github.com/',
      link_twitter: 'https://twitter.com/',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    await http.post('logout');
  } catch (error) {
    console.log(error);
  }
};

const getProfile = async () => {
  try {
    const response = await http.get('profile');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const editProfile = async body => {
  try {
    const response = await http.post('profile', body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (page, limit) => {
  try {
    const response = await http.get('post', {
      params: {
        page,
        limit
      }
    });
    if(response.error) return false
    return response.data;
  } catch (error) {
    console.log(error);
    return false
  }
};

const createPost = async (body) => {
  try {
    const response = await http.post('post', body);
    if(response.error) return false
    return response;
  } catch (error) {
    console.log(error);
    return false
  }
};

const uploadFile = async (body) => {
  try {
    const response = await http.post('action/upload', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    if(response.error) return false
    return response.data;
  } catch (error) {
    console.log(error);
    return false
  }
}

export { login, register, logout, getProfile, editProfile, getPost, createPost, uploadFile };
