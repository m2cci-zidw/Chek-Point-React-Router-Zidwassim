import React, { useEffect,useState } from 'react'
import {MoviesData} from "../MoviesData";
import { Card,Button} from "react-bootstrap";
import Raiting from "../Raiting/Raiting"
import {Link} from 'react-router-dom'

import './MovieDetail.css'



const MovieDetail = ({match}) => {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        setMovie(MoviesData.find(movie=>movie.id === +match.params.id))
    },[match.params.id])

    return (
        <div>
            
            <Card className="MovieDetail" >
                <Card.Body>
                    <div className="MovieDetail-Title"> 
                        <Card.Title style={{ color:"white"}} >{movie.Title}</Card.Title>

                        <Raiting filterRating={false} movieRaiting= {movie.rate}/>
                    </div>
                   
                    <br/>
                    <iframe Title={movie.Title} width="800" height="400" src={movie.src}
                         frameborder="0"   allowfullscreen></iframe>
                     <div className="Description"> 
                        <h2 > Description</h2>
                        <p> {movie.description}</p>
                    </div>
                    <div>
                        <Link to={`/`}>
                                <Button className="Button-MovieDetail" variant="danger">Retour</Button>
                        </Link>
                        <Link >
                                <Button className="Button-MovieDetail"  variant="success">Regarder</Button>
                        </Link>
                    </div>

                    
                   
                </Card.Body>
                </Card>
                        
                
            
        </div>
    )
}

export default MovieDetail
