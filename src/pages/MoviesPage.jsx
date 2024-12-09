import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";
import MovieList from "../components/MovieList";

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [url, setUrl] = useState("");
  const { data, loading, error } = useFetch(url);

  // Arama sorgusunu işleyen fonksiyon
  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery !== "" && searchParams.get("query") !== trimmedQuery) {
      setSearchParams({ query: trimmedQuery });
      setUrl(`https://api.themoviedb.org/3/search/movie?query=${trimmedQuery}&page=1`);
    }
  };

  useEffect(() => {
    const searchQuery = searchParams.get("query");
    if (searchQuery) {
      setQuery(searchQuery)
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&page=1`
      );
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
        <div>
          {data?.results && data.results.length > 0 ? (
            <MovieList movies={data.results}  fromPath={`/movies?query=${query}`} />
          ) : (
            <p>No movies available</p>
          )}
        </div>
      )}
    </div>
  );
}
