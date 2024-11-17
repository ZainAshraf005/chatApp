import express from "express";
import authMiddelware from "../middlewares/authMiddleware.js";
import message from "../controllers/messageController.js";

const router = express.Router();

router.route("/send/:id").post(authMiddelware,message.sendMessage);
router.route("/:id").get(authMiddelware,message.getMessage);

export default router;
