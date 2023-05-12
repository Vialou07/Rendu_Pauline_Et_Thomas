import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import About from './components/About';
import TodoDetails from './components/TodoDetails';  // Nouveau composant

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/todo/:id" element={<TodoDetails />} />  // Nouvelle route
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
