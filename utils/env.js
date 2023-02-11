import {API_URL, DEV_API_URL, APP_ENV} from "@env"

export const app = {
    node: APP_ENV || 'development',
    isProduction: APP_ENV === 'production',
    isTest: APP_ENV === 'test',
    isDevelopment: APP_ENV === 'development',
    api_url: APP_ENV === 'production' ? "http://127.0.0.1:8000/api/" : "https://7eba-2405-4802-356-4a10-4d8e-7ac1-c2ef-9151.ngrok.io/api/"
}