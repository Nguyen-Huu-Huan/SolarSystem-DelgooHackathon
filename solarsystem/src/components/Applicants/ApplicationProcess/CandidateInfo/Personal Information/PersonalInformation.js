import React from "react";

const PersonalInformation = () => {
  return (
    <div className="p-4 rounded-lg shadow-lg personal-information">
      <h1 className="text-2xl font-bold">Personal Information</h1>
      <div className="flex items-center justify-center gap-6">
        <div className="relative w-full input-container">
          <p
            className={`self-align-left font-semibold text-left text-indigo-600 duration-100`}
          >
            First Name
          </p>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
            id="floatingInput"
            placeholder="First Name"
            // onChange={(e) => {
            //   setNewSkill(e.target.value);
            // }}
            // value={newSkill}
            //   onFocus={() => {
            //     setEmailFieldFocus(true);
            //   }}
            //   onBlur={() => {
            //     setEmailFieldFocus(false);
            //   }}
            // {...register("email", {
            //   pattern: {
            //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
            //     message: "Please input a valid RMIT student email address",
            //   },
            //   required: "Email is required!",
            // })}
          />
          {/* <MdAddCircle
            size={25}
            color="rgb(99 102 241)"
            className="absolute top-[50%] right-0 mx-2 translate-y-[-50%] cursor-pointer"
            onClick={addNewSkill}
          /> */}
        </div>

        <div className="relative w-full input-container">
          <p
            className={`self-align-left font-semibold text-left text-indigo-600 duration-100`}
          >
            Last Name
          </p>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
            id="floatingInput"
            placeholder="Last Name"
            // onChange={(e) => {
            //   setNewSkill(e.target.value);
            // }}
            // value={newSkill}
            //   onFocus={() => {
            //     setEmailFieldFocus(true);
            //   }}
            //   onBlur={() => {
            //     setEmailFieldFocus(false);
            //   }}
            // {...register("email", {
            //   pattern: {
            //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
            //     message: "Please input a valid RMIT student email address",
            //   },
            //   required: "Email is required!",
            // })}
          />
          {/* <MdAddCircle
            size={25}
            color="rgb(99 102 241)"
            className="absolute top-[50%] right-0 mx-2 translate-y-[-50%] cursor-pointer"
            onClick={addNewSkill}
          /> */}
        </div>
      </div>
      <br />
      <div className="relative w-full input-container">
        <p
          className={`self-align-left font-semibold text-left text-indigo-600 duration-100`}
        >
          Email
        </p>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
          id="floatingInput"
          placeholder="Email Address"
          // onChange={(e) => {
          //   setNewSkill(e.target.value);
          // }}
          // value={newSkill}
          //   onFocus={() => {
          //     setEmailFieldFocus(true);
          //   }}
          //   onBlur={() => {
          //     setEmailFieldFocus(false);
          //   }}
          // {...register("email", {
          //   pattern: {
          //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
          //     message: "Please input a valid RMIT student email address",
          //   },
          //   required: "Email is required!",
          // })}
        />
        {/* <MdAddCircle
            size={25}
            color="rgb(99 102 241)"
            className="absolute top-[50%] right-0 mx-2 translate-y-[-50%] cursor-pointer"
            onClick={addNewSkill}
          /> */}
      </div>
    </div>
  );
};

export default PersonalInformation;
