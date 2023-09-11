import Exercise from "../models/ExerciseModel.js";
import StatusCodes from "http-status-codes";

export const getAllExercises = async (req, res) => {
  const userId = "5f9d4f8b2c3b9a2b1c9b9b9b"

  const exercises = await Exercise.find({ createdBy: userId });

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

  const userId = "5f9d4f8b2c3b9a2b1c9b9b9b"

  const exerciseExists = await Exercise.findOne({ exerciseName, createdBy: userId });

  if (exerciseExists) {
    throw new Error("Exercise already exists");
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

  const userId = "5f9d4f8b2c3b9a2b1c9b9b9b"

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