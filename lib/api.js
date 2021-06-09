import axios from 'axios'

export function getStrapiURL(path = "") {
  return `${
    process.env.API_BASE_URL || 'https://strapi-backend-info.herokuapp.com'
  }${path}`;
}

export default axios.create({
  baseURL: 'https://strapi-backend-info.herokuapp.com'
});