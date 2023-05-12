import axios from 'axios';
import { FETCH_TODOS, TOGGLE_TODO } from './types';

export const fetchTodos = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => dispatch({
      type: FETCH_TODOS,
      payload: res.data
    }))
    .catch(err => console.log(err));
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};
