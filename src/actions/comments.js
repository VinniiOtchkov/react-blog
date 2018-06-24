import axios from 'axios';

export const fetchComments = () => {
    return{
        type: 'FETCH_COMMENTS',
        payload: axios(`https://jsonplaceholder.typicode.com/comments`);
    }  
}

export const addComment = (comment) => {
    return {
        type: 'ADD_COMMENT',
        payload: axios.post(`https://jsonplaceholder.typicode.com/comments`,comment)
    }
}