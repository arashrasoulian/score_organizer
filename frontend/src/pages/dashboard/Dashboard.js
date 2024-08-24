import React from "react";

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar />
          <Outlet />
        </div>
      </div>{" "}
    </div>
  );
}
