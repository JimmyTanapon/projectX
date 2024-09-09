import { Router } from "express";
import {
    getPositionController
} from "./position.controller.js";
import { validateReq } from "../middleware.js";


const router = Router();

router.get("/", getPositionController);


export default router;
