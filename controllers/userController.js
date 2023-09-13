import User from "../models/UserModel.js";
import Exercise from "../models/ExerciseModel.js";
import StatusCodes from "http-status-codes";

export const getUser = async (req, res) => {
  const { id: userId } = req.user;

  const user = await User.findById(userId);

  delete user.password;

  res.status(StatusCodes.OK).json({ user });
};

export const updateUser = async (req, res) => {
  const { id: userId } = req.user;

  await User.findByIdAndUpdate(userId, req.body);

  res.status(StatusCodes.OK).json({ msg: 'User updated successfully' });
};

export const applicationStats = async (req, res) => {

  const totalUsers = await User.count();
  const totalExercises = await Exercise.count();

  res.status(StatusCodes.OK).json({ totalUsers, totalExercises });

};

