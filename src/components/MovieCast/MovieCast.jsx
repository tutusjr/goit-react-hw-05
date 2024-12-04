import React from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import styles from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const { data: casts, loading, error } = useFetch(url);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <div>
        {casts?.cast &&
          casts.cast.slice(0, 7).map((c) => (
            <li className={styles.listContainer} key={c.id}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`}
                alt={c.original_name}
              />
              <div>
                <p>{c.name}</p>
                <p>Character: {c.character}</p>
              </div>
            </li>
          ))}
      </div>
    </>
  );
}
