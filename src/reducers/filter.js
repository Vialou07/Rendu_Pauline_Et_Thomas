import { SET_FILTER } from '../actions/types';

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
    };
  };
  
  export default filterReducer;
