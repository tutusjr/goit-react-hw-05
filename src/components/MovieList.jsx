import React from "react";
import { Link } from "react-router";

export default function MovieList({ movie }) {
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        {movie.title}
      </Link>
    </div>
  );
}
