import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OMDB_API_KEY = "8ab620d6";
const COMMENTS_API_URL = "https://striveschool-api.herokuapp.com/api/comments";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWNjNGZlMzZkMDAwMTU5NzU4MTEiLCJpYXQiOjE3NTMzNTc1MDksImV4cCI6MTc1NDU2NzEwOX0.1zMaw87HUxfDfHX5WurW5VEksQk7q8n3_9d0OLx0md4";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingMovie, setLoadingMovie] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);
  const [errorMovie, setErrorMovie] = useState(null);
  const [errorComments, setErrorComments] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoadingMovie(true);
      setErrorMovie(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movieId}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setErrorMovie(data.Error || "Error fetching movie details");
        }
      } catch (error) {
        setErrorMovie(error.message || "Network error");
      } finally {
        setLoadingMovie(false);
      }
    };

    const fetchComments = async () => {
      setLoadingComments(true);
      setErrorComments(null);
      try {
        const response = await fetch(`${COMMENTS_API_URL}/${movieId}`, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error fetching comments");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setErrorComments(error.message || "Network error");
      } finally {
        setLoadingComments(false);
      }
    };

    fetchMovieDetails();
    fetchComments();
  }, [movieId]);

  if (loadingMovie) return <p>Loading movie details...</p>;
  if (errorMovie) return <p>Error: {errorMovie}</p>;

  return (
    <div style={{ padding: "1rem", color: "white" }}>
      <h1>{movie.Title}</h1>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>

      <h2>Comments</h2>
      {loadingComments ? (
        <p>Loading comments...</p>
      ) : errorComments ? (
        <p>Error: {errorComments}</p>
      ) : comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id || comment.id}>
              <strong>{comment.author || comment.comment}</strong>:{" "}
              {comment.comment || comment.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieDetails;
