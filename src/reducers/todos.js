import { FETCH_TODOS, TOGGLE_TODO } from '../actions/types';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  };
};

export default todosReducer;
