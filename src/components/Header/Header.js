import React from "react";
import {  Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="container">
    <Navbar bg="primary" variant="white">
    <Nav className="header m-auto w-50">
      <Link to="/home">Home</Link>
      <Link to="/additional">Additional</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to='/inventory'>Inventory</Link>
      
      <Link to="/signup">SignUp</Link> 
      {user ? (
          <Button onClick={handleSignOut}>Sign Out</Button>
        ) : (
          <Link to="/login">Login</Link>
        )

      }
          </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
