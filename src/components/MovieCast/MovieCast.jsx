import React from 'react'
import { useParams } from 'react-router'

export default function MovieCast({cast}) {
  const movieId = useParams();

  console.log(cast)
  return (
    <div>MovieCast</div>
  )
}
