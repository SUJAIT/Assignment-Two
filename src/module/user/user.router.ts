import { Router } from "express";
import { userControllers } from "./user.controller";

const userRouter = Router()

userRouter.post('/create-user',userControllers.createUser)
userRouter.get('/',userControllers.getUser)

export default userRouter
