import axios from 'axios';

const [jwt] = useLocalStorage('auth-token', '')

export default axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json"
  }
});