const { userType } = require("../config/userType");
const User = require("../model/User.model");
const { AuthService } = require("../services/Auth.Service");
const { DoctorService } = require("../services/Doctor.service")
const { userService } = require("../services/User.Service")

const login = async (req, res) => {
  const data = req.body;
  const user = await AuthService.login(data);

  res.json(user)
}
const registration = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.json(user)
}


const doctorLogin = async (req, res) => {
  const { email, password } = req.body;
  const loginInfo = await AuthService.DoctorLogin(email, password);
  
  res.json(loginInfo);
}

module.exports.AuthController = { login, registration, doctorLogin } 