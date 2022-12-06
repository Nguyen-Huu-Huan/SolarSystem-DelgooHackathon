import React from "react";
import {
  RecruiterIcon,
  SolarSystemLogo,
  ApplicantIcon,
} from "../../assets/logo-exporter";
const RecruiterOrApplicant = ({ handleGetStartedTransition }) => {
  return (
    <div>
      <img src={SolarSystemLogo} style={{ width: "70vw", height: "auto" }} />
      <h1 className="text-3xl text-indigo-600">
        Are you a recruiter or an applicant
      </h1>
      <div className="flex items-center justify-center gap-5 my-[10vh]">
        <button
          className="hover:shadow-md hover:border hover:border-indigo-400 duration-200 rounded-md flex items-center justify-center gap-4 px-16 py-8"
          onClick={handleGetStartedTransition}
        >
          <img src={RecruiterIcon} className="w-[100px] h-auto" />
          <p className="font-Solway font-bold text-xl ">Recruiter</p>
        </button>
        <button
          className="hover:shadow-md hover:border hover:border-indigo-400 duration-200 rounded-md flex items-center justify-center gap-4 px-16 py-8"
          onClick={handleGetStartedTransition}
        >
          <img src={RecruiterIcon} className="w-[100px] h-auto" />
          <p className="font-Solway font-bold text-xl ">Applicant</p>
        </button>
      </div>
    </div>
  );
};

export default RecruiterOrApplicant;
