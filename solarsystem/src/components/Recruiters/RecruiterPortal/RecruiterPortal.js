import React from "react";
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { JobIcon, NewJobIcon } from "../../../assets/logo-exporter";

const RecruiterPortal = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-[90vh] ">
      <p className="text-3xl">Great! Let's get started</p>
      <div className="flex items-center justify-center gap-5 my-[10vh]">
        <button
          className="flex items-center justify-center gap-4 px-16 py-8 duration-200 rounded-md hover:shadow-md hover:border hover:border-indigo-400"
          onClick={() => {
            navigate("/recruitment-process");
          }}
        >
          <img src={JobIcon} className="w-[100px] h-auto" />
          <p className="text-xl font-bold font-Solway ">Create New Job</p>
        </button>
        <button
          className="flex items-center justify-center gap-4 px-16 py-8 duration-200 rounded-md hover:shadow-md hover:border hover:border-indigo-400"
          onClick={() => {
            navigate("/view-jobs");
          }}
        >
          <img src={NewJobIcon} className="w-[100px] h-auto" />

          <p className="text-xl font-bold font-Solway ">View Jobs</p>
        </button>
      </div>
    </div>
  );
};

export default RecruiterPortal;
