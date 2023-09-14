import { Router } from "express";
const router = Router();
import { getAllExercises, getExerciseById, updateExercise, showStats, createExercise, deleteExercise } from "../controllers/exerciseController.js";
import { validateCreateExerciseInput, validateIdParam, validateUpdateExerciseInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

router.route("/").get(getAllExercises).post(validateCreateExerciseInput, createExercise);
router.route("/stats").get(authorizePermissions, showStats);
router.route("/:id").get(validateIdParam, getExerciseById).patch(validateUpdateExerciseInput, validateIdParam, updateExercise).delete(validateIdParam, deleteExercise);

export default router;