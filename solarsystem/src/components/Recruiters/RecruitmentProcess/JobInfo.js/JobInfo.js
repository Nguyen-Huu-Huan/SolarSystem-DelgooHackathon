import { useState, useRef } from "react";
import { ExperienceIcon, JobIcon } from "../../../../assets/logo-exporter";
import { Editor } from "@tinymce/tinymce-react";
const JobInfo = () => {
  const editorRef = useRef(null);
  const [yearExperience, setYearExperience] = useState("");
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const [toggleOfficeField, setToggleOfficeField] = useState(false);
  const [toggleHiringNeedField, setToggleHiringNeedField] = useState(false);

  return (
    <div className="w-[40%]">
      <p className="font-bold text-left ">Job Title</p>
      <div className="relative w-full input-container">
        <img
          src={JobIcon}
          className="w-[30px] h-[30px] absolute left-3 top-[10%] z-90"
        />
        <input
          type="text"
          className="w-full py-2 rounded-md shadow-md px-14 form-control email-login focus:outline-0"
          id="floatingInput"
          placeholder="Job Title"
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
      </div>
      <br />
      <p className="font-bold text-left ">Job Description</p>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey="bsqfyjwz69h91btw6689zppogtfyqfeygdmgvrb3b71ccid4"
        placeholder="Job description"
        init={{
          height: 180,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="flex items-center justify-center w-full my-4 rounded-xl">
        <button className="px-2 py-2 w-[50%] rounded-l-xl bg-slate-100 hover:bg-indigo-700 hover:text-white duration-150">
          Remotely
        </button>
        <button
          className="px-2 py-2 rounded-r-xl bg-slate-100 w-[50%] hover:bg-indigo-700 hover:text-white duration-150"
          onClick={() => setToggleOfficeField(!toggleOfficeField)}
        >
          Office
        </button>
      </div>
      {toggleOfficeField && (
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
          id="Specify Location:"
          placeholder="Specify Location"
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
      )}
      <div className="flex items-center justify-center w-full my-4 rounded-xl">
        <button className="px-2 py-2 w-[50%] rounded-l-xl bg-slate-100 hover:bg-indigo-700 hover:text-white duration-150">
          Part Time
        </button>
        <button className="px-2 py-2 w-[50%]  bg-slate-100 hover:bg-indigo-700 hover:text-white duration-150">
          Casual
        </button>
        <button
          className="px-2 py-2 rounded-r-xl bg-slate-100 w-[50%] hover:bg-indigo-700 hover:text-white duration-150"
          onClick={() => setToggleHiringNeedField(!toggleHiringNeedField)}
        >
          Full Time
        </button>
      </div>
      <div className="relative w-full input-container">
        <img
          src={ExperienceIcon}
          className="w-[30px] h-[30px] absolute left-3 top-[10%] z-90"
        />
        <input
          type="text"
          className="w-full py-2 rounded-md shadow-md px-14 form-control email-login focus:outline-0"
          id="floatingInput"
          placeholder="Experience"
          onChange={(e) => setYearExperience(e.target.value + " year(s)")}
          value={yearExperience}
          onKeyDown={(e) => {
            if (e.keyCode === 8) {
              setYearExperience("");
            }
          }}

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
      </div>
    </div>
  );
};

export default JobInfo;
