import axios from 'axios';

export default axios.create({
  baseURL: "http://https://clinic21st.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});