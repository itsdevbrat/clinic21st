import axios from 'axios';

export default axios.create({
  baseURL: window.location.href.match('.*localhost.*') ? 'http://localhost:8000' : 'https://31.220.109.99/',
  headers: {
    "Content-type": "application/json"
  }
});
