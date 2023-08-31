import React, { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { revert } from '../../../store/allToDoSlice';
import "./CompletedList.css"
import { remove } from '../../../store/completedSlice';

function CompletedList() {
    const toDoList = useSelector(state=> state.completed);
    const dispatch = useDispatch()


    const revertItem=(item)=>{
      dispatch(remove(item.id))
      dispatch(revert(item))
      
    }
  return (
    <>
    <div className="lists completed">
      {toDoList.length > 0 ? <div className="head">
            <h3>Completed List</h3>
          </div> :"" }
    
        <div className="wrapper">
            <ul>
            {toDoList?.map((item) => (
              <>
               <li>
                    <div className="left-box">
                    <h5>{item.item}</h5>
                    </div>
                    <div className="right-box">
                      <img src={require("../../assets/images/undo.png")} alt="Icon" onClick={()=> revertItem(item)}/>
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

export default CompletedList;