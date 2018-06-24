import axios from 'axios';

export const fetchAuthors = () => {
    return {
        type: 'FETCH_AUTHORS',
        payload: axios(`https://jsonplaceholder.typicode.com/users`)
    }
}