import { Request, Response } from "express";
import { userService } from "./user.service";

//create user res req  start
const createUser = async (req:Request, res:Response) =>{
    try{
        const newUser = req.body
        const result = await userService.createdUser(newUser)
        res.json({
            status:true,
            message:"User Created SuccessFully",
            data: result
        })
    }catch(error){
        res.json({
            status:false,
            message:"Something Wrong",
            error
        })
    }
}
//create user res req  end


//allUsers Get start
const getUser = async (req: Request, res: Response) => {


    try {
        const result = await userService.getUser()
        res.send({
            status: true,
            message: 'All is Ok 🤗😎',
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}
//allUsers Get end

// exports
export const userControllers = {
    createUser,
    getUser
}
