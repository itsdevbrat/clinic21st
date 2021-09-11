import axios from 'axios';

export default axios.create({
  baseURL: window.location.href.match('.*localhost.*') ? 'http://localhost:8000' : 'https://clinic21st.herokuapp.com/',
  headers: {
    "Content-type": "application/json"
  }
});
