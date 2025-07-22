import { useState } from "react";

function App() {
  const [todo, seTodo] = useState([
    { id: 1, text: "練習React", done: false },
    { id: 2, text: "吃午餐", done: false },
  ]);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>我的待辦事項</h1>
      <input type="text" placeholder="輸入任務" />
      <button>新增</button>

      <ul>
        {todo.map((task) => (
          <li key={task.id}>
            {task.done ? "✅" : "⬜"} {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
