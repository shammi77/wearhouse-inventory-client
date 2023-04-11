import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/signup");
  };

  return (
    <div>
      <Navbar>
        <Nav className="header item-center m-auto w-50">
          {user ? (
            <Button className="m-auto" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
