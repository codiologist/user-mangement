// const Doctor = require("../model/Doctor.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User.model');

const createDoctor = async (doctorData) => {

  if (await User.ifExist(doctorData.email)) {
    throw new Error("Doctor already Exist");
  }

  const user = await User.create({
    ...doctorData,
    password: await bcrypt.hash(doctorData.password, 10)
  })


  return user.filterKey("password");
};

const update = async (user) => {

}

const getDoctorById = async (doctor_id) => {
  return await User.find({ _id: doctor_id });
}



module.exports.DoctorService = {
  createDoctor,
  update,
  getDoctorById
};