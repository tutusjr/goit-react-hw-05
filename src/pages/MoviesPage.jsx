import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";
import MovieList from "../components/MovieList";

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [url, setUrl] = useState("");
  const { data, loading, error } = useFetch(url);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setSearchParams({ query });
      setUrl(`https://api.themoviedb.org/3/search/movie?query=${query}&page=1`);
    }
  };

  useEffect(() => {
    const searchQuery = searchParams.get("query");
    if (searchQuery) {
      setUrl(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&page=1`);
    }
  }, [searchParams]);


  return (
    <div>
      <input 
        type="search" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..." 
      />
      <button onClick={handleSearch}>Search</button>
      {loading && !!url && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.results.map((movie) => (
            <MovieList movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
