import axios from './axios';

let get = (headers) => axios.get('/vertical', user, { headers })
let save = (vertical, headers) => axios.post('/vertical', user, { headers })

export {
    login,
    save
};
