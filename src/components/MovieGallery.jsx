import React, { useEffect, useState } from "react";

const API_KEY = "8ab620d6";

const MovieGallery = ({ sagaName, imdbIDs, onLoad, onError }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const moviePromises = imdbIDs.map(async (id) => {
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
          );
          const data = await response.json();
          if (data.Response === "True") {
            return data;
          } else {
            throw new Error(data.Error || "Error fetching movie");
          }
        });

        const moviesData = await Promise.all(moviePromises);
        setMovies(moviesData);
        if (onLoad) onLoad();
      } catch (err) {
        setError(err.message || "Network error");
        if (onError) onError(err.message || "Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [imdbIDs, onLoad, onError]);

  if (loading) return <p>Loading {sagaName} movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>{sagaName} Saga</h2>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          padding: "0 2rem 0.5rem 2rem",
          scrollbarWidth: "thin",
          scrollbarColor: "#888 transparent",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{ minWidth: "180px", flex: "0 0 auto" }}
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/150x220?text=No+Image"
              }
              alt={movie.Title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>
              {movie.Title} ({movie.Year})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
