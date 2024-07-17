import express from "express";
const router = express.Router();
import { testController } from "../controllers/testController";

router.route("/").get(testController);

export default router;
