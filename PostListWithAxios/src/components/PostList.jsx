import React from "react";
import usePosts from "../hooks/usePost";
import PostItem from "./PostItem";
import PostEditForm from "./PostEditForm";
function PostList() {
  const {
    posts,
    isLoading,
    deletePost,
    setPostToEditById,
    postToEdit,
    updatePost,
  } = usePosts();

  if (isLoading) {
    return <h2>載入中...</h2>;
  }

  return (
    <div>
      <h1>文章列表(C+D邏輯分離)</h1>
      <ul>
      {postToEdit && (
        <PostEditForm 
          // 傳遞 postToEdit 作為預設資料
          post={postToEdit} 
          // 傳遞 updatePost 函式來處理儲存
          onSave={updatePost}
          // 傳遞一個取消函式，讓使用者關閉表單
          onCancel={() => setPostToEditById(null)} 
        />
      )}
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onDelete={deletePost}
            onEdit={setPostToEditById}
          />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
