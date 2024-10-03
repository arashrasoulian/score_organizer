import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-0 dashboard-sidebar-container">
      <div className=" align-items-center   pt-5  text-white min-vh-100">
        <ul className="nav nav-pills flex-column  mb-0  " id="menu">
          <li className="nav-item">
            <Link
              to="/dashboard/personaldata"
              className="nav-link align-middle px-0"
            >
              <i className="fa-regular fa-user"></i>
              <span className="ms-1 d-none d-sm-inline">Personal Data</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Myscores"
              className="nav-link px-0 align-middle "
            >
              <i className="fa-solid fa-music"></i>
              <span className="ms-1 d-none d-sm-inline">My Scores</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Statistics"
              className="nav-link px-0 align-middle"
            >
              <i className="fa-solid fa-chart-line"></i>
              <span className="ms-1 d-none d-sm-inline">Statistic</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Notifications"
              className="nav-link px-0 align-middle"
            >
              <i className="fa-regular fa-note-sticky"></i>
              <span className="ms-1 d-none d-sm-inline">Notifications</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
