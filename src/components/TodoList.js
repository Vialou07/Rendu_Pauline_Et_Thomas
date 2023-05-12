import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todos';
import { setFilter } from '../actions/filter';
import Todo from './Todo';

function TodoList({ todos, filter, fetchTodos, setFilter }) {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'not-completed' && !todo.completed) return true;
    return false;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>Toutes</button>
        <button onClick={() => setFilter('completed')}>Terminées</button>
        <button onClick={() => setFilter('not-completed')}>Non terminées</button>
      </div>
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
});

export default connect(mapStateToProps, { fetchTodos, setFilter })(TodoList);
