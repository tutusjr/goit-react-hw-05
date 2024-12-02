import React from 'react'
import styles from './MovieDetails.module.css'

export default function MovieDetails({detail}) {
  return (
    <div>
        <div className={styles.movieDetailsContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
          alt={detail.original_title}
        />
      </div>
      <div className={styles.descContainer}>
        <h1>
          {detail.original_title} ({new Date(detail.release_date).getFullYear()})
        </h1>
        <p>User Score: {Math.round((detail.vote_average / 10) * 100)}%</p>
        <h2>Overview</h2>
        <p>{detail.overview}</p>
        <p className={styles.genreTitle}>Genres</p>
        <p>{detail.genres.map((genre) => genre.name).join("  ")}</p>
      </div>
    </div>
    </div>
  )
}
