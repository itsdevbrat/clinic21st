import axios from './axios';

let get = () => axios.get('/vertical', user)
let save = (user, headers) => axios.post('/user', user, { headers })

export {
    login,
    save
};
