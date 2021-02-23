import React,{useState} from 'react'
import {Button,Modal,Form  } from "react-bootstrap";
import image from '../../assets/backgroundimage/netflix.jpg'

const ModalAddMovie=({AddMovie}) =>{
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("")
    const [raiting, setRaiting] = useState(0)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <span variant="primary" onClick={handleShow}>
        [ + ]
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group >
                <Form.Label>Title</Form.Label>
                <Form.Control type="tex" placeholder="Movie Title" 
                onChange={(e)=>setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Raiting</Form.Label>
                <Form.Control type="Number" placeholder="Movie Raiting" min="1" max="5" 
                onChange={(e)=>setRaiting(e.target.value)} />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
            onClick={() =>{ AddMovie({id: Math.random(),Title:title,rate:raiting, img1:image,img2:image,img3:image}); handleClose()}}>
              
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalAddMovie