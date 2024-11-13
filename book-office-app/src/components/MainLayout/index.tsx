import React from "react";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};