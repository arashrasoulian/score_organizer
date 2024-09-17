// src/components/navbar/Navbar.js
import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrUser } from "../../store/userSlice";
import Logout from "../Logout";
import { Link } from "react-router-dom";

export function Navbar() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.user.currUser);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/path-to-logo.png" alt="Logo" />
        </Link>
        Hello {currUser ? currUser.email : null}
      </div>

      <div className="navbar-right">
        {!currUser ? (
          <>
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>

            <Link to="/" className="nav-link">
              Home
            </Link>
            <Button className="btn logout-button-navbar">
              <Logout setCurrUser={() => dispatch(clearCurrUser())} />
            </Button>
            <Link to="/profile" className="nav-link">
              <img
                src="/path-to-default-pic.png"
                alt="Profile"
                className="profile-picture"
              />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
