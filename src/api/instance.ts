import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { getItem } from '@utils'

type UrlType = string | undefined

const BASE_URL = process.env.REACT_APP_API_BASE_URL

const axiosApi = (url: UrlType): AxiosInstance => {
  const instance = axios.create({ baseURL: url })
  return instance
}

const axiosAuthApi = (url: UrlType): AxiosInstance => {
  const { token } = getItem('userInfo')
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return instance
}

export const defaultInstance = axiosApi(BASE_URL)
export const authInstance = axiosAuthApi(BASE_URL)
