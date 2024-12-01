import React from "react";
import { useParams } from 'react-router'

export default function MovieDetailsPage() {
  const { movieId } = useParams(); 
  console.log(movieId); 

  return <div>
    <h1>Movie Details for Movie ID: {movieId}</h1>
  </div>;
}
