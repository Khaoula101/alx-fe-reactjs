import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();
  return <div>Now showing blog post {postId}</div>;
}

export default BlogPost;
