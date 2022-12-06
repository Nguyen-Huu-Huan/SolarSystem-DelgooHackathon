const router = require("express").Router();
const userController = require("../Controllers/userController");
const auth = require("../Middleware/authentication");

//GET USER INFORMATION
router.get("/:userID/getUserInfo", auth, userController.getUserInfo);

//REGISTER
router.post("/register", userController.register);

//LOGIN
router.post("/login", userController.login);

// //LOGOUT
// router.get("/logout", userController.logout);

//GET USER
router.get("/getUser", userController.checkUserLoggedIn);

//VERIFY (QUERY: TOKEN)
router.post("/verify", userController.verify);

router.post("/test", userController.test);

//CHANGE/UPDATE USER PROFILE IMAGE
router.post("/:userID/changeProfileImage", userController.changeProfileImage);

//CHANGE/UPDATE USER SHORT DESCRIPTION (NAME & DESCRIPTION)
router.post(
  "/:userID/changeShortDescription",
  userController.changeShortDescription
);

//CHANGE/UPDATE USER SELF DESCRIPTION (ABOUT ME)
router.post("/:userID/changeAboutMe", userController.changeAboutMe);

//CHANGE/UPDATE USER PERSONAL INFORMATION (CONTACT, MAJOR, CURRENT COURSES, GPA)
router.post(
  "/:userID/changePersonalInformation",
  userController.changePersonalInformation
);

module.exports = router;
