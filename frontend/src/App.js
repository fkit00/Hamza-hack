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
    console.log(newItem)
    setTodo([...todo, newItem]);
  }


  return (
    <div className="App">
      <h1>The Best Ever Todo List</h1>
      <Input handleClick={handleClick} />
      <List todo={todo}/>
    </div>
  );
}

export default App;
