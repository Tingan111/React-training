import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const add = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      
      setInput("");
    }
  };

const remove=(removeIndex)=>{
setTodos(todos.filter((todo,index)=>index!==removeIndex))
;

}
const update=(editIndex)=>setTodos(todos.filter((todo,index)=>index!==editIndex))

  return (
    <div>
      <h1>待辦事項</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <button onClick={add}>新增</button>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={()=>remove(index)}>刪除</button>
        </div>
      ))}
    </div>
  );
}

export default App;
