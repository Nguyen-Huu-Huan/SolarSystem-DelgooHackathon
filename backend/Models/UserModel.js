const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true, dropDups: true },
  password: { type: String, require: true },
  name: { type: String, default: "Student name" },
  loginAt: { type: Date, default: Date.now },
  role: { type: String, enum: ["recruiter", "applicant"] },
  verify: { type: Boolean, default: false },
  token: { type: String, default: null },
  profile_image: { type: Object, default: null },
});
module.exports =
  mongoose.models["User Info"] || mongoose.model("User", userSchema);
