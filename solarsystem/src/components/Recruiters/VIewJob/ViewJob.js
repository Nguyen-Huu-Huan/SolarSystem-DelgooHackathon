import React from "react";
import { JobIcon } from "../../../assets/logo-exporter";

const ViewJob = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Posted Jobs</h1>
      <div className="flex flex-wrap items-center justify-around ">
        <div className="flex flex-col items-center justify-start px-4 py-3 rounded-md job-title gap-4 bg-slate-50 drop-shadow-lg max-w-[30%]">
          <div className="flex items-center justify-start gap-4">
            <img src={JobIcon} className="w-[50px] h-auto" />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-wrap items-center justify-start gap-2">
                <div className="px-1 text-white rounded-full bg-slate-600">
                  Full Time
                </div>
                <div className="px-1 text-white rounded-full bg-slate-600">
                  Remote
                </div>
              </div>
              <div className="text-xl font-bold text-left text-indigo-500 ">
                Software Engineer
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2">
            <div className="px-2 py-1 text-indigo-600 border border-indigo-400 rounded-md">
              Python
            </div>
            <div className="px-2 py-1 text-indigo-600 border border-indigo-400 rounded-md">
              C#
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start px-4 py-3 rounded-md job-title gap-4 bg-slate-50 drop-shadow-lg max-w-[30%]">
          <div className="flex items-center justify-start gap-4">
            <img src={JobIcon} className="w-[50px] h-auto" />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-wrap items-center justify-start gap-2">
                <div className="px-1 text-white rounded-full bg-slate-600">
                  Full Time
                </div>
                <div className="px-1 text-white rounded-full bg-slate-600">
                  Remote
                </div>
              </div>
              <div className="text-xl font-bold text-left text-indigo-500 ">
                Software Engineer
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2">
            <div className="px-2 py-1 text-indigo-600 border border-indigo-400 rounded-md">
              Python
            </div>
            <div className="px-2 py-1 text-indigo-600 border border-indigo-400 rounded-md">
              C#
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start px-4 py-3 rounded-md job-title gap-4 bg-slate-50 drop-shadow-lg max-w-[30%]">
          <div className="flex items-center justify-start gap-4">
            <img src={JobIcon} className="w-[50px] h-auto" />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-wrap items-center justify-start gap-2">
                <div className="px-1 text-white rounded-full bg-slate-600">
                  Full Time
                </div>
                <div className="px-1 text-white rounded-full bg-slate-600">
                  Remote
                </div>
              </div>
              <div className="text-xl font-bold text-left text-indigo-500 ">
                Software Engineer
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2">
            <div className="px-2 py-1 text-indigo-600 border border-indigo-400 rounded-md">
              Python
            </div>
            <div className="px-2 py-1 text-indigo-600 border border-indigo-400 rounded-md">
              C#
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJob;
