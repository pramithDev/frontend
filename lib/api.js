import axios from 'axios'

export function getStrapiURL(path = "") {
  return `${
    process.env.API_BASE_URL || 'http://localhost:5000'
  }${path}`;
}

export default axios.create({
  baseURL: process.env.API_BASE_URL
});