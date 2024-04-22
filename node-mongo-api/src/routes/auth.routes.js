import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import { checkDuplicateEmailOrUsername } from "../middlewares/verifySignUp.js";

const router = Router()

router.post("/signin", signIn)

router.post("/signup", checkDuplicateEmailOrUsername, signUp)

export default router