import React, { useState,useEffect } from 'react';
import './App.css';
import { db } from './firebaseConfig';
import TodoList from './TodoList';


function App() {
  const date = new Date().toDateString();
  const [input, setinput] = useState("")
  const [todos, settodos] = useState([])
  
  useEffect(() => {
    getTodos();
  }, [])
  
  const addTodo = () => {
    db.collection("mytodo").add({
          Task: input,
          Status: false,
          Time: new Date().toDateString(),
    })
    setinput("")
  }

  const getTodos = () => {
    db.collection("mytodo").onSnapshot((querySnapShot) => {
      settodos(
        querySnapShot.docs.map(todo => ({
          id: todo.id,
          Task: todo.data().Task,
          Status: todo.data().Status,
          Time: todo.data().Time
        }))
      )
    })
  }

  return (
    <div className="App-header text-center">
      <header>
        <h4 className="display-5 text-warning">MY TODO APP</h4>
        <p className="text-danger">{date}</p>
        <span className="text-info mx-5">ENTER YOUR TODO</span>
        <input 
        type="text" 
        onChange={(e) => {
          setinput(e.target.value)
        }}
        value={input}
        onKeyPress={(e) => {
          if(e.target.value !== ""){
              if(e.key === "Enter"){
                addTodo();
              }
          }

        }}
         />
         <button 
         className="btn btn-info btn-sm mx-3"
         onClick={input !== "" ? addTodo : "" }
         >ADD TODO</button>


         {/* TODO CARDS */}
         <div className="row my-5 justify-content-center ">
           {
             todos.length > 0 ?
             todos.map((todo) => (
              <TodoList key={todo.id}
               Task={todo.Task}
               Status={todo.Status}
               id={todo.id}
               Time={todo.Time}
              />
            ))
            :
            <h1 className="text-warning my-5"> NOW YOU CAN CHILL !!</h1>
           }
         </div>
      </header>
      
    </div>
  );
}

export default App;
