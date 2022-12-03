import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const handleSubmitForm = (data) => {
    const body = {
      email: data.email,
      password: data.password
    }
    fetch('https://test.nexisltd.com/login',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(body)
    })
    .then(res=>res.json())
    .then(data=>{
      localStorage.setItem("test_access_token",data.access_token)
    })
  };
  return (
    <div className="shadow-lg w-[516px] h-[630px] flex justify-center">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-xl text-center my-20">Log in Form</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="flex flex-col gap-12 px-12">
            <input
              type="email"
              {...register("email",{required:true})}
              placeholder="Write Email Address"
              className="outline-none border-b px-3 "
            />
            <input
              type="password"
              {...register("password",{minLength:{value: 8, message: "Your password must be 8 character"}, required:true})}
              placeholder="Write Password"
              className="outline-none border-b px-3"
            />
            {errors?.password && 
                <small>{errors?.password?.message}</small>
                }
            <div className="flex items-center justify-center">
              <button type="submit" className="bg-[#1678CB] shadow-slate-400 shadow-md text-white w-[104px] h-[49px] rounded-2xl text-base">
                Login
              </button>
            </div>
            <span>
              Don't have an account? <Link to={"/"}>SIGNUP HERE!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
