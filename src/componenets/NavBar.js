import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';


const NavBar = () => {
    
    return (
        <div >
        <Navbar fixed="top" bg="info" expand="lg">
        <Nav className="navlinks">
            <Nav.Link defaultActiveKey="/"><NavLink exact activeClassName='active-link' className='nav-itemm' to='/'>Requests</NavLink> </Nav.Link>
            <Nav.Link ><NavLink exact activeClassName='active-link' className='nav-itemm' to='/services'>Services</NavLink> </Nav.Link>
            <Nav.Link ><NavLink exact activeClassName='active-link' className='nav-itemm'to='/payments'>payments</NavLink> </Nav.Link>
        </Nav>
        </Navbar>
        </div>
    );
}

export default NavBar;
