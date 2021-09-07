import axios from './axios';

let get = (headers) => axios.get('/vertical', user, { headers })
let save = (headers) => axios.post('/user', user, { headers })

export {
    login,
    save
};
