import { useParams, useNavigate, Link, useLocation } from "react-router";
import { useRef } from "react";
import useFetch from "../../hooks/useFetch";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocationRef = useRef(location.state?.from);
  const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const { data, loading, error } = useFetch(detailsUrl);

  if (loading) {
    return <div>Loading details...</div>;
  }

  if (error) {
    return <div>Error loading details: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(previousLocationRef.current)}>
        Go Back
      </button>
      <MovieDetails detail={data} />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      {location.pathname === `/movies/${movieId}/cast` && <MovieCast />}
      {location.pathname === `/movies/${movieId}/reviews` && <MovieReviews />}
    </div>
  );
}
