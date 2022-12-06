import { useState } from "react";
// import FMTLogoPNG from "assets/img/fmtlogo_cropped.png";
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
// import successNyan from "../Fun/successNyan";
import axios from "axios";
import { SolarSystemLogo } from "../../assets/logo-exporter";
import { useNavigate } from "react-router-dom";
// import errorNoti from "../Fun/errNoti";

const SignIn = () => {
  const [emailFieldFocus, setEmailFieldFocus] = useState(false);
  const [passwordFieldFocus, setPasswordFieldFocus] = useState(false);
  const navigate = useNavigate();
  const handleSignin = async (data) => {
    navigate("/recruitment-process");
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
  const onSignupClick = () => {
    navigate("/signup");
  };
  return (
    <main className="portalWrapper  shadow-lg w-[35vw] h-[80%]  absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md duration-200 hover:shadow-xl flex flex-col items-center justify-center">
      <div className="row py-2">
        <div className="col-12 w-full">
          <a href="/" className="flex items-center justify-center">
            <img src={SolarSystemLogo} className="w-[70%] h-auto" />
          </a>
        </div>
        <div className="col-12">
          <form
            className="form-signin py-4 flex flex-col items-center justify-center gap-4"
            // onSubmit={handleSubmit(onLogin)}
          >
            <h4 className="font-bold mt-2">👋 Welcome to Solar System!</h4>
            <p className="text-slate-500 mb-4">Please login to continue</p>
            <div className="form-floating w-full flex flex-col justify-center items-center">
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
                  className="form-control email-login px-3 py-2 rounded-md drop-shadow-md w-full focus:outline-0"
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
            <div className="form-floating w-full flex flex-col justify-center items-center">
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
                  className="form-control email-login px-3 py-2 rounded-md drop-shadow-md w-full focus:outline-0"
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
              onClick={handleSignin}
            >
              Login
            </button>
            <div className="flex items-center justify-center">
              <h6 className="my-3 mx-1">Don't have an account?</h6>
              <button
                className="w-100 btn btn-lg text-indigo-600"
                onClick={onSignupClick}
              >
                Sign up here
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
