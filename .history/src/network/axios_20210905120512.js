import axios from 'axios';
import useLocalStorage from '../../customHooks/useLocalStorage'


export default axios.create({
  const [jwt] = useLocalStorage('auth-token', '')
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json",
    "Authorization": jwt 
  }
});