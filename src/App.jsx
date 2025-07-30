import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieGallery";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  const sagas = [
    {
      name: "Harry Potter",
      imdbIDs: [
        "tt0241527",
        "tt0295297",
        "tt0304141",
        "tt0330373",
        "tt0373889",
        "tt0417741",
        "tt0926084",
        "tt1201607",
      ],
    },
    {
      name: "Lord of the Rings",
      imdbIDs: [
        "tt0120737",
        "tt0167260",
        "tt0167261",
        "tt0903624",
        "tt1170358",
        "tt2310332",
      ],
    },
    {
      name: "Star Wars",
      imdbIDs: [
        "tt0120915",
        "tt0121765",
        "tt0121766",
        "tt0076759",
        "tt0080684",
        "tt0086190",

        "tt2527336",
        "tt2527338",
      ],
    },
  ];

  const [error, setError] = React.useState(null);

  return (
    <Router>
      <Navbar />
      <main
        style={{
          padding: "1rem",
          backgroundColor: "#141414",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                {error && <p>Error: {error}</p>}
                {sagas.map((saga) => (
                  <MovieGallery
                    key={saga.name}
                    sagaName={saga.name}
                    imdbIDs={saga.imdbIDs}
                    onError={setError}
                  />
                ))}
              </>
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
