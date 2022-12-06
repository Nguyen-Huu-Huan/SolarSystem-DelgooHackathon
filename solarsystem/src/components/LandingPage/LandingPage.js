import React, { useState } from "react";
import {
  RecruiterIcon,
  SolarSystemLogo,
  ApplicantIcon,
} from "../../assets/logo-exporter";
import GetStarted from "./GetStarted";
import RecruiterOrApplicant from "./RecruiterOrApplicant";
const LandingPage = () => {
  const [toggleGetStarted, setToggleGetStarted] = useState(false);
  const handleGetStartedTransition = () => {
    setToggleGetStarted(true);
  };
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {toggleGetStarted ? (
        <GetStarted />
      ) : (
        <RecruiterOrApplicant
          handleGetStartedTransition={handleGetStartedTransition}
        />
      )}
    </div>
  );
};

export default LandingPage;
