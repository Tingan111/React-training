import { useState } from "react";

function App() {
  const [task, setTask] = useState([
    { id: 1, text: "練習React", done: false },
    { id: 2, text: "吃午餐", done: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAddTask=()=>{
  if (inputValue.trim() === "") return;

  const newTask = {
    id: Date.now(),
    text: inputValue,
    done: false,
  };
  setTask([...task,newTask]);
  setInputValue('');}
  return (
    <div style={{ padding: "2rem" }}>
      <h1>我的待辦事項</h1>
      <input
        type="text"
        placeholder="輸入任務"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>新增</button>

      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {task.done ? "✅" : "⬜"} {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
