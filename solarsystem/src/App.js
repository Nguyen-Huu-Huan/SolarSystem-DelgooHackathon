import "./App.css";
import CandidateInfo from "./components/Applicants/ApplicationProcess/CandidateInfo";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import LandingPage from "./components/LandingPage/LandingPage";
import { GeneralContext } from "./contexts/GeneralContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RecruitmentProcess from "./components/Recruiters/RecruitmentProcess/RecruitmentProcess";
import ApplicationProcess from "./components/Applicants/ApplicationProcess/ApplicationProcess";
import RecruiterPortal from "./components/Recruiters/RecruiterPortal/RecruiterPortal";
import ViewJob from "./components/Recruiters/VIewJob/ViewJob";
function App() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[100vh] py-2 App">
      {/* <Test /> */}
      {/* <SignUp />
      <CandidateInfo /> */}
      <GeneralContext.Provider
      // value={[
      //   accountInfo,
      //   {
      //     deleteAccount,
      //     editAccount,
      //     registerAccount,
      //     getSuggestedUserToFollow,
      //     toggleFollowUser,
      //     getFollowers,
      //     getFollowingList,
      //     signin,
      //     getUserAccount,
      //     getUserById,
      //     reactToPost,
      //     reactToComment,
      //     updateProfileVisits,
      //     validateAccount,
      //     resendEmail,
      //   },
      // ]}
      >
        <Router>
          {/* <Layout> */}

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/recruitment-portal" element={<RecruiterPortal />} />
            <Route
              path="/recruitment-process"
              element={<RecruitmentProcess />}
            />
            <Route
              path="/application-process"
              element={<ApplicationProcess />}
            />
            <Route path="/view-jobs" element={<ViewJob />} />
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/" element={<Home />} /> */}
          </Routes>
          <Layout />
        </Router>
      </GeneralContext.Provider>
    </div>
  );
}

export default App;
