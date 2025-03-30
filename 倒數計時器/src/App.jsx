import React, { useState, useEffect } from "react";
const setTime=+prompt("請問需要幾秒倒數")
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(setTime);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowModal(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // 清除計時器，防止記憶體洩漏
  }, [timeLeft]); // 空依賴數組，確保 `setInterval` 只在掛載時執行一次

  return (
    <div>
      <h1>Time left: {timeLeft}秒</h1>
      {showModal && <div>時間到!</div>}
    </div>
  );
}

export default CountdownTimer;
