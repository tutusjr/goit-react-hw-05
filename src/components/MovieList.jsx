import React from "react";
import { Link } from "react-router";

export default function MovieList({ movies, fromPath }) {
  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: fromPath }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
