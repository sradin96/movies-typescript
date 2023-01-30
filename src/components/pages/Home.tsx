import { useEffect, useState } from "react"
import { useSearchFilter } from "../../hooks/SearchFilter";
import Filters from "../containers/Filters/Filters";

const API_KEY = 'b13de5bb';

export interface FilterTypes {
    movies: string[],
    setSearchHandle: (e: any) => void
    handleYears: (e: any) => void
}

function Home() {
    const [movies, setMovies] = useState<[]>([])
    const { setSearchFilter } = useSearchFilter()
    const [search, setSearch] = useState<string>('')
    const [filtered, setFiltered] = useState<[]>()

    useEffect(() => {
        handleSearch()
        const fetchMovies = async () => {
            const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=galaxy`
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data.Search);
            setMovies(data.Search)
        }
        fetchMovies()
    }, [])

    const handleSearch = () => {
        setSearchFilter(movies, search, setFiltered)
    }

    const setSearchHandle = (e: any) => {
        setSearch(e)
    }

    useEffect(() => {
        handleSearch()
    }, [search, movies])

    const handleYears = (e: any) => {
        const fil: any = movies?.filter((arr: any) => {
            return e.toLowerCase() === 'year' ? filtered : arr.Year.toLowerCase().includes(e.toLowerCase())
        })
        setFiltered(fil)
    }

  return (
    <>
    <Filters movies={movies} setSearchHandle={setSearchHandle} handleYears={handleYears} />
    {
        filtered?.map((movie: any, i) => {
            return <div key={i}>{movie.Title}</div>
        })
    }
    </>
  )
}

export default Home