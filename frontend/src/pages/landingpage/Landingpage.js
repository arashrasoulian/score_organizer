import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landingpage() {
  return (
    <div>
      <div className="landingpage-slideshow-top">
        <dev className="landingpage-slide-top-title">
          <p><b>Store, share, and edit sheet music with ease!</b></p>
        </dev>

        <div className="landingpage-slide-top-button">
          <Link to="/signin" className="sign-link">
            Sign In
          </Link>
          <Link to="/signup" className="sign-link mx-3">
            Sign Up
          </Link>
        </div>
        <div className="svglink d-none d-md-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25vh"
            height="25vh"
            fill="currentColor"
            className="bi bi-stickies-fill icon"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5" />
            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
