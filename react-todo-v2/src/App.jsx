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

  const handleToggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "active") return !task.done;
    return true;
  });

  // ✅ 之後 tasks 更新才寫入 localStorage
  useEffect(() => {
    // 避免第一次 render 就寫入空資料
    localStorage.setItem("myTask", JSON.stringify(tasks));
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
      <div style={{ margin: "1rem 0" }}>
        <button onClick={() => setFilter("all")}>全部</button>
        <button onClick={() => setFilter("active")}>未完成</button>
        <button onClick={() => setFilter("done")}>已完成</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleToggleDone(task.id)}
            >
              {task.done ? "✅" : "⬜"}
              {task.text}
            </span>
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
