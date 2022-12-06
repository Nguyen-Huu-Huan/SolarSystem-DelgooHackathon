import React from "react";
// import FMTLogoPNG from "assets/img/fmtlogo_cropped.png";
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
// import successNyan from "../Fun/successNyan";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import errorNoti from "../Fun/errNoti";

const SignUp = () => {
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
    <main className="portalWrapper mx-auto">
      <div className="row">
        <div className="col-12">
          <a href="/">
            <img className="mb-4 pt-3" src={{}} alt="" width="300px" />
          </a>
        </div>
        <div className="col-12">
          <form
            className="form-signin pt-4"
            // onSubmit={handleSubmit(onSignup)}
          >
            <h4 className="fw-bold mt-2">✨ New account ✨</h4>
            <div style={{ width: "300px" }} className="mx-auto">
              <p className="text-muted mb-4">
                Enter your full name, with RMIT Student email and we will send
                you the password!
              </p>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control name-field"
                id="floatingPassword"
                placeholder="Full name"
                // {...register("name", {
                //   required: "Name is required!",
                // })}
              />
              <label for="floatingPassword">
                <i className="fas fa-user" style={{ marginRight: 10 }}></i>
                Full name
              </label>
              {/* {errors.name && (
                <p className="form-error-mess">
                  <i className="fas fa-exclamation-circle"></i>
                  &nbsp;{errors.name.message}
                </p>
              )} */}
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control email-signup"
                id="floatingInput"
                placeholder="name@example.com"
                // {...register("email", {
                //   pattern: {
                //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
                //     message: "Please input a valid RMIT student email address",
                //   },
                //   required: "Email is required!",
                // })}
              />
              <label for="floatingInput">
                <i className="fas fa-at" style={{ marginRight: 10 }}></i>
                Email address
              </label>
              {/* {errors.email && (
                <p className="form-error-mess">
                  <i className="fas fa-exclamation-circle"></i>
                  &nbsp;{errors.email.message}
                </p>
              )} */}
            </div>

            <button className="w-100 btn btn-lg btn-danger mt-2" type="submit">
              Submit
            </button>
            <h6 className="mt-3 mb-3">Already a user?</h6>
            <button
              className="w-100 btn btn-lg btn-primary"
              onClick={onLoginClick}
            >
              Login now!
            </button>

            <p className="mt-5 mb-3 text-muted">
              &copy; Team Solar System @ Google & Delloite Hackathon 2022
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
