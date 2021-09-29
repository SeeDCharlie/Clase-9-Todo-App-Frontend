import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([
    

  ]);

  // Esto maneja el cambio del input
  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value });

  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {
    // Verifico que el input no este vacio
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio.');
      return;
    } 
    setTodos([...todos, todo]);
    console.log('indice con el que queda : ' + todos.length);
  };

  // Elimina el todo
  const deleteTodo = (index) => {
    console.log('Deleting : ' + index);
    console.log('array : ' + JSON.stringify(todos) );
    
    todos.splice(index, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar todo</label>
        <br />
        <input type='text' name='todo' onChange={handleChange} />
        <button className='btn-guardar'onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Form;
