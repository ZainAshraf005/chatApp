import express from "express";
import auth from "../controllers/authController.js";
import authMiddelware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/register").post(auth.register);
router.route("/login").post(auth.login);
router.route("/logout").get(auth.logout);
router.route("/getUsers").get(authMiddelware,auth.getOtherUsers)

export default router;
