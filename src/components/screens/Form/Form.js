import React, { useState } from 'react'
import { addItem } from '../../../store/allToDoSlice'

import "./Form.css"
import { useDispatch } from 'react-redux'

function Form() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] =useState("");
  console.log(inputValue);
  const handleSubmit =(e)=>{
    if (inputValue !== ""){
      e.preventDefault();
      dispatch(addItem(inputValue));
      setInputValue("");
    }
    
    
  }
  return (
    <>
     <div className="wrapper">
     <form action="#" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="Add ToDo" required  onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
        <button >Add</button>
     </form>
     </div>
    </>
  )
}

export default Form