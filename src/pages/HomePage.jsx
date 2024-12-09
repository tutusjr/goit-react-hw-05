import React from "react";
import MovieList from "../components/MovieList";
import useFetch from "../hooks/useFetch";
import { useRef } from "react";
export default function Home() {
  const urlRef = useRef("https://api.themoviedb.org/3/trending/movie/day");

  const { data, loading, error } = useFetch(urlRef.current);

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.results && data.results.length > 0 ? (
        <MovieList movies={data.results} />
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
}
