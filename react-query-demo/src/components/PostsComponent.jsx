import { useQuery } from "react-query";

// Fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function PostsComponent() {
  // Use the useQuery hook to fetch posts
  const { data, isLoading, refetch, isError, error, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 10, // 10 minutes
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false, // Prevent refetch on window focus
      keepPreviousData: true, // Keep previous data when fetching new data
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Fetching new data...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
