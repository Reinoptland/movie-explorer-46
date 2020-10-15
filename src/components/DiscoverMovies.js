import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DiscoverMovies() {
  const [movies, setMovies] = useState({ status: "idle", data: null });

  useEffect(() => {
    async function fetchMovies() {
      setMovies({ status: "loading", data: null });
      //   console.log("hello students, I am checking this bit");
      const response = await axios.get(
        "http://www.omdbapi.com/?s=Good&apikey=a7462395"
      );

      console.log(response.data.Search);

      setMovies({ status: "success", data: response.data.Search });
    }

    fetchMovies();
  }, []);

  console.log("STATE:", movies);
  return (
    <div>
      Discover
      <div>{movies.status}</div>
    </div>
  );
}
