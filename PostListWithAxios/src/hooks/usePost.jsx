import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postToEdit, setPostToEdit] = useState(null); 
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
  
  // 函式一：設定要編輯的貼文，通常在 UI 點擊「編輯」時呼叫
  const setPostToEditById = (id) => {
    const post = posts.find(p => p.id === id);
    setPostToEdit(post || null); // 找到貼文就設定，找不到就設 null
  };
  
  // 函式二：實際執行更新操作 (POST 或 PUT)
  // 接受更新後的完整貼文物件 (包含 ID、title、body等)
  const updatePost = async (updatedPost) => {
    const originalPosts = posts;
    
    // 立即更新本地狀態，提供更好的使用者體驗 (Optimistic Update)
    setPosts(posts.map(p => 
      p.id === updatedPost.id ? updatedPost : p
    ));
    
    try {
      // 執行 PUT 請求來更新貼文
      const response = await axios.put(`${API_URL}/${updatedPost.id}`, updatedPost);
      
      // jsonplaceholder 的 PUT 回應會回傳完整的物件，我們再次確認並更新 (雖然 Optimistic Update 通常夠用)
      // 如果伺服器回應了新的資料，我們用它來更新本地狀態
      setPosts(posts.map(p => 
         p.id === updatedPost.id ? response.data : p
      ));
      
      // 清空目前編輯的貼文狀態
      setPostToEdit(null);
      
      // 由於 jsonplaceholder 實際上不會真的修改資料，這裡的成功只代表請求發出成功
      alert(`貼文 ID: ${updatedPost.id} 更新成功 (在 jsonplaceholder 上不會真的儲存)`);

    } catch (error) {
      // 如果更新失敗，復原本地狀態
      setPosts(originalPosts);
      alert("更新失敗！伺服器錯誤，已復原畫面。");
      console.error("執行PUT失敗", error);
    }
  };

  return {     posts, 
    isLoading, 
    deletePost, 
    setPostToEditById, // 設定目前編輯的貼文
    postToEdit,       // 供組件讀取目前編輯的貼文
    updatePost       };
};
export default usePosts;
