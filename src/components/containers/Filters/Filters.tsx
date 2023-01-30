import { FilterTypes } from "../../pages/Home"

function Filters({ movies }: FilterTypes) {
  return (
    <div className="filters">
        <form className="filters__form">
            <div className="filters__search-block">
                <input type="search" className="filters__search" />
            </div>
            <div className="filters__block">
                <select name="" id="" className="filters__select">
                    <option value="Type">Type</option>
                </select>
            </div>
            <div className="filters__block">
                <select name="" id="" className="filters__select">
                    <option value="Year">Year</option>
                    {
                        movies && movies.map((movie: any, i) => (
                            <option key={i}>{movie.Year}</option>
                        ))
                    }
                </select>
            </div>
            <button className="filters__btn" type="submit">Search</button>
        </form>
    </div>
  )
}

export default Filters
