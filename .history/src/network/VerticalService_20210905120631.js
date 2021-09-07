import axios from './axios';

let get = () => axios.get('/vertical', user, { headers })
let save = () => axios.post('/user', user, { headers })

export {
    login,
    save
};
