import React from 'react';
import './App.css';
import Form from './components/Form';

/* 
  ACTIVIDAD
    - Van a habilitar la funcion editar el todo
      (Crear un boton similar al de delete con una funcion que muestre un input donde pueda editarlo)
    - Permitir completar la tarea
      (Corregir primero el objeto, asignar el parametro complete al checkbox)
    - Van a organizar el CSS a un diseño mas agradable
 */

const App = () => {
  return (
    <div className='App'>
      <div className='App-content'>
        <h2>Aqui haremos nuestro TODO</h2>
        <hr/>
        <Form />
      </div>
    </div>
  );
};

export default App;
