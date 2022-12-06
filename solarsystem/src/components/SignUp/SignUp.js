import { useState } from "react";
// import FMTLogoPNG from "assets/img/fmtlogo_cropped.png";
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
// import successNyan from "../Fun/successNyan";
import { useNavigate } from "react-router-dom";
import { SolarSystemLogo } from "../../assets/logo-exporter";
import axios from "axios";
// import errorNoti from "../Fun/errNoti";

const SignUp = () => {
  const [fullNameFieldFocus, setFullNameFieldFocus] = useState(false);
  const [emailFieldFocus, setEmailFieldFocus] = useState(false);
  const [passwordFieldFocus, setPasswordFieldFocus] = useState(false);
  const navigate = useNavigate();
  const onSignup = async (data) => {
    // await axios
    //   .post("http://localhost:4000/api/user/register", data)
    //   .then((res) => {
    //     successNyan("Please check your student email to create a password");
    //   })
    //   .catch((err) => {
    //     if (err && err.response && err.response.data) {
    //       errorNoti(err.response.data);
    //     }
    //     console.log(err);
    //   });
  };
  const onLoginClick = () => {
    navigate("/signin");
  };
  return (
    <main className="portalWrapper mx-auto shadow-lg w-[35vw] h-[80%] absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md duration-200 hover:shadow-xl">
      <div className="row">
        <div className="w-full col-12">
          <a href="/" className="flex items-center justify-center">
            <img src={SolarSystemLogo} className="w-[70%] h-auto" />
          </a>
        </div>
        <div className="col-12">
          <form
            className="flex flex-col items-center justify-center gap-4 py-4 form-signin"
            // onSubmit={handleSubmit(onSignup)}
          >
            <h4 className="mt-2 font-bold">✨ New account ✨</h4>
            <div className="flex flex-col items-center justify-center w-full form-floating">
              <div className="w-[70%] flex flex-col items-start justify-center gap-3">
                <p
                  className={`self-align-left font-semibold ${
                    fullNameFieldFocus && "text-emerald-400 text-lg"
                  } text-left text-indigo-600 duration-100`}
                >
                  Full Name
                </p>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
                  id="floatingInput"
                  placeholder="John Doe"
                  onFocus={() => {
                    setFullNameFieldFocus(true);
                  }}
                  onBlur={() => {
                    setFullNameFieldFocus(false);
                  }}
                  // {...register("email", {
                  //   pattern: {
                  //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
                  //     message: "Please input a valid RMIT student email address",
                  //   },
                  //   required: "Email is required!",
                  // })}
                />
                {/* {errors.email && (
                <p className="form-error-mess">
                  <i className="fas fa-exclamation-circle"></i>
                  &nbsp;{errors.email.message}
                </p>
              )} */}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full form-floating">
              <div className="w-[70%] flex flex-col items-start justify-center gap-3">
                <p
                  className={`self-align-left font-semibold ${
                    emailFieldFocus && "text-emerald-400 text-lg"
                  } text-left text-indigo-600 duration-100`}
                >
                  Email
                </p>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onFocus={() => {
                    setEmailFieldFocus(true);
                  }}
                  onBlur={() => {
                    setEmailFieldFocus(false);
                  }}
                  // {...register("email", {
                  //   pattern: {
                  //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
                  //     message: "Please input a valid RMIT student email address",
                  //   },
                  //   required: "Email is required!",
                  // })}
                />
                {/* {errors.email && (
                <p className="form-error-mess">
                  <i className="fas fa-exclamation-circle"></i>
                  &nbsp;{errors.email.message}
                </p>
              )} */}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full form-floating">
              <div className="w-[70%] flex flex-col items-start justify-center gap-3">
                <p
                  className={`self-align-left font-semibold  text-left ${
                    passwordFieldFocus && "text-emerald-400 text-lg"
                  } text-indigo-600 duration-100`}
                >
                  Password
                </p>
                <input
                  type="password"
                  className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onFocus={() => {
                    setPasswordFieldFocus(true);
                  }}
                  onBlur={() => {
                    setPasswordFieldFocus(false);
                  }}
                  // {...register("email", {
                  //   pattern: {
                  //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
                  //     message: "Please input a valid RMIT student email address",
                  //   },
                  //   required: "Email is required!",
                  // })}
                />
                {/* {errors.email && (
                <p className="form-error-mess">
                  <i className="fas fa-exclamation-circle"></i>
                  &nbsp;{errors.email.message}
                </p>
              )} */}
              </div>
            </div>
            <button
              className="w-100 btn btn-lg bg-indigo-500 rounded-md w-[50%] text-white mt-2 py-1"
              type="submit"
              onClick={() => {navigate("/application-process");}}
            >
              Submit
            </button>
            <div className="flex items-center justify-center">
              <h6 className="mx-1 my-3">Already a user?</h6>
              <button
                className="text-indigo-600 w-100 btn btn-lg"
                onClick={onLoginClick}
              >
                Login now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
