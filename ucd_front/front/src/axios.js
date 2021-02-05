import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['Authotization'] = 'Bearer' + localStorage.getItem('token')