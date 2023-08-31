import React, { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { add} from '../../../store/completedSlice';
import { remove } from '../../../store/allToDoSlice';
import "./Lists.css"

function Lists() {
    const toDoList = useSelector(state=> state.allToDo);
    const dispatch = useDispatch();

    const removeItem=(id)=>{
        dispatch(remove(id))
    }
    const doneToDo=(item)=>{
        dispatch(remove(item.id))
        dispatch(add(item))
    }
  return (
    <>
    <div className="lists">
        <div className="wrapper">
            <ul>
            {toDoList?.map((item) => (
              <>
               <li>
                    <div className="left-box">
                    <input type="radio" onClick={()=> doneToDo(item)}/>
                    <h5>{item.item}</h5>
                    </div>
                    <div className="right-box">
                        <span onClick={()=>removeItem(item.id)}>X</span>
                    </div>
                </li>
              </>
            ))}
                
               
            </ul>
        </div>
    </div>
    </>
  )
}

export default Lists