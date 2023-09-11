import { Router } from "express";
const router = Router();
import { getAllExercises, getExerciseById, updateExercise, showStats, createExercise, deleteExercise } from "../controllers/exerciseController.js";

router.route("/").get(getAllExercises).post(createExercise);
router.route("/stats").get(showStats);
router.route("/:id").get(getExerciseById).patch(updateExercise).delete(deleteExercise);

export default router;