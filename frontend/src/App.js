import './App.css';
import Input from "./components/Input.js";
import List from "./components/List.js";

import {useEffect, useState} from "react";

function App() {
  const [todo, setTodo] = useState([]);

  
  function handleClick(text) {
    const newItem = {
      id: todo.length + 1,
      item: text
    } 
/* 
    async function postTodo(){
      let res= await fetch('http://localhost:3001/todo'{
        method: 'POST',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(newItem)
      })
      let addeditem= await res.json
      }

 */

    console.log(newItem)
    setTodo([...todo, newItem]);
  }

async function fetchTodo(){
let res= await fetch('http://localhost:3001/todo')
let data = await res.json()
console.log(data.payload)
setTodo(data.payload)
}

useEffect(()=>{

  fetchTodo()

},[])



  return (
    <div className="App">
      <h1>The Best Ever Todo List</h1>
      <Input handleClick={handleClick} />
      <List todo={todo}/>
    </div>
  );
}

export default App;
