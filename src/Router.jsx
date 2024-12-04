import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import Movies from "./pages/MoviesPage";
import Layout from "./components/Layout";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/reviews" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Route>
    </Routes>
  );
}
