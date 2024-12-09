import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function Router() {
  return (
    <Suspense fallback={<div>loading the page...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<MovieDetailsPage />} />
          <Route
            path="/movies/:movieId/reviews"
            element={<MovieDetailsPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
