import { useState, useEffect } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };
  const handleSave = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editText } : task
    );
    setTasks(updatedTasks);
    setEditId(null);
    setEditText("");
  };
  useEffect(() => {
    const saved = localStorage.getItem("myTask");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTasks(parsed);
      } catch (err) {
        console.error("無法解析 localStorage 資料", err);
      }
    }
  }, []);

  // ✅ 之後 tasks 更新才寫入 localStorage
  useEffect(() => {
    // 避免第一次 render 就寫入空資料
    if (tasks.length > 0) {
      localStorage.setItem("myTask", JSON.stringify(tasks));
    }
  }, [tasks]);
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
        {tasks.map((task) => (
          <li key={task.id}>
            {editId === task.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(task.id)}>儲存</button>
              </>
            ) : (
              <>
                {task.done ? "✅" : "⬜"} {task.text}
                <button onClick={() => handleEdit(task)}>編輯</button>
              </>
            )}
            <button onClick={() => handleDelete(task.id)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
