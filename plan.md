## Routing

- Routing, y tho? (and what is it)

  - Express

    - app.get('/', (req, res) => res.send())
    - app.get('/jokes', (req, res) => res.send('joke'))
    - Send HTML files

  - React
    - SPA
    - We don't want to refresh
    - Cannot use `<a>` tags

- React Router
- Setup

  - [x] npm install react-router-dom
  - [x] wrap our app in a Router component (index.js)
  - [x] add \_redirects file tp public folder
  - [x] Add switch to your App component

- Static Routes
  - There is one route with one destination
  - '/about' -> About page
  - [x] Make a Route
  - [x] Make a component
  - [x] Make Link
- Dynamic Routes
  - There is one route, but there are many destination
  - '/movies/guardiansofthegalaxy'
  - '/movies/spiritedaway'
  - '/movies/:movieTitle'

## What we will build

- [x] App with different pages
- [x] Page with a list of movies

  - [x] Route, Component, Link
  - [x] fetch data from OMDB
    - state -> useState
    - side Effect -> useEffect (do not forget dependency array)
    - api url -> which / api key
    - axios
    - async function
  - Display data ->
    - map over the array
    - Optional: make a guard statement to prefent cannot read map of undifined / null

- Page with details for a specific movie
- [x] Component
- [x] Dynamic Route `<Route path="/movies/:movieId" component={MovieDetails} />`
- [x] Dynamic Link `<Link to={`/movies/\${movie.imdbID}`}>`
- [] fetch data from OMDB
  - state -> useState
  - side Effect -> useEffect (do not forget dependency array)
  - api url -> which / api key
  - axios
  - async function
- [] Display data ->
  - Interpolate the data (1 movie)
  - Optional: make a guard statement to prefent cannot read map of undifined / null
