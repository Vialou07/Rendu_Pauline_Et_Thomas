import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todos';

function TodoDetails({ todos, fetchTodos, id }) {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const todoFromState = todos.find(todo => todo.id === parseInt(id));
  const todoFromStorage = JSON.parse(localStorage.getItem('todo'));
  const todo = todoFromState || todoFromStorage;

  return todo ? (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.completed ? 'Terminé' : 'Non terminé'}</p>
    </div>
  ) : null;
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { fetchTodos })(TodoDetails);
