import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMovies() {
  const [movies, setMovies] = useState({ status: "idle", data: null });

  useEffect(() => {
    async function fetchMovies() {
      setMovies({ status: "loading", data: null });
      //   console.log("hello students, I am checking this bit");
      const response = await axios.get(
        "http://www.omdbapi.com/?s=Good&y=2018&apikey=a7462395"
      );

      console.log(response.data.Search);

      setMovies({ status: "success", data: response.data.Search });
    }

    fetchMovies();
  }, []);

  console.log("STATE:", movies);
  if (movies.data === null) {
    return <div>{movies.status}</div>;
  }

  return (
    <div>
      Discover
      <div>{movies.status}</div>
      <div>
        {movies.data.map((movie) => {
          console.log(movie);
          return (
            <div>
              <Link to={`/movies/${movie.imdbID}`}>
                <h3>{movie.Title}</h3>
              </Link>
              <img src={movie.Poster} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
