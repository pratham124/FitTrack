import { Router } from "express";
const router = Router();

import { getUser, updateUser, applicationStats } from "../controllers/userController.js";


router.route("/").get(getUser).patch(updateUser);
router.route("/admin").get(applicationStats);

export default router;