import { useState, useEffect } from "react";
import axios from "axios";
function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(response.data);
      } catch (error) {
        console.log("使用Axios獲取資料失敗", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default PostList;
