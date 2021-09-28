import React, { useState } from 'react';

const Todo = ({ todo, index, deleteTodo }) => {

  const [ edit, setedit] = useState(false);

  function setEdit(){
    console.log("hla mundo");
    if(edit){
      setedit(false);
    }else{
      setedit(true);
    }
    console.log(edit);
  }
  return (
    <>
      <div className='list'>
        <div>
          <input type="checkbox" name="" id="" />
          <input type="text" name='todo' value={todo} id={index} disabled={edit} />
        </div>
        <div>
          <button className="btn-edit" onClick={() => setEdit()} >edit</button>
          <button className='btn-delete' onClick={() => deleteTodo(index)} >
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
