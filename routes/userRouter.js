import { Router } from "express";
const router = Router();

import { getUser, updateUser, applicationStats } from "../controllers/userController";


router.route("/profile").get(getUser).patch(updateUser);
router.route("/admin").get(applicationStats);

export default router;