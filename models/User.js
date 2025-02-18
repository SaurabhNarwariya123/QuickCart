import mongoose, { Types } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    id:{ Type : String , required : true},
    name:{ Type : String , required : true},
    email:{ Type : String , required : true, unique:true},
    imageUrl:{ Type : String , required : true},
    cartItems:{ Type : Object , default:{}}
},
    {minimize :false})

 const User = mongoose.models.user || mongoose.model('user' , userSchema)  


 export default User 

