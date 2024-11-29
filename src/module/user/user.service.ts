import { Iuser } from "./user.interface"
import User from "./user.model"







//user created serevr start
const createdUser = async (newUser:Iuser):Promise<Iuser> =>{
    const result = await User.create(newUser)
    return result
}
//user created serevr end
//user created serevr start
const getUser = async () =>{
    const result = await User.find()
    return result
}
//user created serevr end


export const  userService = {
    createdUser,
    getUser
}