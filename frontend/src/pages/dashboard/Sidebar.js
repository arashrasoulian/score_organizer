import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <span class="fs-5 d-none d-sm-inline">Dashboard</span>

        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li class="nav-item">
            <Link to="/dashboard/personaldata" class="nav-link align-middle px-0">
              <i class="fa-regular fa-user"></i>
              <span class="ms-1 d-none d-sm-inline">personal Data</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/myclasses"
              class="nav-link px-0 align-middle"
            >
              <i class="fa-solid fa-landmark"></i>
              <span class="ms-1 d-none d-sm-inline">my Classes</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/classesnotes" class="nav-link px-0 align-middle">
              <i class="fa-regular fa-note-sticky"></i>
              <span class="ms-1 d-none d-sm-inline">Classes notes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/scores"
              class="nav-link px-0 align-middle "
            >
              <i class="fa-solid fa-music"></i>
              <span class="ms-1 d-none d-sm-inline">Scores</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/statistic"
              class="nav-link px-0 align-middle"
            >
              <i class="fa-solid fa-chart-line"></i>
              <span class="ms-1 d-none d-sm-inline">Statistic</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
