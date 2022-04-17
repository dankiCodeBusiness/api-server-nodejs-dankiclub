import axios from 'axios'

const { NODE_ENV_URL_REQUEST } = process.env

const api = axios.create({
  baseURL: NODE_ENV_URL_REQUEST
})

export { api }
