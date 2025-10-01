import React from "react";
import usePosts from "../hooks/usePost";
import PostItem from "./PostItem";
function PostList() {
  const { posts, isLoading, deletePost } = usePosts();

  if (isLoading) {
    return <h2>載入中...</h2>;
  }

  return (
    <div>
      <h1>文章列表(C+D邏輯分離)</h1>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onDelete={deletePost} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
