import { BadRequestError } from "../error/customError.js";
import Exercise from "../models/ExerciseModel.js";
import StatusCodes from "http-status-codes";

export const getAllExercises = async (req, res) => {
  const { id } = req.user;

  const exercises = await Exercise.find({ createdBy: id });

  res.status(StatusCodes.OK).json({ exercises });
};

export const getExerciseById = async (req, res) => {
  const { id } = req.params;

  const exercise = await Exercise.findById(id);
  res.status(StatusCodes.OK).json({ exercise });
};

export const createExercise = async (req, res) => {
  const { exerciseName, set, reps, weight } = req.body;
  console.log(req.body);

  const { id } = req.user;

  const exerciseExists = await Exercise.findOne({ exerciseName, createdBy: id });

  if (exerciseExists) {
    throw new BadRequestError("Exercise already exists");
  }

  await Exercise.create({
    exerciseName,
    set,
    reps,
    weight,
    createdBy: userId,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Exercice created sucessfully" });
};

export const updateExercise = async (req, res) => {
  const { id } = req.params;

  const { id: userId } = req.user;

  await Exercise.findOneAndUpdate({ _id: id, createdBy: userId }, req.body);

  res.status(StatusCodes.OK).json({ msg: "Exercise updated sucessfully" });
};

export const deleteExercise = async (req, res) => {
  const { id } = req.params;

  await Exercise.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: "Exercise deleted sucessfully" });
};

export const showStats = async (req, res) => {
  console.log("showStats");
};