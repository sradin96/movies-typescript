import { useEffect, useState } from "react"
import Filters from "../containers/Filters/Filters";

const API_KEY = 'b13de5bb';

export interface FilterTypes {
    movies: string[]
}

function Home() {
    const [movies, setMovies] = useState<[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=galaxy`
            const response = await fetch(URL)
            const data = await response.json()
            setMovies(data.Search)
        }
        fetchMovies()
    }, [])
  return (
    <>
    <Filters movies={movies} />
    {
        movies && movies.map((movie: any, i) => {
            return <div key={i}>{movie.Title}</div>
        })
    }
    </>
  )
}

export default Home