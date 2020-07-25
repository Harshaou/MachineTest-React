import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navboor = () => {
    return (
        <div >
        <Navbar fixed="top" bg="info" expand="lg">
        <Nav className="navlinks">
            <Nav.Link ><Link className='nav-itemm' to='/'>Requests</Link> </Nav.Link>
            <Nav.Link ><Link className='nav-itemm' to='/services'>Services</Link> </Nav.Link>
            <Nav.Link ><Link className='nav-itemm'to='/payments'>payments</Link> </Nav.Link>
        </Nav>
        </Navbar>
        </div>
    );
}

export default Navboor;
