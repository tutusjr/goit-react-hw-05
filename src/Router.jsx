import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import Movies from "./pages/MoviesPage";
import Layout from "./components/Layout";
import useFetch from "./useFetch";
import { useMemo } from "react";
import MovieDetailsPage from "./pages/MovieDetailsPage";

export default function Router() {
  const url = "https://api.themoviedb.org/3/trending/movie/day";
  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    }),
    []
  );
  

  const { data, loading, error } = useFetch(url, options);

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home movies={data.results} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
      </Route>
    </Routes>
  );
}
