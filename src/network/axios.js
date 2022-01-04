import axios from 'axios';

export default axios.create({
  baseURL: window.location.href.match('.*localhost.*') ? 'http://localhost:8000' : 'http://31.220.109.99:8000/',
  headers: {
    "Content-type": "application/json"
  }
});
