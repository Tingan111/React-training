// PostEditForm.js

import { useState, useEffect } from "react";

// 接收要編輯的 post 物件、onSave (updatePost) 和 onCancel 函式
const PostEditForm = ({ post, onSave, onCancel }) => {
  // 用區域狀態來追蹤表單輸入
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  // 【重要】：當 postToEdit 改變時 (例如切換編輯另一篇)，更新表單的區域狀態
  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 建立新的貼文物件，包含所有原始欄位（如 userId, id），以及更新後的 title 和 body
    const updatedPost = {
      ...post, // 保留原始 ID、UserID 等欄位
      title: title,
      body: body,
    };

    // 呼叫從 Hook 傳入的 onSave (即 updatePost) 函式
    onSave(updatedPost);
  };

  return (
    <div
      style={{ border: "2px solid #ccc", padding: "15px", margin: "20px 0" }}
    >
      <h2>編輯貼文 ID: {post.id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>標題:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>內容:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button type="submit">儲存修改</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
          取消
        </button>
      </form>
    </div>
  );
};

export default PostEditForm;
