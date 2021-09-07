import axios from 'axios';
import useLocalStorage from '../../customHooks/useLocalStorage'

const [jwt] = useLocalStorage('auth-token', '')

export default axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json"
  }
});