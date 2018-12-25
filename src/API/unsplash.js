import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 707fea06c40f476d863aaff124d58608955dfe53846b3609cb2adc9cc45b2956'
    }
});