import axios from 'axios';
import { app } from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Http {
  constructor() {
    Http.getTokens().then(tokens => {
      const {access_token, refresh_token} = tokens
      this.instance = axios.create({
        baseURL: app.api_url,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token,
          'refresh_token': refresh_token
        },
      });
      this.refreshAccessTokenRequest = null;

      this.instance.interceptors.response.use(
        config => config.data,
        async error => {
          const originalRequest = error.config;
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            this.refreshAccessTokenRequest =
              this.refreshAccessTokenRequest || refreshAccessToken();
            await AsyncStorage.setItem('token', JSON.stringify(this.refreshAccessTokenRequest))
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.refreshAccessTokenRequest.access_token}`;
            originalRequest.headers['Authorization'] = `Bearer ${this.refreshAccessTokenRequest.access_token}`;
            axios.defaults.headers.common['refresh_token'] = this.refreshAccessTokenRequest.refresh_token;
            originalRequest.headers['refresh_token'] = this.refreshAccessTokenRequest.refresh_token;
            return this.refreshAccessTokenRequest
              .then(() => this.instance(originalRequest))
              .catch(error => console.log(error))
              .finally(() => {
                this.refreshAccessTokenRequest = null;
              });
          }
        },
      );
    }).catch(e => {
      console.log("Http có lỗi", e)
      this.instance = undefined
    })
  }

  get(url, config) {
    return this.instance.get(url, config);
  }

  post(url, body, config) {
    return this.instance.post(url, body, config);
  }

  delete(url, config) {
    return this.instance.delete(url, config);
  }

  put(url, body, config) {
    return this.instance.put(url, body, config);
  }

  patch(url, body, config) {
    return this.instance.patch(url, body, config);
  }

  static get AsyncStorage(){
    return AsyncStorage
  }

  static async getTokens(){
    const data = JSON.parse(await this.AsyncStorage.getItem('token'))
    return data
  }
}

const refreshAccessToken = async () => {
  try {
    return await http.post(app.api_url + 'refresh-token');
  } catch (error) {
    console.log(error);
    return false
  }
};

const http = new Http();
export default http;
