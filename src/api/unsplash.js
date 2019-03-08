import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 77c3edb542e9c554a16098a8a6e3811c804ffd7ecef9c9015c09e3040a17aa92'
      }
});