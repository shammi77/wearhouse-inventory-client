import React from "react";
import {  Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
    <Navbar bg="primary" variant="white">
    <Nav className="header m-auto w-50">
      <Link to="/home">Home</Link>
      <Link to="/additional">Additional</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link> 
       {/* 
        */}
          </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
