import axios from './axios';

let login = user => axios.post('/auth/login', user)
let saveUSer = user => axios.post('/auth/login', user)

export {
    login
};
