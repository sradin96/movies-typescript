import { Key, useEffect, useState } from "react";
import { FilterTypes } from "../../pages/Home"

function Filters({ movies, setSearchHandle, handleYears }: FilterTypes) {


  return (
    <div className="filters">
        <form className="filters__form">
            <div className="filters__search-block">
                <input type="text" className="filters__search" onChange={(e) => setSearchHandle(e.currentTarget.value)} />
            </div>
            <div className="filters__block">
                <select name="" id="" className="filters__select">
                    <option>Type</option>
                </select>
            </div>
            <div className="filters__block">
                <select name="" id="" className="filters__select" onChange={(e) => handleYears(e.currentTarget.value)}>
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
