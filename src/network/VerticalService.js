import axios from './axios';

let getVertical = (headers) => axios.get('/vertical', { headers })
let saveVertical = (vertical, headers) => axios.post('/vertical', vertical, { headers })

export {
    getVertical,
    saveVertical
};
