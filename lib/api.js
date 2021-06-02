import axios from 'axios'

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
  }${path}`;
}

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});