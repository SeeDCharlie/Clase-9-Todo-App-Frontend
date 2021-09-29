import React, { useState } from 'react';

const Todo = ({ todo, index, deleteTodo }) => {

  const [ edit, setedit] = useState(true);

  const [keyText, setKeyText] = useState(todo);

  const [textEdit, setText] = useState('edit');

  const [btnEditClass, setClass] = useState('btn-edit');

  function setEdit(){
    if(edit){
      setedit(false);
      setText("guardar");
      setClass('btn-guardar');
    }else{
      setedit(true);
      setText("edit");
      setClass('btn-edit');
    }
  }


  return (
    
    <>
      <div className='list'>
        <div>
          <input type="checkbox" name="" id="" />
          <input type="text" value={keyText} onChange={e => setKeyText(e.target.value)}  disabled={edit} />
        </div>
        <div>
          <button className={btnEditClass} onClick={() => setEdit()} >{textEdit}</button>
          <button className='btn-delete' onClick={() => deleteTodo(index)} >
            x
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Todo;
