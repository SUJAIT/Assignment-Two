
//data modal

import { model, Schema } from "mongoose";
import { Iuser } from "./user.interface";


const userSchema = new Schema<Iuser>({
    name:{
        type:String,
        required:[true,"Please Provide Your Name"]
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        immutable:true, //not update
        validate:{
            validator: function (value:string){
             return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
         },
         message:'{VALUE} is not a valid email'
         },
    },
    photo:String,
    role:{
        type:String,
        enum:['user','admin'],
        message:"Please Provide Your Valid Rule",
        required:true
    },

})


const User = model<Iuser>("User",userSchema)
export default User