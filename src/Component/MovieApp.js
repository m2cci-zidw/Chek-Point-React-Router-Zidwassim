import React,{useState}  from 'react'
import FiltreByName from './FiltreByName/FiltreByName';
import MovieList from './MovieList/MovieList';
import Raiting from './Raiting/Raiting';
import {MoviesData} from './MoviesData'




const MovieApp = () => {
    const [movies, setMovies] = useState(MoviesData)
    const [inputSearch, setInputSearch] = useState("");
    const [raiting, setRaiting] = useState(1)
    const AddMovie =(newMovie)=>{
        setMovies([...movies,newMovie])
    }
    return (
        <div>
            {/* <NavBar/><br/> */}
            <div className='filterPart'> 
            <FiltreByName setInputSearch={setInputSearch} inputSearch={inputSearch}/>
            <Raiting filterRating={true} raiting={raiting} setRaiting={setRaiting}/>
            </div>
            <MovieList  movies={movies} inputSearch={inputSearch} raiting={raiting} AddMovie={AddMovie} />
            

            
        </div>
    )
}

export default MovieApp
