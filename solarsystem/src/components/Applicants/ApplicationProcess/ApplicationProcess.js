import { useState } from "react";
import { ContrastIcon, LanguageIcon } from "../../../assets/logo-exporter";
import CandidateInfo from "./CandidateInfo/CandidateInfo";
import Certification from "./CandidateInfo/Certification/Certification";

const ApplicationProcess = () => {
  const [openExperienceField, setOpenExperienceField] = useState(false);
  const [languages, setLanguages] = useState([
    { code: "AF", name: "Afrikaans" },
    { code: "SQ", name: "Albanian" },
    { code: "AR", name: "Arabic" },
    { code: "HY", name: "Armenian" },
    { code: "EU", name: "Basque" },
    { code: "BN", name: "Bengali" },
    { code: "BG", name: "Bulgarian" },
    { code: "CA", name: "Catalan" },
    { code: "KM", name: "Cambodian" },
    { code: "ZH", name: "Chinese" },
    { code: "HR", name: "Croatian" },
    { code: "CS", name: "Czech" },
    { code: "DA", name: "Danish" },
    { code: "NL", name: "Dutch" },
    { code: "EN", name: "English" },
    { code: "ET", name: "Estonian" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finnish" },
    { code: "FR", name: "French" },
    { code: "KA", name: "Georgian" },
    { code: "DE", name: "German" },
    { code: "EL", name: "Greek" },
    { code: "GU", name: "Gujarati" },
    { code: "HE", name: "Hebrew" },
    { code: "HI", name: "Hindi" },
    { code: "HU", name: "Hungarian" },
    { code: "IS", name: "Icelandic" },
    { code: "ID", name: "Indonesian" },
    { code: "GA", name: "Irish" },
    { code: "IT", name: "Italian" },
    { code: "JA", name: "Japanese" },
    { code: "JW", name: "Javanese" },
    { code: "KO", name: "Korean" },
    { code: "LA", name: "Latin" },
    { code: "LV", name: "Latvian" },
    { code: "LT", name: "Lithuanian" },
    { code: "MK", name: "Macedonian" },
    { code: "MS", name: "Malay" },
    { code: "ML", name: "Malayalam" },
    { code: "MT", name: "Maltese" },
    { code: "MI", name: "Maori" },
    { code: "MR", name: "Marathi" },
    { code: "MN", name: "Mongolian" },
    { code: "NE", name: "Nepali" },
    { code: "NO", name: "Norwegian" },
    { code: "FA", name: "Persian" },
    { code: "PL", name: "Polish" },
    { code: "PT", name: "Portuguese" },
    { code: "PA", name: "Punjabi" },
    { code: "QU", name: "Quechua" },
    { code: "RO", name: "Romanian" },
    { code: "RU", name: "Russian" },
    { code: "SM", name: "Samoan" },
    { code: "SR", name: "Serbian" },
    { code: "SK", name: "Slovak" },
    { code: "SL", name: "Slovenian" },
    { code: "ES", name: "Spanish" },
    { code: "SW", name: "Swahili" },
    { code: "SV", name: "Swedish" },
    { code: "TA", name: "Tamil" },
    { code: "TT", name: "Tatar" },
    { code: "TE", name: "Telugu" },
    { code: "TH", name: "Thai" },
    { code: "BO", name: "Tibetan" },
    { code: "TO", name: "Tonga" },
    { code: "TR", name: "Turkish" },
    { code: "UK", name: "Ukrainian" },
    { code: "UR", name: "Urdu" },
    { code: "UZ", name: "Uzbek" },
    { code: "VI", name: "Vietnamese" },
    { code: "CY", name: "Welsh" },
    { code: "XH", name: "Xhosa" },
  ]);
  return (
    <div className="flex items-start justify-around w-full">
      <div>
        <select
          data-placeholder="Choose a Language..."
          className="relative w-full px-3 py-2 rounded-full drop-shadow-lg"
        >
          {languages.map((language) => (
            <option value={language.code}>{language.name}</option>
          ))}
        </select>
        <div className="flex items-center justify-center px-3 py-2 my-2 text-white rounded-full bg-orange-50 drop-shadow-lg">
          <img src={ContrastIcon} className="w-[30px] h-[30px]" />
          <h1 className="font-bold text-indigo-600">Contrast</h1>
        </div>

        {/* <br />
        <br />

        <button
          className="px-3 py-2 text-white bg-pink-700 rounded-lg shadow-lg"
          onClick={() => {
            setOpenExperienceField(true);
          }}
        >
          Years of experience
        </button>
        {openExperienceField && (
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md form-control email-login drop-shadow-md focus:outline-0"
            id="floatingInput"
            placeholder="Years of experience"
            // {...register("email", {
            //   pattern: {
            //     value: /s3[5-9]{1}[0-9]{5}@rmit.edu.vn/,
            //     message: "Please input a valid RMIT student email address",
            //   },
            //   required: "Email is required!",
            // })}
          />
        )} */}
      </div>
      <div>
        <CandidateInfo />
        <div className="flex items-center justify-end w-full mt-4">
          <button className="px-5 py-2 font-bold text-white duration-100 bg-indigo-700 rounded-md self-left hover:border-2 hover:bg-white hover:border-indigo-700 hover:text-indigo-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
