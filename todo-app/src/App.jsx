import { useState } from "react";

function App(){
  const [todos, setTodos]=useState(["學 React", "寫 To-do List"]);
  const [input, setInput]=useState("");
  const addTodo=()=>{
    if (input.trim()==="") return;
    setTodos([...todos,input]);
    setInput("");
  }
  const removeTodo=(index)=>{
    setTodos(todos.filter((_,i)=>i!==index));
  }
  return(
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="輸入待辦事項"
        />
        <button onClick={addTodo}>新增</button>
      <ul>
      {todos.map((todo,index)=>(
        <li key={index}>
          {todo}<button onClick={()=>removeTodo(index)}>刪除</button>
          </li>
      ))}
      </ul>
    </div>
  );
}

export default App;