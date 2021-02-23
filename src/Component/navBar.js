import React from 'react'
import '../App.css';
import {Navbar,Form,FormControl } from "react-bootstrap";
import { Rate } from 'antd';

const NavBar = ({value,handleChange,rateChange,value1}) => {
    return (
        <div>
    <Navbar  bg="dark"  variant="dark" className="fixed-top NavBar-movies">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"
            value={value} onChange={handleChange} />
        </Form>
        <Rate value={value1} onChange={rateChange}/>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    </Navbar>
        </div>
    )
}

export default NavBar
