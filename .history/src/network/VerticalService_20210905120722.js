import axios from './axios';

let get = (headers) => axios.get('/vertical', user, { headers })
let save = (vertical, headers) => axios.post('/vertical', vertical, { headers })

export {
    login,
    save
};
