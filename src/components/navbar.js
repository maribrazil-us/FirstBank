import React from "react";
import {NavLink, Link, useLocation} from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav, Dropdown, NavbarBrand, Text } from "react-bootstrap";
import UserContext from './context';
import {useContext} from 'react';


function NavBar(){

  let ctx = useContext(UserContext);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
    
  return(
        <>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Navbar.Brand href="#">FBR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
              <Nav className={splitLocation[1] === "createaccount" ? "active" : ""}>
                <Link className="nav-link"  data-toggle="tooltip" data-placement="bottom" title="Create an account today" to="/createaccount/">Create Account</Link>
              </Nav>
              <Nav className={splitLocation[1] === "deposit" ? "active" : ""}>
                <Link className="nav-link"  data-toggle="tooltip" data-placement="bottom" title="Make a deposit to your account" to="/deposit/">Deposit</Link>
              </Nav>
              <Nav className={splitLocation[1] === "withdraw" ? "active" : ""}>
                <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Withdraw from your account" to="/withdraw/">Withdraw</Link>
              </Nav>
              <Nav className={splitLocation[1] === "alldata" ? "active" : ""}>
                <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="See all transactions" to="/alldata/">All Data</Link>
              </Nav>
              <Navbar.Text> Account Of: <a>{ctx.users[ctx.users.length -1].name}</a></Navbar.Text>
           </Navbar.Collapse>
         </Navbar>
        </>
      );
    }
    
export default NavBar;