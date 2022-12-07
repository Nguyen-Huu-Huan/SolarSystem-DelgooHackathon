import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
const Certification = () => {
  return (
    <div className="p-4 rounded-lg shadow-lg education">
      <h1 className="text-2xl font-bold">Certifcations</h1>

      <div className="relative flex items-center justify-start pr-[20vw]">
        <AiOutlineEdit size={30} className="absolute top-0 right-0" />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-lg font-bold">Data Science Bootcamp</h1>
          <p>Organization</p>
          <p className="text-slate-500">01/2022 - 01/2025</p>
        </div>
      </div>
      <button className="px-3 py-2 my-4 font-semibold text-indigo-500 duration-100 border-2 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white">
        Add Education
      </button>
    </div>
  );
};

export default Certification;
