import React from 'react'
import MovieList from '../components/MovieList'

export default function Home({movies}) {


  console.log(movies)
  if (!movies) return <p>Loading...</p>;
  
  return (
    <div>
       {Array.isArray(movies) && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  )
}
