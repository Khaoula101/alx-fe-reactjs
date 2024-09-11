import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <div>Now showing blog post {id}</div>;
}

export default BlogPost;
