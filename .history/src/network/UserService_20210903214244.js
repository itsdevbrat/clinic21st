import axios from './axios';

let login = user => axios.post('/auth/login', user)
let saveUser = user => axios.post('/auth/login', user)

export {
    login
};
