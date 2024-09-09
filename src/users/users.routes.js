import { Router } from "express";
import {
  CreateUserControllor,
  getUserByQueryControllor,
  UserUpdateController,
} from "./users.controller.js";
import { validateReq } from "../middleware.js";


const router = Router();

// router.get("/", getUserControllor);
router.get("/", validateReq,getUserByQueryControllor);
router.post("/create",validateReq, CreateUserControllor);
router.put("/update",validateReq, UserUpdateController);

export default router;
