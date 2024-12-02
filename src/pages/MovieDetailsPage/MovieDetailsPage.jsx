import { useParams, useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useFetch(detailsUrl);

  const [castData, setCastData] = useState(null);
  const [reviewsData, setReviewsData] = useState(null);

  const [activeSection, setActiveSection] = useState(null);

  const {
    data: fetchedCastData,
    loading: castLoading,
    error: castError,
  } = useFetch(activeSection === "cast" && !castData ? castUrl : null);
  const {
    data: fetchedReviewsData,
    loading: reviewsLoading,
    error: reviewsError,
  } = useFetch(activeSection === "reviews" && !reviewsData ? reviewsUrl : null);

  if (fetchedCastData && !castData) {
    setCastData(fetchedCastData);
  }
  if (fetchedReviewsData && !reviewsData) {
    setReviewsData(fetchedReviewsData);
  }

  const handleSectionChange = (section) => {
    setActiveSection(section);
    navigate(`/movies/${movieId}/${section}`);
  };

  if (detailsLoading) {
    return <div>Loading details...</div>;
  }

  if (detailsError) {
    return <div>Error loading details: {detailsError.message}</div>;
  }

  return (
    <div>
      <MovieDetails detail={details} />
      <div>
        <button onClick={() => handleSectionChange("cast")}>Cast</button>
        <button onClick={() => handleSectionChange("reviews")}>Reviews</button>
      </div>
      {(castError || reviewsError) && <div>Error fetching data</div>}
      {activeSection === "cast" && castData && <MovieCast cast={castData} />}
      {activeSection === "reviews" && reviewsData && (
        <MovieReviews review={reviewsData} />
      )}
    </div>
  );
}
