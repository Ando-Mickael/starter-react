import { useQuery } from "react-query";

export default function IndexPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
        response.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
