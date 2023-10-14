const DoctorModel = require("../model/Doctor.model");
const User = require("../model/User.model");
const DuplicateChecker = require("../util/DuplicateWorkingDays");

const profile = async (req, res) => {
  const email = req.headers.user.email;
  const user = await User.find({email : email});
  res.json(user || { message: "User Not Found" });
};

const all = async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers || { message: "Not Found" });
};

const update = async (req, res) => {
  const { user } = req.headers.user;
  const data = req.body;


  const response = await User.updateOne(
    { _id: user },
    { $set: { ...data } }
  );
  res.json(response);
};

module.exports.UserController = {
  profile,
  all,
  update
};
