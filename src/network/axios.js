import axios from 'axios';

export default axios.create({
  baseURL: "https://clinic21st.heroku.com/",
  headers: {
    "Content-type": "application/json"
  }
});
