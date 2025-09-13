import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Main = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};
