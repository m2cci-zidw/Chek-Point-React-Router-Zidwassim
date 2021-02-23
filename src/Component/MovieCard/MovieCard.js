import React from 'react'
import { Card,Carousel,Button } from "react-bootstrap";
import './MovieCard.css'
import Raiting from "../Raiting/Raiting"
import ModalAddMovie from "../AddMovie/ModalMovie"
import {Link} from 'react-router-dom'

const MovieCard = ({movie,AddCard, AddMovie}) => {
    return (
        <div className=''>
            {AddCard ?
            <Card className="AddCard" >
             {/* <img src={movie.img1} alt={movie.img1} /> */}
    
                <Card.Title style={{fontSize:"50px",color:"white"}} >
                    <ModalAddMovie AddMovie={AddMovie}/>
                </Card.Title> 
         
            </Card>
            :
            <Card className="MovieCard" >
                {/* insertion carde************* */}
                <Carousel>
                    <Carousel.Item >
                        <img
                        className="d-block w-100 imageFilm"
                        src={movie.img1}
                        alt={movie.img1}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 imageFilm"
                        src={movie.img2}
                        alt={movie.img2}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 imageFilm"
                        src={movie.img3}
                        alt={movie.img3}
                        />
                    </Carousel.Item>
                    </Carousel>

                    {/* fin insertion card*********** */}
                <Card.Body>
                    <Card.Title style={{ color:"white"}} >{movie.Title}</Card.Title>
                    <Raiting filterRating={false} movieRaiting= {movie.rate}/>
                    <br/>
                    <br/>
                    <Link to={`/home/${movie.id}`}>
                    <Button variant="warning">Bande-annonce</Button>
                    </Link>
                </Card.Body>
                </Card>
        }
            


        </div>
    )
}

export default MovieCard
