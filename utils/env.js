import {API_URL, DEV_API_URL, APP_ENV} from "@env"

export const app = {
    node: APP_ENV || 'development',
    isProduction: APP_ENV === 'production',
    isTest: APP_ENV === 'test',
    isDevelopment: APP_ENV === 'development',
    api_url: APP_ENV === 'production' ? API_URL : DEV_API_URL
}