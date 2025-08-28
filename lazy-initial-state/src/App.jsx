import { useState } from "react";

function App() {
  // ❓使用 lazy initial state，產生 1~100 的亂數
  const [number, setNumber] =useState(0)
  const regenerate = () => {
    console.log('ˇ點擊過了ㄌ');
  
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <h2>隨機數字已產生！</h2>
      <p>目前的數字：{number}</p>
      <button onClick={regenerate}>重新產生</button>
    </div>
  );
}
export default App