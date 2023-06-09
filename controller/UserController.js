const User = require("../model/User");
const { StatusCode, StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser, checkPermissions } = require('../utils')

const getAllUsers = async (req, res) => {
  const users = await User.find({ }).select("-password");
  console.log(req.user);
  res.status(200).json({ users, count: users.length });
};
 
const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) {
    throw new CustomError.NotFoundError(`No user with ud: ${req.params.id}`);
  }
  checkPermissions(req.user, user._id);
  res.status(200).json({ user }); 
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({user: req.user})
};

const updateUser = async (req, res) => {
  const {name, email, phone, address, state, postal_code, country} = req.body;
  const id = req.params.id;
  if(!name || !email){
    throw new CustomError.BadRequestError('Please provide all values')
  }
  
  const user = await User.findOne({_id:req.user.userId});

  user.email = email;
  user.name = name;
  user.phone = phone;
  user.address = address;
  user.state = state;
  user.postal_code = postal_code;
  user.country = country;

  await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({res, user:tokenUser});
  res.status(StatusCodes.OK).json({ user: tokenUser })
};

const updateUserPassword = async (req, res) => {
  const {oldPassword, newPassword} = req.body;
  if(!oldPassword || !newPassword){
    throw new CustomError.BadRequestError('Please provide both values')
  }

  const user = await User.findOne({_id: req.user.userId});
  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if(!isPasswordCorrect){
    throw new CustomError.UnauthenticatedError('Invalid credentials')
  }
  user.password = newPassword 

  await user.save();
  res.status(StatusCodes.OK).json({msg: 'success! Password updated'})
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};