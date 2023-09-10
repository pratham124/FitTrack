import User from "../models/UserModel.js"
import StatusCodes from "http-status-codes";


export const register = async (req, res) => {
  const { name, email, password, height, weight } = req.body;

  const isFirst = await User.countDocuments({}) === 0;

  const role = isFirst ? "admin" : "user";

  const date = new Date().toLocaleDateString();

  const userObj = {
    name,
    email,
    password,
    height,
    weights: { [date]: weight },
    role
  };

  await User.create(userObj);

  res.status(StatusCodes.CREATED).json({ msg: 'User created' });
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const userExists = user && user.password === password;

  if (!userExists) {
    throw new Error("Invalid credentials");
  }

  res.status(StatusCodes.OK).json({ msg: 'User logged in' });
};


export const logout = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'User logged out' });
};


