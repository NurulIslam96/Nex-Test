import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [nameField, setNameField] = useState(true);
  const [phoneField, setPhoneField] = useState(false);
  const [passwordField, setPasswordField] = useState(false);

  const handleSubmitForm = (data) => {
    console.log(data)
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setNameField(false);
    setPhoneField(true);
  };
  const handleNextStep2 = (e) => {
    e.preventDefault();
    setNameField(false);
    setPhoneField(false);
    setPasswordField(true);
  };
  const handleBackStep = (e) => {
    e.preventDefault();
    setNameField(true);
    setPhoneField(false);
    setPasswordField(false);
  };
  const handleBackStep2 = (e) => {
    e.preventDefault();
    setNameField(false);
    setPhoneField(true);
    setPasswordField(false);
  };

  return (
    <div className="shadow-lg w-[516px] h-[630px] flex justify-center">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-xl text-center my-20">SignUp Form</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {nameField && (
            <div className="flex flex-col gap-12 px-12">
              <input
                type="text"
                {...register("first_name")}
                placeholder="Write First Name"
                className="outline-none border-b px-3 "
              />
              <input
                type="text"
                {...register("last_Name")}
                placeholder="Write Last Name"
                className="outline-none border-b px-3"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={(e) => handleNextStep(e)}
                  className="bg-[#1678CB] shadow-slate-400 shadow-md text-white px-5 rounded-2xl py-4 text-base"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}
          {phoneField && (
            <div className="flex flex-col gap-12 px-12">
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="+880"
                  disabled
                  className="outline-none border-b px-3 w-16"
                />
                <input
                  type="text"
                  {...register("phone_number")}
                  placeholder="1xxxxxxxxxx"
                  className="outline-none border-b px-3 "
                />
              </div>
              <input
                type="email"
                {...register("email")}
                placeholder="Write Email Address"
                className="outline-none border-b px-3"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={(e) => handleBackStep(e)}
                  className="absolute mr-80"
                >
                  Back
                </button>
                <button
                  onClick={(e) => handleNextStep2(e)}
                  className="bg-[#1678CB] shadow-slate-400 shadow-md text-white px-5 rounded-2xl py-4 text-base"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}
          {passwordField && (
            <div className="flex flex-col gap-12 px-12">
              <div className="flex flex-col">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Write Password"
                  className="outline-none border-b px-3"
                />
                <small>Your password must be 8 character</small>
              </div>
              <div className="flex items-center mt-14 justify-center">
                <button
                  className="absolute mr-80"
                  onClick={(e) => handleBackStep2(e)}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#1678CB] shadow-slate-400 shadow-md text-white px-5 rounded-2xl py-4 text-base"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
