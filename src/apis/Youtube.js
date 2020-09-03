import axios from 'axios';

const KEY = 'AIzaSyDsORy3S7h4_W_ZaygrisCWSPMV7Nvodd0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});