import React, { useEffect, useState, useRef } from "react";

const API_KEY = "8ab620d6";

const MovieGallery = ({ sagaName, imdbIDs, onLoad, onError }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (loading) return <p>Loading {sagaName} movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ marginBottom: "2rem", position: "relative" }}>
      <h2>{sagaName} Saga</h2>
      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(20,20,20,0.7)",
          border: "none",
          color: "white",
          fontSize: "2rem",
          cursor: "pointer",
          padding: "0 0.5rem",
          borderRadius: "0 4px 4px 0",
          userSelect: "none",
        }}
        aria-label="Scroll left"
      >
        &#8249;
      </button>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "hidden",
          padding: "0 2rem 0.5rem 2rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{ minWidth: "180px", flex: "0 0 auto", cursor: "pointer" }}
            onClick={() =>
              (window.location.href = `/movie-details/${movie.imdbID}`)
            }
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
      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(20,20,20,0.7)",
          border: "none",
          color: "white",
          fontSize: "2rem",
          cursor: "pointer",
          padding: "0 0.5rem",
          borderRadius: "4px 0 0 4px",
          userSelect: "none",
        }}
        aria-label="Scroll right"
      >
        &#8250;
      </button>
    </div>
  );
};

export default MovieGallery;
