import { useState } from "react";
import Certification from "./Certification/Certification";
import PersonalInformation from "./Personal Information/PersonalInformation";
import Skillset from "./Skillset/Skillset";

const CandidateInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 py-4">
        <PersonalInformation />
        <Certification />
      </div>
      <div className="flex items-center justify-center">
        <Skillset />
      </div>
    </div>
  );
};

export default CandidateInfo;
