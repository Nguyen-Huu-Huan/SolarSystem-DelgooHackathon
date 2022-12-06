import "./App.css";
import CandidateInfo from "./components/RecruitmentForm/CandidateInfo";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import LandingPage from "./components/LandingPage/LandingPage";
import { GeneralContext } from "./contexts/GeneralContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
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
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/" element={<Home />} /> */}
          </Routes>
          {/* </Layout> */}
        </Router>
      </GeneralContext.Provider>
    </div>
  );
}

export default App;
