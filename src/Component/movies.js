import React from 'react'
import '../App.css';
import {Card,Button,Carousel} from 'react-bootstrap'
import { Rate } from 'antd';

const Movies = ({movie}) => {
    return (
            <Card style={{ width: '20rem' ,margin:"20px"}} className="card-film">
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
                    <Rate disabled defaultValue={movie.rate} />
                    <br/>
                    <br/>
                    <Button variant="danger">Regarder</Button>
                </Card.Body>
                </Card>
    )
}

export default Movies
