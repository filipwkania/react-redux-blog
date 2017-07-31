import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=somerandomvalue123';

export const actionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST'
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}posts${API_KEY}`);
  return {
    type: actionTypes.FETCH_POSTS,
    payload: request
  }
}

export function fetchPostById(id) {
  const request = axios.get(`${ROOT_URL}posts/${id+API_KEY}`);
  return {
    type: actionTypes.FETCH_POST,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}posts${API_KEY}`, values)
    .then( () => callback());

  return {
    type: actionTypes.CREATE_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}posts/${id+API_KEY}`)
    .then( () => callback());

  return {
    type: actionTypes.DELETE_POST,
    payload: id
  }
}
