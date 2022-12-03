import React from "react";
import logo from "../assets/ultimate_hrm.png";
import banner from "../assets/istockphoto-1321277096-612x612 1.png";
import SignUp from "../pages/SignUp";

const Main = () => {
  return (
    <section className="container mx-auto min-h-screen flex items-center justify-around relative">
      <div>
        <img src={logo} alt="" />
        <img src={banner} alt="" />
      </div>
      <SignUp></SignUp>
    </section>
  );
};

export default Main;
