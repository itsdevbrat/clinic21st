import axios from './axios';

let login = user => axios.post('/auth/login', user)
let save = (user, headers) => axios.post('/user', user, headers)

export {
    login,
    save
};
