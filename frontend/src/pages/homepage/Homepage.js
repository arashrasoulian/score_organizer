import { Button } from "react-bootstrap";
import "./homepage.scss";
import Colorboxes from "./Colorboxes";
import { Link } from "react-router-dom";

export default function Homepage() {
  const routArray = [
    "/AIplaylist",
    "/mindAndBody",
    "/communityhall",
    "/Market",
    "/score",
  ];
  const routNameArray = [
    "AI playlist",
    "Mind & Body",
    "Community hall",
    "Market",
    "Score",
  ];
  return (
    <div className="homepage-container">
      <div className="homepage-top-cover">
        <h1>Discover the Beauty of Music</h1>

      </div>

      <div className="classroom-button-container">
        <div className=" classroom-button-homepage ">
          <Link to="/classroom" className="link-bottom-homepage ">
            Classroom
          </Link>
        </div>
      </div>

      <div className="row button-homepage-container">
        {routArray.map((route, index) => (
          <div className="btn col-2  button-bottom-homepage ">
            <Link to={route} className="link-bottom-homepage">
              {routNameArray[index]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
