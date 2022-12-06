import { useState } from "react";

const CandidateInfo = () => {
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
    <div className="py-4 ">
      <select data-placeholder="Choose a Language...">
        {languages.map((language) => (
          <option value={language.code}>{language.name}</option>
        ))}
      </select>
      <br />
      <button
        className="shadow-lg rounded-lg px-3 py-2 text-white bg-pink-700"
        onClick={() => {
          setOpenExperienceField(true);
        }}
      >
        Years of experience
      </button>
      {openExperienceField && (
        <input
          type="text"
          className="form-control email-login px-3 py-2 rounded-md drop-shadow-md w-full focus:outline-0"
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
      )}
    </div>
  );
};

export default CandidateInfo;
