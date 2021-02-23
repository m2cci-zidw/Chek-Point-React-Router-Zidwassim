import React from 'react'
import './Errors.css'
import Errors404 from '../../assets/Errors/404.PNG'
import{Link} from 'react-router-dom'

const Errors = () => {
   
    return (
        <div className="Errors">
           <Link to='/'> 
            <img src={Errors404} alt="Errors404"/>
           </Link> 
            

        </div>
    )
}

export default Errors
