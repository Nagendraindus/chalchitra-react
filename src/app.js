import React, { useState } from "react";
import { useEffect } from "react";
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from "./movieCard.jsx";


const API_URL = "https://www.omdbapi.com?apikey=72442057";

// const movie= {
//     "Title": "Lauf um Dein Leben - Vom Junkie zum Ironman",
//     "Year": "2008",
//     "imdbID": "tt0954542",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg"
// }
const App = () =>{
    const [movies, setMovies]=useState([]);
    const [searchTerm , setSearchTerm] = useState([])
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);

        const data =await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('ironman');
    },[]);
    return(
        <div className="app">
            <h1>
                Kutta
            </h1>
            <div className="search">
                <input placeholder="search here" value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
            <img 
            src={SearchIcon}
            alt = "search"
            onClick={()=>searchMovies(searchTerm)}
            />
            </div>
            {
                movies.length>0 ?(<div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie = {movie}/>
                    ))}
                
            </div>):(
                <div className="empty">
                    <h2>
                        No movies found
                    </h2>
                </div>
            )
            }
            
        </div>
    );
}

export default App;