import React from "react";
import  { useState } from 'react';
import { connect } from 'react-redux';
import {addtodo,dlttodo,status,filtertodo} from '../Redux/Action/Action'



const Todo=(props)=>{
  const [newItem, setNewItem] = useState();
 // const [items, setItems] = useState();
 // const [filteredtodo, setFilteredtodo] =useState([])
  
  function inputTextHandler (e){
    setNewItem({
      title: e.target.value,
      completed: false,
      id: Math.floor(Math.random() * 1000),
      modified : false
    })
  }
  
 // const item = {
 // id: Math.floor(Math.random() * 1000),
  //  value: newItem,
  //  completed: false
// };
  //function addItem() {
    
  //  setItems(oldList => [...oldList, item]);
  //  setFilteredtodo(oldList => [...oldList, item]);
  // setNewItem("");

  //}
 // function deleteItem(id) {
   // const newArray = items.filter(item => item.id !== id);
  //  setItems(newArray);
   // setFilteredtodo(newArray);

 // }
  //function completetodo(id){
    //const newArray = items.map((item)=>{
    //  if (item.id ===id) {
    //    item.completed = !item.completed
    //  }
    //  return item
   // }
   // );
   // setItems(newArray);
   // setFilteredtodo(newArray);
 // }
   
 //const filterTask =(id)=>{
   // if(id === "")setItems(filteredtodo);
   // else{
   // setItems([...items.filter((item)=>
   //  (item.value.includes(id))
      
   // )]
    //  )}; 
  
//}
 
 
  
  

  return (
    <div className="App">
      <div className="todo-box">

      <h2>WHAT IS THE PLAN FOR TODAY ?</h2>
      <div className='input-section'>
        <input
          
          placeholder='enter a todo'
          onChange={inputTextHandler}
          className="todo-input"

        />

        <button className='add-btn' onClick={()=>props.Ajouter(newItem)}>add todo</button>
        <div className='search'>
              <input 
               type="text"
               placeholder="search..." 
               className='search-input' 
               onChange={e=>props.filterTask(e.target.value)}
              />
        </div>
        
      </div>


      <ul>
        {props.list.map(item => {
          return (
            <>
            <div 
            className={item.completed ? "todo completed" : "todo-list"}
              
             key={item.id}>{item.title}
             <div className='icons'>
              <button className='dlt-btn' onClick={() => props.Supprimer(item.id)}><i className="fa-solid fa-trash"></i></button>
              <button className="check-btn" onClick={()=> props.CompletedTodo(item.id)}><i className="fa-regular fa-square-check"></i></button>
             </div>
            </div>
           
            </>
          )
        }

        )}
      </ul>
      </div>
    </div>
  );
}
const mapStatetoProps =(state)=>{
  return {
    list : state.items

  }
}
const mapDispatchtoProps = (dispatch) =>({
  Ajouter : (payload)=>{
    dispatch(addtodo(payload))
  },
  Supprimer: (payload)=>{
    dispatch(dlttodo(payload))
  },
  CompletedTodo: (payload)=>{
    dispatch(status(payload))
  },
  filterTask: (payload)=>{
    dispatch(filtertodo(payload))
  }
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Todo);