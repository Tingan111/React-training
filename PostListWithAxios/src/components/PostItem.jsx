
// 接收 onEdit 函式作為 props
const PostItem = ({ post, onDelete, onEdit }) => {

  // 處理編輯點擊的邏輯
  const handleEditClick = () => {
    // 呼叫父層傳入的 onEdit 函式，並傳遞當前貼文的 ID
    // Hook 會在內部根據這個 ID 找到完整的貼文物件，並存入 postToEdit 狀態
    onEdit(post.id); 
  };
  
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => onDelete(post.id)}>刪除</button>
      
      {/* 【關鍵修改】：新增編輯按鈕並綁定 handleEditClick */}
      <button onClick={handleEditClick}>編輯</button> 
      
    </li>
  );
};

export default PostItem;