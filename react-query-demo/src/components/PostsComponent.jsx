import { useQuery } from "react-query";

// Fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function PostsComponent() {
  // Use the useQuery hook to fetch posts
  const { data, isLoading, refetch, isError } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts!</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
