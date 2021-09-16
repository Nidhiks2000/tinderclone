import axios from 'axios';

const instance = axios.create ({
    baseURL:'https://bbackend-tinder.herokuapp.com/',
});

export default instance;