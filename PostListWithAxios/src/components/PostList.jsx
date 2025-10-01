import { useState, useEffect } from "react";
import axios from "axios";
function PostList() {
  const [posts, setPosts] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);

        setPosts(response.data);
      } catch (error) {
        console.log("使用Axios獲取資料失敗", error);
      }
    };
    fetchData();
  }, []);
  const handleDeleteButton = async(id) => {
try{
  await axios.delete(`${API_URL}/${id}`)
  setPosts(posts.filter((post)=>post.id!==id))
}catch(error){
  console.error("執行DELETE失敗",error)
}
  };
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDeleteButton(post.id)}>刪除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostList;
