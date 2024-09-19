import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <div className="landingpage-container">
      <div className="landingpage-slideshow-box-top">
        <div
          id="carouselExampleIndicators"
          className="carousel slide landingpage-slideshow-top"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="landingpage-slideshow-container">
                <dev className="landingpage-slide-top-title">
                  <p>
                    <b>Store, share, and edit sheet music with ease!</b>
                  </p>
                </dev>
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
            <div className="carousel-item">
              <div className="landingpage-slideshow-container">
                <dev className="landingpage-slide-top-title">
                  <p>
                    <b>Store, share, and edit sheet music with ease!</b>
                  </p>
                </dev>
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
            <div className="carousel-item">
              <div className="landingpage-slideshow-container">
                <dev className="landingpage-slide-top-title">
                  <p>
                    <b>Store, share, and edit sheet music with ease!</b>
                  </p>
                </dev>
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
          </div>
          <a
            className="carousel-control-prev w-10"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div className="landingpage-slide-top-button">
          <Link to="/signin" className="sign-link">
            Sign In
          </Link>
          <Link to="/signup" className="sign-link mx-3">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="landingpage-data-boxes">
        <div className="row ">
          <div className="col-3  ">
            <div className="landingpage-sheetnumber mr-1"></div>
          </div>{" "}
          <div className="col-3  ">
            <div className="landingpage-sheetnumber mx-1"></div>
          </div>{" "}
          <div className="col-3  ">
            <div className="landingpage-sheetnumber mx-1"></div>
          </div>{" "}
          <div className="col-3  ">
            <div className="landingpage-sheetnumber ml-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
