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
  - Add a route parameter
  - Get the value of the parameter using useParams

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
- [x] fetch data from OMDB
  - Get the correct IMDBID from the "path" -> `useParams`
  - state -> useState
  - side Effect -> useEffect (do not forget dependency array)
  - api url -> which / api key
  - axios
  - async function
- [x] Display data ->
  - Interpolate the data (1 movie)
  - Optional: make a guard statement to prefent cannot read map of undifined / null

## Store query in URL (because we want to share our results)

1. [x] When search button is clicked

- Push the searchText into the url -> useHistory & history.push

2. Get the searchText out of the url

- So we have access to it in our component -> useParams

3. Everytime the searchText in the url changes

- Fetch the data from the api -> useEffect with dependency: params.searchText
