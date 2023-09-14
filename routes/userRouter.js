import { Router } from "express";
const router = Router();

import { getUser, updateUser, applicationStats } from "../controllers/userController.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";


router.route("/").get(getUser).patch(validateUpdateUserInput, updateUser);
router.route("/admin").get(authorizePermissions, applicationStats);

export default router;