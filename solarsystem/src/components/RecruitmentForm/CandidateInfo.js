import React from "react";

const CandidateInfo = () => {
  return (
    <div>
      <form>
        <h1>Application form</h1>
        <div class="mb-3">
          <label for="" class="form-label">
            Candidate Name
          </label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="test input"
          />
          <br />
          <label for="" class="form-label">
            Candidate Email
          </label>

          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Candidate email"
          />
          <br />

          <label for="" class="form-label">
            Candidate Number
          </label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Candidate Number"
          />
          <br />
          <label for="" class="form-label">
            Gender
          </label>
          <select name="gender" id="gender-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
        </div>
      </form>
    </div>
  );
};

export default CandidateInfo;
