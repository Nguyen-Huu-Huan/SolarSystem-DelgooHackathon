import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { LoginIcon, RegisterIcon } from "../../assets/logo-exporter";
const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-[90vh] ">
      <p className="text-3xl">Great! Let's get started</p>
      <div className="flex items-center justify-center gap-5 my-[10vh]">
        <button
          className="hover:shadow-md hover:border hover:border-indigo-400 duration-200 rounded-md flex items-center justify-center gap-4 px-16 py-8"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <img src={LoginIcon} className="w-[100px] h-auto" />
          <p className="font-Solway font-bold text-xl ">Login</p>
        </button>
        <button
          className="hover:shadow-md hover:border hover:border-indigo-400 duration-200 rounded-md flex items-center justify-center gap-4 px-16 py-8"
          onClick={() => {
            navigate("/signup");
          }}
        >
          <img src={RegisterIcon} className="w-[100px] h-auto" />

          <p className="font-Solway font-bold text-xl ">Sign Up</p>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
