import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';
import { Link } from 'react-router-dom';

function Todo({ todo, toggleTodo }) {

  const handleClick = () => {
    toggleTodo(todo.id);
    localStorage.setItem('todo', JSON.stringify(todo)); 
  };

  return (
    <div 
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={handleClick} 
    >
      <Link to={`/todo/${todo.id}`}>
        <h3>{todo.title}</h3>
        <p>{todo.completed ? 'Terminé' : 'Non terminé'}</p>
      </Link>
    </div>
  );
}

export default connect(null, { toggleTodo })(Todo);
