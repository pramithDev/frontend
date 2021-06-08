import axios from 'axios'

export function getStrapiURL(path = "") {
  return `${
    process.env.API_BASE_URL || 'https://backend-9sc22.ondigitalocean.app'
  }${path}`;
}

export default axios.create({
  baseURL: process.env.API_BASE_URL || 'https://backend-9sc22.ondigitalocean.app'
});