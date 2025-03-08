import { useEffect, useState } from 'react'
import { useDebounce} from 'react-use'
import './App.css'
import './index.css'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  // Debounce the search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async() => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTION);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json()

      if (data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies')
        setMovieList([]);
        return;
      }

      setMovieList(data.results || [])

    } catch {
      console.error(`Error fetching movies: ${error}`)
      setErrorMessage(`Error fetching movies. Please try again later.`)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern">

        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="" />
            <h1> Find <span className='text-gradient'> Movie</span> You'll Enjoy Without Hassle</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className='all-movies'>
            <h2> All Movies </h2>

            {isLoading ? (
              // <p>
              <Spinner/>
            ): errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )
            
            }


          </section>
        </div>

      </div>

    </main>
  )
}

export default App
