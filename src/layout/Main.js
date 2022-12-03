import React from "react";
import logo from "../assets/ultimate_hrm.png";
import banner from "../assets/istockphoto-1321277096-612x612 1.png";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <section className="container mx-auto min-h-screen lg:grid lg:grid-cols-3 grid-cols-1 items-center">
      <div className="col-span-2">
        <img src={logo} alt="" />
        <div className="flex justify-center">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="col-span-1 flex justify-center">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Main;
