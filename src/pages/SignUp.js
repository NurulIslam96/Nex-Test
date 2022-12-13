import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: "onChange" });
  const [nameField, setNameField] = useState(true);
  const [phoneField, setPhoneField] = useState(false);
  const [passwordField, setPasswordField] = useState(false);

  //SignUP Form Final Submit
  const handleSubmitForm = (data) => {
    const body = {
      first_name: data.first_name,
      last_Name: data.last_Name,
      phone_number: data.phone_number,
      email: data.email,
      password: data.password,
    };
    fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          reset()
          toast.success("Registered Successfully");
        }
        if (data.error) {
          if (data.error.includes("User.Phone")) {
            toast.error("Please Enter a Valid Number");
          } else {
            toast.error(data.error);
          }
        }
      });
  };

  // For Next Button && Back Button on SignUP page
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
            <div data-aos="fade-left" className="flex flex-col gap-12 px-12">
              <input
                  type="text"
                  {...register("first_name", {
                    minLength: {
                      value: 2,
                      message: "Name should be more than 2 letters",
                    },
                    required: "First Name Required",
                  })}
                  placeholder="Write First Name"
                  className="outline-none border-b px-3 "
                />
              <input
                type="text"
                {...register("last_Name", {
                  minLength: {
                    value: 2,
                    message: "Name should be more than 2 letters",
                  },
                  required: "Second Name Required",
                })}
                placeholder="Write Last Name"
                className="outline-none border-b px-3"
              />
              <div className="text-center text-red-500">
                {errors.first_name && (
                  <span role="alert">{errors.first_name.message}</span>
                )}
                <br />
                {errors.last_Name && (
                  <span role="alert">{errors?.last_Name?.message}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
              {!errors.first_name && !errors.last_Name ? (
                  <button
                  onClick={(e) => handleNextStep(e)}
                    className="bg-[#1678CB] shadow-slate-400 shadow-md w-[142px] h-[49px] text-white rounded-2xl text-base"
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <p>Next Step</p>
                      <FaArrowRight />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-slate-500 shadow-slate-400 shadow-md w-[142px] h-[49px] text-white rounded-2xl text-base"
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <p>Next Step</p>
                      <FaArrowRight />
                    </div>
                  </button>
                )}
              </div>
              <span className="text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#1678CB] font-semibold">
                  LOGIN HERE!
                </Link>
              </span>
            </div>
          )}
          {phoneField && (
            <div data-aos="fade-left" className="flex flex-col gap-12 px-12">
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="+880"
                  disabled
                  className="outline-none border-b px-3 w-16"
                />
                <input
                  type="text"
                  {...register("phone_number", {
                    minLength: {
                      value: 10,
                      message: "Number should be 10 digits without 0",
                    },
                    required: "Mobile Number Required",
                  })}
                  placeholder="1xxxxxxxxxx"
                  className="outline-none border-b px-3 "
                />
              </div>
              <input
                type="email"
                {...register("email", {
                  required: "Email Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                placeholder="Write Email Address"
                className="outline-none border-b px-3"
              />
              <div className="text-center text-red-500">
                {errors.email && (
                  <span role="alert">{errors.email.message}</span>
                )}
                <br />
                {errors.phone_number && (
                  <span role="alert">{errors?.phone_number?.message}</span>
                )}
              </div>
              <div className="flex md:flex-col flex-col-reverse items-center justify-center">
                {!errors.email && !errors.phone_number ? (
                  <button
                    onClick={(e) => handleNextStep2(e)}
                    className="bg-[#1678CB] shadow-slate-400 shadow-md w-[142px] h-[49px] text-white rounded-2xl text-base"
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <p>Next Step</p>
                      <FaArrowRight />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-slate-500 shadow-slate-400 shadow-md w-[142px] h-[49px] text-white rounded-2xl text-base"
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <p>Next Step</p>
                      <FaArrowRight />
                    </div>
                  </button>
                )}
                <button
                  onClick={(e) => handleBackStep(e)}
                  className="md:absolute md:mr-80 md:mt-0 mt-5"
                >
                  Back
                </button>
              </div>
            </div>
          )}
          {passwordField && (
            <div data-aos="fade-left" className="flex flex-col gap-12 px-12">
              <div className="flex flex-col">
                <input
                  type="password"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "Your password must be 8 character",
                    },
                    required: true,
                  })}
                  placeholder="Write Password"
                  className="outline-none border-b px-3"
                />
                {errors?.password && (
                  <small className="text-red-500">
                    {errors?.password?.message}
                  </small>
                )}
              </div>
              <div className="flex md:flex-col flex-col-reverse items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#1678CB] shadow-slate-400 shadow-md h-[49px] w-[100px] text-white rounded-2xl text-base"
                >
                  Submit
                </button>
                <button
                  className="md:absolute md:mr-80 md:mt-0 mt-5"
                  onClick={(e) => handleBackStep2(e)}
                >
                  Back
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
