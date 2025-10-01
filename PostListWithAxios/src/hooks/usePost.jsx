import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);

        setPosts(response.data.slice(0, 10));
      } catch (error) {
        console.log("使用Axios獲取資料失敗", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const deletePost = async (id) => {
    const originalPosts = posts;
    setPosts(posts.filter((post) => post.id !== id));
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      setPosts(originalPosts);
      alert("刪除失敗！伺服器錯誤，已復原畫面。");
      console.error("執行DELETE失敗", error);
    }
  };
  return { posts, isLoading, deletePost };
};
export default usePosts;
