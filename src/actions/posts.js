import axios from 'axios';

export const fetchPosts = () => {
  return {
    type: 'FETCH_POSTS',
    payload: axios(`https://jsonplaceholder.typicode.com/posts`)
  };
};

export const addPost = post => {
  return {
    type: 'ADD_POST',
    payload: axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
  };
};
