import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Alg Trainer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Options">Options</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);