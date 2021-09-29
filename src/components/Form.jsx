import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState('');

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([]);

  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {
    // Verifico que el input no este vacio
    if (todo.length === 0 || todo.trim() === '') {
      alert('El campo no puede estar vacio.');
      return;
    }
    setTodos([...todos, todo]);
  };

  // Elimina el todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>

        <label>Agregar todo</label>
        <input type='text' name='todo' onChange={(e) => setTodo(e.target.value)} />
        <button className='btn-guardar' onClick={handleClick}>Agregar</button>

      </form>
      <br />
      <div className='tabla'>
        {todos.map((value, index) => (
          <Todo todo={value} index={index} key={index} deleteTodo={deleteTodo} />
        ))}
      </div>

    </>
  );
};

export default Form;
