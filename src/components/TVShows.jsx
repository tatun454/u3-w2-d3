import React, { useState } from "react";
import SearchBar from "./SearchBar";

const TVShows = () => {
  const [results, setResults] = useState([]);

  return (
    <div style={{ padding: "1rem", color: "white" }}>
      <h1>TV Shows</h1>
      <SearchBar onResults={setResults} />
      {results.length === 0 ? (
        <p>No TV shows found. Try searching above.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {results.map((show) => (
            <div
              key={show.imdbID}
              style={{
                width: "150px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() =>
                (window.location.href = `/movie-details/${show.imdbID}`)
              }
            >
              <img
                src={
                  show.Poster !== "N/A"
                    ? show.Poster
                    : "https://via.placeholder.com/150x220?text=No+Image"
                }
                alt={show.Title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>{show.Title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TVShows;
