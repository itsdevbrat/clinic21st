import axios from './axios';

let get = (headers) => axios.get('/vertical', { headers })
let savev = (vertical, headers) => axios.post('/vertical', vertical, { headers })

export {
    get,
    save
};
