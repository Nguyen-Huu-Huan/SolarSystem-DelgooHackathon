import React from "react";
import RequiredSkillset from "../../../../Recruiters/RecruitmentProcess/RequiredSkillset/RequiredSkillset";

const Skillset = () => {
  return (
    <div className="p-4 w-[82vw] flex items-center justify-around max-h-[50vh] overflow-scroll rounded-lg shadow-lg education">
      <p className="px-4 mx-4 text-2xl font-bold text-left">Skillsets</p>
      <RequiredSkillset />
    </div>
  );
};

export default Skillset;
