import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { UnknownSkill } from "../../../../assets/logo-exporter";
const RequiredSkillset = () => {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState([
    {
      name: "Python",
      icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
      isSelected: false,
    },
    {
      name: "C#",
      icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
      isSelected: false,
    },
    {
      name: "Typescript",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      isSelected: false,
    },
    {
      name: "Ruby",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png",
      isSelected: false,
    },
    {
      name: "C++",
      icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      isSelected: false,
    },
    {
      name: "Java",
      icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      isSelected: true,
    },
    {
      name: "Golang",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
      isSelected: false,
    },
  ]);
  const addNewSkill = () => {
    setNewSkill("");
    setSkills((oldSkills) => [
      ...oldSkills,
      { name: newSkill, icon: UnknownSkill, isSelected: true },
    ]);
  };
  return (
    <div className="overflow-scroll max-h-[90vh] py-10 flex flex-col items-center justify-center w-[50%]">
      <p className="text-xl font-bold text-left w-full">Skillsets</p>
      <div className="flex flex-wrap items-center justify-center gap-5  w-full">
        {skills.map((skill, skillIndex) => (
          <button
            className={`hover:shadow-md hover:border hover:border-indigo-400 ${
              skill.isSelected && "border-blue-500"
            }  duration-200 rounded-md flex flex-col items-center justify-center gap-4 px-10 py-8`}
            onClick={() => {
              setSkills((oldSkills) => {
                return oldSkills.map((skill, index) => {
                  if (skillIndex === index) {
                    return !oldSkills[index].isSelected;
                  }
                });
              });
            }}
          >
            <img src={skill.icon} className="w-[60px] h-auto" />
            <p className="font-Solway font-bold text-xl ">{skill.name}</p>
          </button>
        ))}
      </div>

      <div className="w-[70%] flex flex-col items-start justify-center gap-3">
        <p
          className={`self-align-left font-semibold text-left text-indigo-600 duration-100`}
        >
          Other skills
        </p>
        <div className="input-container relative w-full">
          <input
            type="text"
            className="form-control email-login px-3 py-2 rounded-md drop-shadow-md w-full focus:outline-0"
            id="floatingInput"
            placeholder="New programming language"
            onChange={(e) => {
              setNewSkill(e.target.value);
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
          <MdAddCircle
            size={25}
            color="rgb(99 102 241)"
            className="absolute top-[50%] right-0 mx-2 translate-y-[-50%] cursor-pointer"
            onClick={addNewSkill}
          />
        </div>
        {/* {errors.email && (
                <p className="form-error-mess">
                  <i className="fas fa-exclamation-circle"></i>
                  &nbsp;{errors.email.message}
                </p>
              )} */}
      </div>
    </div>
  );
};

export default RequiredSkillset;
