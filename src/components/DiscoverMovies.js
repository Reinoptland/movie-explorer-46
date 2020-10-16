import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DiscoverMovies() {
  const [movies, setMovies] = useState({ status: "idle", data: null });
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function fetchMovies() {
      setMovies({ status: "loading", data: null });
      //   console.log("hello students, I am checking this bit");
      const response = await axios.get(
        "http://www.omdbapi.com/?s=Good&y=2018&apikey=a7462395"
      );

      // console.log(response.data.Search);

      setMovies({ status: "success", data: response.data.Search });
    }

    fetchMovies();
  }, []);

  // console.log("STATE:", movies);
  if (movies.data === null) {
    return <div>{movies.status}</div>;
  }

  function search() {
    console.log(searchText); // add to the url
    history.push(`/discover/${searchText}`);
  }

  return (
    <div>
      Discover
      <div>{movies.status}</div>
      <input
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button onClick={search}>Search</button>
      <div>
        {movies.data.map((movie) => {
          // console.log(movie);
          return (
            <div key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <h3>{movie.Title}</h3>
              </Link>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
