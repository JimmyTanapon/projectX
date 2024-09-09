import { Router } from "express";
import UserRouter from "./users/users.routes.js"
import PositionRoute from "./position/position.routes.js"


const router = Router()

router.use("/user",UserRouter);
router.use("/position",PositionRoute);


export default router