import axios from 'axios';

export default axios.create({
  baseURL: window.location.href.match('.*localhost.*') ? 'http://localhost:8000' : 'https://api.clinic21st.in/',
  headers: {
    "Content-type": "application/json"
  }
});
