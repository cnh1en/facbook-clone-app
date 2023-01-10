import axios from 'axios';
import { app } from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: app.api_url,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.refreshAccessTokenRequest = null;

    this.instance.interceptors.response.use(
      config => config.data,
      error => {
        if (error.response.status === 401) {
          this.refreshAccessTokenRequest =
            this.refreshAccessTokenRequest || refreshAccessToken();

          return this.refreshAccessTokenRequest
            .then(() => this.instance(error.response.config))
            .catch(error => console.log(error))
            .finally(() => {
              this.refreshAccessTokenRequest = null;
            });
        }
      },
    );
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
