const User = require('../model/User');
const { StatusCodes } = require("http-status-codes");
const CustomError = require('../errors/');
const { attachCookiesToResponse, createTokenUser } = require('./../utils')

const register = async (req, res) => {
    const { email, name, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email })
    if (emailAlreadyExists) {
        throw new CustomError.BadRequestError("Email already exist");
    }

    // assign admin role to first account created
    const isFirstAccount = (await User.countDocuments({})) === 0
    const role = isFirstAccount ? "admin" : "user";


    const user = await User.create({ name, email, password, role });
    const tokenUser = { name: user.name, userId: user._id, role: user.role }

    attachCookiesToResponse({ res, user: tokenUser })
    res.status(StatusCodes.CREATED).json({ user: tokenUser })
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new CustomError.BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({ email })
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new CustomError.UnauthenticatedError("Invalid credentials")
    }

    const tokenUer = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUer });
    res.status(StatusCodes.OK).json({ use: tokenUer });
}


const logout = async (req, res) => {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now() + 5 * 1000),
    });
    res.status(StatusCodes.OK).json({ msg: "user logged out" });
}


module.exports = {
    register, login, logout
};