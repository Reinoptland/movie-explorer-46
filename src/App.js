import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import DiscoverMovies from "./components/DiscoverMovies";
import MovieDetails from "./components/MovieDetails";

function About() {
  return <h1>About page</h1>;
}

function Home() {
  return <h1>Home page</h1>;
}

function NotFound() {
  return <h1>Are you drunk??</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/discover">Discover</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/discover" component={DiscoverMovies} />
          <Route path="/movies/:imdbID" component={MovieDetails} />
          <Route path="/" component={NotFound} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
