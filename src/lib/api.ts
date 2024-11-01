import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://language.googleapis.com/v2',
  timeout: 1000,
})
