import React from 'react'
import {Form}from 'react-bootstrap'

import './FiltreByName.css'

const FiltreByName = ({inputSearch, setInputSearch}) => {
    
    return (
        <div>
            <Form.Control type="text" placeholder="Search"
             onChange={(e)=>setInputSearch(e.target.value)}
             value={inputSearch}
             className="inputFilter" />
            
        </div>
    )
}

export default FiltreByName
