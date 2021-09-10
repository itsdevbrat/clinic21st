import axios from './axios';

let login = user => axios.post('/admin/login', user)
let save = (user, headers) => axios.post('/user', user, { headers })
let update = (user, headers) => axios.put('/user', user, { headers })
let get = (page, headers) => axios.get(`/user/page?page=${page}`, { headers })
let search = (query, headers) => axios.get(`/user/search?query=${query}`, { headers })

export {
    login,
    save,
    get,
    update,
    search
};
