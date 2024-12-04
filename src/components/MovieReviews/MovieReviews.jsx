import React from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

export default function MoviesReviews() {
  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const { data: reviews, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>error: {error}</div>;
  }

  return (
    <div>
      {reviews?.results?.length === 0 ? (
        <p>We don't any reviews for this movie.</p>
      ) : (
        reviews?.results?.map((result) => (
          <div key={result.id}>
            <p>Author: {result.author}</p>
            <p>{result.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
