import React from 'react'

import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';


const MovieList = ({movies,inputSearch,raiting, AddMovie}) => {
    ;
    return (
        <div className='movieList'>
            {movies.filter(movie=>
             movie.Title.toLowerCase().includes(inputSearch.toLowerCase()) && movie.rate>=raiting)
            .map(movie=> 
                <MovieCard movie={movie} key={movie.id} AddCard={false}/>)}

                <MovieCard  AddCard={true} AddMovie={AddMovie} />

        </div>
    )
}

export default MovieList
