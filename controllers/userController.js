import User from "../models/UserModel.js";
import Exercise from "../models/ExerciseModel.js";
import StatusCodes from "http-status-codes";

export const getUser = async (req, res) => {
  const userId = '64fe3bf40e740a1e2d9a288f';

  const user = await User.findById(id);

  delete user.password;

  res.status(StatusCodes.OK).json({ user });
};

export const updateUser = async (req, res) => {
  const userId = '64fe3bf40e740a1e2d9a288f';

  await User.findByIdAndUpdate(id, req.body);

  res.status(StatusCodes.OK).json({ msg: 'User updated successfully' });
};

export const applicationStats = async (req, res) => {

  const totalUsers = await User.count();
  const totalExercises = await Exercise.count();

  res.status(StatusCodes.OK).json({ totalUsers, totalExercises });

};

