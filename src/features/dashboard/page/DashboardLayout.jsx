import React, { Fragment } from "react";
import
  {
    Outlet
  } from "react-router-dom";
import ContractDashboard from "../../../components/contract/ContractDashboard";
import { NavbarDashboard } from "../../../components/navbar";
import "./DashboardLayout.css";

export function DashboardLayout() {
  return (
    <Fragment>
      <div className="dashboard-layout">
        <div className="dashboard-nav">
          <NavbarDashboard />
        </div>
        <div className="dashboard-contract">
          <ContractDashboard />
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}
