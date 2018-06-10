import React from 'react';
import {Navbar, FormGroup, FormControl, Nav, NavDropdown,MenuItem, NavItem,Badge} from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                  <a href="http://neostore-lockround.c9users.io/"><strong><i className="fa fa-lg fa-shopping-bag" aria-hidden="true"></i> NeoSTORE</strong></a>
                </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1} href="#">
                HOME
            </NavItem>
            </Nav>
            <Nav>
            <Navbar.Form>
            <FormGroup>
            <div className="input-group">
                <FormControl type="text"/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
                </span>
            </div>
            </FormGroup>{' '}
            </Navbar.Form>
            </Nav>
            <Nav pullRight>
                <NavItem>
                    <i className="fa fa-shopping-cart"></i> Cart <Badge>0</Badge>
                </NavItem>
                <NavDropdown title={<i className="fa fa-user"></i>} id="basic-nav-dropdown" classNameName="navDropdown">
                <MenuItem><i className="fa fa-sign-in"></i> <a href="http://180.149.241.208:3001/auth/login">Login</a></MenuItem>
                <MenuItem><i className="fa fa-user-plus"></i> <a href="http://180.149.241.208:3001/auth/register">Register</a></MenuItem>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )    
}

export default Header;
