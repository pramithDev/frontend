import axios from 'axios'

export function getStrapiURL(path = "") {
  return `${
    'https://backend-vcaue.ondigitalocean.app'
  }${path}`;
}

export default axios.create({
  baseURL: 'https://backend-vcaue.ondigitalocean.app/'
});