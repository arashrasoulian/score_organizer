// src/components/navbar/Navbar.js
import {  Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrUser } from "../../store/userSlice";
import Logout from "../Logout";
import { Link } from "react-router-dom";

export function Navbar() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.user.currUser);

  return (
    <Nav className="navbar-container">
      Hello {currUser ? currUser.email : null}
      {currUser && (
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        )}
      <div className="logout-button-navbar">

        <Logout setCurrUser={() => dispatch(clearCurrUser())} />
      </div>
    </Nav>
  );
}
