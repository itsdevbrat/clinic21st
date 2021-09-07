import axios from './axios';

let get = (headers) => axios.get('/vertical', user, { headers })
let save = () => axios.post('/user', user, { headers })

export {
    login,
    save
};
