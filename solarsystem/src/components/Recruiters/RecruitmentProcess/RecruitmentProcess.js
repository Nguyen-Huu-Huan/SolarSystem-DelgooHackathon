import React from "react";
import JobInfo from "./JobInfo.js/JobInfo";
import RequiredSkillset from "./RequiredSkillset/RequiredSkillset";

const RecruitmentProcess = () => {
  return (
    <div className="flex items-center justify-around overflow-scroll h-[80vh] w-full">
      <JobInfo />
      <RequiredSkillset />
    </div>
  );
};

export default RecruitmentProcess;
