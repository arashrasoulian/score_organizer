import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboardcomponents/Sidebar";

export function Dashboard() {
  return (
    <div>
      <div className="">
        <div className="row flex-nowrap">
          <Sidebar />
          <Outlet />
        </div>
      </div>{" "}
    </div>
  );
}
