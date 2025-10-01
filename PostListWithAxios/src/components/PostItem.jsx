const PostItem = ({ post, onDelete }) => (
    <li key={post.id}>
      {post.title}
      <button onClick={() => onDelete(post.id)}>刪除</button>
    </li>
  );
  export default PostItem